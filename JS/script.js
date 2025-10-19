// ---------------- SLIDESHOW ----------------
let index = 0;
const slides = document.querySelector(".slides");
const total = document.querySelectorAll(".slides img").length;

function showSlide(i) {
  index += i;
  if (index < 0) index = total - 1;
  if (index >= total) index = 0;
  slides.style.transform = `translateX(${-index * 100}%)`;
}

function plusSlides(i) {
  showSlide(i);
}

setInterval(() => showSlide(1), 8000);

document.addEventListener("DOMContentLoaded", () => {
  feather.replace();
});

// ---------------- DATA PRODUK ----------------
const productData = [
  {
    id: 1,
    nama: "Sepatu Futsal Ortuseight Catalyst Empire IN SE X IQBAL ISKANDAR",
    harga: 699000,
    category: "Futsal",
    gambar: "img/Ortuseightcatalystiqbaliskandar.png",
  },
  {
    id: 2,
    nama: "Sepatu Futsal Ortuseight Catalyst Legion V5 IN - Silver Pink",
    harga: 549000,
    category: "Futsal",
    gambar: "img/Ortuseightcatalystlegionv5.png",
  },
  {
    id: 3,
    nama: "Sepatu Futsal Ortuseight Catalyst Ballistic",
    harga: 349000,
    category: "Futsal",
    gambar: "img/SEPATUFUTSALORTUSEIGHTCATALYST_BALLISTIC.png",
  },
  {
    id: 4,
    nama: "Sepatu Futsal SPECS LIGHTSPEED REBORN META XR IN",
    harga: 699000,
    category: "Futsal",
    gambar: "img/SPECS_LIGHTSPEED_REBORN_META_XR_IN_-_SPECS_GA25.png",
  },
  {
    id: 5,
    nama: "Sepatu Futsal SPECS LIGHTSPEED REBORN IN - YELLOW CRESCENT GREEN",
    harga: 699000,
    category: "Futsal",
    gambar: "img/SPECS_SEPATU_FUTSAL_LIGHTSPEED_REBORN_IN_SAFETY_YELLOW_CRESCENT_GREEN.png",
  },
  {
    id: 6,
    nama: "Sepatu Futsal Ortuseught Catalyst Liberte V4 IN - Silver Aqua",
    harga: 549000,
    category: "Futsal",
    gambar: "img/OrtuseightCatalystLiberteV4INFutsalShoesSilver_Aqua.png",
  },
  {
    id: 7,
    nama: "Sepatu Futsal MILLS Voltasala Pro Apex BBS Elite Spare Mint Black Magenta Blue",
    harga: 799000,
    category: "Futsal",
    gambar: "img/MILLS_Sepatu_Futsal_Voltasala_Pro_Apex_BBS_Elite_Spare_Mint___Black___Magenta___Blue_9501703.png",
  },
  {
    id: 8,
    nama: "Sepatu Futsal MILLS XENON IN White Turquoise",
    harga: 349000,
    category: "Futsal",
    gambar: "img/MILLS_XENON_IN_-_WHITE_TURQUOISE-.png",
  },
  {
    id: 9,
    nama: "Sepatu Futsal SPECS SPEEDBLAZE 4 IN LIGHTEST SKY WHITE GOBLIN BLUE",
    harga: 549000,
    category: "Futsal",
    gambar: "img/SPECS_SEPATU_FUTSAL_SPEEDBLAZE_4_IN_LIGHTEST_SKY_WHITE_GOBLIN_BLUE_SPE1020277-.png",
  },
  {
    id: 10,
    nama: "Sepatu Futsal MILLS Flames 2.0 - Pink",
    harga: 399000,
    category: "Futsal",
    gambar: "img/futsalgalacticamorphmills.png",
  },
  {
    id: 11,
    nama: "Sepatu Bola Ortuseihght Catalyst Liberte V4 FG - White ORTRED",
    harga: 649000,
    category: "soccer",
    gambar: "img/ORTUSEIGHT_CATALYST_LIBERTE_V4_FG_WHITE_ORTRED.png",
  },
  {
    id: 12,
    nama: "Sepatu Bola MILLS XYCLOPS HELIOS PRIME FG - WHITE NEON GREEN",
    harga: 449000,
    category: "soccer",
    gambar: "img/MILLS_XYCLOPS_HELIOS_PRIME_FG_WHITE_NEON_GREEN_FOOTBALL_SHOES_9305804.png",
  },
  {
    id: 13,
    nama: "Sepatu Bola SPECS SPEEDBLAZE 4 FG - WHITE ASSYLUM FUTURE DUSK EASTER EGG",
    harga: 549000,
    category: "soccer",
    gambar: "img/SPECS_SEPATU_SEPAK_BOLA_SPEEDBLAZE_4_FG-WHITE_ASSYLUM_FUTURE_DUSK_EASTER_EGG_SPE101028.png",
  },
  {
    id: 14,
    nama: "Sepatu Bola Ortuseihght Catalyst Legion V5 FG - offwhite Gold",
    harga: 549000,
    category: "soccer",
    gambar: "img/Ortuseight_Catalyst_Legion_V5_FG_Football_Shoes_-_OffWhite_Gold.png",
  },
  {
    id: 15,
    nama: "Sepatu Bola SPECS ACCELERATOR LIGHTSPEED 4 NITRO CORE FG - WHITE SAND GREEN GECKO",
    harga: 649000,
    category: "soccer",
    gambar: "img/SPECS_SEPATU_SEPAK_BOLA_ACCELERATOR_LIGHTSPEED_4_NITRO_CORE_FG_WHITE_SAND_GREEN_GECKO_SPE1010133.png",
  },
  {
    id: 16,
    nama: "Sepatu Running Ardiles Infinity Raiton - Putih Merah",
    harga: 449000,
    category: "Running",
    gambar: "img/Ardiles_Nfinity_Raiton_Sepatu_Running_-_Putih_Merah.png",
  },
  {
    id: 17,
    nama: "Sepatu Running Ortuseight HYPERFUSE 3.0 - WHITE AQUA",
    harga: 749000,
    category: "Running",
    gambar: "img/ORTUSEIGHT_SEPATU_RUNNING_HYPERFUSE_3_0_WHITE_AQUA.png",
  },
  {
    id: 18,
    nama: "Sepatu Running 910 NINETEEN HAZE 2.0",
    harga: 499000,
    category: "Running",
    gambar: "img/910Nineteenhaze2.0.png",
  },
  {
    id: 19,
    nama: "Sepatu Running ASSICS NOVABLAST 5 WOMEN - WHITE CORAL REEF",
    harga: 1599000,
    category: "Running",
    gambar: "img/Novablast5women.png",
  },
  {
    id: 20,
    nama: "Sepatu Running Ortuseight HYPERBLAST 1.3",
    harga: 549000,
    category: "Running",
    gambar: "img/Ortuseighthyperblast1.3.png",
  },
];

