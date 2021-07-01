
import React, { Component } from 'react';
import { StyleSheet, SafeAreaView, ImageBackground, Text, View, Image, ScrollView } from 'react-native';
import { withTranslate } from 'react-redux-multilingual';
import actuatedNormalize from '../Normalize';

function About({ translate }) {
	return (
		<SafeAreaView>
			<ImageBackground source={require('../assets/images/background.png')} style={styles.backgroundImage}>
				<View style={styles.header}></View>
				<ScrollView style={styles.scrollView}>
					<View style={styles.logoContainer}>
						<Image
							style={styles.logo}
							source={require('../assets/images/logo_qrzebra.png')}
						/>
					</View>
					<View style={styles.texts}>
						<Text style={styles.textHeader}>{translate('Brief about the company')}</Text>
						<Text style={styles.textSmall}>
							{translate('about1')}
						</Text>
						<Text style={styles.textSmall}>
							{translate('about2')}
						</Text>
						<Text style={styles.textSmall}>
							{translate('about3')}
						</Text>
						<Text style={styles.textSmall}>
							{translate('about4')}
						</Text>
					</View>
				</ScrollView>
					
			</ImageBackground>
		</SafeAreaView>
	);
}

export default withTranslate(About);

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
	scrollView: {
		marginBottom: 20
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
		marginTop: 30,
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
		fontSize: 28,
		letterSpacing: 2,
		marginTop: 4,
		marginBottom: 4,
		fontFamily: 'Cairo-Regular',
		textAlign: "center"
	},
	textSmall: {
		fontSize: 18,
		margin: 2,
		fontFamily: 'Cairo-Regular',
		textAlign: "justify",
	}
});
