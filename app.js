const express = require('express');

const userDb = require('./database/users');

const app = express();


app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get('/user', (req, res) => {
    console.log('USER ENPLOINT')

    // res.json({user: "Yurii"});
    // res.end({user: "Yurii"});
    // res.status(402).json('its ok');
    // res.sendFile('./');

    res.json(userDb);
});

// app.post('/user', (req, res) => {
//
//     const userInfo = req.body;
//
//     userDb.push(userInfo);
//
//     res.status(201).json('Created')
// });


app.put('/user/:userId', (req, res) => {
    const newUserInfo = req.body;
    const userId = req.params.userId;
    userDb[userId] = newUserInfo;


    res.json('Updated')
});

app.get('/user/:userId', (req, res) => {

    console.log(req.params);

    const {userId} = req.params;


    res.json(userDb[userId]);
});

app.get('/', (req, res) => {
    res.json('welcome')
});

app.listen(5000, () => {
    console.log('server listen 5000')
});

app.post('/user',(req, res)=>{
    res.json(userDb);
})
