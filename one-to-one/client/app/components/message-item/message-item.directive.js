angular.module('app').directive('messageItem', function(currentUser) {
  return {
    restrict: "E",
    templateUrl: 'components/message-item/message-item.html',
  
    scope: {
      senderUuid: "@",
      senderLogin: "@",
      content: "@",
      date: "@"
    },
    controller: function($scope){
      $scope.user = currentUser.get();
      //console.log("$scope>>>", $scope);
    }
  };
});
