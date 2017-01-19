// import react and component
import React, { Component } from 'react';
// import view, image and stylesheet components
import { View, Image, StyleSheet } from 'react-native';
// import popcorn image
import popcornImg from './popcorn.png';

// export so that the other pages can access it
export default class Splash extends Component {

	// here's where we render stuff
	render() {
		return (
			// create a container "div"
			// and render the popcorn image inside of it
			<View style={styles.container}>
				<Image source={popcornImg} style={{ height: 200, width: 200 }}/>
			</View>

		)
	}

	// life-cycle method that will run the following code once the component has been mounted
	componentDidMount() {
		// call the nextPage function which will transition to home page after two seconds
		setTimeout(() => this.nextPage(), 2000);
	}

	// the nextPage function takes us to the homepage
	nextPage() {
		// pushes a new route to the navigation stack. this will be our home page since it has an id of 1.
		// pushing in react is like stacking plates; first in last out
		// there is no "back" button so the top of the stack is the most recent
		this.props.navigator.push({
			id: 1
		});
	}

}

// here's where the css type styles live
const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: 'rgba(76,217,175,1)'
	}
});