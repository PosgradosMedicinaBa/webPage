import Header from "../components/header/Header";
import Carousel from "../components/carousel/Carousel";
import styles from "../styles/index.module.css";
import Link from "next/link";
import Image from "next/image";
import quienesSomosImg from "../public/img/quienesSomosHome.png";
import queHacemosImg from "../public/img/queHacemosHome.png";

export default function Home() {
	return (
		<>
			<Header>
				<Carousel />
			</Header>
			<main>
				<section className={styles.quienesQueSection}>
					<div className={styles.quienesQueMainContainer}>
						<div className={styles.card}>
							<h1>Quiénes Somos</h1>
							<p>
								Somos una agencia que acompaña a profesionales de toda Latinoamérica que
								quieren estudiar su carrera de posgrado en medicina en Buenos Aires.
							</p>
							<Link href="#">
								<a>¡Conócenos!</a>
							</Link>
						</div>
						<div className={styles.img}>
							<Image src={quienesSomosImg} alt="Foto Buenos Aires" />
						</div>
					</div>
					<div className={styles.quienesQueMainContainer}>
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
							<Link href="#">
								<a>Más Información</a>
							</Link>
						</div>
					</div>
				</section>
			</main>
		</>
	);
}
