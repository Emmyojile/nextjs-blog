import mongoose from "mongoose";
// import bcrypt  from 'bcryptjs'
// import jwt  from 'jsonwebtoken';

const postSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

// postSchema.pre('save', async function () {
//     const salt = await bcrypt.genSalt(10)
//     this.password = await bcrypt.hash(this.password, salt)
//     this.confirmPassword = undefined
// })

// postSchema.methods.comparePassword = async function (candidatePassword) {
//     const isMatch = await bcrypt.compare(candidatePassword, this.password)
//     return isMatch
// }

// postSchema.methods.createJWT = function () {
//     return jwt.sign({id:this._id},process.env.JWT_SECRET,{expiresIn:'1d'})
// }

export default mongoose.model("Post", postSchema);
