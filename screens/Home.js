
import React from 'react';
import { StyleSheet, SafeAreaView, ImageBackground, Text, View, Image } from 'react-native';
import { withTranslate } from 'react-redux-multilingual';

import actuatedNormalize from '../Normalize';

function Home({translate}) {
	// const translate = this.props.translate;
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
					<Text style={styles.textHeader}>{translate('home1')}</Text>
					<Text style={styles.textHeader}>{translate('home2')}</Text>
					<Text style={{...styles.textSmall, marginTop: 15}}>{translate('home3')}</Text>
					<Text style={styles.textSmall}>{translate('home4')}</Text>
					<Text style={{...styles.headerSmall, marginTop: 15}}>{translate('home5')}</Text>
				</View>
			</ImageBackground>
		</SafeAreaView>
	);
}

export default withTranslate(Home);

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
		height: "20%",
		borderBottomLeftRadius: 30,
		borderBottomRightRadius: 30
	},
	logo: {
		height: "60%",
		resizeMode: "contain",
		justifyContent: "center"
	},
	texts: {
		justifyContent: "flex-start",
		flexDirection: "row",
		flexWrap: "wrap",
		width: "70%",
		// alignItems: 'center',
		margin: 20,
		marginLeft: 20,
		marginRight: 20,
		padding: 5,
		borderBottomLeftRadius: 30,
		borderBottomRightRadius: 30,
	},
	textHeader: {
		marginTop: 5,
		marginLeft: 10,
		marginRight: 10,
		color: "#1d4254",
		fontSize: actuatedNormalize(30),
		letterSpacing: 2,
		fontFamily: "Cairo-SemiBold",
		writingDirection: "rtl",
		textAlign: "left"
	},
	textSmall: {
		marginTop: 5,
		marginLeft: 10,
		fontSize: 16,
		margin: 2,
		fontFamily: "Cairo-Regular",
		writingDirection: "rtl",
		textAlign: "left"
	},
	headerSmall: {
		marginTop: 5,
		marginRight: 10,
		color: "#1d4254",
		fontSize: actuatedNormalize(20),
		fontFamily: "Cairo-SemiBold",
		margin: 5,
		writingDirection: "rtl",
		textAlign: "left"
	}
});
