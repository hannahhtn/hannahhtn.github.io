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
