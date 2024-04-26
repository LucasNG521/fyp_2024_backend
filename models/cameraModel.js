const { db } = require('../firebase');

const camerasCollection = db.collection('cameras');

const cameraModel = {
    getAllCamera: async () => {
        try {
            const cameraDoc = await camerasCollection.get();
            const cameras = [];
            cameraDoc.forEach(doc => {
                if (doc.data().active != false) cameras.push(doc.data());
            });
            return cameras;
        } catch (error) {
            throw error;
        }
    },

    getCameraById: async (cameraId) => {
        try {
            const cameraDoc = await camerasCollection.doc(cameraId).get();
            if (!cameraDoc.exists) {
                throw new Error('camera not found');
            }
            return cameraDoc.data();
        } catch (error) {
            throw error;
        }
    },

    addCamera: async (data) => {
        try {
            const cameraRef = await camerasCollection.add(data);
            const cameraId = cameraRef.id;

            const dataWithId = { ...data, cameraId };
            
            await cameraRef.set(dataWithId);
            
            return dataWithId;
        } catch (error) {
            throw error;
        }
    },


    updateCamera: async (cameraId, newData) => {
        try {
            await camerasCollection.doc(cameraId).update(newData);
            console.log('camera updated successfully!');
        } catch (error) {
            console.error('Error updating camera: ', error);
            throw error;
        }
    },


    deleteCamera: async (cameraId, active) => {
        try {
            // await camerasCollection.doc(cameraId).delete();
            await camerasCollection.doc(cameraId).update(active);
            console.log('camera deleted successfully!');
        } catch (error) {
            console.error('Error deleting camera: ', error);
            throw error;
        }
    }
};

module.exports = cameraModel;

