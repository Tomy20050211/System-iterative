 function checkAge() {
      const name = document.getElementById("name").value.trim();
      const age = document.getElementById("age").value.trim();   // Get the value from the "name, age" input

      //---------------------------------------------------------------------------------------------
      
      const nameRegex = /^[A-Za-z\s]+$/;   // Regular expression to allow only letters (uppercase/lowercase) and spaces

      const ageRegex = /^[0-9]+$/;              // Regular expression to allow only numbers (digits)


      //---------------------------------------------------------------------------------------------

      if (!nameRegex.test(name)) {
        alert("Name must contain only letters.");     
        return;
      }                                            //checks the type of data entered by the user

      if (!ageRegex.test(age)) {
        alert("Age must contain only numbers.");
        return;
      }
    
      //---------------------------------------------------------------------------------------------

      const ageNumber = parseInt(age);

      if (ageNumber < 18) {            // Convert the age from string to number so we can compare it

        alert("You are underage, you have a whole life of knowledge ahead, keep going :D.");
      } else {
        alert("You are of legal age, you can still achieve those goals that you set for yourself, keep it up :D.");
      }
    }