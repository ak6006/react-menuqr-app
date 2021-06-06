
import React, { Component } from 'react';
import { StyleSheet, SafeAreaView, ImageBackground, Text, View, Image } from 'react-native';
import actuatedNormalize from '../Normalize';

export default function About() {
	return (
		<SafeAreaView>
			<ImageBackground source={require('../assets/images/background.png')} style={styles.backgroundImage}>
			
			
				<View style={styles.header}>
					
				</View>
				<View style={styles.logoContainer}>
					<Image
						style={styles.logo}
						source={require('../assets/images/logo_qrzebra.png')}
					/>
				</View>
				<View style={styles.texts}>
					<Text style={styles.textHeader}>شرح تعريف الشركة</Text>
					<Text style={styles.textSmall}>شرح تفصيلي عن الشركة والخدمات</Text>
				</View>
			</ImageBackground>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	backgroundImage: {
		width: "100%",
		height: "100%",
	},
	header: {
		justifyContent: "center",
		alignItems: 'center',
		backgroundColor: "#154d68",
		height: 10,
		borderBottomLeftRadius: 20,
		borderBottomRightRadius: 20
	},
	logo: {
		height: 100,
		resizeMode: "contain",
		justifyContent: "center",
		alignItems: "center"
	},
	logoContainer: {
		justifyContent: "center",
		alignItems: 'center',
		margin: 40,
		marginLeft: 20,
		marginRight: 20,
		padding: 5,
		borderBottomLeftRadius: 30,
		borderBottomRightRadius: 30
	},
	texts: {
		justifyContent: "center",
		alignItems: "flex-end",
		margin: 40,
		marginLeft: 20,
		marginRight: 20,
		padding: 5,
		borderBottomLeftRadius: 30,
		borderBottomRightRadius: 30,
	},
	textHeader: {
		color: "#f7a722",
		fontSize: actuatedNormalize(28),
		// fontWeight: "700",
		letterSpacing: 2,
		marginTop: 4,
		marginBottom: 4,
		fontFamily: 'Cairo-Regular',
	},
	textSmall: {
		fontSize: actuatedNormalize(18),
		margin: 2,
		fontFamily: 'Cairo-Regular',
	}
});
