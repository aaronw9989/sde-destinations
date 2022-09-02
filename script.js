

// Grab the input form with a query selector and add an event listener to our submit button
// NOTE: Query selector can grab by id, class name, or tag 
document.querySelector("#input_data").addEventListener("submit", handleInputData);
  

// Function to trigger when submit button is clicked
// When event happens an event object is created
function handleInputData(event) {

    // Prevent refresh 
    event.preventDefault(); 

    // Test if event handler works
    // alert("Submit button clicked!");
    
    // Get the data from the form
    /*
    let destName = document.getElementById("destination_name")
    console.log(destName);  
    */
    // let destName = document.querySelector("destination_name");


    let destName = event.target.elements["destination_name"].value;

    let locationName = event.target.elements["location"].value;

    // https://images.unsplash.com/photo-1570740753915-b7b204e7f2a0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dGltZSUyMHNxdWFyZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60
    let photoLink = event.target.elements["photo"].value;

    let destDescription = event.target.elements["description"].value;

    // Ctrl + Shift + L to create log
    console.log(destName); 
    console.log(locationName); 
    console.log(photoLink); 
    console.log(destDescription); 

    // Create our new destination 
    let destinationCard = createDestinationCard(destName, locationName, photoLink, destDescription);

    console.log("Hello");
    console.log(destinationCard); 

    // Add newly created card and it's content to the DOM
    document.querySelector("#yellow_box").appendChild(destinationCard); 
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
     
     // <button type="button" class="btn btn-warning">Warning</button>
     // Create the edit (warning) button
     let editButton = document.createElement("button"); 
     editButton.className = "btn btn-warning";
     editButton.innerText = "Edit"; 
     destElement.appendChild(editButton); 

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
    
    
// const card = `<div class="card" style="width: 18rem;">
//   <img class="card-img-top" src="..." alt="Card image cap">
//   <div class="card-body">
//     <h5 class="card-title">Card title</h5>
//     <p class="card-text">Some quick example text.</p>
//     <a href="#" class="btn btn-primary">Go somewhere</a>
//   </div>
// </div>`;


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
    alert("Hello user, this feature coming soon!");
}
