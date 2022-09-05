const getProducts = async () => {
    try {
        const response = await fetch('http://localhost:8080/api/v1/product');
        const data = await response.json();
        return Promise.resolve(data);
    } catch (error) {
        console.log(error);
        return Promise.reject(error);
    }
}

const renderProducts = (products) => {
    const items_div = document.querySelector('#items');
    if (items_div) {

        products.forEach( product => {
            items_div.innerHTML += `
                <a href="product_detail.html?productId=${product.id}">
                    <div class="item">
                        <div>
                            <img class="item__img" src="car.jpeg" alt="Car Image"/>
                        </div>
                        <div>
                            <h3 class="item__title"> ${product.name} </h3>
                            <div class="item__panel">
                                <p class="item__price"> Cena: PLN${product.price} </p>
                                <p class="item__buy" role="button"> Kup </p>
                            </div>
                        </div>
                    </div>    
                </a>     
            `;
        } );

    }
    else {
        throw new Error('Missing #items in DOM.');
    }
}

getProducts()
    .then( products => {
        renderProducts(products);
    } )
    .catch( error => {
        console.log('[DEBUG] Error: ' + error);
    });