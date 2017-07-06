//提供后台数据接口

// book get post delete put

let http = require('http');
let fs   = require('fs');
let url  = require('url');
//增删改查 操作的都是books.json


function readBooks(cb) {
  fs.readFile('./books.json','utf8',function (err, data) {
    if(err || data.length === 0)data='[]';
    cb(JSON.parse(data));
  })
}

// readBooks(function (data) {
//   console.log(data);
// });


function writeBooks(data, cb) {
  fs.writeFile('./books.json',JSON.stringify(data),cb);
}

http.createServer(function (req, res) {
  let {pathname,query} = url.parse(req.url,true);

  if(pathname === '/book'){
    let id= query.id;
    switch (req.method){
      case 'GET':
        readBooks(function (data) {
          res.end(JSON.stringify(data));
        });
        break;
      case 'POST':

        break;
      case 'PUT':

        break;
      case 'DELETE':
        readBooks(function (books) {
          books = books.filter((item)=>{
            console.log(item.id,item.id ==id);
            item.id ==id;
            return item.id !=id
          });

          writeBooks(books,function () {
            res.end(JSON.stringify({}));
          });

        });
        break;
      default:
        break;
    }
  }else {
    res.code = 404;
    res.end();
  }

}).listen(4000);



