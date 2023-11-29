const buttons = document.querySelectorAll(".button");
const body = document.querySelector('body');


// console.log(buttons)
buttons.forEach((button)=>{
// console.log(button)
button.addEventListener('click',(e)=>{
console.log(e)
console.log(e.target)
if (e.target.id==='gray') {
 body.style.backgroundColor = e.target.id
}
if (e.target.id==='white') {
 body.style.backgroundColor = e.target.id
}


if (e.target.id==='blue') {
 body.style.backgroundColor = e.target.id
}


if (e.target.id==='yellow') {
 body.style.backgroundColor = e.target.id
}
if (e.target.id==='green') {
 body.style.backgroundColor = e.target.id
}
if (e.target.id==='orange') {
 body.style.backgroundColor = e.target.id
}
if (e.target.id==='pink') {
 body.style.backgroundColor = e.target.id
}

if (e.target.id==='red') {
 body.style.backgroundColor = e.target.id
}
if (e.target.id==='brown') {
 body.style.backgroundColor = e.target.id
}



// 

})

})



// let MyH1 = document.querySelector('.button')

// console.log(MyH1)
// MyH1.addEventListener('click',(e)=>{
//  console.log(e)
//  console.log(e.target)})
// // console.log(MyH1)
// if(e.target.id==='gray') {
//  MyH1.style.color = 'red'
// }
