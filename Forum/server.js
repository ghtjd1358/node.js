const express = require('express')
const app = express()

app.listen(8080, () => {
    console.log('http://localhost:8080 에서 서버 실행중')
})

app.get('/', (res, req) => {
  req.sendFile(__dirname + '/index.html')
}) 

app.get('/news',(res, req)=>{
    req.send('오늘 비옴')
})

app.get('/shop',(res, req)=>{
    req.send('쇼핑페이지')
})


