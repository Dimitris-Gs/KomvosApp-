const form = document.querySelector('#create-listing');

form.addEventListener('submit', e => {

  if (!checkdate()) {
    e.preventDefault();
  }
});

function checkdate() {
  var startingDate = document.getElementById("startingDate").value;
  var endingDate = document.getElementById("endingDate").value;

  if (endingDate < startingDate) {
    let date = document.getElementById("validationDate");
    date.style.display = 'block';
    return false;
  }

  return true;
}


var today = new Date();
var dd = today.getDate();
var mm = today.getMonth() + 1; //January is 0 so need to add 1 to make it 1!
var yyyy = today.getFullYear();
if (dd < 10) {
  dd = '0' + dd
}
if (mm < 10) {
  mm = '0' + mm
}

today = yyyy + '-' + mm + '-' + dd;
document.getElementById("startingDate").setAttribute("min", today);
document.getElementById("endingDate").setAttribute("min", today);

document.getElementById("navbarDropdownMenuLink1").addEventListener('click', () => {
  getListingCategories()
});

document.getElementById("createListing").addEventListener('click', () => {
  getListingCategories()
});