angular.module('libraryApp').controller('bookListController',['$scope','bookListService',bookList]);

function bookList($scope,bookListService){
    
    
    var myDefs = [{field: '_id', visible: false},
                     { field: 'name', displayName: 'Book Name'},
                     { field: 'author', displayName: 'Author Name'}
                    ];
    $scope.gridOptions = { 
//        enableRowSelection: true,
//        enableSelectAll: true,
//        selectionRowHeaderWidth: 35,
//        headerRowHeight: 30,
        columnDefs: myDefs
   };

   
  /*  bookListService.getBookList().then(function(data){
                      $scope.gridOptions.data = data;                                    
                                            });*/
  //  console.log("bookData "+ bookListService.getBookList());
    
 
     bookListService.searchbooksAPI().query(function(data){                                                              $scope.gridOptions.data =data;    
        console.log("data from $resource " + JSON.stringify(data));
        //   console.log('response:', response); // should be parsed JSON object
        // console.log('response.$raw:', angular.toJson(response));                                                                                                                         
    });
}