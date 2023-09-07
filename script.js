let add = document.querySelector(".add");
let theList = document.querySelector(".theList");
let myInput = document.querySelector(".myInput");
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
    let newButton = document.createElement("button");
    newButton.innerText = "rayer";
    newLigne.innerText = myInput.value;
    newLigne.innerValue = myInput.value;
    newLigne.appendChild(newButton);
    theList.appendChild(newLigne);
    myInput.value = "";

    newButton.addEventListener("click", function () {
      if (newLigne.style.textDecoration == "line-through") {
        newLigne.style.textDecoration = "none";
      } else {
        newLigne.style.textDecoration = "line-through";
      }
    });

    let del = document.createElement("button");
    del.innerText = "X";
    newLigne.appendChild(del);

    del.addEventListener("click", function () {
      newLigne.remove();
    });

    let modify = document.createElement("button");
    modify.innerText = "...";
    newLigne.appendChild(modify);
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
});
