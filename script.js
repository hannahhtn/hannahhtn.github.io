const img = document.querySelector(".profile-pic");
let myObserver = new IntersectionObserver((entries, observer) => {
	entries.forEach((entry) => {
		if (entry.isIntersecting) {
            entry.target.src = "./profile_pic.png";
			entry.target.classList.add("fade-in-right");
            observer.unobserve(entry.target);
		}
	});
});
myObserver.observe(img);

myObserver = new IntersectionObserver((entries,observer) => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add("fade-in-left");
            observer.unobserve(entry.target);
        }
    })
});
myObserver.observe(document.querySelector(".intro"));

myObserver = new IntersectionObserver((entries, observer) => {
	entries.forEach((entry) => {
		if (entry.isIntersecting) {
			entry.target.classList.add("fade-in-down");
		}
	});
});

document.querySelectorAll(".skills").forEach(skill =>{
    myObserver.observe(skill);
});

myObserver = new IntersectionObserver((entries, observer) => {
	entries.forEach((entry) => {
		if (entry.isIntersecting) {
			entry.target.classList.add("bounce-in-up");
		}
	});
});

document.querySelectorAll(".card").forEach((skill) => {
	myObserver.observe(skill);
});


// make Top btn visible on scrolling

const btn = document.getElementById("back-to-top");
let prev = 0;

let handleBtnOnScroll = (e) => {
	if(prev > document.documentElement.scrollTop)
	{
		if(document.documentElement.scrollTop > 50){
			btn.style.display = 'block';
		}else if(document.body.scrollTop <= 50){
			btn.style.display = 'none';
		}
	}
	prev = document.documentElement.scrollTop;
}

window.addEventListener("scroll", handleBtnOnScroll)