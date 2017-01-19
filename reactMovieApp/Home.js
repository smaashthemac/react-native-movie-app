// import react and components
import React, { Component } from 'react';
import { View, Text, TouchableHighlight, StyleSheet, Dimensions, Platform } from 'react-native';

// export so that other pages can access it
export default class Home extends Component {

	// the press function takes in an argument (the movie name) and pushes to the navigator the individual movie page
	// it also passes along the name of the movie in Props, which will be used to fetch information from OMDB API
	press(movie) {
		this.props.navigator.push({
			id: 2,
			// we can pass any information we want to the next scene as props
			passProps: {
				name: movie
			}
		});
	}

	// here's where we render stuff on the page
	  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>flix<Text style={{color:'#ff4981'}}>.</Text></Text>
        {/*Each button will call the press function with a different movie name*/}
        <TouchableHighlight onPress={() => this.press('Some Like It Hot')} style={styles.outerButton}>
          <View style={styles.innerButton}>
            <Text style={styles.movieText}>Some Like It Hot</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight onPress={() => this.press("Auntie Mame")} style={styles.outerButton}>
          <View style={styles.innerButton}>
            <Text style={styles.movieText}>Auntie Mame</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight onPress={() => this.press('Casablanca')} style={styles.outerButton}>
          <View style={styles.innerButton}>
            <Text style={styles.movieText}>Casablanca</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight onPress={() => this.press('Singing In The Rain')} style={styles.outerButton}>
          <View style={styles.innerButton}>
            <Text style={styles.movieText}>Singing In The Rain</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight onPress={() => this.press('Wizard Of Oz')} style={styles.outerButton}>
          <View style={styles.innerButton}>
            <Text style={styles.movieText}>Wizard Of Oz</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight onPress={() => this.press('Sunset Boulevard')} style={styles.outerButton}>
          <View style={styles.innerButton}>
            <Text style={styles.movieText}>Sunset Boulevard</Text>
          </View>
        </TouchableHighlight>
      </View>
    );
  }
}

// get the dimensions of the window (based on the user's screen) using the Dimensions component
const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(76,217,175,1)'
  },
  title: {
    fontSize: 50,
    textAlign: 'center',
    marginTop: 75,
    marginBottom: 50,
    fontWeight: 'bold',
    color: '#fff6d1'
  },
  movieText: {
    fontSize: 20,
    fontFamily: (Platform.OS === 'android') ? 'sans-serif-light' : 'Avenir-Light'
  },
  outerButton: {
    paddingVertical: 3,
    paddingHorizontal: 30
  },
  innerButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#c9f3e7',
    borderLeftWidth: 5,
    borderColor: '#ff4981'
  }
});
