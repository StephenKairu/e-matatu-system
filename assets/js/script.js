var modal = document.getElementById('edit');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


var contacts = document.getElementById('my_account');

// when the user clicks on contacts it displays the contacts

window.onclick = function(event){
    if (event.target == contacts) {
        contacts.style.display ="none";
    }
}