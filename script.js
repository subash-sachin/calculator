let input = document.getElementById("textbox");
// the document.getElementById used to find out the an elemnet by element id which means in my input code.

function display(number){
    input.value += number ;
    console.log(input.value)
    // it will show a 0 to adding n numbers (++++)

}

function Clear(){
    input.value = "";
    // console.log(input.value)
    // if you want to clear the input value, it will remove the all input value.
    // once you click the clear button its going to be initial stage number 0.
}
function del(){
    input.value= input.value.slice(0,-1)
    console.log(input.value)
    // slice method can take two argument like slice(0,0).
    // when the slice() method is given two arguments,its selects array elements,
    // and up to the end argument.

} 
function equal(){
    try {
        input.value = eval(input.value);
        console.log(input.value)
    } catch (err) {
        input.value = ("syntex error");
        console.log(input.value)
    }
}
// equal function there are two condition
// try method , to evalving the input value. 
// catch method its means error.