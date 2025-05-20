import type { Course } from "../@types/course";

export function sortByCompleteDate(a: Course, b: Course) {
	if (!a.completedAt && !b.completedAt) return 0;
	if (!a.completedAt) return 1;
	if (!b.completedAt) return -1;

	return b.completedAt.getTime() - a.completedAt.getTime();
}

export function sortByLength(a: Course, b: Course) {
	if (!a.length && !b.length) return 0;
	if (!a.length) return 1;
	if (!b.length) return -1;

	return b.length - a.length;
}

export function sortByProvider(a: Course, b: Course) {
	return a.provider.localeCompare(b.provider);
}
