exports.home=function(req,res){
    res.sendFile(__dirname.replace('app\\controlles','')+'/index.html');

}

exports.about=function(req,res){
    res.send("About page")
}

