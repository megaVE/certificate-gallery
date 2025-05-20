import githubIcon from "../assets/icons/github-icon.svg";

export function Header() {
	return (
		<header className="bg-black text-gray-100 p-8 antialiased">
			<div className="border-t-2 border-b-2 border-gray-100 py-4 md:pl-8 text-center md:text-left">
				<h1 className="text-3xl font-bold upper">Certificate Gallery</h1>
				<a href="https://github.com/megaVE" className="text-sm">
					por
					<img
						className="inline-block white-filter px-1"
						src={githubIcon}
						alt=""
					/>
					Vinícius Eduardo
				</a>
			</div>
		</header>
	);
}
