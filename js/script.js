var nameEl = document.querySelector('#name');                               //Put focus on name field
nameEl.focus();
nameEl.required = true;                                                     //Validation added for name

var email = document.getElementById('mail');
email.required = true;                                                      //Validation added for email
email.pattern = pattern="[A-Za-z0-9._%+-]{3,}@[a-zA-Z]{3,}([.]{1}[a-zA-Z]{2,}|[.]{1}[a-zA-Z]{2,}[.]{1}[a-zA-Z]{2,})";

var jobSelect = document.getElementById('title');                           //Setting up for when Other 'Job role' option is selected
var fieldset = document.querySelector('fieldset');
var mybr = document.createElement('br');

var input = document.createElement('input');                                //Creating the text field
input.type = "text";
input.id = "job_other";
input.value = "Your job role";

fieldset.appendChild(mybr);
fieldset.appendChild(input).hidden = true;                                  //Hiding the text field

var design = document.getElementById('design');
design[0].value = "";
design.required = true;

document.getElementById('colors-js-puns').hidden = true;
document.getElementById('color').hidden = true;

jobSelect.addEventListener('change', function() {                           //Function created for when "Other" is selected, text field is displayed
    if(jobSelect.value == 'other') {
        fieldset.appendChild(input).hidden = false;
    } else {
        fieldset.appendChild(input).hidden = true;
    }
});

var colourArray = document.querySelectorAll('#color option');               //Getting the array for all the colour dropdown list

for (var i = 0; i < colourArray.length; i++) {                              //For loop created to give all colour options an ID
    colourArray[i].id = "color_option" + [i];
}

design.addEventListener('change', function() {                              //Function created to only display correct colours depending on design
    validShirt();
});

var amount = 0;                                                             //Variable to hold the value amount

var thirdFieldset = document.querySelectorAll('fieldset')[2];               //Setting up to create a label and appending to the 3rd Fieldset
var label = document.createElement('Label');
thirdFieldset.appendChild(label);
h3 = document.createElement('h3');                                          //Creating h3 element for total, and appending to label
label.appendChild(h3);
h3.innerHTML = 'Total: $' + amount;                                         //Text to display at the bottom of the activities
h3.id = 'total';                                                            //Giving h3 and ID

thirdFieldset.appendChild(label);
h4 = document.createElement('h4');
label.appendChild(h4);
h4.innerHTML = '';
h4.id = 'validation_message';

var activitiesElems = document.querySelectorAll('.activities input');       //Getting the array list for all activities
activitiesElems[0].required = 'true';

//Templates function

function noDisabledCheckBox(arrLoc, cash) {
    activitiesElems[arrLoc].addEventListener('change', function(e) {
        if (e.target.checked) {
            amount += cash;
            document.getElementById('total').innerHTML = 'Total: $' + amount;
            checkCheckboxes();
        } else {
            amount -= cash;
            document.getElementById('total').innerHTML = 'Total: $' + amount;
            checkCheckboxes();
        }
    });
}

function withDisabledCheckBox(arrLoc, cash, nextArrLoc) {
    activitiesElems[arrLoc].addEventListener('change', function(e) {
        if (e.target.checked) {
            amount += cash;
            document.getElementById('total').innerHTML = 'Total: $' + amount;
            activitiesElems[nextArrLoc].disabled = true;
            checkCheckboxes();
        } else {
            activitiesElems[nextArrLoc].disabled = false;
            amount -= cash;
            document.getElementById('total').innerHTML = 'Total: $' + amount;
            checkCheckboxes();
        }
    });
}

noDisabledCheckBox(0, 200);                                                 //I had a 7 separate functions for each of the following
withDisabledCheckBox(1, 100, 3);                                            //Refactored so that only 2 function template is used, and thus
withDisabledCheckBox(3, 100, 1);                                            //just passing in the correct parameters into the called functions
withDisabledCheckBox(2, 100, 4);
withDisabledCheckBox(4, 100, 2);                                            //The functions have been moved to the very bottom of the page
noDisabledCheckBox(5, 100);
noDisabledCheckBox(6, 100);

