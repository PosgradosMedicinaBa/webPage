import styles from "./carousel.module.css";
import Facultad from "../../public/img/facultad.png";
import Estudiante from "../../public/img/estudiante.png";
import Medico from "../../public/img/medico.png";
import Image from "next/image";
import {useEffect, useState} from "react";

export default function Carousel() {
	const [show, setShow] = useState(0);
	const [btnClick, setBtnClick] = useState(false);

	function onBtnClick(index) {
		setShow(index);
		setBtnClick(true);
	}

	useEffect(() => {
		let interval;
		if (!btnClick) {
			interval = setInterval(() => {
				setShow((prev) => (prev + 1) % 3);
			}, 5000);
		}
		setBtnClick(false);
		return () => {
			if (interval) {
				clearInterval(interval);
			}
		};
	}, [btnClick]);

	return (
		<div className={styles.mainContainer}>
			<div className={styles.carousel + " " + styles[`show-${show}`]}>
				<div className={styles.bannerBlue + " " + styles.banner}>
					<div className={styles.img}>
						<Image src={Facultad} priority={true} alt="Facultad de Medicina UBA" />
					</div>
					<div className={styles.blueGradient + " " + styles.gradient} />
					<p>
						¡Estudiá tu posgrado en <b>medicina</b> en las principales universidades de{" "}
						<b>Buenos Aires</b>!
					</p>
				</div>
				<div className={styles.bannerGreen + " " + styles.banner}>
					<div className={styles.img}>
						<Image src={Estudiante} priority={true} alt="Estudiante de Medicina" />
					</div>
					<div className={styles.greenGradient + " " + styles.gradient} />
					<p>
						Te <b>asesoramos</b> sobre las mejores oportunidades académicas para{" "}
						<b>tu perfil</b>
					</p>
				</div>
				<div className={styles.bannerPink + " " + styles.banner}>
					<div className={styles.img}>
						<Image src={Medico} priority={true} alt="Medico" />
					</div>
					<div className={styles.pinkGradient + " " + styles.gradient} />
					<p>
						Te brindamos oportunidades <b>laborales</b> para que tu proyecto sea{" "}
						<b>sustentable</b>
					</p>
				</div>
			</div>
			<div className={styles.btn}>
				<button
					className={show === 0 ? styles.btnSelect : ""}
					onClick={() => onBtnClick(0)}
				/>
				<button
					className={show === 1 ? styles.btnSelect : ""}
					onClick={() => onBtnClick(1)}
				/>
				<button
					className={show === 2 ? styles.btnSelect : ""}
					onClick={() => onBtnClick(2)}
				/>
			</div>
		</div>
	);
}
