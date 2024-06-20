const express = require('express');
const app = express();

// Add a basic route
app.get('/', (req, res) => {
    res.send('Home page')
})


// Start a web server and listen to the connections on the specified local host
app.listen(3000, () => {
    console.log('App is running on local host 3000!!!')
})