var paypalElem = document.querySelectorAll('div')[8];                       //Getting the paypal element and creating variable
paypalElem.id = 'paypal';                                                   //Assigning ID

var bitcoinElem = document.querySelectorAll('div')[9];                      //Getting the bitcoin element and creating variable
bitcoinElem.id = 'bitcoin';                                                 //Assigning ID

document.getElementById('credit-card').hidden = true;                       //Upon page load, setting the ways to pay to hidden
document.getElementById('paypal').hidden = true;
document.getElementById('bitcoin').hidden = true;

var paymentSelect = document.getElementById('payment');
paymentSelect[0].value='';
paymentSelect.required = true;                                              //Payment validation

paymentSelect.addEventListener('change', function () {                      //Function created and behaviour attached when payment option is selected
    if (paymentSelect.value == 'credit card') {                             //with payment validation
        document.getElementById('credit-card').hidden = false;
        document.getElementById('paypal').hidden = true;
        document.getElementById('bitcoin').hidden = true;
        validationPayment.hidden = true;

    } else if (paymentSelect.value == 'paypal') {
        document.getElementById('credit-card').hidden = true;
        document.getElementById('paypal').hidden = false;
        document.getElementById('bitcoin').hidden = true;
        validationPayment.hidden = true;
    } else if (paymentSelect.value == 'bitcoin') {
        document.getElementById('credit-card').hidden = true;
        document.getElementById('paypal').hidden = true;
        document.getElementById('bitcoin').hidden = false;
        validationPayment.hidden = true;
    } else {
        document.getElementById('credit-card').hidden = true;
        document.getElementById('paypal').hidden = true;
        document.getElementById('bitcoin').hidden = true;
        validationPayment.hidden = false;
        validationPayment.innerHTML = 'Please select a payment method';
        validationPayment.style.color = 'red';
    }
});

var fourthFieldset = document.querySelectorAll('fieldset')[3];
var validPaymentLabel = document.createElement('Label');
fourthFieldset.appendChild(validPaymentLabel);
validPaymentH4 = document.createElement('h4');
validPaymentLabel.appendChild(validPaymentH4);
validPaymentH4.id = 'validation_payment_id';
var validationPayment = document.getElementById('validation_payment_id');

function checkCheckboxes() {                                                //Checkbox validation
    if (
        activitiesElems[0].checked == false &&
        activitiesElems[1].checked == false &&
        activitiesElems[2].checked == false &&
        activitiesElems[3].checked == false &&
        activitiesElems[4].checked == false &&
        activitiesElems[5].checked == false &&
        activitiesElems[6].checked == false
    ) {
        activitiesElems[0].required = 'true';
        document.getElementById('validation_message').innerHTML = 'You need to select at least one of the activity';
        document.getElementById('validation_message').style.color = 'red';
    } else {
        document.getElementById('validation_message').innerHTML = '';
        activitiesElems[0].required = 'true';
        activitiesElems[0].removeAttribute('required');
    }
}

var paymentSelect = document.getElementById('payment');
var creditCard = document.getElementById('cc-num');
var zip = document.getElementById('zip');
var cvv = document.getElementById('cvv');

paymentSelect.addEventListener('change', function() {                       //Credit card validation
    if (paymentSelect.value == 'credit card') {
        creditCard.minLength='13';
        creditCard.maxLength='16';
        creditCard.autocomplete='cc-number';
        creditCard.pattern='[0-9]{13,16}';
        creditCard.required = true;

        zip.minLength='5';
        zip.maxLength='5';
        zip.pattern='[0-9]{5}';
        zip.required = true;

        cvv.minLength='3';
        cvv.maxLength='3';
        cvv.pattern='[0-9]{3}';
        cvv.required = true;

    } else {
        creditCard.required = false;
        zip.required = false;
        cvv.required = false;
    }
});

//Validation messages

var registerBtn = document.querySelector('button');

