const row1_1=document.querySelectorAll(".row1-1");

//const row1_1=document.getElementsByClassName("row1-1");

row1_1.forEach(e=>{
    e.addEventListener("click",(ev)=>{
        console.log(ev.currentTarget.childNodes[2].classList.value);
        //change the color of the font
        ev.currentTarget.childNodes[1].classList.toggle("row1-1active");
        //make arrow up and down
        ev.currentTarget.childNodes[2].classList.toggle("row1-1imgactive");
        //show the answer and hide it
        ev.currentTarget.nextSibling.nextSibling.classList.toggle("row1-2active");
    })
})