import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import WhatsappLink from "../components/whatsappIcon/WhatsappLink";
import Link from "next/link";
import styles from "../styles/requisitos-y-documentacion.module.css";

export default function Requisito_y_Documentacion() {
	return (
		<div className="app-container">
			<Header section="requisitos-y-documentacion" />
			<main className={styles.mainContainer}>
				<div className={styles.intro}>
					<h1>
						Requisitos y <b>Documentación</b>
					</h1>
					<p>
						Para poder estudiar en Argentina es importante contar con la documentación
						necesaria que le permitirá acceder a la residencia en el país y a la correcta
						inscripción a la Universidad de su elección.
					</p>
				</div>
				<div className={styles.card}>
					<h2>
						¿Cuáles son los requisitos y la documentación necesaria para estudiar en
						argentina?
					</h2>
					<p>
						En el siguiente link podrá ver toda la información y los requisitos
						solicitados por el gobierno nacional:
					</p>

					<a
						href="https://www.argentina.gob.ar/tema/extranjeros/estudiar"
						target="_blank"
						rel="noreferrer"
						className={styles.govLink}
					>
						https://www.argentina.gob.ar/tema/extranjeros/estudiar
					</a>

					<p>
						<b>
							Si necesitas ayuda nuestra agencia puede brindarte soporte y asesoramiento
							en el proceso. ¡Estamos a su disposición!{" "}
						</b>
					</p>
					<Link href="/contacto">
						<a className={"link" + " " + styles.accion}>¡Quiero asesorarme!</a>
					</Link>
				</div>
			</main>
			<Footer selected="requisitos-y-documentacion" />
			<WhatsappLink />
		</div>
	);
}
