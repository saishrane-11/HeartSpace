const express = require('express');
const mongoose = require('mongoose');
const erorrHandler = require('./middleware/errorhandler');

const app = express();
app.use(express.static('dist'));
app.use(express.json());

const DB = "mongodb+srv://saish:saish@cluster0.owp2oas.mongodb.net/usersRegistrationBackend?retryWrites=true&w=majority&appName=Cluster0"
// mongodb+srv://saish:saish@cluster0.owp2oas.mongodb.net/usersRegistrationBackend?retryWrites=true&w=majority&appName=Cluster0
// mongodb+srv://saish:saish@cluster0.owp2oas.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
// mongodb+srv://saish:<password>@cluster0.owp2oas.mongodb.net/

// const DB = "mongodb+srv://saish:saish@cluster0.akijais.mongodb.net/usersRegistrationBackend?retryWrites=true&w=majority&appName=Cluster0"

const connectDB = async () => {
    try {
        const connect = await mongoose.connect(DB);
        console.log("successful connected",
    connect.connection.host,
connect.connection.name);
    } catch (err) {
        console.log(err);

    }
    }
connectDB();

app.use("/api/users",require('./routes/userRoutes'))


app.use(erorrHandler)


// app.get('/', (req, res) => {
//     res.send("server is ready");
// })

// app.get('/api/jokes', (req, res) => {
//     const jokes = [
//         {
//             id: 1,
//             title: "A joke",
//             content: "This is a joke"
//         },
//         {
//             id: 2,
//             title: "two joke",
//             content: "This is a joke"
//         },
//         {
//             id: 3,
//             title: "three joke",
//             content: "This is a joke"
//         },
//         {
//             id: 4,
//             title: "four joke",
//             content: "This is a joke"
//         },
//     ]
//     res.send(jokes);
// })

const port =3000;

app.listen(port, () => {
    console.log(`Server  at ${port}`);
})



// schema for users


//controllers
// const getContact = 