import aluraIcon from "../../assets/icons/alura-icon.png";
import fiapIcon from "../../assets/icons/fiap-icon.png";
import hdcIcon from "../../assets/icons/hora-de-codar-icon.png";
import rocketseatIcon from "../../assets/icons/rocketseat-icon.png";
import udemyIcon from "../../assets/icons/udemy-icon.png";
import unifalIcon from "../../assets/icons/unifal-icon.png";

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

		case "Fiap":
			return (
				<img className="inline-block size-6 mr-2" src={fiapIcon} alt="Fiap" />
			);

		case "Hora de Codar":
			return (
				<img
					className="inline-block size-6 mr-2"
					src={hdcIcon}
					alt="Hora de Codar"
				/>
			);

		case "Unifal":
			return (
				<img
					className="inline-block size-6 mr-2"
					src={unifalIcon}
					alt="Unifal"
				/>
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
