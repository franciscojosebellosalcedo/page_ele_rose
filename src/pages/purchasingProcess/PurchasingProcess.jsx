import { CarOutlined, CreditCardOutlined, GiftOutlined, ShoppingCartOutlined, UserOutlined, WhatsAppOutlined } from '@ant-design/icons';
import { Button, Card, Steps, Typography } from 'antd';
import NavBar from '../../components/navBar/NavBar';
import HeaderSection from '../../components/headerSection/HeaderSection';
import Footer from '../../components/footer/Footer';
const { Title, Paragraph } = Typography;
const { Step } = Steps;

const PurchasingProcess = () => {

	const steps = [
    {
      title: 'Iniciar sesión o registrarse',
      description: 'Inicia sesión en tu cuenta o completa el proceso de registro agregando los datos solicitados si eres un usuario nuevo.',
      icon: <UserOutlined />
    },
    {
      title: 'Agregar productos al carrito',
      description: 'Navega por nuestro catálogo y añade los productos que deseas pedir a tu carrito de compras.',
      icon: <ShoppingCartOutlined />
    },
    {
      title: 'Haz tu pedido vía whatsapp',
      description: 'Haga clic en el botón "Pedir por WhatsApp" para iniciar el proceso de pedido a través de WhatsApp.',
      icon: <WhatsAppOutlined />
    },
    {
      title: 'Información de envío',
      description: 'Se le notificará vía WhatsApp sobre la información de envío según su dirección y el valor total de su pedido.',
      icon: <CarOutlined />
    },
    {
      title: 'Realizar pago',
      description: 'Completa el pago total (productos + envío) utilizando cualquiera de los métodos de pago disponibles.',
      icon: <CreditCardOutlined />
    },
    {
      title: 'Pedido enviado',
      description: 'Enviaremos su pedido y le enviaremos la información de seguimiento para que pueda controlar el viaje de su paquete.',
      icon: <GiftOutlined />
    }
  ];

	return (
		<section>
      <NavBar />
			<HeaderSection title={"Procesos de compra"} />
			<div className='container_frequenty_questions'>
      <Card>
        <Steps direction="vertical" size="small" current={null}>
          {steps.map((step, index) => (
            <Step
              key={index}
              title={
								<Paragraph style={{fontFamily: "Poppins", color: "var(--color-text-titles)", fontSize: "16px"}}>
									{step.title}
								</Paragraph>
							}
              description={
                <Paragraph style={{ marginBottom: 0 , fontSize: 15, fontFamily: "Poppins"}}>
                  {step.description}
                </Paragraph>
              }
              icon={step.icon}
            />
          ))}
        </Steps>
      </Card>
			</div>
			<Footer />
    </section>
	)
}

export default PurchasingProcess;