// ---------------- PRODUK HOME & LIST ----------------
const productHome = document.getElementById("productHome");
const productList = document.getElementById("productList");

if (productHome || productList) {
  const favorites = JSON.parse(localStorage.getItem("favorites")) || [];

  function createCard(item) {
    const isFavorite = favorites.some((f) => f.id === item.id);
    const card = document.createElement("div");
    card.classList.add("product-card");
    card.innerHTML = `
      <div class="favorite-icon ${isFavorite ? "active" : ""}" data-id="${
      item.id
    }">
        <i data-feather="heart"></i>
      </div>
      <img src="${item.gambar}" alt="${item.nama}">
      <h3>${item.nama}</h3>
      <p class="harga">Rp ${item.harga.toLocaleString("id-ID")}</p>
    `;
    return card;
  }

  const selectedCategory = localStorage.getItem("selectedCategory");
  let filteredProducts = productData;

  if (productList && selectedCategory) {
    filteredProducts = productData.filter(
      (p) => p.category.toLowerCase() === selectedCategory.toLowerCase()
    );
  }

const target = productList || productHome;

let displayLimit = Infinity; 
const currentPage = window.location.pathname.split("/").pop();

if (currentPage === "index.html" && productHome) {
  displayLimit = 10; 
}

if (filteredProducts.length > 0) {
  filteredProducts.slice(0, displayLimit).forEach((item) => {
    const card = createCard(item);
    // buka detail saat diklik
    card.addEventListener("click", () => {
      localStorage.setItem("selectedProductId", item.id);
      window.location.href = "detail.html";
    });
    target.appendChild(card);
  });
} else {
  target.innerHTML = `
    <div class="no-category-message">
      <i data-feather="package"></i>
      <p>Tidak ada produk untuk kategori "${selectedCategory || "ini"}".</p>
    </div>
  `;
}


  feather.replace();

  document.querySelectorAll(".favorite-icon").forEach((icon) => {
    icon.addEventListener("click", (e) => {
      e.stopPropagation();
      const id = parseInt(e.currentTarget.dataset.id);
      const product = productData.find((p) => p.id === id);
      let favorites = JSON.parse(localStorage.getItem("favorites")) || [];
      const index = favorites.findIndex((f) => f.id === id);

      icon.classList.add("pop");
      setTimeout(() => icon.classList.remove("pop"), 300);

      if (index !== -1) {
        favorites.splice(index, 1);
        e.currentTarget.classList.remove("active");
      } else {
        favorites.push(product);
        e.currentTarget.classList.add("active");
      }

      localStorage.setItem("favorites", JSON.stringify(favorites));
    });
  });
}

