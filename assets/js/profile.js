var modal = document.getElementById('edit');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


const contacts = document.getElementById('contacts');

// // when the user clicks on contacts it displays the contacts

// window.onclick = function(event){
//     if (event.target == contacts) {
//         contacts.style.display = "show";
//     }
// }

// const general = document.getElementById('general');

// when the user clicks on contacts it displays the contacts

// window.onclick = function(event){
//     if (event == general) {
//         contacts.style.display = "show";
//     }
// }

// const pass = document.getElementById('pass');

// // when the user clicks on contacts it displays the contacts

// window.onclick = function(event){
//     if (event == pass) {
//         pass.style.display = "show";
//     }
// }

function myAccDetail(){
    document.getElementById('contacts').style.display = 'none'
    document.getElementById('general').style.display = 'none'
    document.getElementById('my_account').style.display = 'block'
}

function contactDetail(){
    document.getElementById('my_account').style.display = 'none'
    document.getElementById('general').style.display = 'none'
    document.getElementById('contacts').style.display = 'block'
}

function genDetail(){
    document.getElementById('my_account').style.display = 'none'
    document.getElementById('contacts').style.display = 'none'
    document.getElementById('general').style.display = 'block'
}