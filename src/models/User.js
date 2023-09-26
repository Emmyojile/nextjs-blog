import mongoose from "mongoose";
// import bcrypt  from 'bcryptjs'
// import jwt  from 'jsonwebtoken';

const userSchema = new mongoose.Schema({
name: {
    type: String,
    required: true,
    unique: true
},
email: {
    type: String,
    required: true,
    unique: true
},
password: {
    type: String,
    required: true,
},

}, {
    timestamps: true
});

// userSchema.pre('save', async function () {
//     const salt = await bcrypt.genSalt(10)
//     this.password = await bcrypt.hash(this.password, salt)
//     this.confirmPassword = undefined
// })

// userSchema.methods.comparePassword = async function (candidatePassword) {
//     const isMatch = await bcrypt.compare(candidatePassword, this.password)
//     return isMatch
// }

// userSchema.methods.createJWT = function () {
//     return jwt.sign({id:this._id},process.env.JWT_SECRET,{expiresIn:'1d'})
// }

export default mongoose.model('User', userSchema);
