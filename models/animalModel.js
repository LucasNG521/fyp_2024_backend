const { db } = require('../firebase');

const animalsCollection = db.collection('animals');

const animalModel = {
    getAllAnimal: async () => {
        try {
            const animalDoc = await animalsCollection.get();
            const animals = [];
            animalDoc.forEach(doc => {
                animals.push({ id: doc.id, ...doc.data() });
            });
            return animals;
        } catch (error) {
            throw error;
        }
    },

    getAnimalById: async (animalId) => {
        try {
            const animalDoc = await animalsCollection.doc(animalId).get();
            if (!animalDoc.exists) {
                throw new Error('animal not found');
            }
            return animalDoc.data();
        } catch (error) {
            throw error;
        }
    },

    // createUser: async (userData) => {
    //     try {
    //         const userRef = await usersCollection.add(userData);
    //         return { id: userRef.id, ...userData };
    //     } catch (error) {
    //         throw error;
    //     }
    // },


    // updateUser: async (userId, newData) => {
    //     try {
    //         await usersCollection.doc(userId).update(newData);
    //         console.log('User updated successfully!');
    //     } catch (error) {
    //         console.error('Error updating user: ', error);
    //         throw error;
    //     }
    // },


    // deleteUser: async (userId) => {
    //     try {
    //         await usersCollection.doc(userId).delete();
    //         console.log('User deleted successfully!');
    //     } catch (error) {
    //         console.error('Error deleting user: ', error);
    //         throw error;
    //     }
    // }
};

module.exports = animalModel;

