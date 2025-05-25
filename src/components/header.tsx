import githubIcon from "../assets/icons/github-icon.svg";
import logoIcon from "../assets/logo.png";

export function Header() {
	return (
		<header className="bg-black text-gray-100 p-8">
			<div className="flex items-center gap-4 border-t-2 border-b-2 border-gray-100 py-4 md:pl-8 text-center md:text-left">
				<img src={logoIcon} alt="Logo" className="inline-block size-16" />
				<div>
					<h1 className="text-3xl font-bold upper">Certificate Gallery</h1>
					<a href="https://github.com/megaVE" className="text-sm">
						por
						<img
							className="inline-block white-filter px-1"
							src={githubIcon}
							alt="GitHub"
						/>
						Vinícius Eduardo
					</a>
				</div>
			</div>
		</header>
	);
}
