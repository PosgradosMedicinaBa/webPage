import Image from "next/image";
import Link from "next/link";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import WhatsappLink from "../components/whatsappIcon/WhatsappLink";
import quienesSomosImage from "../public/img/quienesSomos.png";
import styles from "../styles/quienessomos.module.css";

export default function Quienessomos() {
	return (
		<>
			<Header section="quienes-somos" />
			<main className={styles.mainContainer}>
				<article>
					<h1>
						Quiénes <b>Somos</b>
					</h1>
					<p>
						Somos una agencia especializada en estudios de <b>posgrado en medicina</b>{" "}
						cuya misión es asesorar y garantizar el estudio a profesionales extranjeros
						que quieran especializarse en la ciudad de <b>Buenos Aires</b>.
					</p>
					<p>
						Contamos con una amplia red de contactos en el{" "}
						<b>ámbito universitario y profesional de la medicina</b>, garantizando las
						mejores oportunidades para cada perfil.
					</p>
					<p>
						Nuestra atención es <b>100% personalizada</b>. Podrás estar en contacto con
						nosotros de manera ágil a través de <b>Whats App o por teléfono</b> para que
						podamos <b>ayudarte</b> en todo el proceso.
					</p>
					<p>
						Te asesoramos en las elecciones académicas para tu perfil.{" "}
						<b>
							Te acompañamos en la gestión de trámites y aseguramos tu ingreso a la
							universidad.
						</b>{" "}
						Te ayudamos a buscar el <b>mejor lugar para vivir</b> en la ciudad y también
						ponemos a tu disposición <b>oportunidades laborales</b> para que tu estadía
						sea sustentable.
					</p>
					<div className={styles.card}>
						<div className={styles.cardImg}>
							<Image
								src={quienesSomosImage}
								alt="Foto de medica escribiendo en una computadora"
							/>
						</div>
						<div className={styles.gradient} />
						<p>
							¡Cualquier información o ayuda que necesites no dudes en{" "}
							<Link href="/contacto">
								<a>contactarte</a>
							</Link>{" "}
							con nosotros! <b>¡Nuestra misión en ayudarte!</b>
						</p>
					</div>
				</article>
				<div className={styles.imgContainer}>
					<div className={styles.img}>
						<Image
							src={quienesSomosImage}
							alt="Foto de medica escribiendo en una computadora"
						/>
					</div>
				</div>
			</main>
			<Footer selected="quienes-somos" />
			<WhatsappLink />
		</>
	);
}
