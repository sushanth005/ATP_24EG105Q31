const products=[
    { id: 1, name: 'Laptop', price: 50000, stock: 10, category: 'electronics' },
    { id: 2, name: 'Phone', price: 30000, stock: 15, category: 'electronics' },
    { id: 3, name: 'Headphones', price: 2000, stock: 25, category: 'accessories' },
    { id: 4, name: 'Mouse', price: 500, stock: 50, category: 'accessories' },
    { id: 5, name: 'Keyboard', price: 1500, stock: 30, category: 'accessories' }
];

export function getProductById(id){
    const product = products.findIndex(p=> p.id === id);
    return product;
}

export function getAllProducts(){
    return products;
}

export function getProductsByCategory(cat){
    const product = products.filter(p=>p.category === cat);
    if(product === -1)
    {
        return "No product found";
    }
    else{
        return product;
    }
}

export function searchProducts(name){
    const product = products.filter(p=>p.name === name);
    return product;
}

export function checkStock(id, qty){
    const product = getProductById(id);
    return product && product.stock >= qty;
}

export function reduceStock(id, qty){
    const product = getProductById(id);
    if(product){
        product.stock -= qty;
    }
}