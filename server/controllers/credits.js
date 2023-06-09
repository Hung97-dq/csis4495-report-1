import express from 'express';
import mongoose from 'mongoose';

import Credit from '../models/ccredit.js';
import PostMessage from '../models/postMessage.js';

const router = express.Router();
export const getCredit = async (req, res) => { 
    const { id,memberid } = req.params;

    try {
        console.log("memberId:",memberid);
        const post = await PostMessage.findById(id);
        const credit = await Credit.find({member_id: memberid});
        const info =[];
        info.push(post,credit[0]);
        res.status(200).json({data: info});
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}