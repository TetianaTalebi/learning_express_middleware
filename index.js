const express = require('express');
const app = express();
const morgan = require('morgan');

app.use(morgan('tiny'));

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