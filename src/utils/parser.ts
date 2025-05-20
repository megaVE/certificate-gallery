export function monthNumberToString(monthNumber: number) {
	if (monthNumber < 0 || monthNumber > 11) return "";

	const monthArray = [
		"Janeiro",
		"Fevereiro",
		"Março",
		"Abril",
		"Maio",
		"Junho",
		"Julho",
		"Agosto",
		"Setembro",
		"Outubro",
		"Novembro",
		"Dezembro",
	];

	return monthArray[monthNumber];
}
