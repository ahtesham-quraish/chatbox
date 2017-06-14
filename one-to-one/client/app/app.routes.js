angular
  .module('app')
  .config(function ($stateProvider, $urlRouterProvider, $authProvider) {

    // Redirect to the login page if not authenticated
    var requireAuthentication = function ($location, $auth, AuthenticationService) {

      if ($auth.isAuthenticated()) {
        return AuthenticationService.login()
      } else {
        return $location.path('/login');
      }
    };

    $stateProvider
    .state('login', {
      url: "/login",
      templateUrl: 'views/login.html'
    })

    .state('chat', {
      url: "/conversations",
      templateUrl: 'views/chat.html',
      resolve: {
            currentUser: function(currentUser){ return currentUser.fetch() },
            requireAuthentication: requireAuthentication,
            friends: function(Friends, requireAuthentication){ return Friends.all() },
            conversation: function(ConversationList, requireAuthentication){ return ConversationList.all() }
          }
    })
    .state('chat.private', {
      url: "/private",
      template: '<private></private>',
      controller: function(){
          console.log("New model window added ");
      }
    })
    .state('chat.conversation', {
      url: "/:type/:name",
      template: '<conversation></conversation>',
      controller: function(){
          console.log("New model window added ");
      }
    })

    .state('logout',{
        url: '/logout',
        template: null,
        controller: function(AuthenticationService, $location, ngNotify, $window, $state, $auth){

            if(!$auth.isAuthenticated()){
              $location.path('/login');
            }
            else{

              AuthenticationService.logout().catch(function(error) {
              // The logging out process failed on the server side
              if(error.status == 500){
                ngNotify.set('Logout failed.', { type: 'error' });
              }
            }).finally(function(){


              $location.path('/login');
              $window.location.reload()

            });

          }


        }
      })
      $urlRouterProvider.when('/', '/conversations/private');
      // For any unmatched url, redirect to /login
      $urlRouterProvider.otherwise("/login");



  })
