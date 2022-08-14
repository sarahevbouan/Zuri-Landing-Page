const showAnswers = document.querySelectorAll('.seventh-section .div-container > div p:first-child');


showAnswers.forEach(function(answer){
    answer.addEventListener('click',
        function () {
            let more = answer.nextElementSibling;
            let plusSymbol = answer.firstElementChild;

            more.classList.toggle('showAnswer');
            more.style.marginTop = '-30px';
                        if(more.classList.contains('showAnswer')){
                plusSymbol.classList.remove('swirl2');
                plusSymbol.classList.add('swirl');
            }
            else{
                plusSymbol.classList.remove('swirl')
                plusSymbol.classList.add('swirl2');
            }   

        }
    )
})


const zuriInternship = document.querySelector('.zuri-internship');
const laptopReward = document.querySelector('.laptop-reward');
const jobReward = document.querySelector('.job-reward');
const moreTraining = document.querySelector('.more-training');
const internship = document.querySelector('.intern');
const laptop = document.querySelector('.laptop');
const job = document.querySelector('.job');
const training = document.querySelector('.training');

const popUp = document.querySelector('.pop-up');
const body = document.querySelector('body');
const popOut = document.querySelectorAll('.pop-out');


zuriInternship.addEventListener('click', function()
    {
        popUp.style.display = 'block';
        internship.style.display = 'block';
        body.style.overflow = 'hidden';
    }
)
laptopReward.addEventListener('click', function()
    {
        popUp.style.display = 'block';
        laptop.style.display = 'block';
        body.style.overflow = 'hidden';
    }
)
jobReward.addEventListener('click', function()
    {
        popUp.style.display = 'block';
        job.style.display = 'block';
        body.style.overflow = 'hidden';
    }
)
moreTraining.addEventListener('click', function()
    {
        popUp.style.display = 'block';
        training.style.display = 'block';
        body.style.overflow = 'hidden';
    }
)


window.addEventListener('mouseup', function(event){
popOut.forEach(function(pop){
	if(pop.style.display == 'block' && event.target !== pop && event.target.parentNode !== pop){
	popUp.style.display = 'none';
	pop.style.display = 'none';
	body.style.overflow = 'visible';
	}
	})
})
