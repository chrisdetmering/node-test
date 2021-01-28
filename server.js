const express = require('express'); 
const path = require('path'); 
const app = express(); 
const PORT = process.env.PORT || 3000;

console.log(__dirname)
app.use(express.static(path.join(__dirname, 'client', 'build'))); 

app.get('/hey', (req, res) => { 
    res.send('ho2')
})


app.get('/', (req, res) => { 
  res.sendFile(path.join(__dirname, 'client', 'build', 'index.html')); 
})

app.listen(PORT, () => console.log('server running...')); 