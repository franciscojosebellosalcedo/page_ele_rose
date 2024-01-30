const  NextArrow=(props)=> {
	const { __, _, onClick } = props;
	return (
		<div className="container_icon_arrow" onClick={onClick}>
			<i className="uil uil-arrow-right arrow arrow_right" ></i>
		</div>
	);
}

export default NextArrow;