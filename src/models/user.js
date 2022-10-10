import { Schema, model } from 'mongoose';

const UserSchema = Schema({
    name: {
        type: String,
        required: [true, 'This field name is required']
    },
    email: {
        type: String,
        required: [true, 'This field email is required'],
        unique: true
    }
});

export default model('User', UserSchema);
