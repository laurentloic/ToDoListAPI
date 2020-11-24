const express = require('express')
const app = express()
const port = 3000

app.get('/get', (req, res) => {
    res.send('GET request')
})

app.post('/post', (req, res) => {
    res.send('POST request')
})

app.put('/put', (req, res) => {
    res.send('PUT request')
})

app.delete('/delete', (req, res) => {
    res.send ('DELETE request')
})

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`)
})