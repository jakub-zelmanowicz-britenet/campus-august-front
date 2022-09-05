// ... metody

const query_string = window.location.search;
const url_params = new URLSearchParams(query_string);
const product_id = url_params.get('productId');