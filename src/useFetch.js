import { useState, useEffect } from "react";

import paginate from "./untils";

const url = "https://api.github.com/users/finn-01/followers?per_page=100";

export const useFetch = () => {
	const [loading, setLoading] = useState(true);
	const [data, setData] = useState([]);

	const getFl = async () => {
		const response = await fetch(url);
		const data = await response.json();

		console.log(data);

		setData(paginate(data));
		setLoading(false);
	};

	useEffect(() => {
		getFl();
	}, []);

	return { loading, data };
};
