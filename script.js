$('.counter').counterUp({
    delay: 10,
    time: 1000
});


new VenoBox({
    selector: '.my-video-links',
});


$('.courses_slider').slick({
  dots: false,
  arrows: true,
  infinite: true,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 1,
  centerMode: true,
    centerPadding: "0",
    prevArrow:'<i class="fas fa-arrow-left prev"></i>',
    nextArrow:'<i class="fas fa-arrow-right next"></i>',
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
        arrows: true,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
        arrows: true,
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
        arrows: true,
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});

let name = "Hisham";
let city = 'Dhaka';
let age = 25;
let price = 99.99;
let isStudent = true;

console.log(name);
console.log(city);
console.log(age);
console.log(price);
console.log(isStudent);


console.log(age);
console.log(price);


let isLoggedIn = false;

console.log(isStudent);
console.log(isLoggedIn);

let score;

console.log(score);

let selectedCar = null;

console.log(selectedCar);

let bigNumber = 123456789012345678901234567890n;

console.log(bigNumber);

let id = Symbol("userID");

console.log(id);

let person = {
    name: "Hisham",
    age: 25,
    city: "Dhaka",
    class: 11,
    isStudent: true,
    id: '0612030',
};

console.log(person.name);
console.log(person.age);
console.log(person.city);
console.log(person.class);
console.log(person.isStudent);
console.log(person.id);

let fruits = ["Apple", "Banana", "Mango"];

console.log(fruits);

function greet() {
    return "Hello World!";
}

console.log(greet());

console.log(typeof "Hello");     // string
console.log(typeof 100);         // number
console.log(typeof true);        // boolean
console.log(typeof undefined);   // undefined
console.log(typeof {});          // object
console.log(typeof []);          // object
console.log(typeof function(){});// function

window.prompt("Enter your name: ");