async function handleEmailRequest(event){
    event.preventDefault();
    const email = document.querySelector('input[name="email"]').value;
    const urlString = "https://disify.com/api/email/"+email;
    const response = await fetch(urlString);
    const data = await response.json();
const validEmailResult = data.format;
if (validEmailResult == false){
 document.querySelector("#email-result").innerText = email + " is not a valid email";
}
 else {document.querySelector("#email-result").innerText = "Thank you for submitting your email!";};
 }

document.querySelector("#email-search").addEventListener("submit", handleEmailRequest);


// pop up form 2 JS - adapted from https://www.formget.com/how-to-create-pop-up-contact-form-using-javascript/

function div_show() {
    document.getElementById('abc').style.display = "block";
    }
    //Function to Hide Popup
    function div_hide(){
    document.getElementById('abc').style.display = "none";
    }