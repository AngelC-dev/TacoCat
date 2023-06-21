// Get the string from the page
// Controller function
function getValue() {

    document.getElementById("alert").classList.add("invisible");
  
    let userString = document.getElementById("userString").value;
    
    let revString = reverseString(userString);
  
    displayString(revString);
  }
  
  // Reverse the string
  // Logic function
  function reverseString(userString) {
    let revString = '';
  
    // Remove spaces and special characters from the userString
    userString = userString.replace(/[^a-zA-Z0-9]/g, '');
  
    // Reverse the string using a loop
    for (let index = userString.length - 1; index >= 0; index--) {
      revString += userString[index];
    }
  
    // Convert the reversed string to lowercase
    revString = revString.toLowerCase();
  
    return revString;
  }
  
  
  // Display the reversed string to the user
  // View function
  function displayString(revString) {
    // Write to page
    document.getElementById("msg").innerHTML = `Your phrase reversed is: ${revString}`;
  
    // Show the alert box
    document.getElementById("alert").classList.remove("invisible");
  }
  