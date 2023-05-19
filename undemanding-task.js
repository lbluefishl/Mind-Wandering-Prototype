// Get the number container and choice buttons
const numberContainer = document.getElementById('number-container');
const oddButton = document.getElementById('odd-button');
const evenButton = document.getElementById('even-button');




showNumber();
  // Function to generate a random number
  function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  // Function to display a new number on the screen
  function showNumber() {
    const number = getRandomNumber(1, 1000); // Generate a random number
    numberContainer.textContent = number; // Display the number
  }



  // Event listener for the choice buttons
  oddButton.addEventListener('click', handleChoice);
  evenButton.addEventListener('click', handleChoice);


function handleChoice(event) {


  // Hide the number container and choice buttons
  numberContainer.textContent = '';
  oddButton.style.display = 'none';
  evenButton.style.display = 'none';

  // Show a new number after a random delay (3-10 seconds)
  setTimeout(() => {
    numberContainer.textContent = '';
    oddButton.style.display = 'inline-block';
    evenButton.style.display = 'inline-block';
    showNumber();
  }, getRandomNumber(3000, 10000));
}


// Redirect the page after one minute
setTimeout(() => {
    window.location.href = `${localStorage.getItem("currentTask")}-outcome.html`; 
  }, 20000); // 60000 milliseconds = 1 minute
  

  