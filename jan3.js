

// document.addEventListener("click", (p) => {
//     console.log("You have clicked anywhere in the document");
// });


// first name //
const grabFirstNameInput = document.getElementById("firstNameInput");
console.log(grabFirstNameInput);


// last name //
const grabLastNameInput = document.getElementById("lastNameInput");
console.log(grabLastNameInput);


// birthday //
const grabDateInput = document.getElementById("dateInput");
console.log(grabDateInput);

// like button //
const grabSubmitBtn = document.getElementById("submitBtn");
console.log(grabSubmitBtn);


grabSubmitBtn.addEventListener("click", (e) => {
    e.preventDefault();
    console.log("this is the LIKE button");
    console.log(grabFirstNameInput.value);
    console.log(grabLastNameInput.value);
    console.log(grabDateInput.value);


    // how to input it in the paragraph //
    const paragraphElement = document.querySelector(".paragraph")
    console.log(paragraphElement);


    paragraphElement.textContent = `${grabFirstNameInput.value} ${grabLastNameInput.value}. Your birthday is ${grabDateInput.value}. Thank you for liking!`;

    // when we click the like button, the paragraph will appear //
    // will say, "${firstName} ${lastName}, you're birthday is ${dateInput}. Thank you for liking."

    console.log(`${grabFirstNameInput.value} ${grabLastNameInput.value}. Your birthday is ${grabDateInput.value}. Thank you for liking!`);


    // clear values //
    grabFirstNameInput.value = "";
    grabLastNameInput.value = "";
    grabDateInput.value = "";


    const grabFirstNameLabel = document.getElementById("firstNameLabel");
    grabFirstNameLabel.style.color = "red";

})