import { useEffect, useState } from "react";
import "./ToUp.css";

const ToUp = () => {
	const [isActiveToUp,setIsActiveToUp]=useState(false);

	const toUp=(e)=>{
		e.preventDefault();
		window.scrollTo({
			top:0,behavior:"smooth"
		});
		setIsActiveToUp(false);
	}

	useEffect(()=>{
		window.addEventListener("scroll",()=>{
			if(window.scrollY > 200){
				setIsActiveToUp(true);
			}else{
				setIsActiveToUp(false);
			}
		});
	},[ ]);
	return (
		<i onClick={(e)=>toUp(e)} className={`uil uil-arrow-up top_up_icon ${isActiveToUp === true ? "see_to_up":""}`}></i>
	)
}

export default ToUp;