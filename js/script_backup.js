var nameEl = document.querySelector("#name");                               //Put focus on name field
nameEl.focus();
//nameEl.required = true;                                                     //Validation added for name

//document.getElementById('mail').required = true;                            //Validation added for email

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
    if(design.value == 'js puns') {
        document.getElementById('colors-js-puns').hidden = false;
        document.getElementById('color').hidden = false;
        document.getElementById('color').value = "cornflowerblue";          //Setting default colour depending on theme
        document.getElementById('color_option0').hidden = false;
        document.getElementById('color_option1').hidden = false;
        document.getElementById('color_option2').hidden = false;
        document.getElementById('color_option3').hidden = true;
        document.getElementById('color_option4').hidden = true;
        document.getElementById('color_option5').hidden = true;
    } else if (design.value == 'heart js') {
        document.getElementById('colors-js-puns').hidden = false;
        document.getElementById('color').hidden = false;
        document.getElementById('color').value = "tomato";                  //Setting default colour depending on theme
        document.getElementById('color_option0').hidden = true;
        document.getElementById('color_option1').hidden = true;
        document.getElementById('color_option2').hidden = true;
        document.getElementById('color_option3').hidden = false;
        document.getElementById('color_option4').hidden = false;
        document.getElementById('color_option5').hidden = false;
    } else {
        document.getElementById('colors-js-puns').hidden = true;
        document.getElementById('color').hidden = true;
    }
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

// for (var i = 0; i < activitiesElems.length; i++ ) {
//     activitiesElems[i].id = 'chkbox_id_' + [i];
//     activitiesElems[i].name = 'chkboxes[]';
//     activitiesElems[i].required = 'true';
// }
activitiesElems[0].required = 'true';

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
        //document.getElementById('activity_box_3').innerHTML.style.color = 'grey';
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

/*
 for (var i = 1; i <= 6; i++ ) {
 activitiesElems[i].addEventListener('change', function (e) {            //Tyring to refactor as am repeating the same code above,
 if (e.target.checked) {                                             //but I am not too sure on how to split the logic/sums
 amount += 100;
 document.getElementById('total').innerHTML = 'Total: $' + amount;
 } else {
 amount -= 100;
 document.getElementById('total').innerHTML = 'Total: $' + amount;
 }
 })
 }
 */

var paypalElem = document.querySelectorAll('div')[8];                       //Getting the paypal element and creating variable
paypalElem.id = 'paypal';                                                   //Assigning ID

var bitcoinElem = document.querySelectorAll('div')[9];                      //Getting the bitcoin element and creating variable
bitcoinElem.id = 'bitcoin';                                                 //Assigning ID

document.getElementById('credit-card').hidden = true;                       //Upon page load, setting the ways to pay to hidden
document.getElementById('paypal').hidden = true;
document.getElementById('bitcoin').hidden = true;

var paymentSelect = document.getElementById('payment');
paymentSelect[0].value='';
paymentSelect.required = true;

paymentSelect.addEventListener('change', function () {                      //Function created and behaviour attached when payment option is selected
    if (paymentSelect.value == 'credit card') {
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

//Validation

function checkCheckboxes() {
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

//Submit

document.querySelector('form').id = "form_id";
//var form = document.getElementById('form_id');

// window.onload = function() {
//     var form = document.querySelector("form");
//     form.onsubmit = submitted.bind(form);
// };
//
// function submitted(event) {
//     if (invalidPayment() && (validationPayment.innerHTML = 'Please select a payment method') ||
//         (checkCheckboxes() && (document.getElementById('validation_message').innerHTML = 'You need to select at least one of the activity'))) {
//             event.preventDefault();
//             event.stopImmediatePropagation();
//             event.stopPropagation();
//             alert('Nothing going through!');
//          }
// }

// window.onload = function() {
//     var form = document.getElementById('form_id');
//     form.onsubmit = function() {
//         if (invalidPayment() && (validationPayment.innerHTML = 'Please select a payment method')) {
//             e.stopImmediatePropagation();
//             console.log('Nothing going through!');
//         }
//     }
// };



//
// register.addEventListener('click', function(e) {
//     if (validPayment() || checkCheckboxes()) {
//         e.preventDefault();
//     }
// });


// function checkName() {
//     if (nameEl.value == '') {
//         document.getElementById('name_validation').innerHTML ='Name field cannot be blank';
//
//     }
// }

var paymentSelect = document.getElementById('payment');
var creditCard = document.getElementById('cc-num');
var zip = document.getElementById('zip');
var cvv = document.getElementById('cvv');

paymentSelect.addEventListener('change', function() {
    if (paymentSelect.value == 'credit card') {
        creditCard.minLength='13';
        creditCard.maxLength='16';
        creditCard.autocomplete='cc-number';
        creditCard.pattern='[0-9]{13,16}';
        creditCard.required = true;

        zip.minLength='5';
        zip.maxLength='5';
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

var fourthFieldset = document.querySelectorAll('fieldset')[3];
var validPaymentLabel = document.createElement('Label');
fourthFieldset.appendChild(validPaymentLabel);
validPaymentH4 = document.createElement('h4');
validPaymentLabel.appendChild(validPaymentH4);
validPaymentH4.id = 'validation_payment_id';

var validationPayment = document.getElementById('validation_payment_id');

function chkPaymentMethod() {
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

var registerBtn = document.querySelector('button');
registerBtn.setAttribute('onSubmit', 'return registerClick()');

//registerBtn.addEventListener('click', registerClick);

function registerClick(e) {
    if ((validationPayment.innerHTML == 'Please select a payment method') ||
        (document.getElementById('validation_message').innerHTML == 'You need to select at least one of the activity'))  {
        // e.stopPropagation();
        //e.stopImmediatePropagation();
        e.preventDefault();
        // alert('Nothing going through!');
        //alert('Please fill in required fields');
        //return false;
        // } else {
        //     return true;
    }
}



// registerBtn.addEventListener('click', function(e) {
//     checkCheckboxes();
//     chkPaymentMethod();
//     if (validationPayment.innerHTML = 'Please select a payment method') {
//         //e.stopPropagation();
//         //e.stopImmediatePropagation();
//         //e.preventDefault();
//         //console.log('Nothing going through!');
//         return false;
//     } else {
//         return true;
//     }
// });
/*
 function valthis() {
 var checkBoxes = document.getElementsByClassName( 'myCheckBox' );
 var isChecked = false;
 for (var i = 0; i < checkBoxes.length; i++) {
 if ( checkBoxes[i].checked ) {
 isChecked = true;
 };
 };
 if ( isChecked ) {
 alert( 'At least one checkbox checked!' );
 } else {
 alert( 'Please, check at least one checkbox!' );
 }
 }
 */

// $(function(){
//     var requiredCheckboxes = $('.activities :checkbox[required]');
//     requiredCheckboxes.change(function(){
//         if(requiredCheckboxes.is(':checked')) {
//             requiredCheckboxes.removeAttr('required');
//         } else {
//             requiredCheckboxes.attr('required', 'required');
//         }
//     });
// });



