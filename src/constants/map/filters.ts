import type { Course } from "../../@types/course";
import {
	sortByCompleteDate,
	sortByLength,
	sortByProvider,
} from "../../utils/sorting";

export type FiltersType = "concludedAt" | "length" | "provider" | "teacher";

export const FiltersMap = new Map<FiltersType, string>([
	["concludedAt", "Data de Conclusão"],
	["length", "Horas"],
	["provider", "Instituição"],
	["teacher", "Professor"],
]);

type FilterFunction = undefined | ((a: Course, b: Course) => number);

export const FiltersSortingMap = new Map<FiltersType, FilterFunction>([
	["concludedAt", sortByCompleteDate],
	["length", sortByLength],
	["provider", sortByProvider],
	["teacher", undefined],
]);
