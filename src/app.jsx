import React, { useEffect, useRef, useState } from 'react';
import './App.css';
import axios from 'axios';
import DataList from './component/dataList/dataList';
import Header from './component/header/header';
import Styles from './component/dataList/dataList.module.css';
export default function App() {
	const [mdata, setMdata] = useState([]);
	const [best, setBest] = useState([]);
	const [searchData, setSearchData] = useState([]);

	let axios = require('axios');

	useEffect(() => {
		let config = {
			method: 'get',
			url: 'https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyCMnzRNULjlwfHAPNWpa6P3Xz3GFIvebDU',
			headers: {},
		};

		axios(config)
			.then(function (response) {
				setBest(response.data.items);
			})
			.catch(function (error) {
				console.log(error);
			});
	});

	const handleSearch = e => {
		let config = {
			method: 'get',
			url: `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${searchData}&key=AIzaSyCMnzRNULjlwfHAPNWpa6P3Xz3GFIvebDU`,
			headers: {},
		};
		axios(config)
			.then(function (response) {
				setMdata(response.data.items);
			})
			.catch(function (error) {
				console.log(error);
			});

		e.preventDefault();
	};

	return (
		<div className="App">
			<div className="container">
				<Header onClick={handleSearch} searchData={searchData} setSearchData={setSearchData} />
				<DataList mdata={mdata} />
			</div>
		</div>
	);
}
