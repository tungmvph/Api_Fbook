const db=require('../common/connect');

const Admin = function (Admin) {
    this.IDAdmin = Admin.IDAdmin;
    this.AdminName = Admin.AdminName;
    this.PassWord = Admin.PassWord;
    this.Email = Admin.Email;
    this.Phone = Admin.Phone;
}
Admin.get_all = function (result) {
    db.query("SELECT * FROM Admin", function (err, Admin) {
        if (err) {
            result(null);
        } else {
            result(Admin);
        }
    });
}

Admin.getByid = function (id, result) {
    db.query("SELECT * FROM Admin WHERE IDAdmin = ?", id, function (err, Admin) {
        if (err || Admin.length == 0) {
            result(null);
        } else {
            result(Admin[0]);
        }
    });
}

Admin.remove = function (id, result) {
    db.query("DELETE FROM Admin WHERE IDAdmin = ?", id, function (err, IDAdmin) {
        if (err) {
            result(null);
        } else {
            result("XOA THANH CONG Admin CO ID " + id);
        }
    });
}


Admin.create=function(data,result){
   db.query("INSERT INTO Admin SET ?", data,function(err,Admin){
    if(err){
        result(null);
        }
        else{
            result({IDAdmin: Admin.insertId, ...data});
        }
   });
}
Admin.update=function(array,result){
    db.query("UPDATE Admin SET AdminName=?,PassWord=?,Email=?,Phone=? WHERE IDAdmin=?", [array.AdminName,array.PassWord,array.Email,array.Phone,array.IDAdmin],function(err,Admin){
        if(err){
            result(null);
            }
            else{
                result(array);
              
            }
       });
}
module.exports=Admin;