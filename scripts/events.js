//Add Event Handlers

//remove warning if fname has input
document.getElementById("fname").addEventListener("blur", function() {
  if (this.value !== "") {
    fnameWarning.innerHTML = "";
  }
});

//remove warning if lname has input
document.getElementById("lname").addEventListener("blur", function() {
  if (this.value !== "") {
    lnameWarning.innerHTML = "";
  }
});

//remove warning if address1 has input
document.getElementById("address1").addEventListener("blur", function() {
  if (this.value !== "") {
    address1Warning.innerHTML = "";
  }
});


//remove warning if city has input
document.getElementById("city").addEventListener("blur", function() {
  if (this.value !== "") {
    cityWarning.innerHTML = "";
  }
});

//remove warning if province has beeen selected
document.getElementById("province").addEventListener("change", function(){
    if(profile.province.options.selectedIndex !== -1){
        provinceWarning.innerHTML = "";
    }
});

//remove warning if country has been selected
document.getElementById("country").addEventListener("change", function(){
    if(profile.country.value !== -1){
        countryWarning.innerHTML = "";
    }
});

// Add an event to the form on submit to validate input
document.profile.addEventListener("submit", validateProfile);