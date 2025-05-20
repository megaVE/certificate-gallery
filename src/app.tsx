import { useEffect, useState } from "react";
import githubIcon from "./assets/icons/github-icon.svg";
import searchIcon from "./assets/icons/search-icon.svg";
import { CourseCard } from "./components/course-card";
import { Button } from "./components/ui/button";
import {
	FiltersMap,
	FiltersSortingMap,
	type FiltersType,
} from "./constants/map/filters";
import { courseList } from "./data/course-list";
import { cn } from "./lib/utils";

export function App() {
	const [query, setQuery] = useState("");
	const [currentFilter, setCurrentFilter] = useState<FiltersType | null>(null);

	const filteredCourseList = query
		? courseList.filter((course) =>
				(course.name + course.tags.join(" "))
					.toLowerCase()
					.includes(query.toLowerCase()),
			)
		: courseList;

	useEffect(() => {
		// TODO - Evitar modificar o array original como "efeito colateral"
		// TODO - Buscar uma forma de voltar a ordem original do array após ordenado
		if (!currentFilter) {
			filteredCourseList.sort();
		} else {
			filteredCourseList.sort(FiltersSortingMap.get(currentFilter));
		}
		console.log("s");
	}, [filteredCourseList, currentFilter]);

	return (
		<>
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
			<form
				className="flex flex-col md:flex-row items-center gap-8 my-2 p-4 bg-black text-gray-100"
				onSubmit={(e) => e.preventDefault()}
			>
				<div className="flex items-center border border-gray-100 p-2 rounded-md w-fit">
					<input
						className="focus:outline-none bg-gray-100/5 border-r border-gray-100"
						type="text"
						name="query"
						id="query"
						placeholder="Buscar por..."
						value={query}
						onChange={(e) => setQuery(e.target.value)}
					/>
					<Button className="p-2">
						<img
							className="size-4 white-filter"
							src={searchIcon}
							alt="Buscar"
						/>
					</Button>
				</div>
				<div>
					<ul className="flex flex-col md:flex-row items-center gap-4">
						<h4 className="font-semibold text-lg">Ordenar por:</h4>
						{Array.from(FiltersMap, ([key, value]) => ({ key, value })).map(
							(filter) => (
								// biome-ignore lint/a11y/useKeyWithClickEvents: <explanation>
								<li
									key={filter.key}
									className={cn(
										"cursor-pointer hover:underline",
										currentFilter === filter.key && "underline",
									)}
									onClick={() =>
										setCurrentFilter((state) =>
											state !== filter.key ? (filter.key as FiltersType) : null,
										)
									}
								>
									{filter.value}
								</li>
							),
						)}
					</ul>
				</div>
			</form>
			<main className="bg-black p-4 min-h-screen">
				<div className="text-gray-100 pb-4">
					{filteredCourseList.length
						? `${filteredCourseList.length} resultado${filteredCourseList.length > 1 ? "s" : ""}`
						: "Nenhum resultado"}
				</div>
				<ul className="space-y-2">
					{filteredCourseList.map((course) => (
						<CourseCard
							key={`${course.name}${course.provider}`}
							course={course}
						/>
					))}
				</ul>
			</main>
			<footer className="mt-2 bg-black text-gray-100 text-center p-8 font-semibold">
				&copy;megaVE - {new Date().getFullYear()}
			</footer>
		</>
	);
}
