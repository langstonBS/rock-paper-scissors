import { winOrLose } from '../src/winOrLose.js';

const test = QUnit.test;

test(' tell if win or lose', function(assert){
    //Arrange
    // Set up your parameters and expectations
    const expected = 1;
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = winOrLose(0, 1);
    
    //Assert
    // Make assertions about what is expected valid result
    assert.equal(expected, actual);
});

test(' tell if win orr lose', function(assert){
    //Arrange
    // Set up your parameters and expectations
    const expected1 = 1;
    //Act 
    // Call the function you're testing and set the result to a const
    const actual1 = winOrLose(1, 0);
    
    //Assert
    // Make assertions about what is expected valid result
    assert.equal(expected1, actual1);
});

test(' tell if win onr lose', function(assert){
    //Arrange
    // Set up your parameters and expectations
    const expected1 = 0;
    //Act 
    // Call the function you're testing and set the result to a const
    const actual1 = winOrLose(1, 1);
    
    //Assert
    // Make assertions about what is expected valid result
    assert.equal(expected1, actual1);
});