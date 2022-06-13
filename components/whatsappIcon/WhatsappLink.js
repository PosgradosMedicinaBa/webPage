import whatsappIcon from "../../public/svg/whatsappIcon.svg";
import Image from "next/image";
import styles from "./whatsappIcon.module.css";

export default function WhatsappLink() {
	return (
		<a
			href="https://wa.me/5491130488818"
			target="_blank"
			rel="noreferrer"
			className={styles.whatsappLink}
		>
			<Image src={whatsappIcon} alt="whatsapp link" />
		</a>
	);
}
