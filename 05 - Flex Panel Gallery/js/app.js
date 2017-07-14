document.addEventListener("DOMContentLoaded",function(){
    const panel = document.querySelectorAll('.panel');

    function toggleOpen(){
        this.classList.toggle('open');
    }
    function toggleActive(event){
        console.log(event.propertyName);
        if(event.propertyName.includes('flex')){
            this.classList.toggle('open-active');
            console.log('ll');
        }
    }

    panel.forEach(panel => panel.addEventListener('click',toggleOpen));
    panel.forEach(panel => panel.addEventListener('transitionend',toggleActive));
})