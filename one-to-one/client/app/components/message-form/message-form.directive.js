angular.module('app').directive('messageForm', function($rootScope) {
  return {
    restrict: "E",
    replace: true,
    templateUrl: 'components/message-form/message-form.html',
    scope: {
      typingIndicator: "=",
      conversation: "=",
        focus: '&ngFocus'
    },
    link:function(scope){
      scope.focusHandler = function(){

          $rootScope['cuurentChannel'] = scope.conversationChannel;
            //console.log("$rootScope", $rootScope);
      }
    },


    controller: function($scope, currentUser){

      $scope.sendMessage = function(){

          if(_.isEmpty($scope.messageContent)){
              return;
          }
            $scope.conversation.sendMessage($scope.messageContent).then(function(){
              console.log($scope.conversation);
              $scope.messageContent = '';


          })

      }

    }
  };
});
