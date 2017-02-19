(function () {
"use strict";

angular.module('public')
.controller('MyInfoController', MyInfoController);


MyInfoController.$inject = ['userInfo','ApiPath'];
function MyInfoController(userInfo,ApiPath) {
  var $ctrl = this;
  $ctrl.userUnRegistered =false;
//  $ctrl.menuItems = menuItems;
if(userInfo === undefined)
{
  $ctrl.userUnRegistered = true;
}
$ctrl.userData = userInfo;
$ctrl.baseApiPath = ApiPath;

}

})();
