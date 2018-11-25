export const required = value => value ? undefined : 'This is required, otherwise I won\'t know who you are.';

export const nonEmpty = value => value.trim() !== '' ? undefined : 'This field cannot be empty or have just spaces. Please try again.';

export const isAllDigits = value => value.length === 4 ? undefined : 'Please enter the 4 digit code your teacher gave you.';

export const matches = field => (value, allValues) => {
	return field in allValues && value.trim() === allValues[field].trim()
		? undefined : 'Does not match';
}
export const length = length => value => {
	if (length.min && value.length < length.min) {
		return `Must be at least ${length.min} characters long`;
	}
	if (length.max && value.length > length.max) {
		return `Must be at most ${length.max} characters long`;
	}
};
//TODO better validator statement?? export const isAllDigits = value => value !== (/[0-9]/.test(value))  ? undefined : 'Please enter the 4 digit code your teacher gave you.';