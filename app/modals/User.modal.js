const db=require('../common/connect');


const Users=function(Users){
    this.IDUser=Users.IDUser;
    this.UserName=Users.UserName;
    this.PassWord=Users.PassWord
    this.Email=Users.Email;
    this.Birthday=Users.Birthday;
}

Users.get_all=function(result){
    db.query("SELECT * FROM Users", function (err, Users) {
        if (err) {
            result(null);
        } else {
            result(Users);
        }
    });
}

Users.getByid = function (id, result) {
    db.query("SELECT * FROM Users WHERE IDUser = ?", id, function (err, Users) {
        if (err || Users.length == 0) {
            result(null);
        } else {
            result(Users[0]);
        }
    });
}


Users.remove = function (id, result) {
    db.query("DELETE FROM Users WHERE IDUser = ?", id, function (err, IDUser) {
        if (err) {
            result(null);
        } else {
            result("XOA THANH CONG User CO ID " + id);
        }
    });
}


Users.create=function(data,result){
   db.query("INSERT INTO Users SET ?", data,function(err,Users){
    if(err){
        result(null);
        }
        else{
            result({IDUser: Users.insertId, ...data});
        }
   });
}
Users.update=function(array,result){
    db.query("UPDATE Users SET UserName=?,PassWord=?,Email=?,Birthday=? WHERE IDUser=?", [array.UserName,array.PassWord,array.Email,array.Birthday,array.IDUser],function(err,Admin){
        if(err){
            result(null);
            }
            else{
                result(array);
              
            }
       }); 
}

module.exports=Users;