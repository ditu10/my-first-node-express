const express = require('express');
const cors = require('cors');
const app = express();
const port = 5001;

app.use(cors());
app.use(express.json())

const users = [
    {
        id: 1,
        name: 'Md Oyasiul islam',
        roll: 21,
        home: 'Pabna'
    },
    {
        id: 2,
        name: 'Md Kamrul Hasan',
        roll: 19,
        home: 'Bera'
    },
    {
        id: 3,
        name: 'Jainta Paul',
        roll: 22,
        home: 'Tangail'
    },
    {
        id: 4,
        name: 'Kazi Hasan ibn arif Efaz',
        roll: 34,
        home: 'Chittagong'
    },
    {
        id: 5,
        name: 'Mimsadi Ana',
        roll: 33,
        home: 'Dhaka'
    },
    {
        id: 6,
        name: 'Tahmid Anjum',
        roll: 27,
        home: 'Khulna'
    },
    {
        id: 7,
        name: 'Hasebul Hasan',
        roll: 40,
        home: 'Bera'
    },
    {
        id: 8,
        name: 'Md Ramizul islam',
        roll: 48,
        home: 'Khulna'
    },
]

app.get('/', (req, res) => {
    res.send('Hello from ditu. I am learning Node js now. Also express');
})

app.get('/users', (req, res) => {
    const search = req.query.search;
    if (search) {
        const searchResult = users.filter(user => user.name.toLocaleLowerCase().includes(search));
        res.send(searchResult);
    }
    else {
        res.send(users);    
    }
    
})

app.post('/users', (req, res) => {
    const newUser = req.body;
    newUser.id = users.length + 1;
    users.push(newUser);
    console.log('post method calling', req.body);
    // res.send(JSON.stringify(newUser));
    res.json(newUser)
})

app.get('/user/:id', (req, res) => {
    const index = req.params.id;
    const user = users.find(user => user.id == index);
    if(user)
        res.send(user);
    else
        res.send('User not found!')
})

app.listen(port, () => {
    console.log('listening to the port', port);
})