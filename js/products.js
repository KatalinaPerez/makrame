// products.js
const products = [
    { id: 1, name: "Aros Flor", category: "aros", price: 5000, favorite: false },
    { id: 2, name: "Llavero Hoja", category: "llaveros", price: 3000, favorite: false },
    { id: 3, name: "Collar Luna", category: "collares", price: 7000, favorite: false }
  ];
  
  const productContainer = document.getElementById("products");
  const categoryFilter = document.getElementById("categoryFilter");
  const priceFilter = document.getElementById("priceFilter");
  
  function renderProducts(productsToRender) {
    productContainer.innerHTML = "";
    productsToRender.forEach(product => {
      productContainer.innerHTML += `
        <div class="col-md-4 mb-4">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">${product.name}</h5>
              <p class="card-text">Precio: $${product.price}</p>
              <button class="btn ${product.favorite ? 'btn-success' : 'btn-outline-success'}" onclick="toggleFavorite(${product.id})">
                ${product.favorite ? 'Quitar de Favoritos' : 'Agregar a Favoritos'}
              </button>
            </div>
          </div>
        </div>`;
    });
  }
  
  function toggleFavorite(id) {
    const product = products.find(p => p.id === id);
    if (product) {
      product.favorite = !product.favorite;
      renderProducts(products);
    }
  }
  
  function filterProducts() {
    let filtered = [...products];
  
    if (categoryFilter.value) {
      filtered = filtered.filter(p => p.category === categoryFilter.value);
    }
  
    if (priceFilter.value === "asc") {
      filtered.sort((a, b) => a.price - b.price);
    } else if (priceFilter.value === "desc") {
      filtered.sort((a, b) => b.price - a.price);
    }
  
    renderProducts(filtered);
  }
  
  categoryFilter.addEventListener("change", filterProducts);
  priceFilter.addEventListener("change", filterProducts);
  
  renderProducts(products);
  