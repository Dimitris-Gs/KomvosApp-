//initialize currentTab (index of tab in display) to 0, which means that we display the first tab
var currentTab = 0;

// initialize constants for each tab
// (just for facilitating the readability of the code)
const firstTab = 0;
const secondTab = 1;
const thirdTab = 2;
const fourthTab = 3;

// when the page is loaded we call the function showTab
document.addEventListener("DOMContentLoaded", function (event) {
  
  showTab(currentTab);
});

/************************************
 * function fixStepIndicator(tabIndex)
 * Inputs:
 *    - tabIndex : (int) Index of the tab to be processed
 * Outputs:
 *    - none
 * Description: - ensures that the proper step according to each tab is indicated 
 *                (steps are the small dots on the top of the form)
 */

function fixStepIndicator(tabIndex) {
  var stepIndicators = document.getElementsByClassName("step");

  for (var i = 0; i < stepIndicators.length; i++) {
    stepIndicators[i].className = stepIndicators[i].className.replace(" active", "");
  }
  stepIndicators[tabIndex].className += " active";
}

/*********************************
 * function showTab(tabIndex)
 * Inputs : 
 *    - tabIndex : (int) Index of the tab to be processed
 *    
 * Outputs:
 *    - none
 * 
 * Description : - Displays the current tab (by changing display none to display block)
 *               On registration.css the tabs are initialized to display:none
 *               - Depending on the number of the current tab,
 *               the function displays or hides the button previous 
 *               and changes the button next to submit in the last tab
 *               - Calls fixStepIndicator()
*/
function showTab(tabIndex) {
  var tabs = document.getElementsByClassName("tab");

  tabs[tabIndex].style.display = "block";

  if (tabIndex == 0) {
    document.getElementById("prevBtn").style.display = "none";
  }
  else {
    document.getElementById("prevBtn").style.display = "inline";
  }

  if (tabIndex == (tabs.length - 1)) {
    document.getElementById("nextBtn").innerHTML = "Εγγραφή";
  }
  else {
    document.getElementById("nextBtn").innerHTML = "Επόμενο";
  }

  fixStepIndicator(tabIndex)
}

/********************************
 * function nextPrev(nextOrPrevious)
 * Inputs: 
 *     -nextOrPrevious: (int) either -1 or 1. -1 corresponds to previous and 1 corresponds to next
 * Outputs:
 *     - (boolean) returns false if the input equals to 1 and the form is not valid so we can't proceed to the next tab
 *     else returns true
 * 
 * Description:  -hides the current tab and displays the previous or the next tab depending on the input 
 *                and whether the inputs are validated or not
 *               -changes the value of the global var currentTab depending on the input
 *               -displays a thank you message at the final tab and hides not necessary elements
 *               -calls showTab()
 */

function nextPrev(nextOrPrevious) {
  var tabs = document.getElementsByClassName("tab");

  if (nextOrPrevious == 1 && !validateForm()) {
    return false;
  }

  tabs[currentTab].style.display = "none";
  currentTab = currentTab + nextOrPrevious;

  if (currentTab >= tabs.length) {
    // document.getElementById("regForm").submit();
    // return false;
    //alert("sdf");
    document.getElementById("nextprevious").style.display = "none";
    document.getElementById("all-steps").style.display = "none";
    document.getElementById("register").style.display = "none";
    document.getElementById("thanks-text-message").style.display = "block";

  }
  showTab(currentTab);
}


function displayAddress() {
  if (document.getElementById('addressYes').checked) {
    document.getElementById('divAddress').style.display = 'block';
  }
  else document.getElementById('divAddress').style.display = 'none';

}

/*************************************
 * function ValidateEmail(emailString)
 * Inputs: 
 *    - emailString: (string) the email string to be checked
 * Outputs:
 *    - (boolean) returns true if emailString is of a valid type and false if it's not
 * 
 * Description:  -returns true if emailString is of a valid type and false if it's not
 *               -if false displays the error message
 *    
 */

function validateEmail(emailString) {

  var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  if (emailString.match(validRegex)) {
    return true;
  } else {
    document.getElementById("emailValidation").style.display = 'block';
    return false;
  }
}


function validateForm() {
 
  let valid = true;

  switch (currentTab) {
    case firstTab:

      let tabs = document.getElementsByClassName("tab");
      let inputsOfTab = tabs[firstTab].getElementsByTagName("input");

      for (let i = 0; i < inputsOfTab.length; i++) {

        if (inputsOfTab[i].type == "email") {

          if (!validateEmail(inputsOfTab[i].value)) {
            inputsOfTab[i].className += " invalid";
            valid = false;
          }
        }
        else if (inputsOfTab[i].value == "") {
          inputsOfTab[i].className += " invalid";
          valid = false;
        }
      }
      break;

    case secondTab:

    // validation for gender selection radio buttons
      let radioGenderValue = document.querySelector('input[name="gender"]:checked');

      if (radioGenderValue == null) {
        valid = false;
        document.getElementById("genderValidation").style.display = "block";
      }

    // validation for users age between 18 and 80
      let dateValue = document.getElementById("regDateOfBirth");

      if(!checkDateOfBirth(dateValue.value)){
        valid = false;
        dateValue.className += " invalid";
      }

    // validation for address
      let radioAddressValue = document.querySelector('input[name="radioAddress"]:checked');

      if (radioAddressValue == null) {
        valid = false;
        
      }
      else if (document.getElementById('addressYes').checked) {
        if (document.getElementById("regAddress").value == "" ){
          valid = false;
          document.getElementById("regAddress").className += " invalid";
        }
      }

      break;

    default:
      break;
  }

  if (valid) {
    document.getElementsByClassName("step")[currentTab].className += " finish";
  }

  return valid;

}

/**********************************
 * function emailInputEventHandler()
 * Inputs:
 *    -none
 * Outputs:
 *    -none
 * 
 * Description: -is an event called when the input is changed (use in ejs:  oninput="emailInputEventHandler()")
 *              -removes the class invalid (css: background-color: sth like pink)
 *              -hides the validation message for the email
 * 
 */

function emailInputEventHandler() {
  document.getElementById("regEmail").className = "";
  document.getElementById("emailValidation").style.display = 'none';
}

function hideGenderValidation() {
  document.getElementById("genderValidation").style.display = 'none';
}

function checkDateOfBirth(dateValue){

  if(dateValue){
    const msPerYearNormal = 31557600000;
    const msPerYearLarge = 31622400000;
    const msPerYear = (3 * msPerYearNormal + msPerYearLarge) / 4;

    let properDateValue = +new Date(dateValue);
    // let age = Math.floor((Date.now() - properDateValue) / (msPerYear));
    let age = ((Date.now() - properDateValue) / (msPerYearNormal));
    console.log(age);

    if ( age < 18 || age > 80) {
      return false;
    }
    
    return true;
  }
  else {
    return false;
  }


}