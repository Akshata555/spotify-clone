console.log("Welcome to Spotify");
//Intialize the variables
let songIndex=0;
let audioElement=new Audio('song.wave');
let masterPlay=document.getElementById('masterPlay');
let next = document.getElementById('next');
let back = document.getElementById('back');
let myprogressBar=document.getElementById('myProgressBar');
let songs=[
   {songName:"salame-e-ishq",filepath:"C:\Users\Dell\Downloads\Kithe-Chaliye-Tu(PaglaSongs).mp3",coverPath:""},
   {songName:"chaleya", filepath:"C:\Users\Dell\Downloads\Chaleya_320(PagalWorld.cm).mp3", coverPath:""}      
]
// let audioElement=new Audio('song.wave');
//audioElement.play();

//Handle play/pause click
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
    }
    else if(audioElement.played){
        audioElement.pause();
    }
})

next.addEventListener('click',()=>{
    audioElement.setAttribute("C:\Users\Dell\Downloads\Chaleya_320(PagalWorld.cm).mp3");
})
//Listen to Events
myprogressBar.addEventListener('timeupdate',()=>{
    console.log('timeupdate');
})