angular.module('libraryApp').controller('carouselDemoCtrl',['$scope', carouselControl]);

function carouselControl($scope) {
     
    $scope.myInterval = 5000;
    $scope.slides = [    
        { image: 'images/img2.jpeg', text: 'Image1' },
        { image: 'images/img3.jpeg', text: 'Image2' },
        { image: 'images/img4.jpeg', text: 'Image3' },
        { image: 'images/img5.jpeg', text: 'Image4' }
    ];    
}