import { HEADERS } from "../constants/constants"
import { sendOrder } from "../service/order.service";

export const headersWithToken=(token)=>{
	HEADERS["access-token"] = `bearer ${token}`;
	return HEADERS;
}

export const getRefressTokenLocalStorage=()=>{
	return sessionStorage.getItem("refressTokenEleRose");
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
	try {
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
	} catch (error) {
		return error;
	}
}

export const saveCartLocalStorage=(list)=>{
	localStorage.setItem("cart",JSON.stringify(list));
}
export const getCartLocalStorage=(list)=>{
	return JSON.parse(localStorage.getItem("cart"));
}

export const saveRefressTokenLocalStorage=(token)=>{
	sessionStorage.setItem("refressTokenEleRose",token);
}

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