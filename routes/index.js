import React, { Component } from 'react';
import { StyleSheet, Image, TouchableOpacity, NativeModules, Platform } from 'react-native';
import { connect } from 'react-redux';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faBars, faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { withTranslate } from 'react-redux-multilingual';

import { handleSetLanguage, handleChangeLanguage } from '../store/actionCreators/language';
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

    changeLanguage = () => {
        const newLang = this.props.language === "ar" ? "en" : "ar";
        this.props.dispatch(handleChangeLanguage(newLang))
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
        headerLeft:  () => (
                <TouchableOpacity style={styles.menuIcon} onPress={() => navigation.openDrawer()}>
                    <FontAwesomeIcon icon={faBars} size={26} color={route.name === "login" || route.name === "register" || route.name === "restaurantOrCafe" || route.name === "try" || route.name === "restaurant" || route.name === "search" ? "#1d4254": "white"} />
                </TouchableOpacity>
            
        ),
        headerRight:  () => (
                <TouchableOpacity style={styles.menuIcon} onPress={() => navigation.goBack()}>
                    <FontAwesomeIcon icon={this.props.language === "ar" ? faArrowLeft : faArrowRight} size={26} color={route.name === "try" || route.name === "login" ? "#1d4254" : "white"} />
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
                    height: actuatedNormalize(470),
                    width: "60%",
                    borderBottomRightRadius: 20,
                }}
                drawerIcon={{
                    focused: true, color: "red", size: 20
                }}
                drawerContent={props => {
                    return (
                        <DrawerContentScrollView {...props}>
                            <DrawerItemList {...props} />
                            <DrawerItem
                                {...props}
                                onPress={this.changeLanguage}
                                label={lang === "ar" ? "English" : "عربي"}
                                style={{ ...props.style, backgroundColor: "rgba(0,0,0,0.15)", width: 110, alignSelf: "center", borderRadius: 20,  }}
                                labelStyle={{ ...props.labelStyle, textAlign: "right", width: 70, fontFamily: "Cairo-Black", height: 30, lineHeight: 25, fontSize: 16 }}
                            />
                        </DrawerContentScrollView>
                    )
                }}
                drawerContentOptions={{
                    inactiveTintColor: "#1d4254",
                    activeTintColor: '#1d4254',
                    itemStyle: { },
                    labelStyle:{ fontFamily:'Cairo-SemiBold', textAlign: 'left', fontSize: actuatedNormalize(15), margin: actuatedNormalize(1) }
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
                            headerStyle: {backgroundColor: "#154d68", elevation: 0}, headerTitle: "", drawerLabel: translate('home'), headerRight: () => null
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
                            headerShown: true, headerStyle:{position: 'relative', backgroundColor: "#e7e6e6", elevation: 0}, drawerLabel: "QR Code Scanner", headerTitle: "", headerRight:  () => (<TouchableOpacity style={styles.menuIcon} onPress={() => this.goBackFromTry(navigation)}><FontAwesomeIcon icon={this.props.language === "ar" ? faArrowLeft : faArrowRight} size={26} color="#1d4254" /></TouchableOpacity>),
                        })
                    }
                >
                    {(props) => <Try {...props} scanned={this.state.scanned} setScanned={this.setScanned} />}
                </Drawer.Screen>
                <Drawer.Screen
                    name="search"
                    options={
                        ({navigation}) => ({
                            headerShown: true, headerStyle:{backgroundColor: "#e7e6e6", elevation: 0}, drawerLabel: translate('searchRestaurant'), headerTitle: "", headerTitleStyle: {color: "white", fontFamily:'Cairo-SemiBold'}, headerRight:  () => (<TouchableOpacity style={styles.menuIcon} onPress={() => this.goBackFromSearch(navigation)}><FontAwesomeIcon name="arrow-back" icon={this.props.language === "ar" ? faArrowLeft : faArrowRight} size={26} color="#1d4254" /></TouchableOpacity>),
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