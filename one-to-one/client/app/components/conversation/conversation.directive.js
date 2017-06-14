angular.module('app').directive('conversation', function($rootScope) {
  return {
    restrict: "E",
    replace: true,
    templateUrl: 'components/conversation/conversation.html',
    scope: {
      friend: "=f"
    },

    controller: function($scope, $state, Friends, Conversations, $stateParams, Pubnub, TypingIndicator, UsersTyping){

    //  $scope.conversationType = $stateParams.type
      $scope.conversation = null;
      //$scope.friend = null;
      $scope.conversationChannel = null;
      console.log("i am doing some reasreach ", $scope);

      // if ($stateParams.type == 'channel'){
      //
      //   $scope.conversationChannel = 'conversation_channel_'+ $stateParams.name
      //   $scope.conversation = Conversations.$channel($scope.conversationChannel);
      //   $scope.conversationChannel =  'conversation_channel_'+ $stateParams.name
      //
      // }
      // else{
      //     //console.log("i am doiing ");
        //$scope.friend = Friends.find({login: $stateParams.name});
        $scope.conversationChannel = $scope.friend.direct_conversation_channel;
        $scope.conversation = Conversations.$channel($scope.conversationChannel);

      // }

      $scope.usersTyping = UsersTyping.$channel($scope.conversationChannel+'-pnpres');

      console.log(">>>>>>>>>", $scope.conservation);
      if (_.isEmpty($scope.conversation)){
           console.log(">>>>>>>>>", $scope.conservation);
           $scope.conversation.$load(10)
         }

    }
  };
});
