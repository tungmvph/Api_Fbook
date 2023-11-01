const db=require('../common/connect');


const Book=function(Book){
    this.IDBook=Book.IDBook;
    this.BookName=Book.BookName;
    this.Author=Book.Author
    this.PublishYear=Book.PublishYear;
    this.PriceBook=Book.PriceBook;
    this.Discription=Book.Discription;
    this.ImageBook=Book.ImageBook
    this.IDCat=Book.IDCat;
    this.IDBookInfor=Book.IDBookInfor;
}

Book.get_all=function(result){
    db.query("SELECT * FROM Book", function (err, Book) {
        if (err) {
            result(null);
        } else {
            result(Book);
        }
    });
}

Book.getByid = function (id, result) {
    db.query("SELECT * FROM Book WHERE IDBook = ?", id, function (err, Book) {
        if (err || Book.length == 0) {
            result(null);
        } else {
            result(Book[0]);
        }
    });
}


Book.remove = function (id, result) {
    db.query("DELETE FROM Book WHERE IDBook = ?", id, function (err, IDBook) {
        if (err) {
            result(null);
        } else {
            result("XOA THANH CONG Book CO ID " + id);
        }
    });
}


Book.create=function(data,result){
   db.query("INSERT INTO Book SET ?", data,function(err,Book){
    if(err){
        result(null);
        }
        else{
            result({IDBook: Book.insertId, ...data});
        }
   });
}
Book.update=function(array,result){
    db.query("UPDATE Book SET BookName=?,Author=?,PublishYear=?,PriceBook=?,Discription=?,ImageBook=?,IDCat=?,IDBookInfor=? WHERE IDBook=?", [array.BookName, array.Author, array.PublishYear, array.PriceBook, array.Discription, array.ImageBook, array.IDCat, array.IDBookInfor, array.IDBook], function (err, updateResult) {

        if(err){
            result(null);
            }
            else{
                result(array);
              
            }
       }); 
}

module.exports=Book;