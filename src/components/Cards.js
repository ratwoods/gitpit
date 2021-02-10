import React from 'react';

const Cards = ({name, email, id}) => {
		return(
			<div className='tc bg-light-green dib br4 pa3 ma3 grow bw1 shadow-5'>
				<img alt='' src={`https://robohash.org/${id}?size=200x200`}/>
				<div className='tc'>
					<h2>{name}</h2>
					<p>{email}</p>
				</div>
			</div>
		);
}
export default Cards;

