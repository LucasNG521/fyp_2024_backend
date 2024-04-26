const { db } = require('../firebase');

const reportsCollection = db.collection('reports');

const reportModel = {
    getAllReport: async () => {
        try {
            const reportDoc = await reportsCollection.get();
            const reports = [];
            reportDoc.forEach(doc => {
                if (doc.data().active != false) reports.push(doc.data());
            });
            return reports;
        } catch (error) {
            throw error;
        }
    },

    getReport: async (reportId) => {
        try {
            const reportDoc = await reportsCollection.doc(reportId).get();
            if (!reportDoc.exists) {
                throw new Error('report not found');
            }
            return reportDoc.data();
        } catch (error) {
            throw error;
        }
    },

    addReport: async (data) => {
        try {
            const reportRef = await reportsCollection.add(data);
            const reportId = reportRef.id;

            const dataWithId = { ...data, reportId };
            
            await reportRef.set(dataWithId);
            
            return dataWithId;
        } catch (error) {
            throw error;
        }
    },


    updateReport: async (reportId, newData) => {
        try {
            await reportsCollection.doc(reportId).update(newData);
            console.log('report updated successfully!');
        } catch (error) {
            console.error('Error updating report: ', error);
            throw error;
        }
    },


    deleteReport: async (reportId, active) => {
        try {
            // await reportsCollection.doc(reportId).delete();
            await reportsCollection.doc(reportId).update(active);
            console.log('report deleted successfully!');
        } catch (error) {
            console.error('Error deleting report: ', error);
            throw error;
        }
    }
};

module.exports = reportModel;

