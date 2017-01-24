angular.module('libraryApp').controller('searchController',['$scope','$http','searchService',searchControllerFunction]);

function searchControllerFunction($scope,$http,searchService){
    
    searchService.seachBooks().then(function(data){
       $scope.books=data; 
    });
    
    $scope.searchJson= function(name){
        console.log('At Controller');
        
        return searchService.searchJson(name).then(function(data){
            console.log(data);
            return data;
        });
    };
      
    
  $scope.selectedAddress = '';
  $scope.getAddress = function(viewValue) {
    var params = {address: viewValue, sensor: false};
    return $http.get('http://maps.googleapis.com/maps/api/geocode/json', {params: params})
    .then(function(res) {
      return res.data.results;
    });
  };
}