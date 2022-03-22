const {read} = require("./../lib/FS")

const GET = (req , res) =>{
    const {userName} = req.params

    const userFilter = read("users.json").find(e => e.username == userName)
    const PostFilter = read("posts.json").filter(e => e.userId == userName)
    if(!userFilter) {
        return res.render('notfound')
    }
    res.render("user.ejs" ,  {userFilter , PostFilter})
}
module.exports = {
    GET
}