const express = require('express');
const router = express.Router();
const { getAllUser, getUser, addUser, loginUser, updateUser, deleteUser } = require('../controllers/userController');


// Middleware to extract uid from header and pass to route parameters
const extractUidFromHeader = (req, res, next) => {
    const uid = req.headers['uid'];
    if (!uid) {
        return res.status(401).json({ error: 'Unauthorized' });
    }
    // Pass uid to route parameters
    // req.params.id = uid;
    next();
};

  
// router.get('/',extractUidFromHeader, getAllUser);
router.get('/', getAllUser);

router.get('/:id', getUser);

router.post('/', addUser);
router.post('/login', loginUser);

router.put('/:id', updateUser);

router.delete('/:id', deleteUser);

module.exports = router;