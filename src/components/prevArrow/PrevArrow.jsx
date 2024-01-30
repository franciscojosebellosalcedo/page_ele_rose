const  PrevArrow=(props)=> {
	const { __, _, onClick } = props;
	return (
		<div className="container_icon_arrow" onClick={onClick}>
			<i className="uil uil-arrow-left arrow arrow_left" ></i>
		</div>
	);
}

export default PrevArrow;