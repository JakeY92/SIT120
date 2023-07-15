// JavaScript for live clock
function updateClock(){
    var now = new Date(); 

    // Set timezone to AEST and format
    var dateString = now.toLocaleString("en-AU", {timeZone: "Australia/Sydney", 
                                                  hour: '2-digit', 
                                                  minute:'2-digit', 
                                                  second:'2-digit',
                                                  weekday:'long', 
                                                  year: 'numeric', 
                                                  month:'long', 
                                                  day:'2-digit'});
    // Update the inner HTML of the 'time-display' element
    document.getElementById('time-display').innerHTML = dateString;
}

// Initial clock setup and interval for updating the clock
function initClock(){
    // First update
    updateClock();

    // Set an interval to update the clock every second
    window.setInterval(updateClock, 1000);
}

// JavaScript for form submission
document.getElementById('form').addEventListener('submit', function(e) {
    // Prevent the form from submitting normally
    e.preventDefault();

    // Get the name and email values
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;

    // Validate the name (only first and last name, space separated)
    if (!/^([a-zA-Z]+) ([a-zA-Z]+)$/.test(name)) {
                // If name validation fails, alert the user and stop further execution
        alert('Invalid name. Please enter a first and last name.');
        return;
    }

    // Validate the email
    if (!/^[^@]+@[^@]+\.[^@]+$/.test(email)) {
        // If email validation fails, send error alert
        alert('Invalid email. Please enter a valid email address.');
        return;
    }

    // Create a new table row
    var newRow = document.createElement('tr');

    // Create the name and email cells
    var nameCell = document.createElement('td');
    var emailCell = document.createElement('td');

    // Set the cells' text
    nameCell.textContent = name;
    emailCell.textContent = email;

    // Append the cells to the new row
    newRow.appendChild(nameCell);
    newRow.appendChild(emailCell);

    // Append the new row to the table
    document.getElementById('my-table').appendChild(newRow);

    // Clear the form fields
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
});

// Initialise the clock when the window loads
window.onload = initClock;


