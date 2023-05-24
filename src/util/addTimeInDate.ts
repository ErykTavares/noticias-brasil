const addTimeInDate = (date: string): string => {
	const dateSplit = date?.split('T');

	return !dateSplit?.[1] ? `${date}T00:00:00` : date;
};
export default addTimeInDate;
