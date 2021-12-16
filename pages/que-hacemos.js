import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import WhatsappLink from "../components/whatsappIcon/WhatsappLink";
import styles from "../styles/quehacemos.module.css";
import Image from "next/image";
import inscripcionIcon from "../public/svg/queHacemosIcons/inscripcion.svg";
import acesoriaIcon from "../public/svg/queHacemosIcons/asesoria.svg";
import oprtunidadesIcon from "../public/svg/queHacemosIcons/trabajo.svg";
import acompañamientoIcon from "../public/svg/queHacemosIcons/acompañamiento.svg";
import estadiaIcon from "../public/svg/queHacemosIcons/casa.svg";
import Link from "next/link";

export default function Quechaemos() {
	return (
		<>
			<Header section="que-hacemos" />
			<main className={styles.main}>
				<div className={styles.intro}>
					<h1>
						Qué <b>Hacemos</b>
					</h1>
					<p>
						Brindamos un servicio de asesoría personalizada a aquellos profesionales que
						quieran especializarse en carreras de posgrado de medicina en la ciudad de
						Buenos Aires.
					</p>
				</div>
				<div>
					<div className={styles.card}>
						<div className={styles.cardTex}>
							<h2>Inscripción</h2>
							<p>
								Gestionamos tu inscripción a la universidad garantizando el inicio de tus
								estudios en tiempo y forma. También te asesoramos en el proceso de reunir
								la documentación necesaria para dicha inscripción.
							</p>
						</div>
						<div className={styles.iconContainer + " " + styles.inscripcionIconContainer}>
							<div className={styles.icon}>
								<Image src={inscripcionIcon} alt="Inscripción" />
							</div>
						</div>
					</div>
					<div className={styles.card}>
						<div
							className={
								styles.iconContainer +
								" " +
								styles.acesoriaIconContainer +
								" " +
								styles.left
							}
						>
							<div className={styles.icon}>
								<Image src={acesoriaIcon} alt="Asesoría" />
							</div>
						</div>
						<div className={styles.cardTex}>
							<h2>Asesoría</h2>
							<p>
								Un profesional calificado te asesorará sobré qué instituciones y centros
								formadores son los mejores para potenciar tu perfil al máximo. Te
								acompañamos para que tomes las mejores decisiones sobre tu carrera.
							</p>
						</div>
					</div>
					<div className={styles.card}>
						<div className={styles.cardTex}>
							<h2>Oportunidades</h2>
							<p>
								Con el objetivo de que tu estadía en Buenos Aires sea sustentable te
								acercamos oportunidades laborales para que puedas trabajar mientras
								realizas tus estudios.
							</p>
						</div>
						<div
							className={styles.iconContainer + " " + styles.oprtunidadesIconContainer}
						>
							<div className={styles.icon}>
								<Image src={oprtunidadesIcon} alt="Oportunidades" />
							</div>
						</div>
					</div>
					<div className={styles.card}>
						<div
							className={
								styles.iconContainer +
								" " +
								styles.acompañamientoIconContainer +
								" " +
								styles.left
							}
						>
							<div className={styles.icon}>
								<Image src={acompañamientoIcon} alt="Acompañamiento" />
							</div>
						</div>
						<div className={styles.cardTex}>
							<h2>Acompañamiento</h2>
							<p>
								Para que tu proceso formativo sea exitoso te ofrecemos el acompañamiento
								de profesionales y ayuda metodológica para la tesis de fin de posgrado.
							</p>
						</div>
					</div>
					<div className={styles.card}>
						<div className={styles.cardTex}>
							<h2>Estadía</h2>
							<p>
								Queremos que tu estadía en Buenos Aires sea la mejor. Te asesoramos sobre
								los lugares más recomendados para hospedarse según tu presupuesto. Te
								brindamos información sobre la ciudad, medios de trasporte, casas de
								cambio, actividades y todo lo que necesites saber para sentirte a gusto en
								nuestro país.
							</p>
						</div>
						<div className={styles.iconContainer + " " + styles.estadiaIconContainer}>
							<div className={styles.icon}>
								<Image src={estadiaIcon} alt="Estadía" />
							</div>
						</div>
					</div>
				</div>
				<p className={styles.accion}>
					¡Si estas buscando la mejor experiencia para estudiar en Buenos Aires, no lo
					dudes,{" "}
					<Link href="/contacto">
						<a>contactate</a>
					</Link>{" "}
					con nosotros!
				</p>
			</main>
			<Footer selected="que-hacemos" />
			<WhatsappLink />
		</>
	);
}
