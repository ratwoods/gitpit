import React from 'react';
import Cards from './Cards';

const Cardlist= ({Robot})=>{
	
	return(
		<div className='tc'>
		  {
				Robot.map((user,i)=> {
					return( 
						<Cards 
							key={i}
							id={Robot[i].id} 
							name={Robot[i].name} 
							email={Robot[i].email}
						/>
					);
				})
			}
		</div>
	);
}
export default Cardlist;