'use strict';
import { User } from '../../models/index.js';

const getLogin = async (req, res, next) => {
    const { userId, password } = req.body;
    try {
        // email DB 존재 확인
        await User.findOne({ userId }, (err, user) => {
            if (err) {
                res.send("존재하지 않은 아이디입니다.");
            }
            user
                .comparePassword(password) // password 확인
                .then((isMatch) => {
                    if (!isMatch) {
                        res.send("비밀번호가 틀렸습니다.");
                    }
                    // token 생성
                user
                    .generateToken()
                    .then((user) => {
                        res.cookie("x_auth", user.token).status(200).json({
                            loginSuccess: true,
                            userId: user._id,
                        });
                    })
                    .catch((err) => {
                        res.status(400).send(err);
                    });
                })
                .catch((err) => res.json({ loginSuccess: false, err }));
        });
        
    } catch(e) {
        console.log(e.message);
    }
};

export default getLogin;
