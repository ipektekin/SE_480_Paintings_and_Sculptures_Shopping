 // Get the modal
const modal1 = document.getElementsByClassName('myModal')[0];
const modal2 = document.getElementsByClassName('myModal')[1];
const modal3 = document.getElementsByClassName('myModal')[2];
const modal4 = document.getElementsByClassName('myModal')[3];

// Get the button that opens the modal
const btn1 = document.getElementsByClassName("myBtn")[0];
const btn2 = document.getElementsByClassName("myBtn")[1];
const btn3 = document.getElementsByClassName("myBtn")[2];
const btn4 = document.getElementsByClassName("myBtn")[3];

// Get the <span> element that closes the modal
const span1 = document.getElementsByClassName("close")[0];
const span2 = document.getElementsByClassName("close")[1];
const span3 = document.getElementsByClassName("close")[2];
const span4 = document.getElementsByClassName("close")[3];


// When the user clicks the button, open the modal 
btn1.onclick = function() {
    modal1.style.display = "block";
}

btn2.onclick = function() {
    modal2.style.display = "block";
}

btn3.onclick = function() {
    modal3.style.display = "block";
}

btn4.onclick = function() {
    modal4.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span1.onclick = function() {
    modal1.style.display = "none";
}

span2.onclick = function() {
    modal2.style.display = "none";
}

span3.onclick = function() {
    modal3.style.display = "none";
}

span4.onclick = function() {
    modal4.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal1) {
        modal1.style.display = "none";
    }
    else if (event.target == modal2) {
        modal2.style.display = "none";
    }
    else if (event.target == modal3) {
        modal3.style.display = "none";
    }
    else if (event.target == modal4) {
        modal4.style.display = "none";
    }
}
