angular.module('libraryApp')
    .controller('bookController',['$scope',bookControllerFunction]);

function bookControllerFunction($scope){
    $scope.name="fgh";
}