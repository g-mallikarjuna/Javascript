const pauseBtns = document.querySelectorAll('.fa-pause');
const audios = document.querySelectorAll('.audios');
const playBtns = document.querySelectorAll('.fa-play');

pauseBtns.forEach((pauseBtn,index)=>{
    pauseBtn.addEventListener('click',()=>{
        audios[index].pause();
    })
})

playBtns.forEach((playBtn,index)=>{
    playBtn.addEventListener('click', ()=>{
        audios.forEach((song)=>{
            song.pause();
        })
        audios[index].play();
    })
})
