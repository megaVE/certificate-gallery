export type FiltersType = "concludedAt" | "length" | "provider" | "teacher";

export const FiltersMap = new Map<FiltersType, string>([
	["concludedAt", "Data de Conclusão"],
	["length", "Horas"],
	["provider", "Instituição"],
	["teacher", "Professor"],
]);
