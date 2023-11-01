const db=require('../common/connect');

const Cart = function (Cart) {
    this.IDCart = Cart.IDCart;
    this.IDBook = Cart.IDBook;
   
}
Cart.get_all = function (result) {
    db.query("SELECT * FROM Cart", function (err, Cart) {
        if (err) {
            result(null);
        } else {
            result(Cart);
        }
    });
}

Cart.getByid = function (id, result) {
    db.query("SELECT * FROM Cart WHERE IDCart = ?", id, function (err, Cart) {
        if (err || Cart.length == 0) {
            result(null);
        } else {
            result(Cart[0]);
        }
    });
}

Cart.remove = function (id, result) {
    db.query("DELETE FROM Cart WHERE IDCart = ?", id, function (err, Cart) {
        if (err) {
            result(null);
        } else {
            result("XOA THANH CONG Cart CO ID " + id);
        }
    });
}


Cart.create=function(data,result){
   db.query("INSERT INTO Cart SET ?", data,function(err,Cart){
    if(err){
        result(null);
        }
        else{
            result({IDCart: Cart.insertId, ...data});
        }
   });
}
Cart.update=function(array,result){
    db.query("UPDATE Cart SET IDBook=? WHERE IDCart=?", [array.IDBook,array.IDCart],function(err,Cart){
        if(err){
            result(null);
            }
            else{
                result(array);
              
            }
       });
}
module.exports=Cart;