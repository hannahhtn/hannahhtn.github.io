const img = document.querySelector(".profile-pic");
let myObserver = new IntersectionObserver((entries, observer) => {
	entries.forEach((entry) => {
		if (entry.isIntersecting) {
            entry.target.src = "./profile_pic.png";
			entry.target.classList.add("fade-in-right");
			entry.target.classList.remove("invisible");
			observer.unobserve(entry.target);
		}
	});
});
myObserver.observe(img);

myObserver = new IntersectionObserver((entries,observer) => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add("fade-in-left");
			entry.target.classList.remove("invisible");
            observer.unobserve(entry.target);
        }
    })
});
myObserver.observe(document.querySelector(".intro"));

myObserver = new IntersectionObserver((entries, observer) => {
	entries.forEach((entry) => {
		if (entry.isIntersecting) {
			entry.target.classList.add("zoom-in");
			entry.target.classList.remove("invisible");
			observer.unobserve(entry.target);
		}
	});
});

document.querySelectorAll(".skills").forEach(skill =>{
    myObserver.observe(skill);
});

document
	.querySelectorAll(".list-skillset")
	.forEach((skill) => {
		myObserver.observe(skill);
	});

// myObserver = new IntersectionObserver((entries, observer) => {
// 	entries.forEach((entry) => {
// 		if (entry.isIntersecting) {
// 			entry.target.classList.add("fade-in-right");
// 			entry.target.classList.remove("invisible");
// 			observer.unobserve(entry.target);
// 		}
// 	});
// }, {root:null, rootMargin:"0px", threshold:0});

// document.querySelectorAll(".card").forEach((card) => {
// 	myObserver.observe(card);
// });

myObserver = new IntersectionObserver((entries, observer) => {
	entries.forEach((entry) => {
		if (entry.isIntersecting) {
			entry.target.classList.add("slide-in-up");
			entry.target.classList.remove("invisible");
			observer.unobserve(entry.target);
		}
	});
});

document.querySelectorAll(".card-project").forEach((card) => {
	myObserver.observe(card);
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