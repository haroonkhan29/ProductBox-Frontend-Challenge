# Productbox Frontend Code Challenge

## Overview

Build RandoStore, an online store where users can add random items for sale and others can purchase them. You’ll create the frontend using ReactJS and the backend using NodeJS. The backend provides a simple REST API for managing items.

## The project screenshot is located in frontend/src/assets. You can view the project screenshot there.

## Getting Started

1. Clone the repository
   git clone <repository_url>
   cd <project_folder>

2. Install Backend Dependencies
   Navigate to the backend directory:

cd backend
Install backend dependencies:
npm install
Start the backend server:
node index.js
The backend will run on http://localhost:3000.

3. Install Frontend Dependencies
   Navigate to the frontend directory:

---

cd frontend
Install frontend dependencies:
npm install
Start the frontend server:
npm start
The frontend will run on http://localhost:3001.

## Backend API Example

Example data returned from the GET /items endpoint:
{
"data": {
"1": {
"id": 1,
"name": "King Size Bed",
"price": "300",
"img": "./img/bed.jpg"
},
"2": {
"name": "Comfy Slippers",
"price": "15",
"img": "./img/slippers.jpg",
"id": 2
},
"3": {
"id": 3,
"name": "CD Rack",
"price": "100",
"img": "./img/rack.jpg"
},
"4": {
"id": 4,
"name": "Glow Stick Bundle",
"price": "10",
"img": "./img/sticks.jpg"
},
"5": {
"id": 5,
"name": "Cookie Jar",
"price": "25",
"img": "./img/cookies.jpg"
},
"6": {
"name": "my project",
"price": "2000",
"img": "\thttps://compasscontentsolution.com/assets/phone-hN2fVx7P.png",
"id": 6
},
"7": {
"name": "Project",
"price": "10000",
"img": "https://compasscontentsolution.com/assets/SocialImage-ucZychiD.png",
"id": 7
},
"8": {
"name": "Haroon Afridi",
"price": "222",
"img": "https://compasscontentsolution.com/assets/frame-DGBRRHy5.png",
"id": 8
},
"9": {
"name": "King Size Bed",
"price": "30",
"img": "/img/bed.jpg",
"id": 9
},
"10": {
"name": "Profile Vist",
"price": "2000",
"img": "\thttps://compasscontentsolution.com/assets/howitworks1-IjajU8JK.png",
"id": 10
},
"11": {
"name": "Gender",
"price": "4000",
"img": "\thttps://compasscontentsolution.com/assets/howitworks2-XId8_7TM.png",
"id": 11
}
}
}

## Running the Application

Backend: Start the backend server first by running node index.js in the backend folder.
Frontend: Start the frontend by running npm start in the frontend folder.
Access:
Frontend: http://localhost:3001
Backend: http://localhost:3000

## Project Requirements Implement

Frontend Features:
Item Listing: Implement Display a list of all items available for sale.
Cart Functionality: Implement Show items in the cart and update it when items are added or removed.
Checkout Page: Implement a checkout page that displays all items the user has added to the cart.
Persistent Cart: Use localStorage to persist cart items across different browser tabs.

## Backend Features:

GET /items: Retrieve the list of all items.
POST /items: Add a new item to the list.
GET /items/:id: Get details for a specific item by ID.
DELETE /items/:id: Delete an item by its ID.

## Additional Features (Optional) Implement

Form Validation: Implement validation when adding new items to ensure data integrity.
Search/Filter Options: Implement Add functionality to search and filter items.
Dynamic Item Loading: Implement Load items dynamically without page refresh.
Optimize Assets: Implement Minify and bundle the frontend assets to improve performance.

## Questions / Problems / Stuck?

Email me haroon77.afridi@gmail.com
