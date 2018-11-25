export const required = value => (value ? undefined : 'This is required, otherwise I won\'t know who you are.');

export const nonEmpty = value =>
	value.trim() !== '' ? undefined : 'This field cannot be empty or just have spaces. Please try again.';

export const isTrimmed = value =>
	value.trim() === value ? undefined : 'Cannot start or end with whitespace';
//TODO length = length doesn't work unless change to length = value
export const length = value => value => {
	if (length.min && value.length < length.min) {
		return `Must be at least ${length.min} characters long`;
	}
	if (length.max && value.length > length.max) {
		return `Must be at most ${length.max} characters long`;
	}
};
export const matches = field => (value, allValues) =>
	field in allValues && value.trim() === allValues[field].trim()
		? undefined
		: 'Does not match';


export const isAllDigits = value => value = /^[0-9]+$/ ? undefined : 'Please enter the 4 digit code your teacher gave you.';

// export const isAllDigits2 = value => value.length === 4 ? undefined : 'Please enter the 4 digit code your teacher gave you.';

// export const isAllDigits = value => value => {
// 	if (isNaN(value) || value < 0 || value > 9) {
// 		return 'Please enter the 4 digit code your teacher gave you.';
// 	} else {
// 		return value
// 	}
// }

// var numbers = /^[0-9]+$/;
// if (inputtxt.value.match(numbers))


// pattern="^[0-9]*$"



// function checkInp()
// {
//   var x=document.forms["myForm"]["age"].value;
//   if (isNaN(x))
//   {
//     alert("Must input numbers");
//     return false;
//   }
// }





//TODO better validator statement?? export const isAllDigits = value => value !== (/[0-9]/.test(value))  ? undefined : 'Please enter the 4 digit code your teacher gave you.';

