

var myApp = angular.module('myApp', [
  'ngAnimate',
  'ngAria',
  'ngCookies',
  'ngMessages',
  'ngResource',
  'ngRoute',
  'ngSanitize',
  'ui.router',
  'ngTouch',
  'duScroll',

  



])


myApp.config(
  function ($stateProvider, $urlRouterProvider, $locationProvider) {

    // $locationProvider.html5Mode({enabled: true, requireBase: false})


    $stateProvider.state('landing', {
      url: '',
      abstract: false,
      
      views: {
        main: { templateUrl: "views/landing.html", controller: 'LandingCtrl' }
      },

    })


    $stateProvider.state('login', {
      url: '/login',
      abstract: false,
      
      views: {
        main: { templateUrl: "views/login.html", controller: 'LoginCtrl' }
      },

    })

  


    $stateProvider.state('app', {
      url: '/app',
      abstract: false,
     
      views: {
        main: { templateUrl: "views/main.html", controller: 'MainCtrl' }
      }
      
    })

    $stateProvider.state('app.mainUser', {
      url: '/mydashboard',
      parent: 'app',
      onEnter: function () {
        console.log("employer entered")
      },
      views: {
        'app': { templateUrl: "views/mainUser.html", controller: 'MainUserCtrl' }
      }
    })

    $stateProvider.state('app.calendar', {
      url: '/calendar',
      parent: 'app',
      onEnter: function () {

      },
      views: {
        'app': { templateUrl: "views/calendar.html", controller: 'CalendarCtrl' }
      }
    })

    $stateProvider.state('app.todo', {
      url: '/todo',
      parent: 'app',
      onEnter: function () {

      },
      views: {
        'app': { templateUrl: "views/todo.html", controller: 'TodoCtrl' }
      }
    })

    $stateProvider.state('app.phonebook', {
      url: '/phonebook',
      parent: 'app',
      onEnter: function () {

      },
      views: {
        'app': { templateUrl: "views/phoneBook.html", controller: 'PhoneCtrl' }
      }
    })

    $stateProvider.state('app.password', {
      url: '/password',
      parent: 'app',
      onEnter: function () {

      },
      views: {
        'app': { templateUrl: "views/password.html", controller: 'PasswordCtrl' }
      }
    })



  });
  



myApp.controller('LandingCtrl', ['$scope', '$log', '$locale', '$location', '$anchorScroll' ,'$state', '$rootScope', function ($scope, $log, $locale,$location, $anchorScroll, $state, $rootScope) {

  $scope.login = function () {

    var toState;


    toState = 'app.mainUser';
    $state.go(toState)



  }





}]);


myApp.controller('LoginCtrl', ['$scope', '$log', '$locale', '$location', '$anchorScroll' ,'$state', '$rootScope', function ($scope, $log, $locale,$location, $anchorScroll, $state, $rootScope) {
  
    $scope.login = function () {
  
      var toState;
      var isEmployer = $scope.email.indexOf('user') != -1 ? true: false;
      var password = $scope.password.indexOf('user') != -1 ? true: false;
    
      
      if (isEmployer==true && password==true){
        toState = 'app.mainUser';
        $state.go(toState)
      }
     else{
        alert("Incorrect information");


      }
  
     
  
  
  
    }
  
  
  
  
  
  }]);




  


myApp.controller('PasswordCtrl', ['$scope', '$log', '$locale', '$state', '$rootScope', function ($scope, $log, $locale, $state, $rootScope) {
  

  $scope.info = [
    { title: "Gmail", description:"Personal",  userName: "Jack12@gmail.com", password:"132555"},
    { title: "Apple Store", description:"Personal",userName: "Jack12@gmail.com",password:"324234"},
    { title: "Facebook", description:"Personal", userName: "Jack12@gmail.com", password:"343545"}
  ];
  $scope.id=0;
  
  
  
  }]);

