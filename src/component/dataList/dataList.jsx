import React from 'react';
import Styles from './dataList.module.css';

export default function DataList({ mdata }) {
	return (
		<div className={Styles.card}>
			<div className={Styles.dataList}>
				{mdata.map(it => {
					return (
						<div className={Styles.data_card} key={it.id.videoId}>
							<img src={it.snippet.thumbnails.medium.url} alt="poster" />
							<h1>{it.snippet.title}</h1>
						</div>
					);
				})}
			</div>
		</div>
	);
}
