import aluraIcon from "../../assets/icons/alura-icon.png";
import rocketseatIcon from "../../assets/icons/rocketseat-icon.png";
import udemyIcon from "../../assets/icons/udemy-icon.png";

interface CardIconProps {
	provider: string;
	teacher?: string;
}

export function CardIcon({ provider, teacher }: CardIconProps) {
	switch (provider) {
		case "Udemy":
			return (
				<img className="inline-block size-6 mr-2" src={udemyIcon} alt="Udemy" />
			);

		case "Rocketseat":
			return (
				<img
					className="inline-block size-6 mr-2"
					src={rocketseatIcon}
					alt="Rocketseat"
				/>
			);

		case "Alura":
			return (
				<img className="inline-block size-6 mr-2" src={aluraIcon} alt="Alura" />
			);

		default:
			return (
				<>
					{teacher && `${teacher}, pela `}
					{provider.toUpperCase()} -
				</>
			);
	}
}