myApp.controller('CalendarCtrl',['$scope', '$log', '$locale', '$state', '$rootScope', function ($scope, $log, $locale, $state, $rootScope) {

  $scope.updateTime = function(){
    $scope.time = $('#time').val();
    $scope.hours=$('#hours').val();
    $scope.min=$('#min').val();
    $scope.daytime=$('#daytime').val();
    
  }
  $scope.addMe = function () {
    return{
      title: $scope.formData.title,
      place:$scope.formData.place,
     description:$scope.formData.description,
     time:$scope.time,
     hours:$scope.hours,
     min:$scope.min,
     daytime:$scope.daytime
      
    }
  }
  $scope.addItem = function () {
    for (var i = 0; i < $rootScope.calendar.length; i++) {
    
      if (($rootScope.calendar[i].title == $scope.addMe().title) ||
        ($rootScope.calendar[i].time == $scope.addMe().time)||
      ($rootScope.calendar[i].place == $scope.addMe().place)||
      ($rootScope.calendar[i].description == $scope.addMe().description)||
      $rootScope.calendar[i].hours=== $scope.addMe().hours||
      $rootScope.calendar[i].min=== $scope.addMe().min||
      $rootScope.calendar[i].daytime=== $scope.addMe().daytime)
       {
        
      }
    }
    $rootScope.calendar.push($scope.addMe());


    $scope.formData = {};
    $scope.myForm.$setPristine();
  


  }

}]);



myApp.controller('TodoCtrl', ['$scope', '$log', '$state', '$rootScope', function ($scope, $log, $state, $rootScope) {


 
  
  $scope.getTotalTodos = function () {
    var amount = 0;
    for(var i = 0; i<$rootScope.todos.length; i++)
      {
         if($rootScope.todos[i].done == false){
          amount+= 1;
          };


      };
    
    
    return amount
    
   
  };


  $scope.addTodo = function () {
    $rootScope.todos.push({ text: $scope.formTodoText, done: false });
    $scope.formTodoText = '';
    getTotalTodos();
  };


  $scope.clearCompleted = function (todo) {
    for(var i = 0; i<$rootScope.todos.length; i++)
      {
         if($rootScope.todos[i].text == todo){
          $rootScope.todos[i].done=true;
          };


      };
    };

    $scope.everythingDone=function () {

      for(var i = 0; i<$rootScope.todos.length; i++)
        {
          
          $rootScope.todos[i].done=true;
            
  
  
        };
    };

    $scope.hideMe = function (fruit) {
      fruit.hide=true;
     
  };


}]);

myApp.controller('MainCtrl', ['$scope', '$log', '$state', '$rootScope', function ($scope, $log, $state, $rootScope) {




  $scope.backMain = function () {

    var toState;


    toState = 'app.mainUser';
    $state.go(toState)



  }

  $scope.viewCalendar = function () {

    var toState;


    toState = 'app.calendar';
    $state.go(toState)



  }

  $scope.viewTodo = function () {

    var toState;


    toState = 'app.todo';
    $state.go(toState)



  }

  $scope.viewPhone = function () {
    
        var toState;
    
    
        toState = 'app.phonebook';
        $state.go(toState)
    
    
    
      }


      $scope.viewPassword= function () {
        
            var toState;
        
        
            toState = 'app.password';
            $state.go(toState)
        
        
        
          }






}]);


