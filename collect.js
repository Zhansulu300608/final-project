document.addEventListener("DOMContentLoaded", async function () {
    const productContainer = document.getElementById("product-list");
    const tabs = document.querySelectorAll(".tab");

    let products = {
        latest: [],
        best: [],
        est: [],
        st: [],
        t: []
    };

    async function fetchData() {
        try {
            const response = await fetch("https://script.google.com/macros/s/AKfycbx1Wr-iHcocMZak_aAldw9iZS2bB9bWOoXdZb017ySn0PxBA4blmf82ScZ7qB8C86tAWA/exec");
            if (!response.ok) {
                throw new Error("Error fetching data");
            }
            const data = await response.json();
            
         
            products.latest = data.slice(0, 6);
            products.best = data.slice(6, 9);
            products.est = data.slice(9, 12);
            products.st = data.slice(12, 15);
            products.t = data.slice(15, 18);


            renderProducts("latest");
        } catch (error) {
            console.error("ERROR", error);
        }
    }

    function renderProducts(category) {
        productContainer.innerHTML = "";
        products[category].forEach(product => {
            const productCard = document.createElement("div");
            productCard.className = "product-card";
            productCard.innerHTML = `
                <img src="${product.image}" alt="${product.title}">
                <h3>${product.title}</h3>
                <p>${product.description}</p>
                <p class="price">${product.price} KZT</p>
                <button class="buy-now" data-title="${product.title}" data-price="${product.price}">Buy Now</button>
            `;
            productContainer.appendChild(productCard);
        });

       
        document.querySelectorAll(".buy-now").forEach(button => {
            button.addEventListener("click", (event) => {
                let title = event.target.getAttribute("data-title");
                let price = event.target.getAttribute("data-price");
                let phoneNumber = "77055150966";
                let message = `Hello! I want to buy: ${title} for ${price} KZT.`;
                let whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
                window.open(whatsappURL, "_blank");
            });
        });
    }

   
    tabs.forEach(tab => {
        tab.addEventListener("click", function () {
            const category = this.getAttribute("data-category");
            renderProducts(category);
            tabs.forEach(t => t.classList.remove("active"));
            this.classList.add("active");
        });
    });

    await fetchData();
});






// // sheet
// async function fetchData() {
//     try {
//         const response = await fetch("https://script.google.com/macros/s/AKfycbxD_mBR4F7xx9NxIhi9AJHZAAm1mhe981init9PRoKGUt_D-tiXYLgUenWlKQW3yOsD2Q/exec");
//         if (!response.ok) {
//             throw new Error("Error fetching data");
//         }
//         const data = await response.json();
//         let container = document.getElementById("product-list");
//         if (!container) return;
//         container.innerHTML = "";

//         data.forEach(item => {
//             let div = document.createElement("div");
//             div.classList.add("card");
//             div.innerHTML = `
//                 <img src="${item.image}" alt="${item.title}">
//                 <h3>${item.title}</h3>
//                 <p>${item.description}</p>
//                 <p class="price">${item.price} KZT</p>
//                 <button class="buy-now" data-title="${item.title}" data-price="${item.price}">Buy Now</button>
//             `;
//             container.appendChild(div);
//         });

        
//         document.querySelectorAll(".buy-now").forEach(button => {
//             button.addEventListener("click", (event) => {
//                 let title = event.target.getAttribute("data-title");
//                 let price = event.target.getAttribute("data-price");
//                 let phoneNumber = "77055150966"; 
//                 let message = `Hello! I want to buy: ${title} for ${price} KZT.`;
//                 let whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
//                 window.open(whatsappURL, "_blank");
//             });
//         });

//     } catch (error) {
//         console.error("ERROR", error);
//     }
// }

// document.addEventListener("DOMContentLoaded", fetchData);

  
// new

document.addEventListener('DOMContentLoaded', () => {
   

    const thumbnails = document.querySelectorAll('.thumbnails img');
    const mainImage = document.querySelector('.main-image img');
    let currentIndex = 0;
    let autoSlideInterval;

  
    function changeImage(index) {
        thumbnails.forEach(t => t.classList.remove('active'));
        thumbnails[index].classList.add('active');
        mainImage.src = thumbnails[index].src;
        currentIndex = index;
    }

   
    function startAutoSlide() {
        autoSlideInterval = setInterval(() => {
            currentIndex = (currentIndex + 1) % thumbnails.length; 
            changeImage(currentIndex);
        }, 3000); 
    }

    
    function pauseAutoSlide() {
        clearInterval(autoSlideInterval);
        setTimeout(startAutoSlide, 5000); 
    }

    
    thumbnails.forEach((thumb, index) => {
        thumb.addEventListener('click', () => {
            changeImage(index);
            pauseAutoSlide();
        });
    });

  
    const nextButton = document.querySelector('.next-btn'); 
    const thumbnailContainer = document.querySelector('.thumbnails');

    if (nextButton && thumbnailContainer) {
        nextButton.addEventListener('click', () => {
            thumbnailContainer.scrollBy({
                left: 200,
                behavior: 'smooth'
            });
            pauseAutoSlide();
        });
    }

   
    if (thumbnails.length > 0) {
        changeImage(0);
        startAutoSlide();
    }
});
