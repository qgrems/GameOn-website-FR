function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");


// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

//x button close
BtnClose.forEach(elt => elt.addEventListener("click", CloseModal));
const BtnClose = document.querySelectorAll(".close,.btn-close");

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// close modal
function CloseModal() {
  modalbg.style.display = "none";
}

//bordure rouge
var borderRed = '#fe142f 2px solid'

// creation  recuperation variable 
var condition = document.getElementById("checkbox1");
var erreur_checkbox;

var erreur_firstName;
var firstName = document.getElementById("firstName");

var erreur_lastName;
var lastName = document.getElementById("lastName");
var erreur_email;
var pattern_email = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
var email = document.getElementById("mail");

var erreur_birthdate;
var pattern_birthdate = /^([0-9]{4}[-/]?((0[13-9]|1[012])[-/]?(0[1-9]|[12][0-9]|30)|(0[13578]|1[02])[-/]?31|02[-/]?(0[1-9]|1[0-9]|2[0-8]))|([0-9]{2}(([2468][048]|[02468][48])|[13579][26])|([13579][26]|[02468][048])00)[-/]?02[-/]?29)$/;
var birthdate = document.getElementById("birthdate");

var quantity = document.getElementById("quantity");
var erreur_concour;
// message de validation
var validationForm= document.getElementById("validationForm");
var suscribe = document.getElementById("suscribe");


//validation modal
document.getElementById("inscription").addEventListener("submit",function(e){

var value_location =false;
var firstNameBool = false;
var lastNameBool = false;
var emailBool = false;
var birthdateBool = false;
var quantityBool = false;
var conditionBool = false;
var locationBool = false;


  function firstNameValid()
  {
   
    if (firstName.value === "" || firstName.value.length < 2 || !isNaN(firstName.value) )
    {
      e.preventDefault();
      document.getElementById('erreur_firstName').innerHTML = "Veuillez entrer 2 caractères ou plus pour le champ du prénom."
      document.getElementsByClassName("text-control")[0].style.border= borderRed;
    }
    else 
    {
      firstNameBool = true;
      document.getElementById('erreur_firstName').innerHTML = ""
      document.getElementsByClassName("text-control")[0].style.border='';
    }
  }

  function lastNameValid()
  {
    if (lastName.value === "" || lastName.value.length < 2 || !isNaN(firstName.value))
    {
      e.preventDefault();
      document.getElementById('erreur_lastName').innerHTML = "Veuillez entrer 2 caractères ou plus pour le champ du nom."
      document.getElementsByClassName("text-control")[1].style.border=borderRed;
    }
    else 
    {
      lastNameBool = true;
      document.getElementById('erreur_lastName').innerHTML = ""
      document.getElementsByClassName("text-control")[1].style.border='';
    }
  } 

  function emailValid ()
  {
    if (email.value === "")
    {
      e.preventDefault();
      document.getElementById('erreur_email').innerHTML = "Adresse electronique non valide"
      document.getElementsByClassName("text-control")[2].style.border=borderRed;
    }
    else 
    {
      emailBool = true;
      document.getElementById('erreur_email').innerHTML = ""
      document.getElementsByClassName("text-control")[2].style.border='';
    }
    if ( email.value.match(pattern_email))
    {
      emailBool = true;
      document.getElementById('erreur_email').innerHTML = ""
      document.getElementsByClassName("text-control")[2].style.border='';
    }
    else 
    {
      e.preventDefault();
      document.getElementById('erreur_email').innerHTML = "Adresse electronique non valide"
      document.getElementsByClassName("text-control")[2].style.border=borderRed;
    }
  }

  function birthdateValid ()
  { 
    if ( !birthdate.value.match(pattern_birthdate) || birthdate.value === "")
    {
      e.preventDefault();
      document.getElementById('erreur_birthdate').innerHTML = "Date non valide"
      document.getElementsByClassName("text-control")[3].style.border=borderRed;
    }
    else
    {
      birthdateBool = true;
      document.getElementById('erreur_birthdate').innerHTML = ""
      document.getElementsByClassName("text-control")[3].style.border='';
    }
  }

  function quantityValid()
  {
    if (isNaN(quantity.value) || quantity.value === "" || quantity.value > 99 || quantity.value < 1 )
    {
      e.preventDefault();
      document.getElementById("erreur_concour").innerHTML= "Vous devez saisir un chiffre entre 1 et 99."
      document.getElementsByClassName("text-control")[4].style.border=borderRed;
    }
    else 
    {
      quantityBool = true;
      document.getElementById("erreur_concour").innerHTML= ""
      document.getElementsByClassName("text-control")[4].style.border='';
    }
  }

  function conditionValid()
  {
    if(condition.checked == false)
    {
      e.preventDefault();
      document.getElementById('erreur_checkbox').innerHTML ="Vous devez vérifier que vous acceptez les termes et conditions."
    }
    else 
    {
      conditionBool = true;
      document.getElementById('erreur_checkbox').innerHTML =""
    }
  }

  function locationValid ()
  {
    var location = document.getElementsByName("location");
    for (var i= 0; i<location.length;i++) 
    {
      if (location[i].checked ==true)
      {
        value_location =true;
      }
    }
    if (!value_location) 
    {
      e.preventDefault();
      document.getElementById("erreur_location").innerHTML="veuillez cocher une des cases."  
    }
    else 
    {
      locationBool = true;
      document.getElementById("erreur_location").innerHTML=""  
    }
  }

  firstNameValid();
  lastNameValid();
  emailValid();
  birthdateValid();
  quantityValid();
  conditionValid();
  locationValid();
  
  if(firstNameBool === true && lastNameBool === true  && emailBool === true && birthdateBool === true && quantityBool === true  && conditionBool === true && locationBool === true ) 
  {
    e.preventDefault();
    var validationForm= document.getElementById("validationForm");
    var suscribe = document.getElementById("suscribe");
    suscribe.style.display = "none"
    validationForm.style.display = "flex";
  }
  else {
    e.preventDefault();
    document.getElementById('validForm').innerHTML = "";
    suscribe.style.display = "block"
    validationForm.style.display = "none";
  }
});
