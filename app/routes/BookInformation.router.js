
module.exports=function(router){
    var BookInformationController=require('../controlles/BookInformation.controller');
   
   router.get("/BookInformation/list",BookInformationController.get_list);
   
   router.get("/BookInformation/detail/:id",BookInformationController.detail);
   router.post("/BookInformation/add",BookInformationController.add_BookInformation);
   router.delete("/BookInformation/delete/:id",BookInformationController.remove_BookInformation);
   router.put("/BookInformation/update",BookInformationController.update_BookInformation);
   
   };