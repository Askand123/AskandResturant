let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');


menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}
window.onscroll = () =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}
var form = document.getElementById('sheetdb-form');
    form.addEventListener("submit", e => {
        e.preventDefault();
        fetch(form.action, {
            method : "POST",
            body: new FormData(document.getElementById("sheetdb-form")),
        }).then(
            response => response.json()
        ).then((html) => {
        // you can put any JS code here
        alert('Your Order is Accepted by A.S. Devleopers you will recieve copy of your order through email - Thankyou')
    });
});
