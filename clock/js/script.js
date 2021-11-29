const sec = document.querySelector('.s'),
    min = document.querySelector('.m'),
    hour = document.querySelector('.h'),
    hourNum = document.querySelector('.hours'),
    minNum = document.querySelector('.minutes')

function clock() {
    const time = new Date(),
        secArr = time.getSeconds() * 6,
        minArr = time.getMinutes() * 6,
        hourArr = time.getHours() * 30

    sec.style.transform = `rotate(${secArr}deg)`
    min.style.transform = `rotate(${minArr}deg)`
    hour.style.transform = `rotate(${hourArr}deg)`
    setTimeout(() => {
        clock()
    }, 1000  );

    hourNum.innerHTML = time.getHours() < 10 ? "0" + time.getHours() : time.getHours()
    minNum.innerHTML = time.getMinutes() < 10 ? '0' + time.getMinutes() : time.getMinutes()
}
clock()

const tabsContentItem = document.querySelectorAll('.tabsContentItem')
const tabsItem = document.querySelectorAll('.tabsItem')

for (let i = 0; i < tabsItem.length; i++) {
    tabsItem[i].addEventListener('click', function () {
        for (let j = 0; j < tabsItem.length; j++) {
            tabsItem[j].classList.remove('active')
            tabsContentItem[j].classList.remove('active')
        }
        tabsItem[i].classList.add('active')
        tabsContentItem[i].classList.add('active')
    })
}



// sekundomer
let stopHours = document.querySelector('.stopwatch__hours'),
    stopMinutes = document.querySelector('.stopwatch__minutes'),    
    stopSeconds = document.querySelector('.stopwatch__seconds'),    
    stopMlSeconds = document.querySelector('.stopwatch__ml-seconds'),    
    stopBtn = document.querySelector('.stopwatch__btn'),
    indicator = document.querySelector('.tabsLink__span'),
    interval;
    
    
stopBtn.addEventListener('click', function() {
        indicator.classList.remove('active');
        indicator.classList.remove('active_clear');
        
        if(this.innerHTML === 'start') {
                this.innerHTML = 'stop';
                stopwatch();
                indicator.classList.add('active');
        }
        else if(this.innerHTML === 'stop') {
                this.innerHTML = 'clear';
                clearTimeout(interval);
                indicator.classList.add('active_clear');
        }
        else if(this.innerHTML === 'clear') {
                this.innerHTML = 'start';
                stopHours.innerHTML = 0;
                stopMinutes.innerHTML = 0;
                stopSeconds.innerHTML = 0;
                stopMlSeconds.innerHTML = 0;
        }
})
function stopwatch() {
        if(stopMlSeconds.innerHTML < 10) {
                stopMlSeconds.innerHTML++;
        }
        if(stopMlSeconds.innerHTML == 10) {
                stopSeconds.innerHTML++;
                stopMlSeconds.innerHTML = 0;
        }
        if(stopSeconds.innerHTML == 60) {
                stopMinutes.innerHTML++;
                stopSeconds.innerHTML = 0; 
        }
        if(stopMinutes.innerHTML == 60) {
                stopMinutes.innerHTML = 0;
                stopHours.innerHTML++; 
        }
        interval = setTimeout(stopwatch, 100);
}
