var Cart = require('../modals/Cart.modal')

exports.get_list=function(req,res){
    Cart.get_all(function(data){
    res.send({result:data});
   });
   

}

exports.detail=function(req,res){
    Cart.getByid(req.params.id,function(respnse){
        res.send({result:respnse});
    });
   
}

exports.remove_Cart=function(req,res){
    var id=req.params.id;
    Cart.remove(id,function(respnse){
        res.send({result:respnse});
    });
}
exports.update_Cart=function(req,res){
    var data=req.body;
    Cart.update(data,function (respnse){
        res.send({result:respnse});
    });
}

exports.add_Cart = function (req, res) {
    var data = req.body;
 Cart.create(data,function(respnse){
res.send({result:respnse});
 });
}

