import type { Course } from "../@types/course";

import onlineFileIcon from "../assets/icons/file-earmark-pdf-icon.svg";
import localFileIcon from "../assets/icons/filetype-pdf-icon.svg";
import githubIcon from "../assets/icons/github-icon.svg";
import unknownLocalFileIcon from "../assets/icons/patch-check-icon.svg";

import skillsIcon from "../assets/icons/card-list-icon.svg";
import completedIcon from "../assets/icons/check-square-icon.svg";
import professorIcon from "../assets/icons/person-square-icon.svg";

import { monthNumberToString } from "../utils/parser";
import { Button } from "./ui/button";
import { CardIcon } from "./ui/card-icon";

interface CourseCardProps {
	course: Course;
}

export function CourseCard({ course }: CourseCardProps) {
	return (
		<div className="border border-gray-100 text-gray-100 rounded-xl p-4 shadow-md">
			<article className="space-y-4">
				<h3 className="font-bold text-lg md:text-xl text-center md:text-left">
					<CardIcon provider={course.provider} teacher={course.teacher} />{" "}
					{course.name}
				</h3>
				<p className="italic">
					{course.length && (
						<span className="font-semibold">({course.length} Horas) </span>
					)}
					{course.description}
				</p>
			</article>
			<div className="mt-4 w-full flex flex-col md:flex-row justify-between md:items-end">
				<div className="flex-1 text-sm space-y-2">
					{course.completedAt && (
						<p className="flex items-center gap-2">
							<img
								className="white-filter size-4"
								src={completedIcon}
								alt="Ok"
							/>
							Completo em{" "}
							<span className="font-semibold mr-4">
								{monthNumberToString(course.completedAt.getMonth())} de{" "}
								{course.completedAt.getFullYear()}
							</span>
						</p>
					)}
					{course.teacher && (
						<p className="flex items-center gap-2">
							<img
								className="white-filter size-4"
								src={professorIcon}
								alt="Professor"
							/>
							Ministrado por{" "}
							<span className="font-semibold mr-4">{course.teacher}</span>
						</p>
					)}
					<p className="flex items-center gap-2">
						<img
							className="white-filter size-4"
							src={skillsIcon}
							alt="Skills"
						/>
						Competências:{" "}
						<span className="font-semibold">{course.tags.join(", ")}</span>
					</p>
				</div>
				<div className="flex justify-center gap-4 mt-4 md:mt-0">
					{course.githubUrl && (
						<a href={course.githubUrl} target="_blank" rel="noreferrer">
							<Button className="hover:bg-slate-700 border-2 border-slate-700 text-slate-50 flex items-center gap-1">
								<img
									className="white-filter inline-block size-4"
									src={githubIcon}
									alt="GitHub"
								/>
								<span className="hidden md:inline">Ver Repositório</span>
							</Button>
						</a>
					)}
					{course.url && (
						<a href={course.url} target="_blank" rel="noreferrer">
							<Button className="hover:bg-green-700 border-2 border-green-700 text-green-50 flex items-center gap-1">
								<img
									className="white-filter inline-block size-4"
									src={onlineFileIcon}
									alt="Online"
								/>
								<span className="hidden md:inline">Ver Certificado Online</span>
							</Button>
						</a>
					)}
					{course.path && (
						<a
							href={`certificates/${course.path}`}
							target="_blank"
							rel="noreferrer"
						>
							{course.path.endsWith("pdf") ? (
								<Button className="hover:bg-red-700 border-2 border-red-700 text-red-50 flex items-center gap-1">
									<img
										className="white-filter inline-block size-4"
										src={localFileIcon}
										alt="PDF"
									/>
									<span className="hidden md:inline">Ver PDF</span>
								</Button>
							) : (
								<Button className="hover:bg-blue-700 border-2 border-blue-700 text-blue-50 flex items-center gap-1">
									<img
										className="white-filter inline-block size-4"
										src={unknownLocalFileIcon}
										alt="Certificado"
									/>
									<span className="hidden md:inline">Ver Comprovante</span>
								</Button>
							)}
						</a>
					)}
				</div>
			</div>
		</div>
	);
}
