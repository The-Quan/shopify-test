document.getElementById('product-sort').addEventListener('change', function () {
    const sortType = this.value;
    const productList = document.querySelector('.product-list');
    const products = Array.from(productList.children);

    const sortedProducts = products.sort((a, b) => {
        const titleA = a.getAttribute('data-title').toLowerCase();
        const titleB = b.getAttribute('data-title').toLowerCase();
        const priceA = parseFloat(a.getAttribute('data-price').replace(/,/g, '')) || 0; // Remove commas if any
        const priceB = parseFloat(b.getAttribute('data-price').replace(/,/g, '')) || 0;

        if (sortType === 'alphabetical-az') return titleA.localeCompare(titleB);
        if (sortType === 'alphabetical-za') return titleB.localeCompare(titleA);
        if (sortType === 'price-low-to-high') return priceA - priceB;
        if (sortType === 'price-high-to-low') return priceB - priceA;

        return 0; // Default sorting
    });

    // Clear and re-append sorted products
    productList.innerHTML = '';
    sortedProducts.forEach((product) => productList.appendChild(product));
});
  
document.addEventListener("DOMContentLoaded", function () {
    const productList = document.querySelector(".product-list");
    const products = document.querySelectorAll(".btn-content");
    const prevButton = document.querySelector(".slide-prev");
    const nextButton = document.querySelector(".slide-next");
  
    let currentIndex = 0;
    const productWidth = products[0].offsetWidth + 20; // Độ rộng của mỗi sản phẩm + khoảng cách
  
    // Hàm cập nhật vị trí slider
    function updateSlider() {
      productList.style.transform = `translateX(-${currentIndex * productWidth}px)`;
    }
  
    // Nút "Next"
    nextButton.addEventListener("click", () => {
      if (currentIndex < products.length - 1) {
        currentIndex++;
        updateSlider();
      }
    });
  
    // Nút "Prev"
    prevButton.addEventListener("click", () => {
      if (currentIndex > 0) {
        currentIndex--;
        updateSlider();
      }
    });
  
    // Đảm bảo slider không bị lỗi khi load
    window.addEventListener("resize", () => {
      productList.style.transform = `translateX(-${currentIndex * productWidth}px)`;
    });
  });
  