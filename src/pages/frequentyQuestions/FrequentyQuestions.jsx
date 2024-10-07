import { Collapse } from 'antd';
import React from 'react';
import Footer from '../../components/footer/Footer';
import HeaderSection from '../../components/headerSection/HeaderSection';
import NavBar from '../../components/navBar/NavBar';
import "./FrequentyQuestions.css";



const FrequentyQuestions = () => {

	const items = [
		{
			key: '1',
			label: '¿Dónde están ubicados?',
			children: <p>
				Somos tienda virtual ubicada actualmente en Cartagena Bolívar.

			</p>,
		},
		{
			key: '2',
			label: '¿Hacen envíos a toda Colombia?',
			children: <p>
				Sí, hacemos envíos a toda Colombia por transportadoras como Envía, Interrapidísimo, Coordinadora y Servientrega.
			</p>,
		},
		{
			key: '3',
			label: '¿Cómo es el proceso de compra?',
			children: <ul className="list_shape_shoopy">
			<li>
				<p> Añade al carrito los productos que desear pedir</p>
			</li>
			<li>
				<p>Da clic en pedir por whatsApp</p>
			</li>
			<li>
				<p>Inicia sesión o si aún no estás registrado realiza el proceso de registro agregando los datos solicitados</p>
			</li>
			<li>
				<p>El pedido será enviado y se le notificará por whatsApp la información para el envío dependiendo de la dirección ingresada y el valor total del pedido</p>
			</li>
			<li>
				<p>Realiza el pago del total (productos + envío) por cualquiera de los medios de pago disponibles</p>
			</li>
			<li>
				<p>Realizamos el envío de tu pedido y te mandamos la información para el seguimiento de tu paquete</p>
			</li>
		</ul>,
		},
		{
			key: '3',
			label: '¿Cuáles son los métodos de pago?',
			children: <p>
				Los medios de pago disponibles actualmente son Nequi y Daviplata.
			</p>,
		},
		{
			key: '4',
			label: '¿Manejan pago contra entrega?',
			children: <p>
				Sólo para domicilios en Cartagena y envíos a ciudades cercanas, teniendo en cuenta que el valor de un envío contra entrega es mayor al de un envío normal y depende del monto del pedido.			</p>,
		},
		{
			key: '5',
			label: '¿Cuánto tiempo tarda en llegar mi pedido?',
			children:
			<>
				<p>
					Una vez realizado el pago tu pedido será despachado más tardar al siguiente día hábil. Los tiempos de entrega aproximados son los siguientes:
				</p>

				<ul className="list_shape_shoopy" style={{margin: "10px"}}>
				<li>
					<p>De 1 a 5 días hábiles para ciudades principales e intermedias.</p>
				</li>
				<li>
					<p>De 5 o más días hábiles para otros municipios y poblaciones.</p>
				</li>
				</ul>
			</>
		},
		{
			key: '6',
			label: '¿Qué cuidados debo tener con los accesorios?',
			children: <ul className="list_shape_shoopy">
			<li>
				<p>Evita el contacto con el agua</p>
			</li>
			<li>
				<p>Póntelos después de aplicar perfumes, cremas o productos de belleza</p>
			</li>
			<li>
				<p>Evita hacer ejercicio con ellos</p>
			</li>
			<li>
				<p>Evita el contacto con productos químicos</p>
			</li>
			<li>
				<p>Guárdalos por separado en un espacio limpio y seco</p>
			</li>
		</ul>,
		},

		{
			key: '7',
			label: '¿Venden al por mayor?',
			children: <p>
				No, aún no manejamos ventas al por mayor pero si deseas accesorios para recordatorios te ofrecemos descuentos.
			</p>,
		},
	];

	return (
		<section>
			<NavBar />
			<HeaderSection title={"Preguntas frecuentes"} />
			<div className='container_frequenty_questions'>
				<p className='text_frequenty_questions'>Aquí puedes ver las respuestas a las preguntas más comunes. Si tienes alguna otra consulta, no dudes en escribirnos a <strong>eleroseaccesorios@gmail.com</strong></p>
				<Collapse
					items={items}
					style={{
						background: "#F7E7EB",
					}}
				/>
			</div>
			<Footer />
		</section>
	)
}

export default FrequentyQuestions;