/* ---------- Scroll navbar ---------- */
const body = document.body;
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset
            
    if (currentScroll <= 0) {
        body.classList.remove("scroll-up")
    }

    if (currentScroll > lastScroll && !body.classList.contains("scroll-down")) {
        body.classList.remove("scroll-up")
        body.classList.add("scroll-down")
    }

    if (currentScroll < lastScroll && body.classList.contains("scroll-down")) {
        body.classList.remove("scroll-down")
                body.classList.add("scroll-up")
    }

    lastScroll = currentScroll;
})

/* ---------- Pop-up animations ---------- */
window.addEventListener('scroll', reveal);

function reveal(){
    var reveals = document.querySelectorAll('.reveal');

    for(var i = 0; i < reveals.length; i++){
        
        var windowheight = window.innerHeight;
        var revealtop = reveals[i].getBoundingClientRect().top;
        var revealpoint = 150;

        if(revealtop <windowheight - revealpoint){
            reveals[i].classList.add('active');
        }
        else{
            reveals[i].classList.remove('active');
        }
    }
}