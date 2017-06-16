angular.module('app').directive('private', function($rootScope) {
  return {
    restrict: "E",
    replace: true,
    templateUrl: 'components/conversation/private.html',
    scope: true,
    controller: function($scope, $state, Friends, Conversations, $stateParams, Pubnub, TypingIndicator, UsersTyping){

      // $scope.conversationType = $stateParams.type
      // $scope.conversation = null;
      // $scope.friend = null;
      // $scope.conversationChannel = null;
      // console.log("i am doing some reasreach ", $stateParams);
      //
      //console.log("Friends", Friends.all());
      $scope.close = function(){
          console.log("double parent");
      }
      if($scope.friendlist == undefined){
        $scope.friendlist = [];
      }
      $scope.$on('event',function(event,args){

               var friend = Friends.find({login: args});
               var result = $.grep($scope.friendlist, function(e){ return e.login == friend.login; });
               if(result.length == 0 ){
                  $scope.friendlist.push(friend);
               }
              //  else if($scope.friendlist.length == 0 ){
              //    $scope.friendlist.push(friend);
              //  }

               //console.log("event,args",$scope.friendlist );
       });
      // console.log(">>>>>>>>>");
      // if ($stateParams.type == 'channel'){
      //
      //   $scope.conversationChannel = 'conversation_channel_'+ $stateParams.name
      //   $scope.conversation = Conversations.$channel($scope.conversationChannel);
      //   $scope.conversationChannel =  'conversation_channel_'+ $stateParams.name
      //
      // }
      // else{
      //     console.log("i am doiing ");


        //if($scope.friends)


      //   $scope.conversationChannel = $scope.friend.direct_conversation_channel;
      //   $scope.conversation = Conversations.$channel($scope.conversationChannel);
      //
      // }
      //
      // $scope.usersTyping = UsersTyping.$channel($scope.conversationChannel+'-pnpres');
      //
      //
      // if (_.isEmpty($scope.conversation)){
      //      $scope.conversation.$load(10)
      //    }

    }
  };
});
