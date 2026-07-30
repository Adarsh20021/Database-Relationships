const mongoose = require('mongoose');
const {Schema} = mongoose;

main().then(()=>{console.log("Connection Successful!")}).catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/relationDemo');
}

const userSchema = new Schema({
    username: String,
    email: String,
});

const postSchema = new Schema({
    content: String,
    likes: Number,
    user: {
        type: Schema.Types.ObjectId,
        ref: "User"
    }
});

const User = mongoose.model("User", userSchema);
const Post = mongoose.model("Post",postSchema);

// const addData = async()=>{
    // let user1 = new User({
    //     username: "Rahulumar",
    //     email: "rahul@gmail.com"
    // });

    // let post1 = new Post({
    //     content: "Hello World",
    //     likes: 7
    // });

    // post1.user = user1;

//     let user = await User.findOne({username: "Rahulumar"});

//     let post2 = new Post({
//         content: "Bye Bye :)",
//         likes: 23
//     });

//     post2.user = user;

//     // await user1.save();
//     // await post1.save();
//     await post2.save();
// }

// addData();

const del = async()=>{
    await Post.findByIdAndDelete("6a6ada52b0f15f9068e418d5");
    await User.findByIdAndDelete("6a69af8f5c0d5310b3b9ea8a");
}