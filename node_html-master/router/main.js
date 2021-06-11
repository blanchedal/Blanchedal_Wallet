const bodyParser = require('body-parser');

module.exports = function(app) {
     app.use(bodyParser.json());       // to support JSON-encoded bodies
     app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
         extended: true
      }));
     
     app.get('/',function(req,res){ //   url 주소 == /          웹에 주소 입력 되면 index.html을 실행해라
        res.render('index.html')
     });
     app.get('/about',function(req,res){  // 중요~         
        res.render('about.html');
    });
   
    app.get('/mint',function(req,res){  // 중요~         
      res.render('mint.html');
  });
 

     
    app.get('/listall', function (req, res) {
      //res.render('about.html');
      console.log('listall...');
      const getNumber = req.body.getNumber;
      let response = {
            'result': 'true',
            'getLists': getNumber 
      }
      
      console.log('response : ' + response);
      res.status(200).json(response);
   });  // end of get
     
}
