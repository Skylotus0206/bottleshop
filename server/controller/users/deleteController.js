'use strict';
import { User } from '../../models/index.js';

const deleteFunc = function (id, callback) {
    User.deleteOne({ userId : id }, (err, user) => {
        if(err) {
            callback(err, null);
        }
        callback(null, user);
        console.log('document deleted!');
    });
}


// [input] userId
const deleteUser = (req, res) => {
    const id = req.body.userId;
    console.log('회원탈퇴할 ID : ' + id);
    deleteFunc(id, (err, user) => {
        if(err) {
            console.log('회원 탈퇴 도중 에러 발생');
            //response.redirect('/modify');
        }
        if(user) {
            console.log('회원 탈퇴 완료');
            // req.session.destroy((err) => {
            //     if(err) throw err;
            //     console.log('로그아웃 완료');
            // });
            res.send('delete user');
        }
    })
};

export default deleteUser;

    