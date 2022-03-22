const {read} = require("./../lib/FS")

const GET = (req , res)=>{
    const userFilter = read("users.json")
    const PostFilter = read("posts.json")
    res.render("index.ejs"  , {userFilter , PostFilter})
}
module.exports = {
    GET
}