
import React, { Component } from 'react';
import { StyleSheet, ImageBackground, Text, View } from 'react-native';
import QRCodeScanner from 'react-native-qrcode-scanner';
import { WebView } from 'react-native-webview';
import actuatedNormalize from '../Normalize';

class Try extends Component {
	state = {
		link: ""
	}

	componentDidMount() {
		this.props.navigation.addListener('focus', () => {
			this.props.setScanned(false);
		});
	}
  
	handleBarCodeScanned = ({ type, data }) => {
		this.props.setScanned(true)
		this.setState({
			link: data
		})
		// alert(`Bar code with type ${type} and data ${data} has been scanned!`);
		// Linking.openURL(data)
		
	};

	render() {
		const { link } = this.state;
		const { scanned } = this.props
		// console.log(this.props)
  
		if (scanned) {
			return (
				<WebView
					source={{ uri: link }}
				/>
			)
		} else {
			return (
				<ImageBackground source={require('../assets/images/background.png')} style={styles.backgroundImage}>
					<Text style={styles.textHeader}>جرب نسختك التجريبية الآن</Text>
					<Text style={styles.textHeaderBigger}>افتح كاميرا هاتفك وقم بمسح الكود</Text>
					<View style={styles.scan}>
						

						<QRCodeScanner
								onRead={this.handleBarCodeScanned}
								containerStyle={{display: "flex", justifyContent: "center", alignItems: "center", flex: 1, width: "100%", }}
								cameraStyle={{width: "90%"}}
							/>
					</View>
				</ImageBackground>
		  
			);
		}
	}
  	
}

export default Try;

const styles = StyleSheet.create({
	backgroundImage: {	// and screen container
		width: "100%",
		height: "100%",
		// justifyContent: "center",
		alignItems: "center",
		
	},
	container: {
		width: "100%",
		justifyContent: "center",
		alignItems: "center",
		paddingLeft: 40,
		paddingRight: 40
	},
	textHeader: {
		color: "#154d68",
		fontSize: actuatedNormalize(26),
		fontFamily: "Cairo-SemiBold",
		letterSpacing: 2,
		marginTop: 20,
		marginBottom: 20,
        textAlign: "center"
	},
    textHeaderBigger: {
        color: "#f7a722",
		fontSize: actuatedNormalize(28),
		fontFamily: "Cairo-SemiBold",
		letterSpacing: 2,
		marginTop: 30,
		marginBottom: 30,
        textAlign: "center"
    },
	scan: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'center',
	},


	centerText: {
		flex: 1,
		fontSize: 18,
		padding: 32,
		color: '#777'
	},
	textBold: {
		fontWeight: '500',
		color: '#000'
	},
	buttonText: {
		fontSize: 21,
		color: 'rgb(0,122,255)'
	},
	buttonTouchable: {
		padding: 16
	}
});
