/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
//key Event
function isNumberKey(intVal,val) {
    var charCode = intVal; //intVal.value.charCodeAt(intVal.value.length - 1);
    var decimalCounter;
    decimalCounter = 0;
    //scan the whole string
    var x = val.value;
    for (var i = 0; x.length != i; i++) {
        if (x.charAt(i) == '.') {
            decimalCounter++;
        }
    }    if (charCode > 31 && (charCode != 46 && (charCode < 48 || charCode > 57)) || (decimalCounter >= 1 && charCode == 46)) {
        return false;
    }
    return true;
}

//Convert string to double
function doubleConvert(float) {
    var decimal = false;
    //var x = document.getElementById(":mainForm:amount").value;
    
    //value equals to '0' if input length is = to 0
    if (float.value.length == 0) {
        float.value = "0";
    }
    //if input value index 0 is = '.', add '0' to the first index of the input value string
    if (float.value.charAt(0) == '.') {
        float.value = "0" + float.value;
    }
    //if last index of string is = '.', add "00" to the last index of the input value string
    if (float.value.charAt(float.value.length - 1) == '.') {
        float.value += "00";
    }
    //parse to float
    float.value = parseFloat(float.value).toFixed(2);
    //scan the whole string
    for (var i = 0; float.value.length != i; i++) {
        //check if the decimal point in the string already exist
        if (float.value.charAt(i) == '.') {
            decimal = true;
            break;
        }
    }
    //if decimal is = to false or value is = to 0, add ".00" to the last index of the input value string
    if (decimal == false) {
        float.value += ".00";
    }
    //remove leading zero value
    //document.getElementById(":mainForm:amount").value = document.getElementById(":mainForm:amount").value.replace(/^0+/,'');
}