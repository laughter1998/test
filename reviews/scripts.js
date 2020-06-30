const reviews = [
    {
        id: 1,
        name: "엘리",
        job: "복수자",
        img:"./img/img1.jpg",
        text: "안녕"

    },
    {
        id: 2,
        name: "조엘",
        job: "팡야",
        img:"./img/img2.jpg",
        text: "이런 젠장"

    },
    {
        id: 3,
        name: "예니퍼",
        job: "까만머리",
        img:"./img/img3.jpg",
        text: "대마법사"

    },
    {
        id: 4,
        name: "게롤트",
        job: "은발",
        img:"./img/img4.jpg",
        text: "위쳐"

    }
];

// select items
const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const randomBtn = document.querySelector('.random-btn');


// set starting item
let currentItem = 0;


//load intial item
window.addEventListener("DOMContentLoaded", function(){
    showPerson();
     // const item = reviews[currentItem];
     // img.src = item.img;
     // author.textContent = item.name;
     // job.textConent = item.job;
     // info.textContent = item.text;
     //  console.log(info.textContent);
});

// show person based on item

function showPerson(){
    const item = reviews[currentItem];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
     console.log(item.job);
}

// show next person

nextBtn.addEventListener('click',function(){

    currentItem++;
    if(currentItem > reviews.length - 1){
        currentItem = 0;
    }
    showPerson();
});

// show prev person
prevBtn.addEventListener('click',function(){

    currentItem--;
    if(currentItem < 0){
        currentItem = reviews.length -1;
    }
    showPerson();
});

// show random person

randomBtn.addEventListener('click', function(){
    currentItem = Math.floor(Math.random() * reviews.length);
    console.log(currentItem);
    showPerson();
});
