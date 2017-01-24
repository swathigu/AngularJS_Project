angular.module('libraryApp').controller('accordianController',['$scope',accordianCtrlFunction]);

function accordianCtrlFunction($scope){
$scope.oneAtATime = true;
    $scope.groups = [
    {
        title: 'Dublin',
        content: '200 Civic Plaza, Dublin, CA 94568',
        phone:'(925) 803-7252'
    },
    {
      title: 'Pleasanton',
      content: '400 Old Bernal Ave, Pleasanton, CA 94566',
      phone:'925) 931-3400'
    },
    {
      title: 'San Ramon',
      content: '17017 Bollinger Canyon Rd, San Ramon, CA 94582',
      phone:'(925) 973-3380'    
    }
  ];
    
  $scope.addItem = function() {
    //var newItemNo = $scope.groups.length + 1;
      alert($scope.title);
    $scope.groups.push({title:$scope.title,
                        content:$scope.address,
                        phone:$scope.phone});
  };
}