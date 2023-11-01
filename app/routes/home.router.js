module.exports=function(router){
    var homeController=require('../controlles/home.controller');

router.get("/",homeController.home);

router.get("/about",homeController.about);
};