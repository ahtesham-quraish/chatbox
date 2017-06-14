angular.module('app').directive('friendList', function($rootScope, Pubnub, currentUser) {
  return {
    restrict: "E",
    replace: true,
    templateUrl: 'components/friend-list/friend-list.html',
    scope: false,

    controller: function($scope, Friends){

      Friends.all().then(function(friends) {

        $scope.friends = friends;

      });
      //$//scope.$parent.currentUser = currentUser;
      $scope.startConversation = function(friend){
          //console.log("ding sone rea");
          $scope.$parent.$broadcast('event',friend);
      };
    }
  };
});
