import type { Course } from "../@types/course";

import onlineFileIcon from "../assets/icons/file-earmark-pdf-icon.svg";
import localFileIcon from "../assets/icons/filetype-pdf-icon.svg";
import githubIcon from "../assets/icons/github-icon.svg";

import udemyIcon from "../assets/icons/udemy-icon.png";

import { monthNumberToString } from "../utils/parser";
import { Button } from "./ui/button";

interface CourseCardProps {
	course: Course;
}

export function CourseCard({ course }: CourseCardProps) {
	function processedCourseProvider() {
		switch (course.provider) {
			case "Udemy":
				return (
					<img
						className="inline-block size-6 mr-2"
						src={udemyIcon}
						alt="Udemy"
					/>
				);

			default:
				return <>{course.provider.toUpperCase()}</>;
		}
	}

	return (
		<div className="border border-gray-100 text-gray-100 rounded-xl p-4 shadow-md">
			<article className="space-y-4">
				<h3 className="font-bold text-xl">
					{processedCourseProvider()} {course.name}
				</h3>
				<p>
					{course.length && (
						<span className="font-semibold">({course.length} Horas) </span>
					)}
					{course.description}
				</p>
			</article>
			<div className="w-full flex justify-between items-end">
				<div className="flex-1 text-sm">
					{course.completedAt && (
						<>
							Completo em{" "}
							<span className="font-semibold mr-4">
								{monthNumberToString(course.completedAt.getMonth())} de{" "}
								{course.completedAt.getFullYear()}
							</span>
						</>
					)}
					{course.teacher && (
						<>
							Ministrado por{" "}
							<span className="font-semibold mr-4">{course.teacher}</span>
						</>
					)}
					Competências:{" "}
					<span className="font-semibold">{course.tags.join(", ")}</span>
				</div>
				<div className="flex justify-center gap-4">
					{course.githubUrl && (
						<a href={course.githubUrl} target="_blank" rel="noreferrer">
							<Button className="hover:bg-slate-700 border-2 border-slate-700 text-slate-50 flex items-center gap-1">
								<img
									className="white-filter inline-block size-4"
									src={githubIcon}
									alt=""
								/>
								<span>Ver Repositório</span>
							</Button>
						</a>
					)}
					{course.url && (
						<a href={course.url} target="_blank" rel="noreferrer">
							<Button className="hover:bg-green-700 border-2 border-green-700 text-green-50 flex items-center gap-1">
								<img
									className="white-filter inline-block size-4"
									src={onlineFileIcon}
									alt=""
								/>
								<span>Ver Certificado Online</span>
							</Button>
						</a>
					)}
					{course.path && (
						<a href={`pdfs/${course.path}`} target="_blank" rel="noreferrer">
							<Button className="hover:bg-red-700 border-2 border-red-700 text-red-50 flex items-center gap-1">
								<img
									className="white-filter inline-block size-4"
									src={localFileIcon}
									alt=""
								/>
								<span>Ver PDF</span>
							</Button>
						</a>
					)}
				</div>
			</div>
		</div>
	);
}
