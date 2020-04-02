
export function winOrLose(numberOne, numberTwo){
    if (numberOne === numberTwo){
        return 0;     
    } else if (numberOne === 0 && numberTwo === 1){
        return 1;
    } else if (numberOne === 1 && numberTwo === 0){
        return 1;
    } else if (numberOne === 2 && numberTwo === 1){
        return 1;
    } else {
        return 2;
    }
}