const express = require('express');
const app = express();
const morgan = require('morgan');

// app.use allows us to run code on every single request
app.use(morgan('tiny'));

// app.use(morgan('common'));

// We would like to recreate what Morgan middleware (Node package) does

app.use((req, res, next) => {
    console.log(req.method.toUpperCase());
    return next()
})

// app.use((req, res, next) => {
//     console.log('This is my first middleware!');
//     // We use return to be on the safe side
//     // The code after 'return' does NOT run
//     return next()
//     console.log('This is my first middleware after calling next')
// })

// app.use((req, res, next) => {
//     console.log('This is my second middleware!');
//     return next()
// })

// app.use((req, res, next) => {
//     console.log('This is our third middleware!!!');
//     return next()
// })



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