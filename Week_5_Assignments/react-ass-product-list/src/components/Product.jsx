function Product(props){
    const {product} = props;
    //state
    //return a react element
    return(
        <div className="grid shadow-2xl p-5 rounded-3xl bg-gradient-to-r from-blue-200 to-blue-500">
            <h2 className="font-bold pb-2.5 ">{product.title}</h2>
            <img src={product.img} alt="Image not available" /> 
            <p className="font-light">{product.price}</p>
            <p className="font-mono">{product.description}</p>
        </div>
    )
}
export default Product;