// DOM

// id, class , element
// single elment
//const ul = document.getElementById("items");
//const container = document.querySelector(".container");

const lis = document.getElementsByClassName("item");
const lisquerySelectorAll = document.querySelectorAll(".item");

/*
   const container =  $(".container");
*/

//console.log(lis);
lisquerySelectorAll.forEach((li) =>{
    console.log(li)
})