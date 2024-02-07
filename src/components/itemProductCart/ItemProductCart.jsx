import "./ItemProductCart.css";

const ItemProductCart = () => {
  return (
    <div className="content_product_cart">
        <img className="img_product_cart" src={require("../../assest/example-treme-1.webp")} alt="" />
        <div className="section_data_product_cart">
            <p className="text_nowrap text_item_cart name_item_cart">Collar de perlas</p>
            <p className="text_nowrap text_item_cart amout_item_cart">Qty: 1</p>
            <p className="text_nowrap text_item_cart name_item_cart">$ 15.000</p>
        </div>
        <input className="input_amount" value={2} type="number" name="" id="" />

    </div>
  )
}

export default ItemProductCart;