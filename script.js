console.log("Welcome to Spotify")

//Intialise the Variables
let songIndex = 0;
let audioElement = new Audio('1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');

let songs = [
    {songName: "song-1", filePath: "songs/1.mp3", coverPath: "covers/1.jpg"}
    {songName: "song-1", filePath: "songs/1.mp3", coverPath: "covers/1.jpg"}
    {songName: "song-1", filePath: "songs/1.mp3", coverPath: "covers/1.jpg"}
    {songName: "song-1", filePath: "songs/1.mp3", coverPath: "covers/1.jpg"}
    {songName: "song-1", filePath: "songs/1.mp3", coverPath: "covers/1.jpg"}
    {songName: "song-1", filePath: "songs/1.mp3", coverPath: "covers/1.jpg"}
    {songName: "song-1", filePath: "songs/1.mp3", coverPath: "covers/1.jpg"}
    {songName: "song-1", filePath: "songs/1.mp3", coverPath: "covers/1.jpg"}
    {songName: "song-1", filePath: "songs/1.mp3", coverPath: "covers/1.jpg"}
    {songName: "song-1", filePath: "songs/1.mp3", coverPath: "covers/1.jpg"}
]
// audioElement.play();

// Handle play/pause click
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
    }
    else{
        audioElement.pause();
    }
})
// Listen to Events
myProgressBar.addEventListener('timeupdate', ()=>{
    console.log('timeupdate');
    //update seekbar
})