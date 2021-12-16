import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import {useState} from "react";
import Logo from "../../public/svg/logo.svg";
import MenuBars from "../../public/svg/menuBars.svg";
import styles from "./header.module.css";

export default function Header({children, section}) {
	const [open, setOpen] = useState(false);

	return (
		<>
			<Head>
				<title>Posgrados Medicina Buenos Aires</title>
				<meta
					name="description"
					content="Agencia de asesoría a profesionales de toda Latinoamérica que quieren estudiar su carrera de posgrado en medicina en Buenos Aires."
				/>
				<meta property="og:type" content="website" />
				<meta property="og:title" content="Posgrados Medicina Buenos Aires" />
				<meta
					property="og:description"
					content="Agencia de asesoría a profesionales de toda Latinoamérica que quieren estudiar su carrera de posgrado en medicina en Buenos Aires."
				/>
				<meta property="og:image" content="https://i.ibb.co/TcCNPTN/ogImage.jpg" />
				<meta property="og:image:alt" content="Posgrados Medicina Buenos Aires" />
				<meta property="og:url" content="cambiar" />

				<meta name="twitter:card" content="summary_large_image" />
				<meta property="twitter:domain" content="weak-dodo-64.loca.lt" />
				<meta property="twitter:url" content="cambiar" />
				<meta name="twitter:title" content="Posgrados Medicina Buenos Aires" />
				<meta
					name="twitter:description"
					content="Agencia de asesoría a profesionales de toda Latinoamérica que quieren estudiar su carrera de posgrado en medicina en Buenos Aires."
				/>
				<meta name="twitter:image" content="https://i.ibb.co/TcCNPTN/ogImage.jpg" />
			</Head>
			<header className={styles.header}>
				<div className={styles.bar}>
					<div className={styles.svgContainer}>
						<Image src={Logo} alt="Posgrados Medicina Buenos Aires" />
						<button onClick={() => setOpen((prev) => !prev)}>
							<Image src={MenuBars} alt="menu button" />
						</button>
					</div>
					<nav className={!open ? styles.close : ""}>
						<ul>
							<li className={section === "inicio" ? styles.select : ""}>
								<Link href="/">
									<a onClick={() => setOpen(false)}>Inicio</a>
								</Link>
							</li>
							<li className={section === "quienes-somos" ? styles.select : ""}>
								<Link href="/quienes-somos">
									<a onClick={() => setOpen(false)}>Quiénes somos</a>
								</Link>
							</li>
							<li className={section === "que-hacemos" ? styles.select : ""}>
								<Link href="/que-hacemos">
									<a onClick={() => setOpen(false)}>Qué hacemos</a>
								</Link>
							</li>
							<li className={section === "especializaciones" ? styles.select : ""}>
								<Link href="/especializaciones">
									<a onClick={() => setOpen(false)}>Especializaciones</a>
								</Link>
							</li>
							<li
								className={section === "requisitos-y-documentacion" ? styles.select : ""}
							>
								<Link href="/requisitos-y-documentacion">
									<a onClick={() => setOpen(false)}>Requisitos y Documentación</a>
								</Link>
							</li>
							<li className={section === "contacto" ? styles.select : ""}>
								<Link href="/contacto">
									<a onClick={() => setOpen(false)}>Contacto</a>
								</Link>
							</li>
						</ul>
					</nav>
				</div>
				{children}
			</header>
		</>
	);
}
