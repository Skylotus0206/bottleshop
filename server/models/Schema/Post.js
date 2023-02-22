'use strict';
import { Schema } from 'mongoose';
import CommentSchema from './Comment.js';

const PostSchema = new Schema(
  {
    isAdmin: false,
    user_id: {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    writer: {
      type: String,
      default: '작성자',
    },
    date: Date,
    comment: [CommentSchema],
  },
  {
    timestamps: true,
  }
);

export default PostSchema;