var nameTitle = document.querySelectorAll('fieldset label')[0];
var emailTitle = document.querySelectorAll('fieldset label')[1];
var shirtTitle = document.querySelectorAll('fieldset legend')[1];
var activityTitle = document.querySelectorAll('fieldset legend')[2];


var selectTheme = document.querySelectorAll('#design option')[0];
var secondFieldset = document.querySelectorAll('fieldset div')[0];
var secondLabel = document.createElement('Label');
secondFieldset.appendChild(secondLabel);
secondH4 = document.createElement('h4');
secondLabel.appendChild(secondH4);
secondH4.id = 'shirt_valid_id';

var cardLabel = document.querySelectorAll('#credit-card label')[0];
var zipLabel = document.querySelectorAll('#credit-card label')[1];
var cvvLabel = document.querySelectorAll('#credit-card label')[2];

function validName() {
    if (nameEl.value == "") {
        nameTitle.innerHTML = "Name: Please enter name";
        nameTitle.style.color = "red";
    } else if (!nameEl.value == "") {
        nameTitle.innerHTML = "Name:";
        nameTitle.style.color = "black";
    }
}

function validEmail() {
    if (email.value == ""){
        emailTitle.innerHTML = "Email: Please enter email";
        emailTitle.style.color = "red";
    } else if (!email.value == "") {
        emailTitle.innerHTML = "Email:";
        emailTitle.style.color = "black";
    }
}

function validShirt() {                                                         //Function created to only display correct colours depending on design
    if(design.value == 'js puns') {
        document.getElementById('colors-js-puns').hidden = false;
        document.getElementById('color').hidden = false;
        document.getElementById('color').value = "cornflowerblue";              //Setting default colour depending on theme
        document.getElementById('color_option0').hidden = false;
        document.getElementById('color_option1').hidden = false;
        document.getElementById('color_option2').hidden = false;
        document.getElementById('color_option3').hidden = true;
        document.getElementById('color_option4').hidden = true;
        document.getElementById('color_option5').hidden = true;
        secondH4.innerHTML = '';
    } else if (design.value == 'heart js') {
        document.getElementById('colors-js-puns').hidden = false;
        document.getElementById('color').hidden = false;
        document.getElementById('color').value = "tomato";                      //Setting default colour depending on theme
        document.getElementById('color_option0').hidden = true;
        document.getElementById('color_option1').hidden = true;
        document.getElementById('color_option2').hidden = true;
        document.getElementById('color_option3').hidden = false;
        document.getElementById('color_option4').hidden = false;
        document.getElementById('color_option5').hidden = false;
        secondH4.innerHTML = '';
    } else {
        document.getElementById('colors-js-puns').hidden = true;
        document.getElementById('color').hidden = true;
        document.getElementById('shirt_valid_id').innerHTML = 'Select a shirt';
        document.getElementById('shirt_valid_id').style.color = 'red';
    }
}

function validActivities() {
    if (
        activitiesElems[0].checked == false &&
        activitiesElems[1].checked == false &&
        activitiesElems[2].checked == false &&
        activitiesElems[3].checked == false &&
        activitiesElems[4].checked == false &&
        activitiesElems[5].checked == false &&
        activitiesElems[6].checked == false
    ) {
        document.getElementById('validation_message').innerHTML = 'You need to select at least one of the activity';
        document.getElementById('validation_message').style.color = 'red';
    } else {
        document.getElementById('validation_message').innerHTML = '';
    }
}

function paymentMethod () {
    if (
        document.getElementById('credit-card').hidden == true &&
        document.getElementById('paypal').hidden == true &&
        document.getElementById('bitcoin').hidden == true &&
        validationPayment.hidden == false
    ) {
        validationPayment.innerHTML = 'Please select a payment method';
        validationPayment.style.color = 'red';
    }
}

function cardNumValidation () {
    if (
        document.getElementById('credit-card').hidden == false &&
        creditCard.value == ""
    ) {
        cardLabel.style.color = 'red';
    } else if (
        document.getElementById('credit-card').hidden == false &&
        !creditCard.value == ""
    ) {
        cardLabel.style.color = 'black';
    }
}

