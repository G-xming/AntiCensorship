function StepOneFunction() {
    // Get the text field
    var copyText = document.getElementById("StepOneInput");
  
    // Select the text field
    copyText.select();
    copyText.setSelectionRange(0, 99999); // For mobile devices
  
     // Copy the text inside the text field
    navigator.clipboard.writeText(copyText.value);
  
    // Alert the copied text
    alert("Copied the text: " + copyText.value)
  }   
  
  function StepTwoFunction() {
    // Get the text field
    var copyText = document.getElementById("StepTwoInput");
  
    // Select the text field
    copyText.select();
    copyText.setSelectionRange(0, 99999); // For mobile devices
  
     // Copy the text inside the text field
    navigator.clipboard.writeText(copyText.value);
  
    // Alert the copied text
    alert("Copied the text: " + copyText.value); 
  }
  
  function StepTwoFunctionTwo() {
    // Alert to opening new tab
    alert("Opening new tab now");
    window.open("https://useast-www.securly.com/blocked?useremail=fake-email@fakedomain.com&reason=%22SecurelyKiller%22", "_blank")  
  }
  
  function StepThreeFunction() {
    // Get the text field
    var copyText = document.getElementById("StepThreeInput");
  
    // Select the text field
    copyText.select();
    copyText.setSelectionRange(0, 99999); // For mobile devices
  
     // Copy the text inside the text field
    navigator.clipboard.writeText(copyText.value);
  
    // Alert the copied text
    alert("Copied the text: " + copyText.value); 
  }
  
  function RemoveFunction() {
    // Get the text field
    var copyText = document.getElementById("RemoveInput");
  
    // Select the text field
    copyText.select();
    copyText.setSelectionRange(0, 99999); // For mobile devices
  
     // Copy the text inside the text field
    navigator.clipboard.writeText(copyText.value);
  
    // Alert the copied text
    alert("Copied the text: " + copyText.value); 
  }
  
  function ExperimentalFunction() {
    var myWindow = window.open("", "_blank");
    myWindow.document.write("<h1> hello world </h2>");
  }
  
  
