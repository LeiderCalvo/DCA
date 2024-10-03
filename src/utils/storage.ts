const get = (key: any, defaultValue: any) => {
	const value = localStorage.getItem(key) || sessionStorage.getItem(key);
	return value ? JSON.parse(value) : defaultValue;
	// if (value) {
	// 	return value;
	// } else {
	// 	return defaultValue;
	// }
};

const set = (key: any, value: any, session: boolean = false) => {
	const storage = session ? sessionStorage : localStorage;
	const parsed = JSON.stringify(value);
	storage.setItem(key, parsed);
};

export default {
	get,
	set,
};
