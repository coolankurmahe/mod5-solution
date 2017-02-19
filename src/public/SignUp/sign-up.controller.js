(function () {
"use strict";

angular.module('public')
.controller('SignUpController', SignUpController);

SignUpController.$inject = ['MenuService','SaveDataService'];
function SignUpController(MenuService,SaveDataService) {
  var $ctrl = this;
//  $ctrl.menuItems = menuItems;
$ctrl.isError = false;
 $ctrl.saveSuccessful = false;
  $ctrl.submit = function () {
    // console.log("Start  submit");
//  $ctrl.completed = true;

  var promise = MenuService.getMenuItemsForShortName($ctrl.user.menunum);

    promise.then(function (itemforShortName) {
      // console.log(itemforShortName);
      $ctrl.isError = false;
  /*    if(menuList.menu_items.length == 0)
          console.log("Nothing found");
       else
           console.log("Something found");*/
           $ctrl.user.favItem = itemforShortName;
           SaveDataService.saveUserInfo($ctrl.user);
             $ctrl.saveSuccessful = true;

     })
     .catch(function (error) {
       console.log("Inside Errorrrrrr");
       console.log(error);
       $ctrl.isError = true;
        $ctrl.saveSuccessful = false;
     })
      //  console.log("End  submit");
  };
}

})();
