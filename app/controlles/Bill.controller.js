var Bill = require('../modals/Bill.modal')

exports.get_list=function(req,res){
    Bill.get_all(function(data){
    res.send({result:data});
   });
   

}

exports.detail=function(req,res){
    Bill.getByid(req.params.id,function(respnse){
        res.send({result:respnse});
    });
   
}

exports.remove_Bill=function(req,res){
    var id=req.params.id;
    Bill.remove(id,function(respnse){
        res.send({result:respnse});
    });
}
exports.update_Bill=function(req,res){
    var data=req.body;
    Bill.update(data,function (respnse){
        res.send({result:respnse});
    });
}


exports.add_Bill = function (req, res) {
    var data = req.body;
 Bill.create(data,function(respnse){
res.send({result:respnse});
 });
}

