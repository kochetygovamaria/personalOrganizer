
  angular.module('myApp').controller('LandingCtrl',['$scope', '$log', '$state', '$rootScope',  function($scope,$log, $state, $rootScope){
    
          $scope.login = function(){
            
            var toState;
            
          
              toState = 'app.mainUser';
              $state.go(toState)
          
          
    
          }
    
       
    
    
    }]);