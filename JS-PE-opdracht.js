function Validate(event) {


    var fullname = document.getElementById("fullname").value;
    var gebruikersnaam = document.getElementById("gebruikersnaam").value;
    var adres = document.getElementById("adres").value;
    var email = document.getElementById("email").value;
    var age = document.getElementById("age").value;
    var dropdown = document.getElementById("dropdown").value;
    var betaling = document.getElementsByName("betaling-system");
    
    
    var letterRegExp = /^([a-z']+(-| )?)+$/i;
    var emailRegExp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var ageRegExp = /^[0-9]+$/;
    
    
    var errors = [];
    
    
    function errorStyle(id) {
        var el = document.getElementById(id);
        el.style.borderColor = "red";
        el.style.backgroundColor = "#ffece6";
    }
    
    
    function errorLabelStyle(id) {
        var el = document.getElementById(id);
        el.style.color = "red";
    }
    
    
    function passStyle(id) {
        var el = document.getElementById(id);
        el.style.borderColor = "green";
        el.style.backgroundColor = "#d6f5d6";
    }
    
    
    function passLabelStyle(id) {
        var el = document.getElementById(id);
        el.style.color = "green";
    }
    
    
    function requiredValidation(element, errorText, error, label, regex) {
        if (element == "" || element == null || !element || element === [] || !regex.test(element)) {
            errors.push(errorText);
            errorStyle(error);
            errorLabelStyle(label);
        } else {
            passStyle(error);
            passLabelStyle(label);
        }
    }
    
    
    requiredValidation(fullname, "Jouw naam is verplicht", "fullname", "name-label", letterRegExp);
    requiredValidation(gebruikersnaam, "jouw gebruikesrnaam is verplicht", "gebruikersnaam", "gebruikersnaam-label", letterRegExp);
    requiredValidation(email, "jouw email is verplicht, vul een geldige email adres", "email", "email-label", emailRegExp);
    requiredValidation(adres, "Jouw adres is verplicht", "adres", "adres-label", letterRegExp);
    requiredValidation(age, "Jouw leeftijd is verplicht, duid aub jouw leeftijd", "age", "age-label", ageRegExp);
    
    
    function dropdownValidation() {
        
        if (dropdown == "" || dropdown == null || !dropdown || dropdown == "Kies jouw land") {
            errors.push("Duid jouw land aub");
            errorStyle("dropdown"); errorLabelStyle("drop-down-label");
        } else if (!dropdown == "" || !dropdown == null || dropdown || !dropdown == "Please select an option") {
            passStyle("dropdown"); passLabelStyle("drop-down-label");
        }
    }
    
    dropdownValidation();
    
    
    
    function radiobuttonValidation() {
    
        var check = 0;
        for (var i = 0; i < betaling.length; i++) {
            if (betaling[i].checked) {
                check++;
                break;
            }
        }
    
        if (check) {
            passLabelStyle("betaling-label");
            passStyle("radio-container");
        } else {  
            errors.push("kies jouw betaling aub");
            errorLabelStyle("betaling-label");
            errorStyle("radio-container");
        }
    }
    
    radiobuttonValidation();
    
    
    if (errors.length) {
        event.preventDefault();
        alert(errors.join("\n\n"));
        return false;
    } else {
        alert ("Bedankt");
        return true;
    }
    }