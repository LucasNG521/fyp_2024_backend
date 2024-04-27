const { db } = require('../firebase');
const jwt = require('jsonwebtoken');
const { logActivity } = require('../utils/activityLogger');

const usersCollection = db.collection('users');

const userModel = {
    getAllUser: async () => {
        try {
            const userDoc = await usersCollection.get();
            const users = [];
            userDoc.forEach(doc => {
                if (doc.data().active != false) users.push(doc.data());
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
            const userId = userRef.id;
            
            const userDataWithId = { ...userData, userId };
            
            await userRef.set(userDataWithId);
            
            return userDataWithId;
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

            await logActivity(`User login : ${email}`, user.userId);

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

            await logActivity(`User details has been updated: ${userId} - ${JSON.stringify(newData)}`, userId );

            console.log('User updated successfully!');
        } catch (error) {
            console.error('Error updating user: ', error);
            throw error;
        }
    },


    deleteUser: async (userId, active) => {
        try {
            // await usersCollection.doc(userId).delete();
            await usersCollection.doc(userId).update(active);

            await logActivity(`User deleted : ${userId}`, userId );

            console.log('User deleted successfully!');
        } catch (error) {
            console.error('Error deleting user: ', error);
            throw error;
        }
    }
};

module.exports = userModel;

