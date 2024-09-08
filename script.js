const selectElement = document.getElementById('options');

// localStorage.setItem('categoryNumber', 9);
// console.log(localStorage.getItem('categoryNumber'));
// Add an event listener for the 'change' event
selectElement.addEventListener('change', function() {
  // Get the selected option's value
  const selectedValue = selectElement.value;
  
  // Check if any option is selected
  if (selectedValue == 'General Knowledge') {
    localStorage.setItem('categoryNumber', 9);
    console.log(localStorage.getItem('categoryNumber'));
  }  if (selectedValue == 'Books') {
    localStorage.setItem('categoryNumber', 10);
    console.log(localStorage.getItem('categoryNumber'));
  } else if (selectedValue == 'Film') {
    localStorage.setItem('categoryNumber', 11);
    console.log(localStorage.getItem('categoryNumber'));
  }
  else if (selectedValue == 'Music') {
    localStorage.setItem('categoryNumber', 12);
    console.log(localStorage.getItem('categoryNumber'));
  }
  // else if (selectedValue == 'Theatres') {
  //   localStorage.setItem('categoryNumber', 13);
  //   console.log(localStorage.getItem('categoryNumber'));
  // }
  else if (selectedValue == 'TV') {
    localStorage.setItem('categoryNumber', 14);
    console.log(localStorage.getItem('categoryNumber'));
  } else {
    console.log('No option selected');
  }
});
