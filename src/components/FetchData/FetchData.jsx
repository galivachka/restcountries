import axios from 'axios';
import { useEffect, useState } from 'react';
import Style from './FetchData.module.css';

const FetchData = () => {
	const [data, setData] = useState([]);

	const getData = async () => {
		try {
			const response = await axios.get('https://restcountries.com/v3.1/all');
			setData(response.data);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		getData();
	}, []);

	return (
		<div className={Style.cardWrapper}>
			{data.map(el => (
				<div className={Style.singleCard} key={el.name.common}>
					<img src={el.flags.png} alt={el.name.common} />
					<h3>{el.name.common}</h3>
				</div>
			))}
		</div>
	);
};

export default FetchData;
