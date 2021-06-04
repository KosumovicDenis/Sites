const text = document.querySelector('.Golden');
const strText = text.textContent;
const spliText = strText.split("");
text.textContent = "";

for(let i= 0; i < spliText.length; i++){
    text.innerHTML += "<span>" + spliText[i] + "</span>"
}

let char = 0;
let timer = setInterval(onTick, 50);

function onTick(){
    const span = text.querySelectorAll("span")[char];
    span.classList.add("animation");
    char++;
    if(char === spliText.length){
        complete();
        return;
    }
}

function complete(){
    clearInterval(timer);
    timer =  null;
}