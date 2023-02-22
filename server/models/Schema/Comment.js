'use strict';
import { Schema } from 'mongoose';

const CommentSchema = new Schema(
{
    isAdmin: false,
    user_id: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'User',
    },
    content: {
        type: String,
        required: true,
    },
    writer: {
        type: String,
        default: '관리자',
    },
    date: Date,
},
{
      timestamps: true,
});
  
export default CommentSchema;
