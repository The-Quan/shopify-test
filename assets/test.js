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
