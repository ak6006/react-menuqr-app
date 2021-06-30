import React, { Component } from 'react';
import { StyleSheet, Image, TouchableOpacity, NativeModules, Platform } from 'react-native';
import { connect } from 'react-redux';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faBars, faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { withTranslate } from 'react-redux-multilingual';

import { handleSetLanguage } from '../store/actionCreators/language';
import Home from '../screens/Home';
import About from '../screens/About';
import LoginWeb from '../screens/LoginWeb';
import Try from '../screens/Try';
import Search from '../screens/Search';

import actuatedNormalize from '../Normalize';

const Drawer = createDrawerNavigator();

class MyStack extends Component {
    state = {
        fontsLoaded: false,
        scanned: false,
        resClicked: false
    }

    componentDidMount() {
        this.props.dispatch(handleSetLanguage())
    }

    goBackFromTry = navigation => {
        this.state.scanned
            ? this.setState({scanned: false})
            : navigation.goBack()
    }

    goBackFromSearch = navigation => {
        this.state.resClicked
            ? this.setState({resClicked: false})
            : navigation.goBack()
    }

    setScanned = value => this.setState({scanned: value})
    setResClicked = value => this.setState({resClicked: value})

    screenOptions =  ({route,navigation}) => ({
        headerRight:  () => (
            this.props.language === "ar"
                ? <TouchableOpacity style={styles.menuIcon} onPress={() => navigation.openDrawer()}>
                    <FontAwesomeIcon icon={faBars} size={26} color={route.name === "login" || route.name === "register" || route.name === "restaurantOrCafe" || route.name === "try" || route.name === "restaurant" ? "#1d4254": "white"} />
                </TouchableOpacity>
                : <TouchableOpacity style={styles.menuIcon} onPress={() => navigation.goBack()}>
                    <FontAwesomeIcon icon={faArrowRight} size={26} color={route.name === "try" || route.name === "login" ? "#1d4254" : "white"} />
                </TouchableOpacity>
            
        ),
        headerLeft:  () => (
            this.props.language === "ar"
                ? <TouchableOpacity style={styles.menuIcon} onPress={() => navigation.goBack()}>
                    <FontAwesomeIcon icon={faArrowLeft} size={26} color={route.name === "try" || route.name === "login" ? "#1d4254" : "white"} />
                </TouchableOpacity>
                : <TouchableOpacity style={styles.menuIcon} onPress={() => navigation.openDrawer()}>
                    <FontAwesomeIcon icon={faBars} size={26} color={route.name === "login" || route.name === "register" || route.name === "restaurantOrCafe" || route.name === "try" || route.name === "restaurant" ? "#1d4254": "white"} />
                </TouchableOpacity>
        ),
        gestureEnabled: true,
        gestureDirection: "horezontal",
        
        headerStyle: {
            position: 'absolute',
            backgroundColor: 'transparent',
            top: 0,
            left: 0,
            right: 0,
            elevation: 0.1,
        },
        headerTitleStyle: {color: "transparent"},
        headerTitleAlign: "center",
        headerTransparent: true,   
    })

    render() {
        console.log("route.index ",this.props)
        const lang = this.props.language;
        const translate = this.props.translate;
        return (
            <>
            <Drawer.Navigator
                drawerPosition={lang === "ar" ? "right" : "left"}
                drawerStyle={{
                    height: actuatedNormalize(300),
                    width: "60%",
                    borderBottomLeftRadius: lang === "ar" ? 20 : 0,
                    borderBottomRightRadius: lang !== "ar" ? 20 : 0,
                }}
                drawerIcon={{
                    focused: true, color: "red", size: 20
                }}
                drawerContentOptions={{
                    inactiveTintColor: "#1d4254",
                    activeTintColor: '#1d4254',
                    itemStyle: { },
                    labelStyle:{ fontFamily:'Cairo-SemiBold', textAlign: 'right', fontSize: actuatedNormalize(13), padding: actuatedNormalize(2) }
                }}
                screenOptions= {({route,navigation}) => this.screenOptions({route,navigation})}
                headerMode="float"
            >
                
                <Drawer.Screen
                    name="home"
                    component={Home}
                    options={
                        ({navigation}) => ({
                            headerShown: true,
                            headerStyle: {backgroundColor: "#154d68", elevation: 0}, headerTitle: "", drawerLabel: translate('home'), headerLeft:  () => (lang === "ar" ? null : <TouchableOpacity style={styles.menuIcon} onPress={() => navigation.openDrawer()}><FontAwesomeIcon icon={faBars} size={26} color="white" /></TouchableOpacity>), headerRight:  () => (lang === "ar" ? <TouchableOpacity style={styles.menuIcon} onPress={() => navigation.openDrawer()}><FontAwesomeIcon icon={faBars} size={26} color="white" /></TouchableOpacity> : null),
                        })
                    }
                />
                <Drawer.Screen
                    name="about"
                    options={{
                        headerShown: true, headerStyle: {backgroundColor: "#154d68", elevation: 0}, drawerLabel: translate('about'), headerTitle: translate('about'), headerTitleStyle: {color: "white", fontFamily:'Cairo-SemiBold'}
                    }}
                    component={About}
                />
                <Drawer.Screen
                    name="login"
                    options={{
                        headerShown: true, headerStyle:{position: 'relative', backgroundColor: "#e7e6e6", elevation: 0}, drawerLabel: translate('restaurantOwner'), headerTitle: "",
                    }}
                    component={LoginWeb}
                />
                <Drawer.Screen
                    name="try"
                    options={
                        ({navigation}) => ({
                            headerShown: true, headerStyle:{position: 'relative', backgroundColor: "#e7e6e6", elevation: 0}, drawerLabel: "QR Code Scanner", headerTitle: "", headerLeft:  () => (<TouchableOpacity style={styles.menuIcon} onPress={() => this.goBackFromTry(navigation)}><FontAwesomeIcon icon={faArrowLeft} size={26} color="#1d4254" /></TouchableOpacity>),
                        })
                    }
                >
                    {(props) => <Try {...props} scanned={this.state.scanned} setScanned={this.setScanned} />}
                </Drawer.Screen>
                <Drawer.Screen
                    name="search"
                    options={
                        ({navigation}) => ({
                            headerShown: this.state.resClicked, headerStyle:{backgroundColor: "#e7e6e6", elevation: 0}, drawerLabel: translate('searchRestaurant'), headerTitle: "", headerTitleStyle: {color: "white", fontFamily:'Cairo-SemiBold'}, headerRight:  () => (null), headerLeft:  () => (<TouchableOpacity style={styles.menuIcon} onPress={() => this.goBackFromSearch(navigation)}><FontAwesomeIcon name="arrow-back" icon={faArrowLeft} size={26} color="#1d4254" /></TouchableOpacity>),
                        })
                    }
                >
                     {(props, route) => <Search route={route} {...props} resClicked={this.state.resClicked} setResClicked={this.setResClicked} />}
                </Drawer.Screen>
            </Drawer.Navigator>
            </>
        )
    }
}

const mapDispatchToProps = ({Intl}) => {
    return {
        language: Intl.locale
    }
}

export default connect(mapDispatchToProps)(withTranslate(MyStack))

const styles = StyleSheet.create({
    menuIcon: {
		margin: 10,
		zIndex: 2,
	},
    headerLogo: {
        height: 50,
        resizeMode: "contain",
    }
});



// Header Left the logo
// headerLeft: () => <Image style={styles.headerLogo} source={require('../assets/images/logo_sm.png')}/>