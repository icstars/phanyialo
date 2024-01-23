

// name //
const grabNameInput = document.getElementById("nameInput");
console.log(grabNameInput);


// email //
const grabEmailInput = document.getElementById("emailInput");
console.log(grabEmailInput);


// phone //
const grabPhoneInput = document.getElementById("phoneInput");
console.log(grabPhoneInput);

// message //
const grabMessageInput = document.getElementById("messageInput");
console.log(grabPhoneInput);

// send message //
const grabSubmitBtn = document.getElementById("submitBtn");
console.log(grabSubmitBtn);



grabSubmitBtn.addEventListener("click", (e) => {
    e.preventDefault();
    console.log("You're message has sent!");
    console.log(grabNameInput.value);
    console.log(grabPhoneInput.value);
    console.log(grabEmailInput.value);
    console.log(grabMessageInput.value);


    // how to input it in the paragraph //
    const paragraphElement = document.querySelector(".paragraph")
    console.log(paragraphElement);


    // paragraphElement.textContent = `Thank you ${grabNameInput.value}. Your message has sent! I'll email you at ${grabEmailInput.value} as soon as I can.`;

    // when we click the like button, the paragraph will appear //
    // will say, "${firstName} ${lastName}, you're birthday is ${dateInput}. Thank you for liking."

    console.log(`Thank you ${grabNameInput.value}. Your message has sent! I'll email you at ${grabEmailInput.value} as soon as I can.`);


    // clear values //
    grabNameInput.value = "";
    grabPhoneInput.value = "";
    grabEmailInput.value = "";
    grabMessageInput.value= "";

})
    // const grabNameLabel = document.getElementById("firstNameLabel");
    // grabNameLabel.style.color = "red";
