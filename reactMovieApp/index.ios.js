// import react and components
import React, { Component } from 'react';
import {
  AppRegistry,
  Navigator, 
  StyleSheet
} from 'react-native';

// import scenes for app
import Home from './Home';
import Movie from './Movie';
import Splash from './Splash';

// here's where all the "make things happen" code resides
class reactMovieApp extends Component {

  // the renderScene function will choose which scene to render based on the route id 
  renderScene(route, navigator) {
    // if route id is 1, the screen will show the Home scene
    if (route.id === 1) {
      return <Home navigator={navigator} />
    }
    // otherwise, if route id is 2, the screen will show the Movie scene
    // ... and pass the Props to it (Props in this case will be the movie title that the user clicks on in Home; Movie needs to know which movie to search OMDB for
    else if (route.id === 2) {
      return <Movie navigator={navigator} {...route.passProps} />
    }
    // otherwise, if the route id is 3, the screen will show the Splash scene
    else if (route.id === 3) {
      return <Splash navigator={navigator} />
    }
  }

  // the configureScene function changes the animation properties of a scene
  configureScene() {
    // check documentation for more info on Navigator and sceneConfigs
    return Navigator.SceneConfigs.FloatFromBottom;
  }

  // here's what to render
  render() {
    return (
      // Navigator handles the transition between different scenes
      <Navigator
        // the first page to render
        initialRoute={{ id: 3 }}
        // pass in renderScene function
        renderScene={this.renderScene}
        // pass in configureScene function
        configureScene={this.configureScene}
      />
    );
  }

}

// this makes sure the app can run
AppRegistry.registerComponent('reactMovieApp', () => reactMovieApp);
