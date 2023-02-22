'use strict';
import express from 'express';
import auth from '../middleware/auth.js';
import { User } from '../models/index.js';
const router = express.Router();
import getUser from '../controller/userController.js';
import getLogin from '../controller/loginController.js';
import deleteUser from '../controller/deleteController.js';

// http://localhost:8080/users : 전체 회원 조회
router.get('/', auth, async (req, res) => {
  if(req.user.isAdmin == true){
    const users = await User.find({});
    res.json(users);  
  }
  else {
    res.render('users');
  }
});

router.get('/join', (req, res, next) => {
    res.render('join');
});

router.get("/login", (req, res) => {
    res.render('login');
});

// http://localhost:8080/users/join
router.post('/join', getUser);

// http://localhost:8080/users/login
router.post('/login', getLogin);

// http://localhost:8080/users/auth
router.get("/auth", auth, (req, res) => {
  res.status(200).json({
    _id: req.user._id,
    userId: req.user.userId,
    domain: req.user.domain,
    name: req.user.name,
    phone: req.user.phone,
    birthday: req.user.birthday,
  });
});

// http://localhost:8080/users/logout
router.get("/logout", auth, (req, res) => {
  User.findOneAndUpdate({ _id: req.user._id }, { token: "" }, (err, user) => {
    if (err) return res.json({ success: false, err });
    res.clearCookie("x_auth");
    return res.status(200).send({
      id: req.user.userId,
      success: true,
    });
  });
});

// http://localhost:8080/users/delete
router.post('/delete', deleteUser);

export default router;
