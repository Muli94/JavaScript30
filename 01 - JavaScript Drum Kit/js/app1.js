document.addEventListener("DOMContentLoaded",function(){
    const keys = document.querySelectorAll('.key');

    window.addEventListener("keydown",function(event){

        const key = document.querySelector(`.key[data-key="${event.keyCode}"]`);
        const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);

        if(!audio){
            return;
        }

        key.classList.add('playing');

        /*setTimeout(function() {
            key.classList.remove('playing');
        },70);*/
        audio.currentTime = 0;
        audio.play();
    })

    keys.forEach(function(key){
        key.addEventListener('transitionend', removeTransition)
    })
    
    function removeTransition(event){
        if(event.propertyName !== 'transform'){
            return;
        }
        this.classList.remove('playing');
    }
})