// ---------------- SEARCH, FILTER & SORT (Halaman Product) ----------------
if (productList) {
  const searchInput = document.getElementById("searchInput");
  const categoryBtns = document.querySelectorAll(".category-btn");

  const selectedCategory = localStorage.getItem("selectedCategory");
  let currentCategory = selectedCategory ? selectedCategory.toLowerCase() : "all";
  let searchQuery = "";

  categoryBtns.forEach((btn) => {
    const btnCategory = btn.dataset.category.toLowerCase();
    if (btnCategory === currentCategory) {
      btn.classList.add("active");
    } else {
      btn.classList.remove("active");
    }
  });

  function renderFilteredProducts() {
    let filtered = productData.filter(
      (p) =>
        (currentCategory === "all" ||
          p.category.toLowerCase() === currentCategory) &&
        p.nama.toLowerCase().includes(searchQuery.toLowerCase())
    );

    productList.innerHTML = "";

    if (filtered.length === 0) {
      productList.innerHTML = `
        <div class="no-category-message">
          <i data-feather="package"></i>
          <p>Tidak ada produk ditemukan.</p>
        </div>
      `;
      feather.replace();
      return;
    }

    filtered.forEach((item) => {
      const card = document.createElement("div");
      card.classList.add("product-card");
      const isFavorite = JSON.parse(localStorage.getItem("favorites") || "[]")
        .some((f) => f.id === item.id);

      card.innerHTML = `
        <div class="favorite-icon ${isFavorite ? "active" : ""}" data-id="${item.id}">
          <i data-feather="heart"></i>
        </div>
        <img src="${item.gambar}" alt="${item.nama}">
        <h3>${item.nama}</h3>
        <p class="harga">Rp ${item.harga.toLocaleString("id-ID")}</p>
      `;

      card.addEventListener("click", () => {
        localStorage.setItem("selectedProductId", item.id);
        window.location.href = "detail.html";
      });

      productList.appendChild(card);
    });

    feather.replace();
    addFavoriteListeners();
  }

  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      searchQuery = e.target.value;
      renderFilteredProducts();
    });
  }

  categoryBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      categoryBtns.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      currentCategory = btn.dataset.category.toLowerCase();
      renderFilteredProducts();
    });
  });

  renderFilteredProducts();

  window.addEventListener("pageshow", () => {
    const currentPage = window.location.pathname.split("/").pop();
    if (currentPage !== "product.html") {
      localStorage.removeItem("selectedCategory");
    }
  });
}

