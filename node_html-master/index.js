let express = require('express'); //웹서버가 된다
let app = express();
let router = require('./router/main')(app); // 저 위치가 실행된다
let port = process.env.PORT || 3000; //port 주소 : 웹 페이지 접속할때 사용

app.set('views', __dirname + '/views');    // views 폴더 밑에 html 넣어 놓았다
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);
app.use(express.static('public'));  // 나머지는 public 에 넣어두었다

let server = app.listen(port, function(){    // 웹 서버 동작시키기
    console.log("Express server has started on port "+ port)
});
