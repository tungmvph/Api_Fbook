
module.exports=function(router){
    var CartController=require('../controlles/Cart.controller');
   
   router.get("/Cart/list",CartController.get_list);
   
   router.get("/Cart/detail/:id",CartController.detail);
   router.post("/Cart/add",CartController.add_Cart);
   router.delete("/Cart/delete/:id",CartController.remove_Cart);
   router.put("/Cart/update",CartController.update_Cart);
   
   };