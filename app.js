// W10B: Practising JavaScript DOM selectors and changing a webpage.

// 1. querySelector()
// Find the first element with the ID main-heading.
let heading = document.querySelector("#main-heading");

// Change the heading's text colour and font size.
heading.style.color = "blue";
heading.style.fontSize = "40px";

// Add a new paragraph before the existing heading.
heading.insertAdjacentHTML(
"beforebegin",
"<p>This paragraph was added before the main heading.</p>"
);

// 2. querySelectorAll()
// Find all elements with the class description.
let descriptions = document.querySelectorAll(".description");

// Use a loop to change the style of every description paragraph.
for (let i = 0; i < descriptions.length; i++) {
descriptions[i].style.color = "green";
}

// 3. getElementById()
// Find the element with the ID message-box.
let messageBox = document.getElementById("message-box");

// Change the text inside the message box.
messageBox.innerText = "JavaScript changed this message!";

// Add a new paragraph inside the message box.
messageBox.insertAdjacentHTML(
"beforeend",
"<p>This is a new paragraph inside the message box.</p>"
);

// 4. getElementsByClassName()
// Find all elements with the class student-info.
let studentInfo = document.getElementsByClassName("student-info");

// Use a loop to change the background colour of every student-info element.
for (let i = 0; i < studentInfo.length; i++) {
studentInfo[i].style.backgroundColor = "lightyellow";
}
