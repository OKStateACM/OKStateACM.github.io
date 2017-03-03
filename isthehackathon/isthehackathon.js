var hackathonStart = new Date('March 3, 2017 17:30:00');
var hackathonEnd = new Date('March 4, 2017 17:30:00');

var onoff;

function inRange(now)
{
    return (now.getTime() >= hackathonStart.getTime() && now.getTime() < hackathonEnd.getTime());
}

function update()
{
    onoff = document.getElementById('onOrOff');
    // console.log(new Date());
    if(inRange(new Date()) && !onoff.classList.contains("on"))
    {
        onoff.classList.remove("off");
        onoff.classList.add("on");
        onoff.innerHTML = "on";
    }
    else if (!inRange(new Date()) && !onoff.classList.contains("off"))
    {
        onoff.classList.remove("on");
        onoff.classList.add("off");
        onoff.innerHTML = "off";
    }
}

window.onload = function() {
    // console.log(new Date());
    onoff = document.getElementById('onOrOff');
    console.log(onoff);
};

window.setInterval(update, 1000);
