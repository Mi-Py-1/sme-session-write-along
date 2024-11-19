// create element variables
const addToListBtn = document.querySelector('#addToListBtn');
const listTextInput = document.querySelector('#listTextInput');
const myList = document.querySelector('#myList');

// add event listener to the button

addToListBtn.addEventListener("click", addToList);

// add event listener to the text box

listTextInput.addEventListener("keypress", addToList);

function addToList(e){



// create a function to add item to list
    // check to see if the enter key was pressed
    if(e.keyCode == 13 || e.target.textContent == "Add to list") {
        // check that there is text to add
        if(listTextInput.value) {
            // create new li
            const newListElement = document.createElement("li");
            // add event listener to li
            newListElement.addEventListener("click", removeFromList);

            // add text and some html for delete button
            newListElement.innerHTML = listTextInput.value + " <button onclick='removeFromList'>Delete</button>";

            // add new list item to the list
            myList.appendChild(newListElement);

            // clear text box
            listTextInput.value = "";

            // focus on the text box
            listTextInput.focus();
        }
    }
}

function removeFromList(e) {


    // function to delete item form list

    // confirm delete
    if (confirm("Are you sure you want to delete this item?")) {
        // delete item
        const listItem = e.target.parentNode;
        listItem.parentNode.removeChild(listItem);
    

    // focus back to the text box
   listTextInput.focus();
    }
}