function addFavoriteListeners() {
  document.querySelectorAll(".favorite-icon").forEach((icon) => {
    icon.addEventListener("click", (e) => {
      e.stopPropagation();
      const id = parseInt(e.currentTarget.dataset.id);
      const product = productData.find((p) => p.id === id);
      let favorites = JSON.parse(localStorage.getItem("favorites")) || [];
      const index = favorites.findIndex((f) => f.id === id);

      icon.classList.add("pop");
      setTimeout(() => icon.classList.remove("pop"), 300);

      if (index !== -1) {
        favorites.splice(index, 1);
        e.currentTarget.classList.remove("active");
      } else {
        favorites.push(product);
        e.currentTarget.classList.add("active");
      }

      localStorage.setItem("favorites", JSON.stringify(favorites));
    });
  });
}


// ---------------- FAVORITE PAGE ----------------
function showEmptyMessage(container) {
  container.style.display = "flex";
  container.style.flexDirection = "column";
  container.style.alignItems = "center";
  container.style.justifyContent = "center";
  container.style.height = "60vh";
  container.innerHTML = `
    <div class="no-favorite-message">
      <i data-feather="heart"></i>
      <p>Kamu belum menambahkan produk apa pun ke daftar favorit.</p>
    </div>
  `;
  feather.replace();
}

function renderFavorites() {
  const favoriteList = document.getElementById("favoriteList");
  if (!favoriteList) return;

  let favorites = JSON.parse(localStorage.getItem("favorites")) || [];
  favoriteList.innerHTML = "";

  if (favorites.length === 0) {
    showEmptyMessage(favoriteList);
    return;
  }

  favorites.forEach((item) => {
    const card = document.createElement("div");
    card.classList.add("product-card");

    // isi kartu produk
    card.innerHTML = `
      <div class="remove-icon" data-id="${item.id}">
        <i data-feather="trash-2"></i>
      </div>
      <img src="${item.gambar}" alt="${item.nama}">
      <h3>${item.nama}</h3>
      <p>Rp ${item.harga.toLocaleString("id-ID")}</p>
    `;

    // klik kartu → buka detail produk
    card.addEventListener("click", (e) => {
      // supaya tombol hapus tidak ikut membuka detail
      if (!e.target.closest(".remove-icon")) {
        localStorage.setItem("selectedProductId", item.id);
        window.location.href = "detail.html";
      }
    });

    favoriteList.appendChild(card);
  });

  feather.replace();

  // event untuk tombol hapus
  document.querySelectorAll(".remove-icon").forEach((icon) => {
    icon.addEventListener("click", (e) => {
      e.stopPropagation(); // mencegah klik membuka detail
      const id = parseInt(e.currentTarget.dataset.id);
      favorites = favorites.filter((f) => f.id !== id);
      localStorage.setItem("favorites", JSON.stringify(favorites));
      renderFavorites();
    });
  });
}


if (document.getElementById("favoriteList")) {
  renderFavorites();
}

// ---------------- TESTIMONI TOGGLE ----------------
document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("toggleBtn");
  if (!btn) return;

  const boxes = Array.from(document.querySelectorAll(".Testimoni-box"));
  const delay = 200;

  btn.addEventListener("click", () => {
    const hiddenBoxes = boxes.filter((b) => b.classList.contains("hidden"));
    if (hiddenBoxes.length > 0) {
      btn.textContent = "Hide Review";
      hiddenBoxes.forEach((box, index) => {
        setTimeout(() => {
          box.classList.remove("hidden");
        }, index * delay);
      });
    } else {
      btn.textContent = "See All Review";
      const extraBoxes = boxes.slice(6).reverse();
      extraBoxes.forEach((box, i) => {
        setTimeout(() => {
          box.classList.add("hidden");
        }, i * delay);
      });
    }
  });
});

// ---------------- CATEGORY CLICK (di halaman utama) ----------------
function goToCategory(category) {
  localStorage.setItem("selectedCategory", category);
  window.location.href = "product.html";
}

// ---------------- RESET CATEGORY SAAT USER KELUAR DARI HALAMAN PRODUCT ----------------
window.addEventListener("pageshow", () => {
  const currentPage = window.location.pathname.split("/").pop();
  if (currentPage !== "product.html") {
    localStorage.removeItem("selectedCategory");
  }
});


