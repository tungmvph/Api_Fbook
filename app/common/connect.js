var mysql=require('mysql2');


var connection = mysql.createConnection({
    host: 'sql.freedb.tech',
    user: 'freedb_tung23',
    password: 'r!nkrDSan&d#9HA',
    database: 'freedb_fbook',
    connectTimeout: 20000 
});


connection.connect(function(err) {
    if (err) {
        console.log("Kết nối MySQL không thành công: " + err.message);
    } else {
        console.log("Kết nối MySQL thành công!");
    }
});


module.exports=connection;