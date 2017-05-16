var app =angular.module('restaurantApp', [])

app.controller('mainController', function ($scope){


$scope.brookwood = [

names="Brookwood Dublin",
locations=" Address: 141 Baggot Street Lower",
ratings="Rating: 4.3"


]

$scope.red = [

names="Red Torch Ginger",
locations=" Address: 15 St. Andrew's St",
ratings="Rating: 4.4"


]


$scope.jimmy = [

names="Jimmy chung's",
locations="Address: Eden Quey",
ratings="Rating: 4.0"


]

$scope.fire = [

names="Fire Restaurant and Lounge",
locations="Address: The Mansion House, 2 Dawson St, Dublin 2",
ratings="Rating: 4.1"


]

$scope.tapas = [

names="Las Tapas De Lola",
locations="Address: 12 Wexford St, Dublin 2,",
ratings=" Rating: 4.6"


]

 $scope.text = {
    "font-size" : "30px",
   "margin-top": "10px"
  }


});





