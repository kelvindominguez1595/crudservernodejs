import { response, request } from 'express';
import User from '../models/user.js';

const UserController = {
    userGet: (async (req = request, res = response) => {
        const users = await User.find();
        res.json({ message: "GET USER", users });
    }),
    userPost: (async (req = request, res = response) => {
        const body = req.body;
        const users = new User(body);
        await users.save();
        res.json({ message: "POST USER", users })
    }),
    userPut: (async (req = request, res = response) => {
        const { id } = req.params;
        const body = req.body;
        const users = await User.findByIdAndUpdate(id, body);
        res.json({ message: "PUT USER", users })
    }),
    userDelete: (async (req = request, res = response) => {
        const { id } = req.params;
        const user = await User.findByIdAndDelete(id);
        res.json({ message: "Delete USER", user });
    })
}

export { UserController }