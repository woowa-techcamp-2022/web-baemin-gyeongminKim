import express  from "express";

const app = express()
const PORT = 4000
app.set('view engine', 'pug')
app.set('views', process.cwd() + '/src/views')
app.get('/', (req, res) => {
    res.render('main')
  })
app.listen(PORT, ()=>console.log(`listening on http://localhost:${PORT} 🚀`))