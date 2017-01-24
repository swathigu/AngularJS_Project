angular.module('libraryApp').service('searchService',['$http','$q','$log','$cacheFactory','$timeout',searchServiceFunction]);
                                                      
function searchServiceFunction($http,$q,$log,$cacheFactory,$timeout){
     
    return{
        seachBooks: searchBooks,
        searchJson: searchJson
    };
    
    function searchBooks(){
        var deferred = $q.defer();
        $http({
            method:'GET',
            url:"/search.json"
        }).success(function(response){
            deferred.resolve(response);
        }).error(function(response){
            deferred.reject(response);
        });
        return deferred.promise;
    }
    
    function searchJson(name){
    console.log('At Service');
        
        var deferred = $q.defer();
        $http({
            method:'GET',
            url:"http://localhost:3000/users/"
            //url:"https://jsonplaceholder.typicode.com/users/",
           // params:{name:name}
        }).success(function(response){
            console.log("response " + JSON.stringify(response));
            deferred.resolve(response);
        }).error(function(response){
            deferred.reject(response);
        });
        return deferred.promise;
    }
    
}