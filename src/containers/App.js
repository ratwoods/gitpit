import React, {Component, Fragment} from 'react';
import Cardlist from '../components/Cardlist';
import Searchbox from '../components/Searchbox';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';
import './App.css';



class App extends Component {
	constructor(){
		super()
		this.state = {
			Robot: [],
			searchfield:''
		}
	}

	componentDidMount(){
		fetch('https://jsonplaceholder.typicode.com/users')
			.then(response=> response.json())
			.then(users =>this.setState({ Robot: users}));
	}

	onSearchChange = (event) =>{
		this.setState({ searchfield: event.target.value })
	}

	render(){
		const { Robot, searchfield } = this.state;
		const filterendRobots = Robot.filter(robot =>{
			return robot.name.toLowerCase().includes(searchfield.toLowerCase());
		})
		return !Robot.length ? 
		<h1>loading</h1> :
		(
		<Fragment>
			<div className='tc'>
					<h1 className='f1'>Robotfriends</h1>
					<Searchbox searchChange={this.onSearchChange}/>
				<Scroll>
					<ErrorBoundry>
						<Cardlist Robot={filterendRobots}/>
					</ErrorBoundry>
				</Scroll>
			</div>
		</Fragment>
	  )
	}
}
export default App;
