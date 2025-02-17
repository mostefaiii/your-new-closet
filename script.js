function stars(){
    let e = document.createElement('div');
    e.setAttribute('class','star');
    document.querySelector('.stars-container').appendChild(e);
    e.style.left = Math.random() * + innerWidth + 'px';

    e.innerHTML = "&#9734;";

    let size = Math.random() * 30;
    let duration = Math.random() * 3;

    e.style.fontSize = 50 + size + 'px';
    e.style.animationDuration = 2 + duration  + 's';

    setTimeout(function(){
        document.body.removeChild(e);
    }, 5000)
}

setInterval(function(){stars()},1500)

