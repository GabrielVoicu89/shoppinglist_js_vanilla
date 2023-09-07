let add = document.querySelector(".add");
let theList = document.querySelector(".theList");
let myInput = document.querySelector(".myInput");

function rayerAction(newButton, newLigne) {
  newButton.addEventListener("click", function () {
    if (newLigne.style.textDecoration == "line-through") {
      newLigne.style.textDecoration = "none";
    } else {
      newLigne.style.textDecoration = "line-through";
    }
  });
}
function modifyAction(modify, newLigne, del, newButton) {
  modify.addEventListener("click", function () {
    let newInput = document.createElement("input");
    newLigne.appendChild(newInput);
    newInput.value = newLigne.innerValue;

    newInput.addEventListener("keydown", function (e) {
      if (e.key == "Enter") {
        newLigne.innerText = newInput.value;
        newLigne.appendChild(newButton);
        newLigne.appendChild(del);
        newLigne.appendChild(modify);
        newLigne.innerValue = newInput.value;
      }
    });
  });
}
function delAction(del, newLigne) {
  del.addEventListener("click", function () {
    newLigne.remove();
  });
}
add.addEventListener("click", function () {
  if (myInput.value === "") {
    alert("You must write something!");
  } else {
    let newLigne = document.createElement("li");
    let cat = document.querySelector("#cat");
    if (cat.value == "cat1") {
      newLigne.style.color = "red";
    }
    if (cat.value == "cat2") {
      newLigne.style.color = "blue";
    }
    //creation of rayer button
    let newButton = document.createElement("button");
    //adding a class name to the element created
    newButton.classList.add("className");
    newButton.innerText = "rayer";
    newLigne.innerText = myInput.value;
    newLigne.innerValue = myInput.value;
    newLigne.appendChild(newButton);
    theList.appendChild(newLigne);
    myInput.value = "";
    //the action when we click rayer button
    rayerAction(newButton, newLigne);

    //creation of del button
    let del = document.createElement("button");
    del.innerText = "X";
    newLigne.appendChild(del);
    //the action when we click del button
    delAction(del, newLigne);
    //create modify button
    let modify = document.createElement("button");
    modify.innerText = "...";
    newLigne.appendChild(modify);
    //the action when we click modify button
    modifyAction(modify, newLigne, del, newButton);
  }
});
