//@desc get all users
//@route get /api/user
//saishrane
const getUsers = (req,res)=>{
    res.send("hello");
};

//@desc get 

const createUser = (req,res)=>{
    res.send("create user");
}


//@desc post
const getUser = (req,res)=>{
    res.send(`get contact ${req.params.id}`);
}
module.exports = {getUsers, createUser, getUser};