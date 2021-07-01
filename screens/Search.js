import React, { Component } from 'react';
import { StyleSheet, ImageBackground, Text, View, Image, TouchableOpacity, TextInput, ActivityIndicator, ScrollView,Keyboard } from 'react-native';
import { WebView } from 'react-native-webview';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { withTranslate } from 'react-redux-multilingual';

class Search extends Component {
  	state= {
		search: "",
        restaurants: [],
        link: "",
        loading: false
	}

    componentDidMount() {
		this._unsubscribe = this.props.navigation.addListener('focus', () => {
			this.props.setResClicked(false)
		});
	}

	handleChange = (e, name) => {
		if (e !== '') {
            this.setState({
                [name]: e,
                loading: true
            })
            
            fetch(`https://menuqr.teamigroup.com/api/restaurantsInfo/${e}`)
            .then(response => response.json())
            .then(data => this.setState({
                restaurants: data.data,
                loading: false
            }));
        } else {
            this.setState({ [name]: e })
        }
	}

    openMenu = link => {
        this.setState({
            link,
        })
        this.props.setResClicked(true)
    }

	render() {
		// console.log(this.state)
        const { resClicked, translate } = this.props
        if (resClicked) {
			return (
				<WebView
					source={{ uri: this.state.link }}
				/>
			)
		} else {
			return (
				<ImageBackground source={require('../assets/images/background.png')} style={styles.backgroundImage}>
					
                        <View style={styles.searchContainer}>
                            <TextInput
                                style={styles.input}
                                onChangeText={e => this.handleChange(e, "search")}
                                value={this.state.search}
                                placeholder={translate('SearchByRestaurant')}
                                autoFocus
                            />
                        </View>
                        <ScrollView style={styles.results} onScroll={() => Keyboard.dismiss()} keyboardShouldPersistTaps='always'>
                            {this.state.loading && <ActivityIndicator size="large" color="#1d4254" />}
                            {this.state.loading
                                ? null
                                : this.state.search === ""
                                    ? null
                                    : this.state.restaurants.length === 0
                                        ? <Text>{translate('NoResults')}</Text>
                                        : <View>
                                            <Text style={styles.noOfRestaurants}>{this.state.restaurants.length} restaurants found</Text> 
                                            {this.state.restaurants.map(restaurant => 
                                                <View style={styles.restaurantContainer} key={restaurant.id}>
                                                    <TouchableOpacity style={styles.restaurant} onPress={() => this.openMenu(restaurant.restaurantLink)}>
                                                        {restaurant.restaurantImage === null 
                                                            ? <Image
                                                                style={styles.restaurantImage}
                                                                source={require('../assets/images/restaurant-placeholder.png')}
                                                            />
                                                            : <Image
                                                                style={styles.restaurantImage}
                                                                source={{ uri: restaurant.restaurantImage }}
                                                                onError={() => console.log("err")}
                                                            />
                                                        }
                                                        
                                                        <View>
                                                            <Text style={styles.restaurantName}>{restaurant.restaurantName}</Text>
                                                            <Text>{restaurant.restaurantAddress === null ? translate('unknownAddress') : restaurant.restaurantAddress}</Text>
                                                        </View>
                                                        
                                                    </TouchableOpacity>   
                                                </View>
                                            )}
                                        </View>
                            }
                        </ScrollView>
					
				</ImageBackground>
		  
			);
		}
  	}
}

export default withTranslate(Search);

const styles = StyleSheet.create({
	backgroundImage: {	// and screen container
		width: "100%",
		height: "100%",
        flex: 1
	},
	container: {
		width: "100%",
		justifyContent: "center",
		alignItems: "center",
		// paddingLeft: 10,
		// paddingRight: 60,
        marginTop: 30
	},
    searchContainer: {
        width: "100%",
    },
    results: {
        alignSelf: "baseline",
        width: "100%",
        flex: 1,
        paddingLeft: 40,
		paddingRight: 40,
    },
    input: {
		height: 45,
		padding: 10,
		margin: 12,
		borderWidth: 1,
		fontSize: 14,
        fontFamily: "Cairo-Regular",
		borderRadius: 10,
		borderTopWidth: 0,
		borderLeftWidth: 0,
		borderRightWidth: 0,
		borderBottomWidth: 0,
		backgroundColor: "#fff",
		elevation: 3
	},
    noOfRestaurants: {
        width: "100%",
        paddingBottom: 15,
        borderBottomWidth: 1,
        borderBottomColor: "rgb(200, 200, 200)",
        fontSize: 18,
        color: "#1d4254"
    },
    restaurantContainer: {
        width: "100%",
        marginTop: 10,
        marginBottom: 10,
        paddingBottom: 15,
        borderBottomWidth: 1,
        borderBottomColor: "rgb(200, 200, 200)",
    },
    restaurant: {
        width: "100%",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-start",

    },
    restaurantImage: {
        width: 65,
        height: 65,
        borderRadius: 10,
        marginRight: 10,
        marginLeft: 10
    },
    restaurantName: {
        fontSize: 16,
        fontFamily: "Cairo-SemiBold",
        textAlign: "left"
    },
});