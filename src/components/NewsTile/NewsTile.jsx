import './newsTile.scss';

const NewsTile = ({ news }) => {
	return (
		<div id='news-tile'>
			<div className='wrapper'>
				{news?.map((item) => (
					<a key={item.NewsID} href={item.Url} target='_blank' rel='noreferrer'>
						<div className='item-container'>
							<h5>{item.Title}</h5>
							<p>{item.Content}</p>
						</div>
					</a>
				))}
			</div>
		</div>
	);
};

export default NewsTile;
