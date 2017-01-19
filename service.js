angular.module("app").service("foodService", function($q) {

  this.chewAndSwallow = function(newFood) {
    var eating = $q.defer();

    console.log('is food?');
    if (!newFood) {
      console.log('no');
      eating.resolve(false);
    }
    else {
      console.log('yes');
      console.log('chewing');
      setTimeout(function() {
        console.log('swallowing');
        eating.resolve(true);
      }, 10000);
    }

    return eating.promise;
  };

});
