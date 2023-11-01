
module.exports=function(router){
 var AdminController=require('../controlles/Admin.controller');

router.get("/admin/list",AdminController.get_list);

router.get("/admin/detail/:id",AdminController.detail);
router.post("/admin/add",AdminController.add_Admin);
router.delete("/admin/delete/:id",AdminController.remove_Admin);
router.put("/admin/update",AdminController.update_Admin);

};