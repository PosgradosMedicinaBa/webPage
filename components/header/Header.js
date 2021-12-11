import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import {useState} from "react";
import Logo from "../../public/svg/logo.svg";
import MenuBars from "../../public/svg/menuBars.svg";
import styles from "./header.module.css";

export default function Header({children}) {
	const [open, setOpen] = useState(false);

	return (
		<>
			<Head>
				<title>Posgrados Medicina Buenos Aires</title>
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
							<li className={styles.select}>
								<Link href="#">
									<a onClick={() => setOpen(false)}>Inicio</a>
								</Link>
							</li>
							<li>
								<Link href="#">
									<a onClick={() => setOpen(false)}>Quiénes somos</a>
								</Link>
							</li>
							<li>
								<Link href="#">
									<a onClick={() => setOpen(false)}>Qué hacemos</a>
								</Link>
							</li>
							<li>
								<Link href="#">
									<a onClick={() => setOpen(false)}>Especializaciones</a>
								</Link>
							</li>
							<li>
								<Link href="#">
									<a onClick={() => setOpen(false)}>Requisitos y Documentación</a>
								</Link>
							</li>
							<li>
								<Link href="#">
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
