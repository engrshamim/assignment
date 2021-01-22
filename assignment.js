
// Problem 01, kilometerToMeter Section

function kilometerToMeter(duration){

    var meter = duration * 1000;
    return meter;
}




         // Problem 02 budgetCalculator section

function budgetCalculator(watch, mobile, laptop){
    var total = watch * 50 + mobile * 100 + laptop * 500;
    return total;
}



               // Problem 03 hotelCost section

function hotelCost(duration){

    var moneyCostLI = 0;
    if(duration<=10){
        moneyCost = duration * 100;
    }
    else if(duration<=20){
        var firstDay = 10 * 100;
        var remaining = duration - 10;
        var secendDay = remaining * 80;
        moneyCost = firstDay + secendDay;
    }
    else{
        var firstDay = 10*100;
        var secendDay = 10*80;
        var remaining = duration - 20;
        var thirdDay = remaining *50;
        moneyCost = firstDay + secendDay + thirdDay;
    }
    return moneyCost;
    }



    // Problem 04 megaFriend section


    
    function megaFriend(array) {
        var largeName = "";
      
        array.forEach(function(word) {
          if(word.length > largeName.length) {
            largeName = word;
          }
        });
      
        return largeName;
      }