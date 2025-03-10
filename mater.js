async function fetchFabrics() {
    try {
        const response = await fetch("https://67cbeea23395520e6af6ab52.mockapi.io/fabrics");
        const fabrics = await response.json();
        
        const list = document.getElementById("fabric-list");
        list.innerHTML = ""; 

        fabrics.slice(0, 20).forEach(fabric => { 
            const card = document.createElement("div");
            card.classList.add("card");

            card.innerHTML = `
                <img src="${fabric.image_url}" alt="${fabric.name}">
                <h2>${fabric.name}</h2>
                <p>${fabric.description}</p>
                <span>${fabric.price} KZT</span>
            `;

            list.appendChild(card);
        });
    } catch (error) {
        console.error("Error fetching fabrics:", error);
    }
}

fetchFabrics();
