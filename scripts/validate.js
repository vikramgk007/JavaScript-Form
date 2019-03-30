var validateProfile = (function validateProfile(e){

  e.preventDefault();

  var valid = true;

  //display warning if firstName is not entered
  if (profile.fname.value == "") {
    document.getElementById('fnameWarning').innerHTML = "*Please enter the First Name*";
    valid = false;
  }

  //display warning if lastName is not entered
  if (profile.lname.value == "") {
    document.getElementById('lnameWarning').innerHTML = "*Please enter the Last Name*";
    valid = false;
  }

  if (profile.address1.value == "") {
    document.getElementById('address1Warning').innerHTML = "*Please enter the Address*";
    valid = false;
  }

  if (profile.city.value == "") {
    document.getElementById('cityWarning').innerHTML = "*Please enter the City Name*";
    valid = false;
  }

  //display warning if course is not selected
  
  if (profile.province.value == "") {
    document.getElementById("provinceWarning").innerHTML = "*Select a Province*";
	valid = false;
  }
  
//display warning if course is not selected
  if (profile.country.value == "") {
    document.getElementById("countryWarning").innerHTML = "*Select a Country*";
	valid = false;
  }


  if (valid) {
    alert("Thank You");
  }

  console.log(valid);
  return valid;
});