document.addEventListener("DOMContentLoaded", () => {
  feather.replace();

  const img = document.getElementById("detailImage");
  const name = document.getElementById("detailName");
  const price = document.getElementById("detailPrice");

  // pastikan ini hanya dijalankan di halaman detail
  if (img && name && price) {
    const productId = localStorage.getItem("selectedProductId");
    const product = productData.find((p) => p.id === parseInt(productId));

    if (!product) {
      name.textContent = "Produk tidak ditemukan";
      return;
    }

    // render detail produk
    img.src = product.gambar;
    name.textContent = product.nama;
    price.textContent = `Rp ${product.harga.toLocaleString("id-ID")}`;

    // ===== ADD TO CART =====
    const addToCartBtn = document.getElementById("addToCart");
    if (addToCartBtn) {
      addToCartBtn.addEventListener("click", () => {
        const ukuran = document.getElementById("productSize").value;
        if (!ukuran) return alert("Silakan pilih ukuran terlebih dahulu!");

        const cartItem = {
          id: product.id,
          nama: product.nama,
          kategori: product.category,
          harga: product.harga,
          gambar: product.gambar,
          ukuran,
          jumlah: 1,
        };

        let cart = JSON.parse(localStorage.getItem("cart")) || [];
        const existing = cart.find(
          (item) => item.id === product.id && item.ukuran === ukuran
        );

        if (existing) existing.jumlah += 1;
        else cart.push(cartItem);

        localStorage.setItem("cart", JSON.stringify(cart));
        alert(`✅ ${product.nama} (Size ${ukuran}) ditambahkan ke keranjang!`);
        updateCartCount();
      });
    }

    // ===== WISHLIST =====
    const wishlistBtn = document.getElementById("wishlistBtn");
    if (wishlistBtn) {
      let favorites = JSON.parse(localStorage.getItem("favorites")) || [];
      const isFavorite = favorites.some((f) => f.id === product.id);
      if (isFavorite) wishlistBtn.classList.add("active");

      wishlistBtn.addEventListener("click", (e) => {
        e.preventDefault();
        favorites = JSON.parse(localStorage.getItem("favorites")) || [];
        const index = favorites.findIndex((f) => f.id === product.id);

        if (index !== -1) {
          favorites.splice(index, 1);
          wishlistBtn.classList.remove("active");
        } else {
          favorites.push(product);
          wishlistBtn.classList.add("active");
        }

        localStorage.setItem("favorites", JSON.stringify(favorites));
      });
    }
  }

  // render cart kalau di halaman cart
  if (document.getElementById("cartList")) renderCart();
  updateCartCount();
});



// ====== RENDER KERANJANG ======
function renderCart() {
  const cartList = document.getElementById("cartList");
  const cartTotal = document.getElementById("cartTotal");
  if (!cartList || !cartTotal) return;

  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cartList.innerHTML = "";

  if (cart.length === 0) {
    cartList.innerHTML = `
      <div class="empty-cart">
        <i data-feather="shopping-cart"></i>
        <p>Keranjang kamu masih kosong.</p>
      </div>`;
    cartTotal.textContent = "Rp 0";
    feather.replace();
    return;
  }

  let total = 0;
  cart.forEach((item, index) => {
    const card = document.createElement("div");
    card.classList.add("cart-item");
    card.innerHTML = `
      <img src="${item.gambar}" alt="${item.nama}">
      <div class="cart-info">
        <h3>${item.nama}</h3>
        <p>Kategori: ${item.kategori}</p>
        <p>Ukuran: ${item.ukuran}</p>
        <p>Harga: Rp ${item.harga.toLocaleString("id-ID")}</p>
        <div class="cart-quantity">
          <button class="minus" data-index="${index}">-</button>
          <span>${item.jumlah}</span>
          <button class="plus" data-index="${index}">+</button>
        </div>
      </div>
      <div class="cart-remove" data-index="${index}">
        <i data-feather="trash-2"></i>
      </div>`;
    cartList.appendChild(card);
    total += item.harga * item.jumlah;
  });

  cartTotal.textContent = `Rp ${total.toLocaleString("id-ID")}`;
  feather.replace();

  document
    .querySelectorAll(".plus")
    .forEach((btn) =>
      btn.addEventListener("click", (e) =>
        updateQuantity(e.currentTarget.dataset.index, 1)
      )
    );
  document
    .querySelectorAll(".minus")
    .forEach((btn) =>
      btn.addEventListener("click", (e) =>
        updateQuantity(e.currentTarget.dataset.index, -1)
      )
    );
  document
    .querySelectorAll(".cart-remove")
    .forEach((btn) =>
      btn.addEventListener("click", (e) =>
        removeItem(e.currentTarget.dataset.index)
      )
    );
}

