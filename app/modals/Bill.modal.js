const db=require('../common/connect');

const Bill = function (Bill) {
    this.IDBill = Bill.IDBill;
    this.Status = Bill.Status;
    this.PriceTotal = Bill.PriceTotal;
    this.IDUser = Bill.IDUser;
    this.IDBook = Bill.IDBook;
    this.Create_at = Bill.Create_at;
   
}
Bill.get_all = function (result) {
    db.query("SELECT * FROM Bill", function (err, Bill) {
        if (err) {
            result(null);
        } else {
            result(Bill);
        }
    });
}

Bill.getByid = function (id, result) {
    db.query("SELECT * FROM Bill WHERE IDBill = ?", id, function (err, Bill) {
        if (err || Bill.length == 0) {
            result(null);
        } else {
            result(Bill[0]);
        }
    });
}

Bill.remove = function (id, result) {
    db.query("DELETE FROM Bill WHERE IDBill = ?", id, function (err, Bill) {
        if (err) {
            result(null);
        } else {
            result("XOA THANH CONG Bill CO ID " + id);
        }
    });
}


Bill.create=function(data,result){
   db.query("INSERT INTO Bill SET ?", data,function(err,Bill){
    if(err){
        result(null);
        }
        else{
            result({IDBill: Bill.insertId, ...data});
        }
   });
}
Bill.update=function(array,result){
    db.query("UPDATE Bill SET Status=?, PriceTotal=?, IDUser=?, IDBook=?, Create_at=? WHERE IDBill=?", [array.Status, array.PriceTotal, array.IDUser, array.IDBook, array.Create_at, array.IDBill], function (err, updateResult) {

        if(err){
            result(null);
            }
            else{
                result(array);
              
            }
       });
}
module.exports=Bill;