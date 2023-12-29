

let arr = [

    {dp:"images/Pic (9).jpeg", story:"images/newGifCode.gif"},
    {dp:"images/Pic (15).jpeg", story:"images/redpegion.webp"},
    {dp:"images/Pic (27).jpeg", story:"images/2 story.gif"},
    {dp:"images/WhatsApp Image 2023-12-27 at 01.14.36_e84dc2cb.jpg",story:"images/3gif.gif"},
    {dp:"images/ankit.jpg", story:"images/ankit.jpg"},
    {dp:"images/Dolphin.jpeg", story:"images/2 story.gif"},
    
]


let storiyan = document.querySelector("#storiyan")

let newOne = ""

arr.forEach(function(elem,indx){
    newOne += `<div class="story">
    <img id="${indx}" src="${elem.dp}" alt="">
</div>   `

});

storiyan.innerHTML = newOne

storiyan.addEventListener("click",function(detal){

document.querySelector("#fullscreen").style.display = "block"

document.querySelector("#fullscreen").style.backgroundImage = `url(${arr[detal.target.id].story})`


setTimeout(function(){
    document.querySelector("#fullscreen").style.display = "none"
},3000)



});
