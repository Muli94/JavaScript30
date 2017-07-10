document.addEventListener("DOMContentLoaded",function(){
    const keys = document.querySelectorAll('.key');
    function removeTransition(event){
        if(event.propertyName !== 'transform'){
            return; // skip it if its not transform
        }
        this.classList.remove('playing');
    }
    keys.forEach(key =>{
        key.addEventListener('transitionend', removeTransition);
    })
    window.addEventListener('keydown',function(event){
        const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
        const key = document.querySelector(`.key[data-key="${event.keyCode}"]`);
        key.classList.add('playing');

        if(!audio) return; // stop the function from running
        audio.currentTime = 0; //rewind to start
        audio.play();
    })
})