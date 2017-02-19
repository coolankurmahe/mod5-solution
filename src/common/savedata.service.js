(function () {
"use strict";

angular.module('common')
.service('SaveDataService', SaveDataService);



function SaveDataService() {
  var service = this;
  var serviceUserInfo;
  service.saveUserInfo = function (userInfo) {
    // console.log("inside saveDate");

    serviceUserInfo = userInfo;
    // console.log(serviceUserInfo.lastname);
  // userData.lastname
  // userData.lastname
  // userInfo.menunum
  // userInfo.email
  // userInfo.phone
  };
  service.getUserInformation = function () {
    // console.log("inside SaveDataService::getUserInformation");

  return serviceUserInfo;

  };



}



})();
