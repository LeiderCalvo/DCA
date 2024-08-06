const array = [
	{
		name: 'Juan',
		age: 12,
	},
	23,
	'Hoola',
	true,
];

const object = {
	name: 'Juan',
	age: 12,
};

// First exercise JS

const people = [
	{
		name: 'Juan',
		age: 12,
	},
	{
		name: 'Maria',
		age: 8,
	},
	{
		name: 'Andrés',
		age: 30,
	},
];

const sum = (array) => {
	let sumTotal = 0;

	array.forEach((element) => {
		sumTotal += element.age;
	});

	// for (let index = 0; index < array.length; index++) {
	// 	sumTotal = sumTotal + array[index].age;
	// }

	return sumTotal;
};

console.log(sum(people));

// Second exercise JS

const products = [
	{
		name: 'T-shirt',
		price: 120,
	},
	{
		name: 'shirt',
		price: 40,
	},
	{
		name: 'T-shirt',
		price: 100,
	},
];

const filterProducts = (array) => {
	let newArray = [];

	array.forEach((element) => {
		if (element.price > 50) newArray.push(element);
	});

	return newArray;
};

console.log(filterProducts(products));

// Third exercise JS

const students = [
	{
		name: 'Pablo',
		grade: 4,
	},
	{
		name: 'Andrea',
		grade: 5,
	},
	{
		name: 'Jesus',
		grade: 3,
	},
];

const findStudent = (students, name) => {
	let studentFound = null;

	students.forEach((student) => {
		if (student.name === name) studentFound = student;
	});

	return studentFound;
};

console.log(findStudent(students, 'Andrea'));

// Fourth exercise JS

const anotherProducts = [
	{
		name: 'Product 1',
		price: 200,
	},
	{
		name: 'Product 2',
		price: 50,
	},
	{
		name: 'Product 3',
		price: 100,
	},
];

const sortProducts = (array) => {
	const newArrayProducts = array.sort((a, b) => {
		return a.price - b.price;
	});

	return newArrayProducts;
};

console.log(sortProducts(anotherProducts));
