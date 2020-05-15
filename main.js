var stringVar = 'ini sebuah string';
var numberVar = 30;
var boolVar = false;
var greatFunc = function (sebuahNomer) {
    return sebuahNomer;
};
//err: Type '30' is not assignable to type 'string'.
// stringVar = 30;
stringVar = 'perubahan string';
//err: Type '"30"' is not assignable to type 'number'.
//no more javascript number memes xD
// numberVar = '30';
numberVar = 50;
//err: Type '"true"' is not assignable to type 'boolean'.
// boolVar = 'true';
//err: Type '0' is not assignable to type 'boolean'.
// boolVar = 0;
boolVar = true;
//err: Argument of type '"20"' is not assignable to parameter of type 'number'.
// console.log(greatFunc('20'));
console.log(greatFunc(20));
