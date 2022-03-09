const pages=[
    {
        page: "Home",
        navigate: homepage,
    },
    {
        page:"About",
        navigate: about,
    },
    {
        page:"Interact",
        navigate: interact,
    }
]

let obj="";

function navButton(pg, pr, nv){
    let button = document.createElement("button")
    button.innerHTML=pg;
    button.addEventListener("click",function(){
        document.body.querySelector(".wrapper").innerHTML=""
        nv();
    });
    pr.appendChild(button);
}


function navigation(){
    let nav= document.createElement("nav");
    let wrapper=document.createElement("div");
    wrapper.classList.add("wrapper")
    nav.style.height="80px";
    nav.style.backgroundColor="blue";
    for (obj of pages){
        navButton(obj.page,nav,obj.navigate);

    }


    document.body.appendChild(nav);
    document.body.appendChild(wrapper);
}

function homepage(){
    let home= document.createElement("h1");
    home.innerHTML="Home Page";
    document.body.querySelector(".wrapper").appendChild(home);
}

function about(){
    let about=document.createElement("h1");
    let nameEle=document.createElement("h3");
    about.innerHTML="About Page";
    nameEle.innerHTML="Dante Lewis";
    about.appendChild(nameEle);
    document.body.querySelector(".wrapper").appendChild(about);
}

let numberStart=0
let placeholder=document.createElement("span");
function interact(){
    let interact=document.createElement("h1");
    interact.innerHTML="Interact Page";
    let number1=document.createElement("div");
    number1.innerHTML="Counter: ";
    placeholder.innerHTML=numberStart;
    document.body.querySelector(".wrapper").appendChild(interact);
    interact.appendChild(number1);
    document.body.querySelector(".wrapper").appendChild(button2);
    document.body.querySelector(".wrapper").appendChild(number1);
    document.body.querySelector(".wrapper div").appendChild(placeholder);


}

let button2=document.createElement("button");
button2.innerHTML="Increase Number";
button2.addEventListener("click",function(){
    numberStart=numberStart+1
    console.log("number: "+numberStart);
    placeholder.innerHTML=numberStart;



})

navigation();
about();
homepage();
navButton();
interact();