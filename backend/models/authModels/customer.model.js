import mongoose from 'mongoose';
import bcrypt from 'bcrypt-nodejs';

const customerSchema = mongoose.Schema({
    id: {
        type: String,
        unique: true
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'Password is required']
    }
})

customerSchema.methods.generateHash = (password) => bcrypt.hashSync(password, bcrypt.genSaltSync(8), null)
customerSchema.methods.validPassword = (password) => bcrypt.compareSync(password, this.password)

export default mongoose.model('Customer', customerSchema)