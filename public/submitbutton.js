firebase.initializeApp(firebaseConfig);

// Get a reference to the database service
const database = firebase.database();

// Submit the form data to Firebase
document.getElementById('volunteerForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent the form from submitting normally

  // Get form values
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;
  const timeSlot = document.getElementById('timeSlot').value;

  // Push data to Firebase
  database.ref('volunteers').push({
    name: name,
    email: email,
    phone: phone,
    timeSlot: timeSlot
  }).then(() => {
    // Data successfully saved
    alert('Registration successful!');
    // Optionally, clear the form fields
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('phone').value = '';
    document.getElementById('timeSlot').value = '';
  }).catch((error) => {
    // Handle errors
    console.error('Error saving data:', error);
    alert('An error occurred. Please try again later.');
  });
});