import { HEADERS } from "../constants/constants"
import { sendOrder } from "../service/order.service";

export const headersWithToken=(token)=>{
	HEADERS["access-x"] = `bearer ${token}`;
	return HEADERS;
}

export const compareObjects=(object1,object2)=>{
	const keys=Object.keys(object1);
	let aux=0;
	for (let index = 0; index < keys.length; index++) {
		const key = keys[index];
		if(typeof object1[`${key}`]==="string"){
			if(object1[`${key}`].trim()===object2[`${key}`].trim()){
				aux++;
			}else{
				if(aux>0){
					aux--;
				}
			}
		}else{
			if(object1[`${key}`]===object2[`${key}`]){
				aux++;
			}else{
				if(aux>0){
					aux--;
				}
			}
		}
	}
	if(aux ===keys.length) return true;
	else return false;
}

export const getRefressTokenLocalStorage=()=>{
	return localStorage.getItem("refressTokenEleRose");
}

export const getTotalPriceCart=(listItemCart)=>{
	let priceTotal=0;
	if(listItemCart.length>0){
		for (let index = 0; index < listItemCart.length; index++) {
			const item = listItemCart[index];
			const subTotal=item?.product.pricePromotion > 0 ? item?.product.pricePromotion * item.amount: item?.product.realPrice * item.amount
			priceTotal+=subTotal;
		}
		return priceTotal;
	}else{
		return 0;
	}
}

export const sendOrderUser=async(listProducts,user,token)=>{
	const totalPriceOrder=getTotalPriceCart(listProducts);
	const dataOrder={
		user:user._id,
		total:totalPriceOrder
	}
	const list=[]
	for (let index = 0; index < listProducts.length; index++) {
		const item = listProducts[index];
		list.push({product:item.product._id,amount:item.amount});
	}
	dataOrder["listProducts"]=list;
	return (await sendOrder(token,dataOrder)).data;

}

export const saveCartLocalStorage=(list)=>{
	localStorage.setItem("cart",JSON.stringify(list));
}
export const getCartLocalStorage=(list)=>{
	return JSON.parse(localStorage.getItem("cart"));
}

export const saveRefressTokenLocalStorage=(token)=>{
	localStorage.setItem("refressTokenEleRose",token);
}

export const isEmailValid = (email) => {
	const regex =
	  /[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*@[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[.][a-zA-Z]{2,5}/;
	return regex.test(email);
};

export const isValidObject=(object)=>{
	const listValues=[null,""," ",undefined,0];
	const keys=Object.keys(object);
	for (let index = 0; index < keys.length; index++) {
		const key = keys[index];
		if(listValues.includes(object[`${key}`])===true){
			return false;
		}
	}
	return true;
}

export const  formatPrice=(price) =>{
  return Math.round(price * 100) / 100
	.toLocaleString('es-MX', { style: 'currency', currency: 'MXN' });
}

export const formatDate=(fechaString)=> {
  const fecha = new Date(fechaString);

  const dia = fecha.getDate().toString().padStart(2, '0');
  const mes = (fecha.getMonth() + 1).toString().padStart(2, '0');
  const año = fecha.getFullYear();

  return `${dia}/${mes}/${año}`;
}