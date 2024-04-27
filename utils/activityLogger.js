const { db } = require('../firebase');

const activityLogsCollection = db.collection('activityLogs');

const logActivity = async (message, userId) => {
    try {
        const timestamp = new Date().toISOString();
        await activityLogsCollection.add({
            message,
            userId,
            timestamp
        });
    } catch (error) {
        console.error('Error logging activity:', error);
        throw error;
    }
};

module.exports = { logActivity };