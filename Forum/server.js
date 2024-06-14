const express = require('express');
const app = express();
const { MongoClient } = require('mongodb');

let db;
const url = 'mongodb+srv://hoseong1358:8oZhIF8xstjNx3r4@cluster0.o46ckbg.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
new MongoClient(url).connect().then((client) => {
    console.log('DB연결성공');
    db = client.db('forum');
    app.listen(8080, () => {
        console.log('http://localhost:8080 에서 서버 실행중');
    });
}).catch((err) => {
    console.log(err);
});

app.use(express.static(__dirname + '/public')); // css 사용
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.get('/news', (req, res) => {
    // db.collection('post').insertOne({title : '어쩌구'})
    res.send('오늘 비옴');
});

app.get('/time', (req, res) => {
    응답.render('time.ejs', { data : new Date() })
  })

app.get('/list', async (req, res) => {
    try {
        const result = await db.collection('post').find().toArray(); // post 콜렉션에 있는 배열들을 찾다
        res.render('list.ejs', { 글목록: result });
    } catch (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
    }
});
