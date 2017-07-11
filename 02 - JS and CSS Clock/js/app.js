document.addEventListener("DOMContentLoaded",function(){
    const secondHand = document.querySelector('.second-hand');
    const minHand = document.querySelector('.min-hand');
    const hourHand = document.querySelector('.hour-hand');

    function setDate(){
        const now = new Date();

        const seconds = now.getSeconds();
        const secondsDegrees = ((seconds/60)*360) + 90;
        secondHand.style.transform = "rotate("+secondsDegrees+"deg)";

        if(secondsDegrees === 90){
            secondHand.style.transition = "none";
        }else{
            secondHand.style.transition = "all 0.05s";
            secondHand.style.transitionTimingFunction = "cubic-bezier(0.1, 2.7, 0.58, 1)";
        }

        const minutes = now.getMinutes();
        const minutesDegrees = ((minutes/60)*360) + 90;
        minHand.style.transform = "rotate("+minutesDegrees+"deg)";

        if(minutesDegrees === 90){
            minHand.style.transition = "none";
        }else{
            minHand.style.transition = "all 0.05s";
            minHand.style.transitionTimingFunction = "cubic-bezier(0.1, 2.7, 0.58, 1)";
        }

        const hour = now.getHours();
        const hourDegrees = ((hour/12)*360) + 90;
        hourHand.style.transform = "rotate("+hourDegrees+"deg)";

        if(hourDegrees === 90){
            hourHand.style.transition = "none";
        }else{
            hourHand.style.transition = "all 0.05s";
            hourHand.style.transitionTimingFunction = "cubic-bezier(0.1, 2.7, 0.58, 1)";
        }
    }
    setInterval(setDate,1000);
})