window.onload = displayContent();
function displayContent() {
    const params = new URLSearchParams(window.location.search);
    const destination = params.get('destination');
    const cuisine = params.get('cuisine');

    let content = "";
    let headerColor = ""; 

if (destination === "rome" && cuisine === "asian") {
        content = "<h2>Rome - Asian Fusion Cuisine</h2><p>Discover the flavors of East Asia in the heart of Rome.</p>";
        headerColor = "#3c1551"; 
} else if (destination === "rome" && cuisine === "italian") {
    content = "<h2>Rome - Italian Cuisine</h2><p>Welcome to Rome! Enjoy the best Italian cuisine.</p>";
    headerColor = "#3c1551"; 
} else if (destination === "rome" && cuisine === "mexican") {
    content = "<h2>Rome - Mexican Cuisine</h2><p>Spicy and flavorful Mexican dishes await you in Rome.</p>";
    headerColor = "#3c1551"; 
} 

else if (destination === "paris" && cuisine === "asian") {
    content = "<h2>Paris - Asian Fusion Cuisine</h2><p>Explore the authentic East Asian flavors in Paris.</p>";
    headerColor = "#800000"; 
} else if (destination === "paris" && cuisine === "italian") {
    content = "<h2>Paris - Italian Cuisine</h2><p>Experience the exquisite Italian cuisine in the heart of Paris.</p>";
    headerColor = "#800000"; 
} else if (destination === "paris" && cuisine === "mexican") {
    content = "<h2>Paris - Mexican Cuisine</h2><p>Discover the zest of Mexico in Paris.</p>";
    headerColor = "#800000"; 
}

else if (destination === "yerevan" && cuisine === "asian") {
    content = "<h2>Yerevan - Asian Fusion Cuisine</h2><p>East Asian culinary excellence, now in Yerevan.</p>";
    headerColor = "#a14582"; 
} else if (destination === "yerevan" && cuisine === "italian") {
    content = "<h2>Yerevan - Italian Cuisine</h2><p>Italian gastronomy meets Armenian hospitality.</p>";
    headerColor = "#a14582"; 
} else if (destination === "yerevan" && cuisine === "mexican") {
    content = "<h2>Yerevan - Mexican Cuisine</h2><p>Yerevan welcomes the vibrant flavors of Mexico.</p>";
    headerColor = "#a14582"; }

else if (destination === "madrid" && cuisine === "asian") {
    content = "<h2>Madrid - Asian Fusion Cuisine</h2><p>Explore the wonders of East Asian cuisine in Madrid.</p>";
    headerColor = "#003566"; 
} else if (destination === "madrid" && cuisine === "italian") {
    content = "<h2>Madrid - Italian Cuisine</h2><p>Italian culinary masterpieces await in Madrid.</p>";
    headerColor = "#003566"; 
} else if (destination === "madrid" && cuisine === "mexican") {
    content = "<h2>Madrid - Mexican Cuisine</h2><p>The spirit of Mexico captured in Madrid's cuisine.</p>";
    headerColor = "#003566"; 
}

else if (destination === "losangeles" && cuisine === "asian") {
    content = "<h2>Los Angeles - Asian Fusion Cuisine</h2><p>East Asian culinary traditions shine in Los Angeles.</p>";
    headerColor = "#ffa31a"; 
} else if (destination === "losangeles" && cuisine === "italian") {
    content = "<h2>Los Angeles - Italian Cuisine</h2><p>Experience Italy's finest in Los Angeles.</p>";
    headerColor = "#ffa31a"; 
} else if (destination === "losangeles" && cuisine === "mexican") {
    content = "<h2>Los Angeles - Mexican Cuisine</h2><p>Vibrant Mexican flavors thrive in Los Angeles.</p>";
    headerColor = "#ffa31a"; 
}

else if (destination === "salzburg" && cuisine === "asian") {
    content = "<h2>Salzburg - Asian Fusion Cuisine</h2><p>East Asian cuisine finds a home in Salzburg.</p>";
    headerColor = "#336600"; 
} else if (destination === "salzburg" && cuisine === "italian") {
    content = "<h2>Salzburg - Italian Cuisine</h2><p>Italian elegance in the streets of Salzburg.</p>";
    headerColor = "#336600"; 
} else if (destination === "salzburg" && cuisine === "mexican") {
    content = "<h2>Salzburg - Mexican Cuisine</h2><p>The bold flavors of Mexico arrive in Salzburg.</p>";
    headerColor = "#336600"; 
}

    const contentPlaceholder = document.getElementById('content-placeholder');
    contentPlaceholder.innerHTML = content || "<p>Content not found for the selected combination.</p>";

    document.getElementsByClassName("header_class")[0].style.backgroundColor = headerColor;
    document.body.style.height = "100vh"
    console.log("headercolor", headerColor);

    if (!headerColor) header.style.backgroundColor = "#EAEAEA"; 
}
document.addEventListener('DOMContentLoaded', function() {
    // Assuming `restaurants` is a globally available array from `scripts.js`
    // This needs the script to be adjusted to directly define a `restaurants` array or to correctly populate it in localStorage.
    const restaurants = JSON.parse(localStorage.getItem('restaurants')); // Ensure this matches how you store the data

    function displayRandomRestaurant() {
        const params = new URLSearchParams(window.location.search);
        const city = params.get('city');
        const cuisine = params.get('cuisine');

        let filteredRestaurants = restaurants.filter(restaurant => restaurant.city === city && restaurant.cuisine === cuisine);

        if(filteredRestaurants.length > 0) {
            let randomIndex = Math.floor(Math.random() * filteredRestaurants.length);
            let restaurant = filteredRestaurants[randomIndex];
            document.getElementById('content-placeholder').innerHTML = `
                <div class="restaurant-card">
                    <img src="${restaurant.imageUrl}" alt="${restaurant.name}" class="restaurant-image">
                    <div class="restaurant-info">
                        <h2>${restaurant.name}</h2>
                        <p>Price Range: ${restaurant.priceRange}</p>
                        <p>Rating: ${restaurant.starRating} stars</p>
                        <p>Address: ${restaurant.address}</p>
                        <p>Opening Hours: ${restaurant.openingHours}</p>
                    </div>
                </div>
            `;
        } else {
            document.getElementById('content-placeholder').innerHTML = "<p>No restaurants found for the selected city and cuisine.</p>";
        }
    }

    displayRandomRestaurant(); // Display the first restaurant on load

    // Button 1: Display another restaurant
    document.querySelector('.buttons button:nth-child(1)').addEventListener('click', displayRandomRestaurant);

    // Button 2: Show pop-up
    document.querySelector('.buttons button:nth-child(2)').addEventListener('click', function() {
        alert('Good Choice! Bon Appétit');
    });
});
