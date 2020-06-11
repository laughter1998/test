function insert(num){

    document.form.textview.value= document.form.textview.value+num;
}
function equal(){
    var exp = document.form.textview.value;
    if(exp){
    document.form.textview.value = eval(exp);
    }
}
function clean(){
    document.querySelector('.textview').value="";
}
function back(){
    const exp = document.querySelector('.textview').value;
    // var exp = document.form.textview.value;
    document.form.textview.value = exp.substring(0, exp.length-1);
}
