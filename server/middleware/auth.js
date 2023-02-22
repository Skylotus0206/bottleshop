'use strict';
import { User } from '../models/index.js';

const auth = (req, res, next) => {
    const token = req.cookies.x_auth;

    User.findByToken(token)
        .then((user) => {
            if(!user) return res.json({ isAuth: false, error: true });
            req.token = token;
            req.user = user;
            next();
        })
        .catch((e) => {
            console.log(e.message);
        });
};

export default auth;