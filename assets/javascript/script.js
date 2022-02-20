var enter;
var confirmNumber;
var confirmSpecial;
var confirmUppercase;
var confirmLowercase;

// Special characters 
special = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];
// Numeric characters
number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// lowercasebetical characters
lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
// uppercase characters
uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
// Choices declared outside the if statement so they can be concatenated upon condition
var choices;

var get = document.querySelector("#generate");

get.addEventListener("click", function () {
    ps = generatePassword();
    document.getElementById("password").placeholder = ps;
});

// GENERATE PASSWORD FUNCTION
function generatePassword() {
    // Asks for user input
    enter = parseInt(prompt("How many characters will your password be? Please choose between 8 and 128."));
    // First if statement for user validation 
    if (!enter) {
        alert("You must choose a valid number");
    } else if (enter < 8 || enter > 128) {
        // Start user input prompts
        enter = parseInt(prompt("You must choose between 8 and 128"));

    } else {
        // Continues once user input is validated
        confirmNumber = confirm("Would you like numbers included?");
        confirmSpecial = confirm("Would you like special characters included?");
        confirmUppercase = confirm("Would you like uppercase letters included?");
        confirmLowercase = confirm("Would you like lowercase letters included?");
    };
// OPTIONS FOR PASSWORD AND COMBINATIONS OF ENTRY

    // Else if for 4 negative options
    if (!confirmSpecial && !confirmNumber && !confirmUppercase && !confirmLowercase) {
        choices = alert("You must confirm at least one option");

    }
    // Else if for 4 positive options
    else if (confirmSpecial && confirmNumber && confirmUppercase && confirmLowercase) {
        choices = special.concat(number, lowercase, uppercase);
    }
    // 3 Confirmations
    else if (confirmSpecial && confirmNumber && confirmUppercase) {
        choices = special.concat(number, uppercase);
    }
    else if (confirmSpecial && confirmNumber && confirmLowercase) {
        choices = special.concat(number, lowercase);
    }
    else if (confirmSpecial && confirmLowercase && confirmUppercase) {
        choices = special.concat(lowercase, uppercase);
    }
    else if (confirmNumber && confirmLowercase && confirmUppercase) {
        choices = number.concat(lowercase, uppercase);
    }
    // 2 Confirmations 
    else if (confirmSpecial && confirmNumber) {
        choices = special.concat(number);

    } else if (confirmSpecial && confirmLowercase) {
        choices = special.concat(lowercase);

    } else if (confirmSpecial && confirmUppercase) {
        choices = special.concat(uppercase);
    }
    else if (confirmLowercase && confirmNumber) {
        choices = lowercase.concat(number);

    } else if (confirmLowercase && confirmUppercase) {
        choices = lowercase.concat(uppercase);

    } else if (confirmNumber && confirmUppercase) {
        choices = number.concat(uppercase);
    }
    // 1 Confirmation
    else if (confirmSpecial) {
        choices = special;
    }
    else if (confirmNumber) {
        choices = number;
    }
    else if (confirmLowercase) {
        choices = lowercase;
    }
    else if (confirmUppercase) {
        choices = uppercase;
    };
    // password variable is an array placeholder for user generated amount of length
    var password = [];
    // Generate the password
    for (var i = 0; i < enter; i++) {
        var userPassword = choices[Math.floor(Math.random() * choices.length)];
        password.push(userPassword);
    }
    // This joins the password array and converts it to a string
    var ps = password.join("");
    UserInput(ps);
    return ps;
}
// Places the password into the text box
function UserInput(ps) {
    document.getElementById("password").textContent = ps;
}