function zipValidation () {
    if (
        document.getElementById('credit-card').hidden == false &&
        zip.value == ""
    ) {
        zipLabel.style.color = 'red';
    } else if (
        document.getElementById('credit-card').hidden == false &&
        !zip.value == ""
    ) {
        zipLabel.style.color = 'black';
    }
}

function cvvValidation () {
    if (
        document.getElementById('credit-card').hidden == false &&
        cvv.value == ""
    ) {
        cvvLabel.style.color = 'red';
    } else if (
        document.getElementById('credit-card').hidden == false &&
        !cvv.value == ""
    ) {
        cvvLabel.style.color = 'black';
    }
}

registerBtn.addEventListener('click', function() {
    validName();
    validEmail();
    validActivities();
    validShirt();
    paymentMethod();
    cardNumValidation();
    zipValidation();
    cvvValidation();
});

/*
 activitiesElems[0].addEventListener('change', function(e) {                 //Function created for the behaviour for the activity
 if (e.target.checked) {
 amount += 200;
 document.getElementById('total').innerHTML = 'Total: $' + amount;
 checkCheckboxes();
 } else {
 amount -= 200;
 document.getElementById('total').innerHTML = 'Total: $' + amount;
 checkCheckboxes();
 }
 });

 activitiesElems[1].addEventListener('change', function(e) {                 //Function created for the behaviour for the activity
 if (e.target.checked) {
 amount += 100;
 document.getElementById('total').innerHTML = 'Total: $' + amount;
 activitiesElems[3].disabled = true;
 checkCheckboxes();
 } else {
 activitiesElems[3].disabled = false;
 amount -= 100;
 document.getElementById('total').innerHTML = 'Total: $' + amount;
 checkCheckboxes();
 }
 });

 activitiesElems[3].addEventListener('change', function(e) {                 //Function created for the behaviour for the activity
 if (e.target.checked) {
 amount += 100;
 document.getElementById('total').innerHTML = 'Total: $' + amount;
 activitiesElems[1].disabled = true;
 checkCheckboxes();
 } else {
 amount -= 100;
 document.getElementById('total').innerHTML = 'Total: $' + amount;
 activitiesElems[1].disabled = false;
 checkCheckboxes();
 }
 });

 activitiesElems[2].addEventListener('change', function(e) {                 //Function created for the behaviour for the activity
 if (e.target.checked) {
 amount += 100;
 document.getElementById('total').innerHTML = 'Total: $' + amount;
 activitiesElems[4].disabled = true;
 checkCheckboxes();
 } else {
 amount -= 100;
 document.getElementById('total').innerHTML = 'Total: $' + amount;
 activitiesElems[4].disabled = false;
 checkCheckboxes();
 }
 });

 activitiesElems[4].addEventListener('change', function(e) {                 //Function created for the behaviour for the activity
 if (e.target.checked) {
 amount += 100;
 document.getElementById('total').innerHTML = 'Total: $' + amount;
 activitiesElems[2].disabled = true;
 checkCheckboxes();
 } else {
 amount -= 100;
 document.getElementById('total').innerHTML = 'Total: $' + amount;
 activitiesElems[2].disabled = false;
 checkCheckboxes();
 }
 });

 activitiesElems[5].addEventListener('change', function(e) {                 //Function created for the behaviour for the activity
 if (e.target.checked) {
 amount += 100;
 document.getElementById('total').innerHTML = 'Total: $' + amount;
 checkCheckboxes();
 } else {
 amount -= 100;
 document.getElementById('total').innerHTML = 'Total: $' + amount;
 checkCheckboxes();
 }
 });

 activitiesElems[6].addEventListener('change', function(e) {                 //Function created for the behaviour for the activity
 if (e.target.checked) {
 amount += 100;
 document.getElementById('total').innerHTML = 'Total: $' + amount;
 checkCheckboxes();
 } else {
 amount -= 100;
 document.getElementById('total').innerHTML = 'Total: $' + amount;
 checkCheckboxes();
 }
 });
 */