import Image from "next/image";
import Link from "next/link";
import facebook from "../../public/svg/facebook.svg";
import instagram from "../../public/svg/instagram.svg";
import logo from "../../public/svg/logo.svg";
import styles from "./footer.module.css";

export default function Footer({selected}) {
	return (
		<footer className={styles.footer}>
			<nav>
				<ul>
					<li className={selected === "inicio" ? styles.selected : ""}>
						<Link href="/">
							<a>Inicio</a>
						</Link>
					</li>
					<li className={selected === "quienes-somos" ? styles.selected : ""}>
						<Link href="/quienes-somos">
							<a>Quiénes somos</a>
						</Link>
					</li>
					<li className={selected === "que-hacemos" ? styles.selected : ""}>
						<Link href="/que-hacemos">
							<a>Qué hacemos</a>
						</Link>
					</li>
					<li className={selected === "especializaciones" ? styles.selected : ""}>
						<Link href="/especializaciones">
							<a>Especializaciones</a>
						</Link>
					</li>
					<li
						className={selected === "requisitos-y-documentacion" ? styles.selected : ""}
					>
						<Link href="/requisitos-y-documentacion">
							<a>Requisitos y Documentación</a>
						</Link>
					</li>
					<li className={selected === "contacto" ? styles.selected : ""}>
						<Link href="/contacto">
							<a>Contacto</a>
						</Link>
					</li>
				</ul>
			</nav>
			<div className={styles.socialMedia}>
				<a
					href="https://www.facebook.com/pogradosmedicina.ba"
					target="_blank"
					rel="noreferrer"
				>
					<Image src={facebook} alt="Facebook" />
				</a>
				<a
					href="https://instagram.com/posgradosmedicina.ba?utm_medium=copy_link"
					target="_blank"
					rel="noreferrer"
				>
					<Image src={instagram} alt="Facebook" />
				</a>
			</div>
			<div className={styles.logo}>
				<Image src={logo} layout="responsive" alt="Posgrados Medicina Buenos Aires" />
			</div>
		</footer>
	);
}
