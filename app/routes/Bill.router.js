
module.exports=function(router){
    var BillController=require('../controlles/Bill.controller');
   
   router.get("/bill/list",BillController.get_list);
   
   router.get("/bill/detail/:id",BillController.detail);
   router.post("/bill/add",BillController.add_Bill);
   router.delete("/bill/delete/:id",BillController.remove_Bill);
   router.put("/bill/update",BillController.update_Bill);
   
   };