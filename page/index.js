'use strict' ; // eslint-disable-line

/* eslint linebreak-style: ['error', 'windows'] */
const test = require('tape');  // eslint-disable-line

function twoListFilter(arrayOne, arrayTwo) {

  const containerArray = [];
  const resultArray = [];


  for (let i = 0; i < arrayOne.length; i += 1) {
    containerArray[i]  = [arrayOne[i],false];
  }

  for (let i = 0; i < arrayOne.length; i += 1) {
    for (let j = 0; j < arrayTwo.length; j += 1) {
      if (arrayOne[i] === arrayTwo[j] ) {
        containerArray[i] = ([arrayOne[i], true]);
      }
    }
  }
  let index = 0;
  for (let i = 0; i < containerArray.length; i += 1) {
    if (containerArray[i][1] === false) {
      resultArray[index] = containerArray[i][0];
      index += 1;
    }
  }
  return resultArray;
}


class Test {
  testFn() {
    test ('two list filter test', function (t) {

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

