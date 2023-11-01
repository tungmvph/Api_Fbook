var Book = require('../modals/Book.modal')

exports.get_list=function(req,res){
    Book.get_all(function(data){
    res.send({result:data});
   });
   

}

exports.detail=function(req,res){
    Book.getByid(req.params.id,function(respnse){
        res.send({result:respnse});
    });
   
}

exports.remove_Book=function(req,res){
    var id=req.params.id;
    Book.remove(id,function(respnse){
        res.send({result:respnse});
    });
}
exports.update_Book=function(req,res){
    var data=req.body;
    Book.update(data,function (respnse){
        res.send({result:respnse});
    });
}

exports.add_Book = function (req, res) {
    var data = req.body;
 Book.create(data,function(respnse){
res.send({result:respnse});
 });
}

