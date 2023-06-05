const wrap = document.querySelector('.wrap')
const navLinks = document.querySelectorAll('.filter_btn')

const getProductsWithFilter = (category) => {
    fetch('https://api.sampleapis.com/coffee/hot')
        .then((res) => res.json())
        .then((products) => {
            const filteredProducts = category === 'All'
                ? products
                : products.filter((item) => item.ingredients.includes(category));

            wrap.innerHTML = '';

            filteredProducts.forEach((item) => {
                wrap.innerHTML += `
            <div class="card">
              <img src="${item.image}"/>
              <p>${item.title}</p>
              <p>${item.description}</p>
            </div>
          `;
            });
        });
};

Array.from(navLinks).forEach((item) => {
    item.addEventListener('click', () => {
        wrap.innerHTML = '';
        getProductsWithFilter(item.dataset.category);
        console.log(item);
    });
});

getProductsWithFilter('All');