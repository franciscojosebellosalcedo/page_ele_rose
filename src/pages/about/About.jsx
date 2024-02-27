import Footer from "../../components/footer/Footer";
import HeaderSection from "../../components/headerSection/HeaderSection";
import NavBar from "../../components/navBar/NavBar";
import "./About.css";

const About = () => {
  return (
    <section className='container_about' >
        <NavBar/>
        <HeaderSection title={"Sobre ele rose"}/>
        <div className="content_about">
            <div>
                <h2 className="title_about">¡Hola! 👋</h2>
                <h2 className="title_about last_title"> Soy Laura Salguedo</h2>
                <p className="text_about">
                La personita detrás de Ele Rose. Permíteme contarte un poco sobre mí y cómo nació este maravilloso proyecto.
                Soy una estudiante universitaria apasionada por los accesorios. Siempre he creído que los accesorios son la clave para elevar cualquier atuendo y expresar nuestra personalidad. 
                La idea de crear Ele Rose surgió de una combinación de mi amor por los accesorios y la necesidad de generar ingresos mientras completo mi educación. Este emprendimiento no solo representa una fuente de sustento para mí, sino también un sueño hecho realidad.
                Mi objetivo es brindarte acceso a accesorios excepcionales que te hagan sentir única y empoderada, sin importar la ocasión.
                En Ele Rose, nos esforzamos por ofrecerte una buena experiencia de compra. Estoy aquí para escucharte, asesorarte y asegurarme de que encuentres el accesorio perfecto que complemente tu estilo y personalidad.
                Gracias por ser parte de esta hermosa aventura. Tu apoyo significa mucho para mí. Si tienes alguna pregunta o comentario ¡no dudes en contactarme! Estoy aquí para ti.
                </p>
            </div>
            <img className="img_about" src={require("../../assest/foto-about-ele-rose.jpg")} alt="" />
        </div>
        <Footer/>
    </section>
  )
}

export default About;