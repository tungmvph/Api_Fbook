const db=require('../common/connect');

const Category = function (Category) {
    this.IDCat = Category.IDCat;
    this.CatName = Category.CatName;
   
}
Category.get_all = function (result) {
    db.query("SELECT * FROM Category", function (err, Category) {
        if (err) {
            result(null);
        } else {
            result(Category);
        }
    });
}

Category.getByid = function (id, result) {
    db.query("SELECT * FROM Category WHERE IDCat = ?", id, function (err, Category) {
        if (err || Category.length == 0) {
            result(null);
        } else {
            result(Category[0]);
        }
    });
}

Category.remove = function (id, result) {
    db.query("DELETE FROM Category WHERE IDCat = ?", id, function (err, Category) {
        if (err) {
            result(null);
        } else {
            result("XOA THANH CONG Category CO ID " + id);
        }
    });
}


Category.create=function(data,result){
   db.query("INSERT INTO Category SET ?", data,function(err,Category){
    if(err){
        result(null);
        }
        else{
            result({IDCat: Category.insertId, ...data});
        }
   });
}
Category.update=function(array,result){
    db.query("UPDATE Category SET CatName=? WHERE IDCat=?", [array.CatName,array.IDCat],function(err,Category){
        if(err){
            result(null);
            }
            else{
                result(array);
              
            }
       });
}
module.exports=Category;