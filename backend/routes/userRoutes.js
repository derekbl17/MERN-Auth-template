const express = require('express')
const router = express.Router()
const { 
    authUser,
    registerUser,
    logoutUser,
    getUser,
    updateUser
} = require('../controllers/userController.js');
const {protect}=require('../middleware/authMiddleware.js')


router.post('/auth', authUser)
router.post('/register', registerUser)
router.post('/logout',logoutUser)
router.route('/profile').get(protect,getUser).put(protect,updateUser)

module.exports= router