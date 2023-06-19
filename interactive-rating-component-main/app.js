/* Select the button elements */
let buttons = document.querySelectorAll(".button");
let submit = document.querySelector(".submit");
let selectedNumber = '';
let rating = document.querySelector(".rating");
let thanks = document.querySelector('.thanks');
let thanksText = thanks.querySelector(".thanksText");


buttons.forEach(function(btn){
    btn.addEventListener("click",function(){
        remove();
        btn.classList.toggle("clicked");
        btn.classList.toggle("hover:bg-midGrey");
        selectedNumber = btn.textContent;
    });
});

submit.addEventListener('click', function(){
    rating.classList.add("hidden");
    thanks.classList.remove("hidden");
    thanksText.textContent = `You selected ${selectedNumber} out of 5`
})



function remove(){
    buttons.forEach(function(btn){
        btn.classList.remove("clicked");
        btn.classList.add("hover:bg-midGrey")
    })
}