function addTxt(){
    const fragment = document.createDocumentFragment();
    const input = fragment
        .appendChild(document.createElement("p"))
        .appendChild(document.createElement("input"))
    input.type = "text"; 

    document.body.appendChild(fragment);
}

function getArray(){
    /**  let numElems = document.getElementsByTagName('input').length;
    // let array = [];

    // for (let i = 0; i < numElems; i++) {
    //         if(document.getElementsByTagName('input')[i].value == ''){
    //             continue;
    //         }
    //             array.push(
    //                 document.getElementsByTagName('input')[i].value);  
    //         }
    // return array; */

    const inputs = document.getElementsByTagName('input');
    const myArray = Array.from(inputs)
                    .filter(input => input.value !== '' && !isNaN(input.value))
                    .map(input => parseInt(input.value));

    return myArray;
    
}

function sortArray(){
    /**  let numElems = document.getElementsByTagName('input').length;
    let array = [];

    for (let i = 0; i < numElems; i++) {
            if(document.getElementsByTagName('input')[i].value == ''){
                continue;
            }
                array.push(
                    document.getElementsByTagName('input')[i].value);  
            }
        
    console.log(numElems);
    console.log(array); 
    const array = getArray();
    */

    const sortedArray = getArray().sort((a, b) => a - b);
    alert(sortedArray);
}

function sumEven() {
    /**let sum = 0;
    const array = getArray();

    array.forEach(element => {
        if (element % 2 === 0 && element > 0){
            sum = (+sum) + (+element);
        }
    });

    alert(+sum);*/
    
    const array = getArray();

    const sum = array.reduce((accumulator, currentValue) => {
        if (currentValue % 2 === 0 && currentValue > 0) {
            return accumulator + parseFloat(currentValue);
        } else {
            return accumulator;
        }
    }, 0);

    alert(sum);
}
