angular.module('libraryApp').service('bookListService',['$http','$q','$resource',bookListServiceFunction]);

function bookListServiceFunction($http,$q,$resource){
    var deferred = $q.defer();
    return{
        getBookList:getBookList,
        searchbooksAPI: searchbooksAPI
    };
    
    function getBookList(){
        $http({
            method: 'GET',
            url:"/data.json"
        }).success(function(response,data){
            console.log('from service data '+response + ' ' + data);
            deferred.resolve(response);
        }).error(function(response){
            console.log('from service error '+response);
            deferred.reject(response);
        });
    return deferred.promise;
    }
    
    function searchbooksAPI(name){
    console.log('At searchbooksAPI Service');
        
        return $resource('http://localhost:3000/books/');
    }
}