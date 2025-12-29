import mongoose, { models, Schema } from "mongoose";
//todo models目录放在lib下还是单独拿出来比较合理
const UserSchema = new Schema(
    {
        email: { type: String, required: true, unique: true},
        password: { type: String, required: true},
        role: {type: String, enum: ['user', 'admin'], default: 'user'}
    },
    { timestamps: true}
);

export default models.User || mongoose.model('User', UserSchema);