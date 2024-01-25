document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
  
    // Get form values
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const address = document.getElementById('address').value;
    const pincode = document.getElementById('pincode').value;
    const gender = document.getElementById('gender').value;
  
    const foods = []; 
    const foodCheckboxes = document.querySelectorAll('input[name="food"]:checked');
    foodCheckboxes.forEach(function(checkbox) {
      foods.push(checkbox.value);
    });
  
    const state = document.getElementById('state').value;
    const country = document.getElementById('country').value;
  
    // Update table
    const table = document.getElementById('dataTable').getElementsByTagName('tbody')[0];
    const newRow = table.insertRow();
  
    const cell1 = newRow.insertCell(0);
    cell1.innerHTML = firstName;
  
    const cell2 = newRow.insertCell(1);
    cell2.innerHTML = lastName;
  
    const cell3 = newRow.insertCell(2);
    cell3.innerHTML = address;
  
    const cell4 = newRow.insertCell(3);
    cell4.innerHTML = pincode;
  
    const cell5 = newRow.insertCell(4);
    cell5.innerHTML = gender;
  
    const cell6 = newRow.insertCell(5);
    cell6.innerHTML = foods.join(', '); 
  
    const cell7 = newRow.insertCell(6);
    cell7.innerHTML = state;
  
    const cell8 = newRow.insertCell(7);
    cell8.innerHTML = country;
  
    
    document.getElementById('myForm').reset();
  });
  