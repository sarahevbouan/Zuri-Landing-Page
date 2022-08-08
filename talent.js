const hireTalent = document.querySelectorAll('.hire-talent');
const talentPool = document.querySelectorAll('.talent-pool');
const popUp = document.querySelector('.pop-up');
const talentRecruit = document.querySelector('.talent-recruit');
const joinTalentPool = document.querySelector('.join-talent-pool');
const body = document.querySelector('body');
const popOut = document.querySelectorAll('.pop-out');
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-links a');


hireTalent.forEach(function(button) {
    button.addEventListener('click', function(){
    popUp.style.display = 'block';
    talentRecruit.style.display = 'block';
    body.style.overflow = 'hidden';
})
})

talentPool.forEach(function(button) {
    button.addEventListener('click', function(){
    popUp.style.display = 'block';
    joinTalentPool.style.display = 'block';
    body.style.overflow = 'hidden';
})
})

window.addEventListener('mouseup', function(event){
popOut.forEach(function(pop){
	if(pop.style.display == 'block' && event.target !== pop && event.target.parentNode !== pop){
	popUp.style.display = 'none';
	pop.style.display = 'none';
	body.style.overflow = 'visible';
	}
	})
})

window.addEventListener('scroll', function(){
	let current = '';
	sections.forEach(function(section){
		const sectionTop = section.offsetTop;
		const sectionHeight = section.clientHeight;
		if(pageYOffset >= sectionTop){
			current = section.getAttribute('id');
		}
	})
	
	navLinks.forEach(function(link){
		link.classList.remove('active');
		if(link.classList.contains(current)){
			link.classList.add('active');
		}
	})
})