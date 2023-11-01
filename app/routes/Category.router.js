
module.exports=function(router){
    var CategoryController=require('../controlles/Category.controller');
   
   router.get("/Category/list",CategoryController.get_list);
   
   router.get("/Category/detail/:id",CategoryController.detail);
   router.post("/Category/add",CategoryController.add_Category);
   router.delete("/Category/delete/:id",CategoryController.remove_Category);
   router.put("/Category/update",CategoryController.update_Category);
   
   };