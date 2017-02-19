(function () {
"use strict";

angular.module('common')
.service('SaveDataService', SaveDataService);



function SaveDataService() {
  var service = this;
  var serviceUserInfo;
  service.saveUserInfo = function (userInfo) {
    console.log("inside saveDate");
  //console.log(userInfo.lastname);
    serviceUserInfo = userInfo;
    console.log(serviceUserInfo.lastname);
  // userData.lastname = userInfo.lastname
  // userData.lastname = userInfo.firstname
  // userInfo.menunum
  // userInfo.email
  // userInfo.phone
  };
  service.getUserInformation = function () {
    console.log("inside SaveDataService::getUserInformation");
  //console.log(userInfo.lastname);
  return serviceUserInfo;

  };



}



})();