// ====== UPDATE JUMLAH BARANG ======
function updateQuantity(index, change) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart[index].jumlah += change;
  if (cart[index].jumlah <= 0) cart.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(cart));
  renderCart();
  updateCartCount();
}

// ====== HAPUS BARANG ======
function removeItem(index) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(cart));
  renderCart();
  updateCartCount();
}

// ====== UPDATE JUMLAH DI IKON NAVBAR ======
function updateCartCount() {
  const cartCount = document.getElementById("cartCount");
  if (!cartCount) return;

  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const total = cart.reduce((sum, i) => sum + i.jumlah, 0);

  cartCount.textContent = total;
  cartCount.style.display = total > 0 ? "flex" : "none";
}

// Fungsi buka/tutup popup
function openPopup(type) {
  const popup = document.getElementById(type === "chat" ? "popupChat" : "popupShare");
  if (popup) popup.style.display = "flex";
}

function closePopup(type) {
  const popup = document.getElementById(type === "chat" ? "popupChat" : "popupShare");
  if (popup) popup.style.display = "none";
}

// Tutup popup kalau klik di luar kotak
window.addEventListener("click", (e) => {
  document.querySelectorAll(".popup-overlay").forEach((popup) => {
    if (e.target === popup) popup.style.display = "none";
  });
});

// Pasangkan event listener ke tombol
document.getElementById("chatBtn")?.addEventListener("click", (e) => {
  e.preventDefault();
  openPopup("chat");
});

document.getElementById("shareBtn")?.addEventListener("click", (e) => {
  e.preventDefault();
  openPopup("share");
});

// ====== FITUR CHECKOUT ======
document.addEventListener("DOMContentLoaded", () => {
  const checkoutBtn = document.getElementById("checkoutBtn");
  const checkoutModal = document.getElementById("checkoutModal");
  const checkoutDetails = document.getElementById("checkoutDetails");
  const checkoutTotal = document.getElementById("checkoutTotal");
  const confirmCheckout = document.getElementById("confirmCheckout");
  const closeCheckout = document.getElementById("closeCheckout");

  if (!checkoutBtn) return; // hanya jalankan jika ada tombol checkout

  checkoutBtn.addEventListener("click", () => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    checkoutDetails.innerHTML = "";
    let total = 0;

    if (cart.length === 0) {
      alert("Keranjang kamu masih kosong!");
      return;
    }

    cart.forEach((item) => {
      const div = document.createElement("div");
      div.classList.add("checkout-item");
      div.innerHTML = `
        <p>${item.nama} (Size ${item.ukuran}) x${item.jumlah}</p>
        <p>Rp ${(item.harga * item.jumlah).toLocaleString("id-ID")}</p>
      `;
      checkoutDetails.appendChild(div);
      total += item.harga * item.jumlah;
    });

    checkoutTotal.textContent = `Rp ${total.toLocaleString("id-ID")}`;
    checkoutModal.style.display = "flex";
  });

  confirmCheckout?.addEventListener("click", () => {
    localStorage.removeItem("cart");
    renderCart(); 
    updateCartCount();
    checkoutModal.style.display = "none";
    alert("✅ Checkout berhasil! Terima kasih telah berbelanja!");
  });

  closeCheckout?.addEventListener("click", () => {
    checkoutModal.style.display = "none";
  });
});
