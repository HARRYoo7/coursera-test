(()=>{
    'use strict'
    angular.module('LunchCheck',[])
        .controller('LunchCheckController',LunchCheckController)

    LunchCheckController.$inject=['$scope']
    function LunchCheckController($scope){
        $scope.LunchName=""
        $scope.CountLunch=()=>{
            const lunchs=$scope.LunchName.split(',')
            var count=0
            lunchs.forEach((lunch) => {
                if(lunch!==''){
                    count++
                }
            });
            if(count<=3){
                $scope.output='Enjoy!'
            }else{
                $scope.output='Too Much!'
            }
        }
    }
})()