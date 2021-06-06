
import React from 'react';
import { StyleSheet, SafeAreaView, ImageBackground, Text, View, Image } from 'react-native';

import actuatedNormalize from '../Normalize';

export default function App() {
	return (
		<SafeAreaView>
			<ImageBackground source={require('../assets/images/background.png')} style={styles.backgroundImage}>
			
			
			<View style={styles.header}>
				<Image
						style={styles.logo}
					source={require('../assets/images/logo_qrzebraH.png')}
				/>
			</View>
			<View style={styles.texts}>
				<Text style={styles.textHeader}>Contactless QR</Text>
				<Text style={styles.textHeader}>Digital Menu</Text>
				<Text style={styles.textSmall}>create a digital menu for your restaurantor cafe.</Text>
				<Text style={styles.textSmall}>Engage more with your customers</Text>
				<Text  style={styles.headerSmall}>Their mobile is your menu now !</Text>
			</View>
			</ImageBackground>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
  	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
	},
	menuIcon: {
		position: "absolute",
		top: 50,
		right: 20,
		zIndex: 1
	},
	backgroundImage: {
		width: "100%",
		height: "100%",
	},
	header: {
		justifyContent: "center",
		alignItems: 'center',
		backgroundColor: "#154d68",
		height: 300,
		borderBottomLeftRadius: 30,
		borderBottomRightRadius: 30
	},
	logo: {
		height: 100,
		resizeMode: "contain",
		justifyContent: "center"
	},
	texts: {
		justifyContent: "center",
		// alignItems: 'center',
		margin: 40,
		marginLeft: 20,
		marginRight: 20,
		padding: 5,
		borderBottomLeftRadius: 30,
		borderBottomRightRadius: 30,
	},
	textHeader: {
		color: "#1d4254",
		fontSize: actuatedNormalize(30),
		fontWeight: "700",
		letterSpacing: 2,
		marginTop: 6,
		marginBottom: 6
	},
	textSmall: {
		fontSize: 14,
		margin: 2,

	},
	headerSmall: {
		color: "#1d4254",
		fontSize: actuatedNormalize(20),
		fontWeight: "700",
		margin: 5
	}
});
