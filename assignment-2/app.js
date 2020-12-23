(()=>{
    'use strict'
    angular.module('ShoppingListCheckOff',[])
        .controller('ToBuyController',ToBuyController)
        .controller('AlreadyBoughtController',AlreadyBoughtController)
        .service('ShoppingListCheckOffService',ShoppingListCheckOffService)

    ToBuyController.$inject=['ShoppingListCheckOffService']
    function ToBuyController(ShoppingListCheckOffService){
        const toBuy=this
        toBuy.items=ShoppingListCheckOffService.showItems()
        toBuy.bought=(itemIndex)=>{
            ShoppingListCheckOffService.bought(itemIndex)
            ShoppingListCheckOffService.remove(itemIndex)
        }
    }

    AlreadyBoughtController.$inject=['ShoppingListCheckOffService']
    function AlreadyBoughtController(ShoppingListCheckOffService){
        const alreadyBought=this
        alreadyBought.items=ShoppingListCheckOffService.showBoughtItems()
    }

    function ShoppingListCheckOffService(){
        const service=this
        var toBuy=[{
            name:'lays',
            quantity:10
        },{
            name:'coke',
            quantity:12
        },{
            name:'cookies',
            quantity:10
        },{
            name:'pie',
            quantity:5
        }]
        var alreadyBought=[]
        service.showItems=()=>{
            return toBuy
        }
        service.bought=(itemIndex)=>{
            alreadyBought.push(toBuy[itemIndex])
        }
        service.remove=(itemIndex)=>{
            toBuy.splice(itemIndex,1)
        }
        service.showBoughtItems=()=>{
            return alreadyBought
        }
    }
})()