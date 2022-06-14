import React from 'react';
import Styles from './header.module.css';

export default function Header({ onClick, setSearchData }) {
	return (
		<header>
			<div className={Styles.left}>
				<img src={process.env.PUBLIC_URL + `YouTube/logo.png`} />
				<h3 className={Styles.logo}>HooTube</h3>
			</div>
			<form className={Styles.search_form}>
				<input type="text" onChange={e => setSearchData(e.target.value)} />
				<button onClick={onClick}>Enter</button>
			</form>
		</header>
	);
}
