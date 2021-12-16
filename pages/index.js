import Header from "../components/header/Header";
import Carousel from "../components/carousel/Carousel";
import Footer from "../components/footer/Footer";
import WhatsappLink from "../components/whatsappIcon/WhatsappLink";
import styles from "../styles/index.module.css";
import Link from "next/link";
import Image from "next/image";
import quienesSomosImg from "../public/img/quienesSomosHome.png";
import queHacemosImg from "../public/img/queHacemosHome.png";
import servcios from "../public/svg/nuestrosServicios.svg";
import bannerImg from "../public/img/banner.png";

export default function Home() {
	return (
		<>
			<Header section="inicio">
				<Carousel />
			</Header>
			<main>
				<section className={styles.quienesQueSection}>
					<article className={styles.quienesQueMainContainer}>
						<div className={styles.card}>
							<h1>Quiénes Somos</h1>
							<p>
								Somos una agencia que acompaña a profesionales de toda Latinoamérica que
								quieren estudiar su carrera de posgrado en medicina en Buenos Aires.
							</p>
							<Link href="/quienes-somos">
								<a className="link">¡Conócenos!</a>
							</Link>
						</div>
						<div className={styles.img}>
							<Image src={quienesSomosImg} alt="Foto Buenos Aires" />
						</div>
					</article>
					<article className={styles.quienesQueMainContainer}>
						<div className={styles.img}>
							<Image src={queHacemosImg} alt="Foto Buenos Aires" />
						</div>
						<div className={styles.card}>
							<h1>Qué Hacemos</h1>
							<p>
								Te garantizamos el ingreso a las universidades buscando las mejores
								oportunidades académicas para tu perfil. También te ofrecemos
								oportunidades laborales para que tu estadía sea sustentable.
							</p>
							<Link href="/que-hacemos">
								<a className="link">Más Información</a>
							</Link>
						</div>
					</article>
				</section>
				<section className={styles.servciosSection}>
					<div className={styles.servcios}>
						<div>
							<Image src={servcios} alt="Nuestros Servicios" />
						</div>
						<p className={styles.inscripcion}>
							<b>Inscripción</b> en <b>Universidades</b> Nacionales públicas y privadas.
						</p>
						<p className={styles.asesoramiento}>
							<b>Asesoramiento</b> personalizado de carrera.
						</p>
						<p className={styles.acompañamiento}>
							<b>Acompañamiento</b> en el proceso formativo.
						</p>
						<p className={styles.vivir}>
							Recomendación de los <b>mejores</b> lugares para <b>vivir</b>.
						</p>
						<p className={styles.trabajo}>
							Ubicación <b>laboral</b> durante tu estadía.
						</p>
					</div>
					<div className={styles.btnContainer}>
						<Link href="/que-hacemos">
							<a className="link">Más Información</a>
						</Link>
					</div>
				</section>
				<section>
					<div className={styles.banner}>
						<p>
							¡Si estas buscando la mejor experiencia para <b>estudiar</b> en{" "}
							<b>Buenos Aires</b>, no lo dudes,{" "}
							<Link href="/contacto">
								<a>contactate</a>
							</Link>{" "}
							con nosotros!
						</p>
						<div className={styles.bannerImg}>
							<Image src={bannerImg} alt="Estudiantes" />
							<div className={styles.bannerGradient} />
						</div>
					</div>
				</section>
			</main>
			<Footer selected="inicio" />
			<WhatsappLink />
		</>
	);
}
