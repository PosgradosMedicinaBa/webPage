import Image from "next/image";
import {useEffect, useState} from "react";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import WhatsAppLink from "../components/whatsappIcon/WhatsappLink";
import contactImg from "../public/img/contactImg.png";
import styles from "../styles/contacto.module.css";

export default function Contacto() {
	const [url, setUrl] = useState("");
	useEffect(() => {
		setUrl(
			window.location.protocol + "//" + window.location.host + window.location.pathname
		);
	}, []);

	return (
		<div className="app-container">
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
						action="https://formsubmit.co/d82d671d890532347573f0bda4d08b73"
						method="POST"
						name="EmailForm"
					>
						<div className={styles.nombre}>
							<div className={styles.input}>
								<label htmlFor="nombre">Nombre*</label>
								<input type="text" id="nombre" name="nombre" required />
							</div>

							<div className={styles.input}>
								<label htmlFor="apellido">Apellido*</label>
								<input type="text" id="apellido" name="apellido" required />
							</div>
						</div>

						<div className={styles.input}>
							<label htmlFor="email">Email*</label>
							<input type="email" id="email" name="email" required />
						</div>

						<div className={styles.input + " " + styles.nacionalidad}>
							<label htmlFor="nacionalidad">Nacionalidad*</label>
							<input type="text" id="nacionalidad" name="nacionalidad" required />
						</div>

						<div className={styles.input}>
							<label htmlFor="especializacion">
								Especialización en la que está interesado*
							</label>
							<input type="text" id="especializacion" name="especializacion" required />
						</div>

						<div className={styles.input}>
							<label htmlFor="mensaje">Mensaje</label>
							<textarea id="mensaje" name="mensaje" />
						</div>
						<input type="hidden" name="_next" value={url}></input>
						<p className={styles.requeridos}>*campos requeridos</p>
						<button type="submit">Enviar</button>
					</form>
				</div>
				<div className={styles.imgContainer}>
					<div className={styles.img}>
						<Image src={contactImg} alt="Medico viendo el celular" priority={true} />
					</div>
				</div>
			</main>
			<Footer selected={"contacto"} />
			<WhatsAppLink />
		</div>
	);
}
