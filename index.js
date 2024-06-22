const express = require('express');
const app = express();
const morgan = require('morgan');

// app.use allows us to run code on every single request
// app.use(morgan('tiny'));

app.use(morgan('common'));

app.use((req, res, next) => {
    console.log('This is my first middleware!');
    next()
    console.log('This is my first middleware after calling next')
})

app.use((req, res, next) => {
    console.log('This is my second middleware!');
    next()
})

// app.use((req, res, next) =>{
//     res.send('Hijacked by my app.use!!!!');
//     next();
// })

// app.use(()=>{
//     console.log('HEY!')
// })

// Add a basic route
app.get('/', (req, res) => {
    res.send('Home page')
})

app.get('/dogs', (req, res) => {
    res.send('Woof! Woof!')
})


// Start a web server and listen to the connections on the specified local host
app.listen(3000, () => {
    console.log('App is running on local host 3000!!!')
})