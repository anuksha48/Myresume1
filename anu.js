

const header = document.querySelector("header");

window.addEventListener ("scroll",function(){
    header.classList.toggle ("sticky",this.window.scrollY > 120);
});

let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');


menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('active');
};




<script src="https://smtpjs.com/v3/smtp.js">
</script>



    const form = document.querySelector('.contact-from');

    const form = 