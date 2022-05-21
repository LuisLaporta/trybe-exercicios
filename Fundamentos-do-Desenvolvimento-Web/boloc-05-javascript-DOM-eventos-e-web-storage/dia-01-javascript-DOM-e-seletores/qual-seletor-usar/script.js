let title = document.getElementById('header-container');
title.style.background = "green";

let urgency = document.getElementsByClassName('emergency-tasks');
for (let index = 0; index < urgency.length; index +=1) {
    urgency[index].style.background = "orange";
}

let urgency2 = document.getElementsByClassName('urgencyText');
for (let index = 0; index < urgency2.length; index +=1) {
    urgency2[index].style.background = "purple";
}

let noUrgency = document.getElementsByClassName('no-emergency-tasks');
for (let index = 0; index < noUrgency.length; index +=1) {
    noUrgency[index].style.background = "yellow";
}

let noUrgency2 = document.getElementsByClassName('noUrgencyText');
for (let index = 0; index < noUrgency2.length; index +=1) {
    noUrgency2[index].style.background = "black";
}

let footer = document.getElementById('footer-container');
footer.style.background = "green";
