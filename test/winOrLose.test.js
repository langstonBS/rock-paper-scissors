import { winOrLose } from '../winLos.js';

const test = QUnit.test;

test(' tell if win onr lose', function(assert){
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