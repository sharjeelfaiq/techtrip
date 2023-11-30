import { PRODUCTS_DATA } from "../Assets/ProductData";
import Product from "../Components/Product"

const Shop = () => {
    return (
        <div className="mx-5 my-10 px-5">
            <h1 className="text-6xl font-semibold text-center my-16">TechTrip</h1>
            <div className="grid grid-cols-3 gap-4">
             {PRODUCTS_DATA.map((product, index) => (
                <Product image={product.image} name={product.name} price={product.price} id={product.id} key={index} />
             ))}
            </div>
        </div>
    );
};

export default Shop;
