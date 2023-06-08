function handle_click(){
    alert("i've been clicked");
}
for(let i= 0; i< document.querySelectorAll(".pads").length; i++){
    document.querySelectorAll(".pads")[i].addEventListener("click", handle_click);
}