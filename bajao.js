let previous = document.querySelector('#Back');
let play = document.querySelectorAll('#play');
let next = document.querySelector('#Forward');
let slider = document.querySelector('#duration_slider');
let show_duration = document.querySelector('#show-duration');
let autoplay = document.querySelector('#autoplay');

let timer;
let auto_play = 0;
let index_no = 0;
let playing_song = false;
let track = document.createElement('audio');

let all_song = [
    { songName: "Let me Love You", filePath: "Let-Me-Love-You(PaglaSongs).mp3 ", coverPath: "images.jpg" },
    { songName: "Shape of You", filePath: "Shape-of-you.mp3", coverPath: "images.jpg" },
    { songName: "Chand Se Parda Kijiye", filePath: "chand_se_parda.mp3", coverPath: "images.jpg" },
    { songName: "Chura Liya Hai Tumne Jo Dil Ko", filePath: "churaliya.mp3", coverPath: "images.jpg" },
    { songName: "Ek Sanam Chahiye Aashiqui Ke Liye", filePath: "Ashiqui.mp3", coverPath: "images.jpg" },
    { songName: "Hanuman Chalisa", filePath: "Hanuman-Chalisa.mp3", coverPath: "images.jpg" },
    { songName: "Libaas - Kaka", filePath: "Libaas - Kaka.mp3", coverPath: "images.jpg" },
    { songName: "Main Agar Saamne", filePath: "raaz2.mp3", coverPath: "images.jpg" },
    { songName: "Mere Warga", filePath: "Mere-warga.mp3", coverPath: "images.jpg" },
    { songName: "Viah Di Khabar - Kaka  Sana Aiaz", filePath: "Viah_di_Khabar.mp3", coverPath: "images.jpg" },
    { songName: "Pagla Pagli 2", filePath: "Pagla-pagli2.mp3", coverPath: "images.jpg" },
    { songName: "Raaz 2002 - Main Agar Saamne.mp3", filePath: "raaz2.mp3", coverPath: "images.jpg" },
]

function load_track(index_no){
    reset_slider();
        track.src = all_song[index_no].filePath;
        track.load();
        timer=setInterval(range_slider,1000);
}
load_track(index_no);

function reset_slider(){
    slider.value=0;
}
function playsong(){
    if(playing_song==false)
    {
        Playsong();
    }
    
    else{
        pausesong();
    }    
}
function Playsong(){
    track.play();
    playing_song=true;
    autoplay=1;
    play.innerhtml= '<i class="fa-solid fa-circle-pause"></i>';
}