myApp.controller('MainUserCtrl', ['$scope', '$log', '$state', '$rootScope', function ($scope, $log, $state, $rootScope) {


  $scope.addMe = function () {
    return{
      name: $scope.formData.newName,
      tel: $scope.formData.newTel,
      email:$scope.formData.newEmail,
      message:$scope.formData.newMessage,
      important:$scope.formData.important
    }
  }
  $scope.addItem = function () {
    for (var i = 0; i < $rootScope.info.length; i++) {
    
      if (($rootScope.info[i].name == $scope.addMe().name) ||
        ($rootScope.info.tel == $scope.addMe().tel)||
      ($rootScope.info.email == $scope.addMe().email)||
      ($rootScope.info.message == $scope.addMe().message)) {
        
      }
    }
    $rootScope.info.push($scope.addMe());


    $scope.formData = {};
    $scope.myForm.$setPristine();
  


  }


  $scope.removeItem = function () {
    $scope.info.splice(this.$index, 1)
  }
      
  $scope.change = function () {
    index = this.$index;
    $scope.showMe = function (indx) {
      if (indx == index) {
        return true;
      }
    }
  }
  $scope.save = function () {
    index = this.$index;
    $scope.showMe = function (indx) {
      if (indx == index) {
        return false;
      }
    }
  }



  
  $scope.getTotalTodos = function () {
    var amount = 0;
    for(var i = 0; i<$rootScope.todos.length; i++)
      {
         if($rootScope.todos[i].done == false){
          amount+= 1;
          };


      };
    
    
    return amount
    
   
  };


  $scope.addTodo = function () {
    $rootScope.todos.push({ text: $scope.formTodoText, done: false });
    $scope.formTodoText = '';
    getTotalTodos();
  };


  $scope.clearCompleted = function (todo) {
    for(var i = 0; i<$rootScope.todos.length; i++)
      {
         if($rootScope.todos[i].text == todo){
          $rootScope.todos[i].done=true;
          };


      };
    };

    $scope.everythingDone=function () {

      for(var i = 0; i<$rootScope.todos.length; i++)
        {
          
          $rootScope.todos[i].done=true;
            
  
  
        };
    };

    $scope.hideMe = function (fruit) {
      fruit.hide=true;
     
  };



}]);
myApp.run(function($rootScope) {
  $rootScope.calendar = [
    { title: "Team meeting", time:"2017-03-02", hours:"12", min:"10",daytime:"pm",  place:"Boston",description:"talk about strategy"},
    {title: "Board meeting", time:"2017-03-04", hours:"1", min:"10",daytime:"pm",  place:"Boston",description:"talk about strategy"},
    { title: "Team meeting", time:"2017-03-06", hours:"2", min:"10",daytime:"pm",  place:"Boston",description:"talk about strategy" }
  ];
$rootScope.info = [
  { name: "Tom", tel: "012-345-6789", email:"t@gmail.com",message:"coworker", important:true },
  { name: "Jerry", tel: "012-345-6789",email:"j@gmail.com",message:"coworker",important:false},
  { name: "Philip", tel: "012-345-6789",email:"p@gmail.com",message:"coworker", important:true }
];

$rootScope.todos = [
  { text: 'Learn AngularJS', done: false },
  { text: 'Build an app', done: false },
  {text: 'Learn HTML', done: true}
];





});


//myApp.factory('myService', function() {});




myApp.controller("PhoneCtrl", function ($scope,$rootScope) {


  $scope.addMe = function () {
    return{
      name: $scope.formData.newName,
      tel: $scope.formData.newTel,
      email:$scope.formData.newEmail,
      message:$scope.formData.newMessage,
      important:$scope.formData.important
    }
  }
  $scope.addItem = function () {
    for (var i = 0; i < $rootScope.info.length; i++) {
    
      if (($rootScope.info[i].name == $scope.addMe().name) ||
        ($rootScope.info.tel == $scope.addMe().tel)||
      ($rootScope.info.email == $scope.addMe().email)||
      ($rootScope.info.message == $scope.addMe().message)) {
        
      }
    }
    $rootScope.info.push($scope.addMe());


    $scope.formData = {};
    $scope.myForm.$setPristine();
  


  }


  $scope.removeItem = function () {
    $scope.info.splice(this.$index, 1)
  }
      
  $scope.change = function () {
    index = this.$index;
    $scope.showMe = function (indx) {
      if (indx == index) {
        return true;
      }
    }
  }
  $scope.save = function () {
    index = this.$index;
    $scope.showMe = function (indx) {
      if (indx == index) {
        return false;
      }
    }
  }
});





