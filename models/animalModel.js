const { db } = require('../firebase');
const { getHLSByAnimalId } = require('./animalHLSModel');

const animalsCollection = db.collection('animals');

const animalModel = {
    getAllAnimal: async () => {
        try {
            const animalDoc = await animalsCollection.get();
            const animals = [];

            const animalPromises = animalDoc.docs.map(async doc => {
                if (doc.data().active != false) {
                    const HLS = await getHLSByAnimalId(doc.data().animalId);
                    animals.push({...doc.data(), HLS});
                }
            });

            await Promise.all(animalPromises);

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

    getAnimalByIdWithHLS: async (animalId) => {
        try {
            const animalDoc = await animalsCollection.doc(animalId).get();
            const HLS = await getHLSByAnimalId(animalId);
            if (!animalDoc.exists) {
                throw new Error('animal not found');
            }

            return { ...animalDoc.data(), HLS };

        } catch (error) {
            throw error;
        }
    },

    addAnimal: async (data) => {
        try {
            const animalRef = await animalsCollection.add(data);
            const animalId = animalRef.id;

            const dataWithId = { ...data, animalId };
            
            await animalRef.set(dataWithId);
            
            return dataWithId;
        } catch (error) {
            throw error;
        }
    },


    updateAnimal: async (animalId, newData) => {
        try {
            await animalsCollection.doc(animalId).update(newData);
            console.log('animal updated successfully!');
        } catch (error) {
            console.error('Error updating animal: ', error);
            throw error;
        }
    },


    deleteAnimal: async (animalId, active) => {
        try {
            // await animalsCollection.doc(animalId).delete();
            await animalsCollection.doc(animalId).update(active);
            console.log('animal deleted successfully!');
        } catch (error) {
            console.error('Error deleting animal: ', error);
            throw error;
        }
    }
};

module.exports = animalModel;