function pausesong(){
    track.pause();
    playing_song=false;
    play.innerhtml='<i class=" fas fa-2x fa-play-circle"></i>'
}
function Forward(){
    if(index_no< all_song.length-1){
        index_no+=1;
        load_track(index_no);
        playsong();
    }
    else{
        index_no=0;
        load_track(index_no);
        playsong();
    }
}
function Backward(){
    if(index_no>0){
        index_no -=1;
        load_track(index_no);
        playsong();
    }
    else{
        index_no=all_song.length-1;
        load_track(index_no);
        playsong();
    }
}
function autoplay_switch(){
    if(autoplay==1){
        autoplay=0;
    }
}
function change_duration(){
    slider_position=track.duration*(slider.value/100);
    track.currentTime=slider_position;
}
function range_slider(){
    let position =0;
    if(!isNaN(track.duration)){
        position = track.currentTime*(100/track.duration);
        slider.value=position;
    }
    if(track.ended){
        play.innerhtml='<i class="fas  fa-1.5x fa-play-circle"></i>';
        if(autoplay==1){
            index_no+=1;
            load_track(index_no);
            playsong();
        }
    }
}
let song1=document.getElementById('zero');
song1.addEventListener('click',function(){
    load_track(0);
    playsong(); 
    if(playing_song==false){
        song1.innerhtml=' <i class="fa-solid fa-circle-pause"></i>'
    } 
    else{
        song1.innerhtml=' <i class="fa-solid fa-circle-play"></i>'
    } 
});
let song2=document.getElementById('one');
song2.addEventListener('click',function(){
    load_track(1);
    playsong();
    if(playing_song==false){
        song2.innerhtml=' <i class="fa-solid fa-circle-pause"></i>'
    } 
    else{
        song2.innerhtml=' <i class="fa-solid fa-circle-play"></i>'
    }  
});
let song3=document.getElementById('two');
song3.addEventListener('click',function(){
    load_track(2);
    playsong(); 
    if(playing_song==false){
        song3.innerhtml=' <i class="fa-solid fa-circle-pause"></i>'
    } 
    else{
        song3.innerhtml=' <i class="fa-solid fa-circle-play"></i>'
    } 
});
let song4=document.getElementById('three');
song4.addEventListener('click',function(){
    load_track(3);
    playsong(); 
    if(playing_song==false){
        song4.innerhtml=' <i class="fa-solid fa-circle-pause"></i>'
    } 
    else{
        song4.innerhtml=' <i class="fa-solid fa-circle-play"></i>'
    } 
});
let song5=document.getElementById('four');
song5.addEventListener('click',function(){
    load_track(4);
    playsong(); 
    if(playing_song==false){
        song5.innerhtml=' <i class="fa-solid fa-circle-pause"></i>'
    } 
    else{
        song5.innerhtml=' <i class="fa-solid fa-circle-play"></i>'
    } 
});
let song6=document.getElementById('five');
song6.addEventListener('click',function(){
    load_track(5);
    playsong(); 
    if(playing_song==false){
        song6.innerhtml=' <i class="fa-solid fa-circle-pause"></i>'
    } 
    else{
        song6.innerhtml=' <i class="fa-solid fa-circle-play"></i>'
    } 
});
let song7=document.getElementById('six');
song7.addEventListener('click',function(){
    load_track(6);
    playsong();
    if(playing_song==false){
        song7.innerhtml=' <i class="fa-solid fa-circle-pause"></i>'
    } 
    else{
        song7.innerhtml=' <i class="fa-solid fa-circle-play"></i>'
    }  
});
let song8=document.getElementById('seven');
song8.addEventListener('click',function(){
    load_track(7);
    playsong();  
    if(playing_song==false){
        song8.innerhtml='<i class="fa-solid fa-circle-pause"></i>'
    } 
    else{
        song8.innerhtml=' <i class="fa-solid fa-circle-play"></i>'
    }
});
let song9=document.getElementById('eight');
song9.addEventListener('click',function(){
    load_track(8);
    playsong(); 
    if(playing_song==false){
        song9.innerhtml= '<i class="fa-solid fa-circle-pause"></i>'
    } 
    else{
        song9.innerhtml=' <i class="fa-solid fa-circle-play"></i>'
    } 
});
let song10=document.getElementById('nine');
song10.addEventListener('click',function(){
    load_track(9);
    playsong();
    if(playing_song==false){
        song10.innerhtml='<i class="fa-solid fa-circle-pause"></i>'
    } 
    else{
        song10.innerhtml=' <i class="fa-solid fa-circle-play"></i>'
    }  
});
let song11=document.getElementById('ten');
song11.addEventListener('click',function(){
    load_track(10);
    playsong(); 
    if(playing_song==false){
        song11.innerhtml='<i class="fa-solid fa-circle-pause"></i>'
    } 
    else{
        song11.innerhtml=' <i class="fa-solid fa-circle-play"></i>'
    } 

});
let song12=document.getElementById('eleven');
song12.addEventListener('click',function(){
    load_track(11);
    playsong(); 
    if(playing_song==false){
        song12.innerhtml=' <i class="fa-solid fa-circle-pause"></i>'
    } 
    else{
        song12.innerhtml=' <i class="fa-solid fa-circle-play"></i>'
    }
});
function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display == "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

 

