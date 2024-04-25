const { db } = require('../firebase');
const jwt = require('jsonwebtoken');

const usersCollection = db.collection('users');

const userModel = {
    getAllUser: async () => {
        try {
            const userDoc = await usersCollection.get();
            const users = [];
            userDoc.forEach(doc => {
                users.push({ id: doc.id, ...doc.data() });
            });
            return users;
        } catch (error) {
            throw error;
        }
    },

    getUserById: async (userId) => {
        try {
            const userDoc = await usersCollection.doc(userId).get();
            if (!userDoc.exists) {
                throw new Error('User not found');
            }
            return userDoc.data();
        } catch (error) {
            throw error;
        }
    },

    createUser: async (userData) => {
        try {
            const userRef = await usersCollection.add(userData);
            return { id: userRef.id, ...userData };
        } catch (error) {
            throw error;
        }
    },

    auth: async (email, password) => {
        try {
            const userDoc = await usersCollection.where('email', '==', email).where('password', '==', password).get();
            if (userDoc.empty) {
                throw new Error('User not found');
            }
            const user = userDoc.docs[0].data();
            const token = jwt.sign({ userId: user.email}, 'secret_key', { expiresIn: '1h' });
            return { token, ...user };
        } catch (error) {
            throw error;
        }
    },

    verifyToken: (req, res, next) => {
        const bearerHeader = req.headers['authorization'];
        if (typeof bearerHeader !== 'undefined') {
            const bearerToken = bearerHeader.split(' ')[1];
            jwt.verify(bearerToken, 'secret_key', (err, authData) => {
                if (err) {
                    res.sendStatus(403);
                } else {
                    req.user = authData;
                    next();
                }
            });
        } else {
            res.sendStatus(401);
        }
    },


    updateUser: async (userId, newData) => {
        try {
            await usersCollection.doc(userId).update(newData);
            console.log('User updated successfully!');
        } catch (error) {
            console.error('Error updating user: ', error);
            throw error;
        }
    },


    deleteUser: async (userId) => {
        try {
            await usersCollection.doc(userId).delete();
            console.log('User deleted successfully!');
        } catch (error) {
            console.error('Error deleting user: ', error);
            throw error;
        }
    }
};

module.exports = userModel;
