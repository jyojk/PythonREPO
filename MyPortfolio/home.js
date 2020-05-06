// function myFunction(){
//     var x = {firstName:"Jyothish", lastName:"K"};
//     document.getElementById('xx').innerHTML = x.firstName+ " "+x.lastName;
// }
// function myFunction1(){
//     document.body.style.backgroundImage = "url('images/blur2.jpg')";
// }

var app = angular.module('portf', []);
app.controller('portfctrl', function($scope){
    $scope.fullname = function(){
        $scope.fullnames =  "Jyothish K"
    };
});