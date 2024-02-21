// DOM selection: Select the input element with the id 'fruit'
const input = document.querySelector('#fruit');

// DOM selection: Select the container for suggestions and the list within it
const suggestionsContainer = document.querySelector('.suggestions');
const suggestionsList = suggestionsContainer.querySelector('ul');

const fruit = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];

// Function to filter fruits based on the input string
function search(str) {
	return fruit.filter(fruitName => fruitName.toLowerCase().includes(str.toLowerCase()));
  }
  
  // Function to display suggestions in the suggestions container
  function showSuggestions(results) {
	suggestionsList.innerHTML = ''; // DOM manipulation: Clear previous suggestions
  
	if (results.length > 0) {
	  // Loop: Create and append list items for each suggestion
	  results.forEach(result => {
		const li = document.createElement('li'); // DOM creation: Create a new list item element
		li.textContent = result; // DOM manipulation: Set the text content of the list item
		suggestionsList.appendChild(li); // DOM manipulation: Append the list item to the suggestions list
	  });
  
	  suggestionsContainer.style.display = 'block'; // DOM manipulation: Show the suggestions container
	} else {
	  suggestionsContainer.style.display = 'none'; // DOM manipulation: Hide the suggestions container if no results
	}
  }
  
  // Function to handle the input event and update suggestions
  function searchHandler() {
	const inputValue = input.value.trim();
	const results = search(inputValue);
  
	// Conditional statement: Check if the input is empty
	if (inputValue === '') {
	  suggestionsContainer.style.display = 'none'; // DOM manipulation: Hide suggestions if the input is empty
	} else {
	  showSuggestions(results); // Function call: Display suggestions based on the input
	}
  }
  
  // Function to handle clicking on a suggestion
  function useSuggestion(e) {
	const selectedSuggestion = e.target.textContent;
	input.value = selectedSuggestion; // DOM manipulation: Set the input value to the selected suggestion
	suggestionsContainer.style.display = 'none'; // DOM manipulation: Hide suggestions after selecting one
  }
  
  // Listen for the input event to trigger the searchHandler function
  input.addEventListener('input', searchHandler);
  
  // Listen for click events on the suggestions list to trigger the useSuggestion function
  suggestionsList.addEventListener('click', useSuggestion);