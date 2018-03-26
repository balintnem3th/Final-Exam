'use strict' ;

var test = require('tape');

function twoListFilter(arrayOne,arrayTwo){
     
    let containerArray = [];
    let resultArray = [];


    for(let i=0;i<arrayOne.length;i++){
      containerArray[i]= [arrayOne[i],false];
    }

    for(let i=0;i<arrayOne.length;i++){
      for(let j=0;j<arrayTwo.length;j++){
        if(arrayOne[i] === arrayTwo[j] ){
          containerArray[i]=([arrayOne[i] ,true]);
        }
      }
    }
    let index=0;
    for(var i=0;i<containerArray.length;i++){
      if(containerArray[i][1] === false){ 
        resultArray[index] = containerArray[i][0];
        index++;
      }
    }
    return resultArray;
}


class Test{
  testFn(){
      test('two list filter test', function (t){
        

          let sumTest1 = twoListFilter([1,2,3,4,5],[1]);
          let expected1 =  [2,3,4,5];

          let sumTest2 = twoListFilter([],[]);
          let expected2 = [];
          
          let sumTest3 = twoListFilter([5,6,7],[]);
          let expected3 = [5,6,7];

          let sumTest4 = twoListFilter([],[5,6,7]);
          let expected4 = [];

          t.deepEqual(sumTest1, expected1);
          t.deepEqual(sumTest2, expected2);
          t.deepEqual(sumTest3, expected3);
          t.deepEqual(sumTest4, expected4);
          
          t.end();
      });
  }
};

const newTest = new Test();
newTest.testFn();

