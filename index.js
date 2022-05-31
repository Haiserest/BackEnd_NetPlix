const express = require('express');
const route = require('./route');
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(cors());

// app.get('/', (req, res) => {
//     const { evn, h } = req.query;
//     res.send(`hello express evn=${evn} h=${h}`);
// });

// app.get('/page/:postId', (req, res) =>{
//     const { postId } = req.params;
//     res.send(`Page: ${postId}`)
// });

app.use('/api/Netplix', route);


app.listen(5400, ()=>{
    console.log('Start http://localhost:5400');
})