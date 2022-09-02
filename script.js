
// Create and initialize constant variables for the form data
const FORM = document.forms.input_data; 
const DESTINATION_NAME = FORM.elements.destination_name; 
const DESTINATION_LOCATION = FORM.elements.location; 
const IMG_LINK = FORM.elements.photo; 
const LOCATION_DESCRIPTION = FORM.elements.description; 


// Grab the input form with a query selector and add an event listener to our submit button
// NOTE: Query selector can grab by id, class name, or tag 
// NOTE: document is the entry point in the DOM
document.querySelector("#input_data").addEventListener("submit", handleInputData);
  

// Function to trigger when submit button is clicked
// When event happens an event object is created
function handleInputData(event) {

    // Prevent refresh 
    event.preventDefault(); 

    // NOTE: The read-only target property of the Event interface is a reference 
    // to the object onto which the event was dispatched. 
    // NOTE: event.target returns the DOM element, so you can retrieve any 
    // property/attribute that has a value 
    
    // Grab the destination name
    let destName = event.target.elements["destination_name"].value;
    // Grab the location name
    let locationName = event.target.elements["location"].value;
    // Grab the photo link
    let photoLink = event.target.elements["photo"].value;
    // Grab the destination description
    let destDescription = event.target.elements["description"].value;

    // Log our input values 
    console.log(destName); 
    console.log(locationName); 
    console.log(photoLink); 
    console.log(destDescription); 

    // Create our new destination 
    let destinationCard = createDestinationCard(destName, locationName, photoLink, destDescription);

    // Log our destination card
    console.log(destinationCard); 

    // Add newly created card and it's content to the DOM
    document.querySelector("#yellow_box").appendChild(destinationCard); 

    // Reset our input form data to empty strings
    resetInputData(); 
}

function createDestination(destName, locationName, photoLink, destDescription) {

    // 1. Create a div element
    let destElement = document.createElement("div"); 

    // 2. Set its class name to destination_object
    destElement.className = "destination_object";
    
    // 3. Create an image element
    let imgObj = document.createElement("img");
    imgObj.src = photoLink; 
    imgObj.alt = destName; 
        
    // Append image to the destination div
    destElement.appendChild(imgObj);

    // 4. Create a heading and add it to the dest element
    let destHeading = document.createElement("h3");
    destHeading.innerHTML = destName; 
    destElement.appendChild(destHeading); 

     // 5. Create a heading for the location
     let locationHeading = document.createElement("h4");
     locationHeading.innerHTML = locationName; 
     destElement.appendChild(locationHeading); 

     // 6. Create description paragraph
     let descriptionParagraph = document.createElement("p");
     descriptionParagraph.innerHTML = destDescription; 
     destElement.appendChild(descriptionParagraph); 
     
     // 7. Create the edit button 
     // <button type="button" class="btn btn-warning">Warning</button>
     // Create the edit (warning) button
     let editButton = document.createElement("button"); 
     editButton.className = "btn btn-warning";
     editButton.innerText = "Edit"; 
     destElement.appendChild(editButton); 

     // 8. Create the delete button
     // <button type="button" class="btn btn-danger">Danger</button>
     // Create a delete button
     let deleteButton = document.createElement("button"); 
     deleteButton.className = "btn btn-danger";
     deleteButton.innerText = "Delete";
     destElement.appendChild(deleteButton);  

     console.log(editButton.class);


    return destElement; 
}

function createDestinationCard(destName, locationName, photoLink, destDescription) {
    
// const card = `<div class="card" style="width: 18rem;">
//   <img class="card-img-top" src="..." alt="Card image cap">
//   <div class="card-body">
//     <h5 class="card-title">Card title</h5>
//     <p class="card-text">Some quick example text.</p>
//     <a href="#" class="btn btn-primary">Go somewhere</a>
//   </div>
// </div>`;


    // Create div element
    const card = document.createElement('div'); 
    // Set class name
    card.className = "card"; 
    // Set card width
    card.style.width = "18rem";

    // Create an image element 
    let cardImg = document.createElement("img");
    cardImg.src = photoLink; 
    // Set alt to the destination name
    cardImg.alt = destName; 
        
    // Append image to the destination div
    card.appendChild(cardImg);
    
    // Create a card heading and add it to the element
    let destinationHeading = document.createElement("h4");
    destinationHeading.className = "card-title";
    destinationHeading.id = "destination_"
    // Use innerText instead of innerHTML
    destinationHeading.innerText = destName; 
    card.appendChild(destinationHeading); 

    // Location heading 
    let locationHeading = document.createElement("h5");
    // Use innerText instead of innerHTML
    locationHeading.innerText = locationName; 
    card.appendChild(locationHeading); 

    // Description paragraph
    let descriptionParagraph = document.createElement("p");
    descriptionParagraph.innerText = destDescription; 
    card.appendChild(descriptionParagraph); 

    // Create the edit (warning) button
    // <button type="button" class="btn btn-warning">Warning</button>
    let editButton = document.createElement("button"); 
    editButton.className = "btn btn-warning";
    editButton.innerText = "Edit"; 
    editButton.addEventListener("click", editCard);
    card.appendChild(editButton); 
 
    // Create a delete button
    // <button type="button" class="btn btn-danger">Danger</button>
    let deleteButton = document.createElement("button"); 
    deleteButton.className = "btn btn-danger";
    deleteButton.innerText = "Delete";
    deleteButton.addEventListener("click", deleteCard);
    card.appendChild(deleteButton);  
    
    // Return the new card 
    return card; 

}


// Delete a card 
function deleteCard(event) {
    // Grab the parent element of the button (card)
    let card = event.target.parentElement;
    // Remove a card element 
    card.remove();
}

// Edit a card
function editCard(event) {

    // Grab the parent (card)
    let card = event.target.parentElement;

    // Edit the photo of the destination card
    let edit_photo = prompt("Enter a new destination photo:");
    card.children[0].src = edit_photo; 

    // Edit the name of the destination card
    let edit_name = prompt("Enter a new destination name:");
    card.children[1].innerText = edit_name; 

     // Edit the location of the destination card
     let edit_location = prompt("Enter a new location name:");
     card.children[2].innerText = edit_location; 

     // Edit the location of the destination card
     let edit_description = prompt("Enter a new description:");
     card.children[3].innerText = edit_description; 

}

// Reset all input field values to empty strings
function resetInputData() {
    DESTINATION_NAME.value = ""; 
    DESTINATION_LOCATION.value = ""; 
    IMG_LINK.value = ""; 
    LOCATION_DESCRIPTION.value = ""; 
}
