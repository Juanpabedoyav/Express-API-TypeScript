import express from 'express'
import diaryRouter from './routes/diaries'
const app = express()
app.use(express.json()) // milddleware to transform the body in json


const PORT = 3000

app.get('/', (_req, res) => {
    
    res.send('Hello World')
})

app.use('/api/diaries', diaryRouter)



app.listen( PORT, () => {
    console.log(`server running on port ${PORT}`)
})