angular.module('libraryApp').controller('addBookController',['$scope',addBookControllerFunction]);

function addBookControllerFunction($scope){
    $scope.bookName1='';
    $scope.addBook = function($scope){
        console.log("book name "+ ($scope.bookName1));
        console.log(angular.element('#bookName').val());
    };
    
}