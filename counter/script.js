// set initial count
let count = 0;

const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

btns.forEach(function(btn){

    btn.addEventListener('click', function(e){
        // console.log(e.currentTarget.classList);
        const styles = e.currentTarget.classList;
        if(styles.contains('decrease')){
            count--;
        }
        else if (styles.contains('increase')){
            count++;
        }
        else {
            count = 0;
        }
        if(count > 0){
            value.style.color = "green";
        }
        if(count < 0){
            value.style.color = "red";
        }
        if(count == 0){
            value.style.color = "#222";
        }
        value.textContent = count;
    })
})



// let abc = document.querySelector('#value')
// let count = abc.innerText;
//
// function increase(){
//     count = eval(count + 1);
//     abc.innerHTML= count;
//     console.log(count);
// }
//
// function decrease(){
//     count = eval(count - 1);
//     abc.innerHTML= count;
//     console.log(count);
// }
//
// function reset(){
//     count = 0;
//     abc.innerHTML= count;
//     console.log(count);
// }
