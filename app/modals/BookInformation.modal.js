const db=require('../common/connect');

const BookInformation = function (BookInformation) {
    this.IDBookInfor = BookInformation.IDBookInfor;
    this.Content = BookInformation.Content;
    this.Chapter = BookInformation.Chapter;
   
}
BookInformation.get_all = function (result) {
    db.query("SELECT * FROM BookInformation", function (err, BookInformation) {
        if (err) {
            result(null);
        } else {
            result(BookInformation);
        }
    });
}

BookInformation.getByid = function (id, result) {
    db.query("SELECT * FROM BookInformation WHERE IDBookInfor = ?", id, function (err, BookInformation) {
        if (err || BookInformation.length == 0) {
            result(null);
        } else {
            result(BookInformation[0]);
        }
    });
}

BookInformation.remove = function (id, result) {
    db.query("DELETE FROM BookInformation WHERE IDBookInfor = ?", id, function (err, BookInformation) {
        if (err) {
            result(null);
        } else {
            result("XOA THANH CONG BookInformation CO ID " + id);
        }
    });
}


BookInformation.create=function(data,result){
   db.query("INSERT INTO BookInformation SET ?", data,function(err,BookInformation){
    if(err){
        result(null);
        }
        else{
            result({IDBookInfor: BookInformation.insertId, ...data});
        }
   });
}
BookInformation.update=function(array,result){
    db.query("UPDATE BookInformation SET Content=?,Chapter=? WHERE IDBookInfor=?", [array.Content,array.Chapter,array.IDBookInfor], function (err, updateResult) {

        if(err){
            result(null);
            }
            else{
                result(array);
              
            }
       });
}
module.exports=BookInformation;