const { db } = require('../firebase');
const { logActivity } = require('../utils/activityLogger');

const animalHLSCollection = db.collection('animalHLS');

const animalHLSModel = {
    getAllHLS: async () => {
        try {
            const HLSDoc = await animalHLSCollection.get();
            const HLS = [];
            HLSDoc.forEach(doc => {
                if (doc.data().active != false) HLS.push(doc.data());
            });
            return HLS;
        } catch (error) {
            throw error;
        }
    },

    getHLSById: async (HLSId) => {
        try {
            const HLSDoc = await animalHLSCollection.doc(HLSId).get();
            if (!HLSDoc.exists) {
                throw new Error('HLS not found');
            }
            return HLSDoc.data();
        } catch (error) {
            throw error;
        }
    },

    getHLSByAnimalId: async (animalId) => {
        try {
            const querySnapshot = await animalHLSCollection.where('animalId', '==', animalId).get();
            const HLSData = [];
    
            querySnapshot.forEach(doc => {
                if (doc.exists) {
                    HLSData.push(doc.data());
                } else {
                    throw new Error('HLS not found');
                }
            });
    
            return HLSData;
        } catch (error) {
            throw error;
        }
    },


    addHLS: async (data) => {
        try {
            const HLSRef = await animalHLSCollection.add(data);
            const HLSId = HLSRef.id;

            const dataWithId = { ...data, id: HLSId };
            
            await HLSRef.set(dataWithId);
            
            return dataWithId;
        } catch (error) {
            throw error;
        }
    },


    updateHLS: async (HLSId, newData) => {
        try {
            await animalHLSCollection.doc(HLSId).update(newData);
            console.log('HLS updated successfully!');
        } catch (error) {
            console.error('Error updating HLS: ', error);
            throw error;
        }
    },


    deleteHLS: async (HLSId, active) => {
        try {
            // await animalHLSCollection.doc(HLSId).delete();
            await animalHLSCollection.doc(HLSId).update(active);
            console.log('HLS deleted successfully!');
        } catch (error) {
            console.error('Error deleting HLS: ', error);
            throw error;
        }
    }
};

module.exports = animalHLSModel;

