const express = require('express');
const app = express();
const morgan = require('morgan');

// app.use allows us to run code on every single request
app.use(morgan('tiny'));

// app.use(morgan('common'));

// We would like to recreate what Morgan middleware (Node package) does

app.use((req, res, next) => {
    //req.method = 'DELETE';
    req.requestTime = Date.now();
    console.log(req.method.toUpperCase(), req.path, req.requestTime);
    return next()
})

// This middleware runs on every type of request: PUT, POST, DELETE, GET, etc.
app.use('/dogs', (req, res, next) => {
    console.log("I love dogs!");
    next();
})

app.use((req, res, next) => {
    console.log(req.query);
    next();
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
// app.get('/', (req, res) => {
//     // An example of decorating our request object
//     console.log(`Request date: ${req.requestTime}`)
//     res.send('Home page')
// })

app.get('/dogs', (req, res) => {
    console.log(`Request time: ${req.requestTime}`);
    res.send('Woof! Woof!')
})

// This middleware runs ONLY in case if no path matches
// In this case we don't need to use next()

app.use((req, res) => {
    // res.send('Not Found!!!')
    res.status(404).send('Not Found!!!')

})



// Start a web server and listen to the connections on the specified local host
app.listen(3000, () => {
    console.log('App is running on local host 3000!!!')
})

