

function Product(props) //{x: {productObj: {}}}
{
    const {productObj} = props;
    //state
    //return a react element
    return(
        <div className="shadow-2xl shadow-zinc-700 rounded-2xl p-2 ring-2 ring-black">
            <h2 className="text-2xl text-blue-400">Product Component Details:</h2>
            <h3>Title: {productObj.title}</h3>
            <h4>Price: {productObj.price}</h4>
            <h5>Description: {productObj.description}</h5>
            <h4>Category: {productObj.category}</h4>
            <img src={productObj.image} />
            <h5>Rating: </h5>
            <h6>Rate:{productObj.rating.rate}</h6>
            <h6>Count:{productObj.rating.count}</h6>
            <h2></h2>
        </div>
    )   
}

export default Product;