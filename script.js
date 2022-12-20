const form = document.getElementById('registration-form');
const holidaysList = document.getElementById('holidays-list');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  
  // Get the form data
  const formData = new FormData(form);
  const username = formData.get('username');
  const password = formData.get('password');
  
  // Check if the username and password are valid
  if (username === 'admin' && password === 'password') {
    // If the username and password are correct, fetch the holidays from the JSON file
    fetch('db.json')
      .then((response) => response.json())
      .then((data) => {
        // Clear the holidays list
        holidaysList.innerHTML = '';
        
        // Loop through the holidays and add them to the list
        data.holidays.forEach((holiday) => {
          const holidayItem = document.createElement('li');
          holidayItem.textContent = holiday.name;
          holidaysList.appendChild(holidayItem);
        });
      });
  } else {
    // If the username or password is invalid, show an error message
    const errorMessage = document.createElement('p');
    errorMessage.textContent = 'Invalid username or password';
    errorMessage.classList.add('error-message');
    form.appendChild(errorMessage);
  }
});
