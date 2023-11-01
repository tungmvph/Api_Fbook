
module.exports=function(router){
    var BooksController=require('../controlles/Book.controller');
   
   router.get("/Book/list",BooksController.get_list);
   
   router.get("/Book/detail/:id",BooksController.detail);
   router.post("/Book/add",BooksController.add_Book);
   router.delete("/Book/delete/:id",BooksController.remove_Book);
   router.put("/Book/update",BooksController.update_Book);
   
   };