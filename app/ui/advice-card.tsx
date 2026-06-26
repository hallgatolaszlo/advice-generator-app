"use client";

import styles from "@/app/ui/advice-card.module.css";
import Image from "next/image";
import { useEffect, useState } from "react";
import { OrbitProgress } from "react-loading-indicators";
import { useBreakpoint } from "use-breakpoint";

type Advice = {
	id: number;
	advice: string;
};

const BREAKPOINTS = { mobile: 0, tablet: 768, desktop: 1024 };

export default function AdviceCard() {
	const { breakpoint } = useBreakpoint(BREAKPOINTS);

	const [advice, setAdvice] = useState<Advice>({
		id: 0,
		advice: "",
	});
	const [loading, setLoading] = useState<boolean>(true);

	function fetchAdvice() {
		setLoading(true);
		fetch("https://api.adviceslip.com/advice")
			.then((response) => response.json())
			.then((data) => {
				setAdvice(data.slip);
				setLoading(false);
			})
			.catch((error) => console.error("Error fetching advice:", error));
	}

	useEffect(() => {
		fetchAdvice();
	}, []);

	return (
		<div className={styles["advice-card"]}>
			<div className={styles["advice-content"]}>
				{loading ? (
					<OrbitProgress
						variant="track-disc"
						dense
						color="#53ffaa"
						size="medium"
					/>
				) : (
					<>
						<h1
							className={
								styles["advice-id"] + " " + "text-preset-3"
							}
						>
							{"ADVICE #" + advice.id}
						</h1>
						<p
							className={
								styles["advice-text"] +
								(breakpoint === "mobile"
									? " text-preset-2"
									: " text-preset-1")
							}
						>
							{"“" + advice.advice + "”"}
						</p>
					</>
				)}
			</div>
			{breakpoint === "mobile" ? (
				<Image
					width={295}
					height={16}
					src="/pattern-divider-mobile.svg"
					alt="Pattern Divider"
				/>
			) : (
				<Image
					width={444}
					height={16}
					src="/pattern-divider-desktop.svg"
					alt="Pattern Divider"
				/>
			)}
			<button
				className={styles["dice-button"]}
				onClick={() => {
					fetchAdvice();
				}}
			>
				<Image
					width={24}
					height={24}
					src="/icon-dice.svg"
					alt="Dice Icon"
				/>
			</button>
		</div>
	);
}
