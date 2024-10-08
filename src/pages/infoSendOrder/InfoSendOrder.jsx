import React from 'react';
import NavBar from '../../components/navBar/NavBar';
import HeaderSection from '../../components/headerSection/HeaderSection';
import Footer from '../../components/footer/Footer';

const InfoSendOrder = () => {
	return (
		<section>
			<NavBar />
			<HeaderSection title={"Envíos"} />
			<div className='container_frequenty_questions'>
			<h2 className='text_frequenty_questions'>
				Domicilios y entregas
				</h2>
			<img className="info_icon" src={require("../../assest/icon-car.png")} alt="" />

			<p className='text_frequenty_questions'>
				Hacemos domicilios en Cartagena y envíos a toda Colombia mediante transportadoras como Envía, Interrapidísimo, Coordinadora o Servientrega.
			</p>
			<ul className="list_shape_shoopy">
				<li>
					<p>Recogida en Cartagena (Mirador de Zaragocilla): Gratis</p>
				</li>
				<li>
					<p>Domicilio en Cartagena: desde $5.000 (depende del barrio)</p>
				</li>
				<li>
					<p>Fuera de Cartagena: desde $8.500 (depende de la ciudad)</p>
				</li>
			</ul>
				<br />
				<p className='text_frequenty_questions'>
				Se indicará el valor exacto al hacer la solicitud de pedido dependiendo de la ciudad de destino. Después de despachado el pedido se enviará la información para el seguimiento de tu paquete.
				</p>

				<h2 className='text_frequenty_questions'>
				Tiempos de entrega
				</h2>

				<img className="info_icon" src={require("../../assest/time-delivery.png")} alt="" />
				<p className='text_frequenty_questions'>
				Una vez realizado el pago tu pedido será despachado más tardar al siguiente día hábil. Los tiempos de entrega aproximados son los siguientes:
				</p>

				<ul className="list_shape_shoopy">
				<li>
					<p>De 1 a 5 días hábiles para ciudades principales e intermedias</p>
				</li>
				<li>
					<p>De 5 o más días hábiles para otros municipios y poblaciones</p>
				</li>
			</ul>
		<br />
			<p className='text_frequenty_questions'>
				<strong>Nota:</strong> Tener en cuenta que los tiempos de entrega pueden variar por novedades de carretera o fechas especiales
			</p>

			</div>
			<Footer />
		</section>
	)
}

export default InfoSendOrder;