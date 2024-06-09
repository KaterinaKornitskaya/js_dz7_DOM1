"use strict"

///////////////// Task 1////////////////////////
let myTxtArea = document.getElementById("myTxtArea");

myTxtArea.addEventListener("keypress", (e)=>{
    e.preventDefault();
    let reg = /\d/g;  // \d - любая цифра, g - глобальный поиск
   
    if(e.key.match(reg)) {
        return;
    }
    else {
        myTxtArea.value += e.key;
        console.log(e.key);       
    }
})

///////////////// Task 2////////////////////////
// список определений
let mydl = document.getElementsByClassName("divTask2Inside")[0];
// коллекция описаний
let ddCollection = document.getElementsByTagName("dd");

// клик по списку определений (dl)
mydl.addEventListener("click", (event)=>{
    for(let i of ddCollection){
        // скрыто все dd:
        // цикл по всем описаниям (dd) - убираем класс "ddShow",
        // добавляем класс "ddDisplayNone"
        i.classList.remove("ddShow");
        i.classList.add("ddDisplayNone");
    }
    // показать dd для конкретно кликнутого dt - убираем класс "ddDisplayNone",
    // добавляем класс "ddShow"
    event.target.nextElementSibling.classList.remove("ddDisplayNone");
    event.target.nextElementSibling.classList.add("ddShow");
})
