var attempt = 3; // Variable to count number of attempts.

// Below function Executes on click of login button.
function validate() {
    var Benutzername = document.getElementById("Benutzername").value;
    var Passwort = document.getElementById("Passwort").value;
    if (Benutzername == "Test" && Passwort == "Test") {
        alert("Login erfolgreich");
        window.location = "success.html"; // Redirecting to other page.
        return false;
    }
    else {
		if (Benutzername == "Test123" && Passwort == "Test123") {
			alert("Admin eingeloggt.");
			window.location = "../Admin.html";
			return false;
        }
        else {
            attempt--; // Decrementing by one.
            alert("Du hast " + attempt + " Feld/Felder freigelassen;");
            // Disabling fields after 3 attempts.
            if (attempt == 0) {
                document.getElementById("Benutzername").disabled = true;
                document.getElementById("Passwort").disabled = true;
                document.getElementById("submit").disabled = true;
                window.location = "../Error.html";
                return false;
            
        }
    }
    }
}
