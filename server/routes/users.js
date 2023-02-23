'use strict';
import express from 'express';
import auth from '../middleware/auth.js';
import { User } from '../models/index.js';
const router = express.Router();
import postUser from '../controller/users/postUser.js';
import loginUser from '../controller/users/loginUser.js';
import logoutUser from '../controller/users/logoutUser.js';
import deleteUser from '../controller/users/deleteUser.js';
import updateUser from '../controller/users/updateUser.js';

// http://localhost:8080/users (전체 회원 조회)
router.get('/', auth, async (req, res) => {
  if(req.user.isAdmin == true){
    const users = await User.find({});
    res.json(users);  
  } else {
    res.render('users');
  }
});

// http://localhost:8080/users/join (회원가입)
router.post('/join', postUser);

// http://localhost:8080/users/login (로그인)
router.post('/login', loginUser);

// http://localhost:8080/users/auth (현재 로그인한 user 정보)
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

// http://localhost:8080/users/logout (로그아웃)
router.get("/logout", auth, logoutUser);

// http://localhost:8080/users/delete/test1 (유저 정보 DB 삭제)
router.delete('/delete/:userId', auth, deleteUser);

// http://localhost:8080/users/edit/test1 (유저 정보 수정)
router.put('/edit/:userId', auth, updateUser);

export default router;