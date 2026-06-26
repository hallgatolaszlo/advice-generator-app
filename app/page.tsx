import AdviceCard from "@/app/ui/advice-card";
import styles from "./page.module.css";

export default function Home() {
	return (
		<div className={styles.page}>
			<main className={styles.main}>
				<AdviceCard />
			</main>
		</div>
	);
}
