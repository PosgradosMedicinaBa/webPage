import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import WhatsAppLink from "../components/whatsappIcon/WhatsappLink";
import especializacionesList from "../helpers/especializacionesList";
import Link from "next/link";
import styles from "../styles/especializaciones.module.css";
import Image from "next/image";
import searchIcon from "../public/svg/search.svg";
import {useState} from "react/cjs/react.development";

function prepareString(string) {
	let s = string.toLowerCase();
	s = s.replaceAll("á", "a");
	s = s.replaceAll("é", "e");
	s = s.replaceAll("í", "i");
	s = s.replaceAll("ó", "o");
	s = s.replaceAll("ú", "u");
	return s;
}

export default function Especializaciones() {
	const [inputValue, setInputValue] = useState("");
	const [list, setList] = useState(especializacionesList);

	function inputChange(value) {
		if (value) {
			const regExp = new RegExp(prepareString(value));
			const arr = especializacionesList.filter((ele) => regExp.test(prepareString(ele)));
			setList(arr);
		} else {
			setList(especializacionesList);
		}
		setInputValue(value);
	}

	return (
		<>
			<Header section="especializaciones" />
			<main className={styles.mainContainer}>
				<div className={styles.intro}>
					<h1>Especializaciones</h1>
					<p>
						En Buenos Aires encontrarás una amplia variedad de propuestas de posgrado de
						la carrera de Medicina dictadas por los profesionales y las Universidades más
						prestigiosas de la región.
					</p>
				</div>
				<div className={styles.search}>
					<div className={styles.searchBar}>
						<input
							type="search"
							placeholder="Buscar..."
							value={inputValue}
							onChange={(e) => inputChange(e.target.value)}
						/>
						<div className={styles.icon}>
							<Image src={searchIcon} alt="search" />
						</div>
					</div>
					<div className={styles.list}>
						<ul>
							{list.map((ele, i) => (
								<li key={i}>{ele}</li>
							))}
						</ul>
					</div>
					<div className={styles.btnContainer}>
						<Link href="#">
							<a className="link">¡Quiero Saber mas!</a>
						</Link>
					</div>
				</div>
			</main>
			<Footer />
			<WhatsAppLink />
		</>
	);
}
