  angular
  .module('app')
  .run(['Pubnub','currentUser', function(Pubnub, currentUser) {

    Pubnub.init({
          publish_key: 'pub-c-7962d8b5-684d-470f-909a-4dd7ce6eb15d',
          subscribe_key: 'sub-c-a3aa0aaa-4f3d-11e7-a18e-0619f8945a4f',
          uuid: currentUser,
          origin: 'pubsub.pubnub.com',
          ssl: true
      });

  }])
  .run(['ngNotify', function(ngNotify) {

      ngNotify.config({
          theme: 'paster',
          position: 'top',
          duration: 250
      });

  }]);
