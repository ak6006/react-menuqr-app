
import React from 'react';
import { StyleSheet, SafeAreaView, ImageBackground, Text, View, Image, TouchableOpacity } from 'react-native';
import { withTranslate } from 'react-redux-multilingual';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faQrcode, faSearch } from '@fortawesome/free-solid-svg-icons';

import actuatedNormalize from '../Normalize';

function Home({translate, props}) {
	// console.log(props.navigation.navigate)
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
					<Text style={styles.textSmall}>{translate('home3')}</Text>
					
					<Text style={styles.textSmall}>{translate('home4')}</Text>
					<Text style={{...styles.headerSmall, marginTop: 15, width: "100%"}}>{translate('home5')}</Text>
				</View>
				<View style={{justifyContent: "center", alignItems: "center"}}>
					<TouchableOpacity style={styles.btnContainer} onPress={() => props.navigation.navigate('try')}>
						<FontAwesomeIcon icon={faQrcode} size={26} color="#1d4254" style={{marginEnd: 10}} />
						<Text style={styles.btnText}>Scan Menu QR</Text>
					</TouchableOpacity>
					<TouchableOpacity style={styles.btnContainer} onPress={() => props.navigation.navigate('search')}>
						<FontAwesomeIcon icon={faSearch} size={26} color="#1d4254" style={{marginEnd: 10}} />
						<Text style={styles.btnText}>{translate('searchRestaurant')}</Text>
					</TouchableOpacity>
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
		// flexDirection: "row",
		flexWrap: "wrap",
		width: "100%",
		// alignItems: 'center',
		margin: 20,
		marginLeft: 10,
		marginRight: 10,
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
		textAlign: "left"
	},
	textSmall: {
		marginTop: 5,
		marginLeft: 12,
		fontSize: actuatedNormalize(16),
		flexWrap: "wrap",
		width: "100%",
		margin: 2,
		fontFamily: "Cairo-Regular",
		textAlign: "left"
	},
	headerSmall: {
		marginTop: 5,
		marginLeft: 10,
		marginRight: 10,
		color: "#1d4254",
		fontSize: actuatedNormalize(20),
		fontFamily: "Cairo-SemiBold",
		margin: 5,
		textAlign: "left"
	},
	btnContainer: {
		flexDirection: "row",
		marginTop: 10,
		backgroundColor: "#f9a624",
		height: 50,
		width: "70%",
		alignItems: "center",
		justifyContent: "center",
		borderRadius: 10
	},
	btnText: {
		color: "#fff",
		fontFamily: "Cairo-SemiBold",
		fontSize: 24,
	},
});
