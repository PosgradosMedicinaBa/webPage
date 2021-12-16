import Image from "next/image";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import WhatsAppLink from "../components/whatsappIcon/WhatsappLink";
import contactImg from "../public/img/contactImg.png";
import styles from "../styles/contacto.module.css";

export default function Contacto() {
	return (
		<>
			<Header section="contacto" />
			<main className={styles.mainContainer}>
				<div className={styles.principal}>
					<div className={styles.intro}>
						<h1>Contacto</h1>
						<p>
							<b>Para ponerte en contacto con nosotros o solicitar más información:</b>
						</p>
						<p>
							Escribinos por <a href="#">Whats app</a> o dejanos tus datos y nos
							contactaremos a la brevedad.
						</p>
					</div>
					<form
						action="mailto:nicolasdeheza@hotmail.com"
						method="POST"
						encType="text/plain"
						name="EmailForm"
					>
						<div className={styles.nombre}>
							<div className={styles.input}>
								<label htmlFor="nombre">Nombre*</label>
								<input type="text" id="nombre" name="nombre" />
							</div>

							<div className={styles.input}>
								<label htmlFor="apellido">Apellido*</label>
								<input type="text" id="apellido" name="apellido" />
							</div>
						</div>

						<div className={styles.input}>
							<label htmlFor="email">Email*</label>
							<input type="email" id="email" name="email" />
						</div>

						<div className={styles.input + " " + styles.nacionalidad}>
							<label htmlFor="nacionalidad">Nacionalidad*</label>
							<input type="text" id="nacionalidad" name="nacionalidad" />
						</div>

						<div className={styles.input}>
							<label htmlFor="especializacion">
								Especialización en la que está interesado*
							</label>
							<input type="text" id="especializacion" name="especializacion" />
						</div>

						<div className={styles.input}>
							<label htmlFor="mensaje">Mensaje</label>
							<textarea id="mensaje" name="mensaje" />
						</div>
						<p className={styles.requeridos}>*campos requeridos</p>
						<button type="submit">Enviar</button>
					</form>
				</div>
				<div className={styles.imgContainer}>
					<div className={styles.img}>
						<Image src={contactImg} alt="Medico viendo el celular" />
					</div>
				</div>
			</main>
			<Footer selected={"contacto"} />
			<WhatsAppLink />
		</>
	);
}
