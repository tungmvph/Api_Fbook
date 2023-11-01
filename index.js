var express =require('express');
var app=express();
// Cau hinh body-parser

var bodyParser=require('body-parser');
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());


require('./app/routes/home.router')(app);
require('./app/routes/Admin.router')(app);
require('./app/routes/User.router')(app);
require('./app/routes/Category.router')(app);
require('./app/routes/BookInformation.router')(app);
require('./app/routes/Book.router')(app);
require('./app/routes/Cart.router')(app);
require('./app/routes/Bill.router')(app);


app.listen(3000,function(){
    console.log("Server listen port http://localhost:3000");
});