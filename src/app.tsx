import { useEffect, useState } from "react";
import type { Course } from "./@types/course";
import searchIcon from "./assets/icons/search-icon.svg";
import { CourseCard } from "./components/course-card";
import { Footer } from "./components/footer";
import { Header } from "./components/header";
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
	const [courses, setCourses] = useState<Course[]>([...courseList]);
	const [currentFilter, setCurrentFilter] = useState<FiltersType | null>(null);

	const filteredCourseList = query
		? courses.filter((course) =>
				(
					course.name +
					course.tags.join(" ") +
					course.provider +
					(course.teacher ?? "")
				)
					.toLowerCase()
					.includes(query.toLowerCase()),
			)
		: courses;

	useEffect(() => {
		if (!currentFilter) {
			setCourses([...courseList].sort());
		} else {
			setCourses([...courseList].sort(FiltersSortingMap.get(currentFilter)));
		}
		console.log("s");
	}, [currentFilter]);

	return (
		<>
			<Header />
			<form
				className="flex flex-col md:flex-row items-center gap-8 my-2 p-4 bg-black text-gray-100"
				onSubmit={(e) => e.preventDefault()}
			>
				<div className="flex items-center border border-gray-100 p-2 rounded-md w-fit">
					<input
						className="focus:outline-none bg-gray-100/5 border-r border-gray-100"
						type="text"
						name="query"
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
								// biome-ignore lint/a11y/useKeyWithClickEvents: <>
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
				{filteredCourseList.length > 0 && (
					<ul className="space-y-2">
						{filteredCourseList.map((course) => (
							<CourseCard
								key={`${course.name}${course.provider}`}
								course={course}
							/>
						))}
					</ul>
				)}
			</main>
			<Footer />
		</>
	);
}
