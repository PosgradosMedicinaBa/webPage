import Image from "next/image";
import Link from "next/link";
import facebook from "../../public/svg/facebook.svg";
import instagram from "../../public/svg/instagram.svg";
import logo from "../../public/svg/logo.svg";
import styles from "./footer.module.css";

export default function Footer() {
	return (
		<footer className={styles.footer}>
			<nav>
				<ul>
					<li className={styles.selected}>
						<Link href="#">
							<a>Inicio</a>
						</Link>
					</li>
					<li>
						<Link href="#">
							<a>Quiénes somos</a>
						</Link>
					</li>
					<li>
						<Link href="#">
							<a>Qué hacemos</a>
						</Link>
					</li>
					<li>
						<Link href="#">
							<a>Especializaciones</a>
						</Link>
					</li>
					<li>
						<Link href="#">
							<a>Requisitos y Documentación</a>
						</Link>
					</li>
					<li>
						<Link href="#">
							<a>Contacto</a>
						</Link>
					</li>
				</ul>
			</nav>
			<div className={styles.socialMedia}>
				<a href="#" target="_blank">
					<Image src={facebook} alt="Facebook" />
				</a>
				<a href="#" target="_blank">
					<Image src={instagram} alt="Facebook" />
				</a>
			</div>
			<div className={styles.logo}>
				<Image src={logo} layout="responsive" alt="Posgrados Medicina Buenos Aires" />
			</div>
		</footer>
	);
}
