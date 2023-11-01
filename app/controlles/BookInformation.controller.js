var BookInformation = require('../modals/BookInformation.modal')

exports.get_list=function(req,res){
    BookInformation.get_all(function(data){
    res.send({result:data});
   });
   

}

exports.detail=function(req,res){
    BookInformation.getByid(req.params.id,function(respnse){
        res.send({result:respnse});
    });
   
}

exports.remove_BookInformation=function(req,res){
    var id=req.params.id;
    BookInformation.remove(id,function(respnse){
        res.send({result:respnse});
    });
}
exports.update_BookInformation=function(req,res){
    var data=req.body;
    BookInformation.update(data,function (respnse){
        res.send({result:respnse});
    });
}


exports.add_BookInformation = function (req, res) {
    var data = req.body;
 BookInformation.create(data,function(respnse){
res.send({result:respnse});
 });
}

