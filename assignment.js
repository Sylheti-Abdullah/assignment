/*________Pro 1_____________*/

function feetToMile(feet){
    var mile = 5280;
    if(feet <= 0){
        return "invalid value";
    }else{
        var cal = feet / mile;
        var result = cal.toFixed(4);
    }
    return result+" mile";
}
var result = feetToMile(10580);
console.log(result);


/*__________________pro 2__________________*/

function woodCalculator(chair, table, bed){
    var forChair = 1;
    var fortable = 3; 
    var forBed   = 5; 

    if (chair && table && bed <= 0) {
        return "Invalid";
    }else{
        var farnichar1 = chair * forChair;
        var farnichar2 = table * fortable;
        var farnichar3 = bed   * forBed;

        var result = farnichar1 + farnichar2 + farnichar3;
        return result+" qubicfeet wood is needed";
    }
}

var totalfarnichar = woodCalculator(4, 5, 6);
console.log(totalfarnichar);


/*__________________Pro 3__________________*/

function brickCalculator(storey){
    var brick = 1000;
    var feet = 0;
    if(storey >= 1 && storey <= 10){
        feet = 15;
        var calculate = storey * feet * brick;
        return calculate+" brick is needed";
    }
    else if(storey >= 11 && storey <= 20){
        feet = 12;
        var calculate =  storey * feet * brick;
        return calculate+" brick is needed";
    }
    else if(storey > 20){
        feet = 10;
        var calculate =  storey * feet * brick;
        return calculate+" brick is needed";
    }
}
var floor = brickCalculator(11);
console.log(floor);



/*__________________pro 4__________________*/

function tinyFriend(friends){
    var small = friends[0];
    for(var i = 0; i < friends.length; i++){
        var element = friends[i]
        if(  element.length < small.length){
            var small = element;
        }
    }
    return small;
}

var friendName = ["mamun", "kamal", "zilad", "faruq"];
console.log(tinyFriend(friendName));