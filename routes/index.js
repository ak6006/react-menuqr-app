import React, { Component } from 'react';
import { StyleSheet, Image, TouchableOpacity } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faBars, faArrowLeft } from '@fortawesome/free-solid-svg-icons';

import Home from '../screens/Home';
import About from '../screens/About';
import LoginWeb from '../screens/LoginWeb';
import Try from '../screens/Try';
import Search from '../screens/Search';

const Drawer = createDrawerNavigator();

class MyStack extends Component {
    state = {
        fontsLoaded: false,
        scanned: false,
        resClicked: false
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

    render() {
        // console.log(this.state)
        return (
            <>
            <Drawer.Navigator
                drawerPosition="right"
                drawerIcon={{
                    focused: true, color: "red", size: 20
                }}
                drawerContentOptions={{
                    inactiveTintColor: "#1d4254",
                    activeTintColor: '#1d4254',
                    itemStyle: { },
                    labelStyle:{fontFamily:'Cairo-SemiBold', textAlign: 'right'}
                }}
                screenOptions= {({route,navigation}) => screenOptions({route,navigation})}
                headerMode="float"
            >
                
                <Drawer.Screen
                    name="home"
                    component={Home}
                    options={{
                        headerShown: true,
                        headerStyle: {backgroundColor: "#154d68", elevation: 0}, headerTitle: "", drawerLabel: "الرئيسية", headerLeft:  () => (null),
                    }}
                />
                <Drawer.Screen
                    name="about"
                    options={{
                        headerShown: true, headerStyle: {backgroundColor: "#154d68", elevation: 0}, drawerLabel: "من نحن", headerTitle: "من نحن", headerTitleStyle: {color: "white", fontFamily:'Cairo-SemiBold'}
                    }}
                    component={About}
                />
                <Drawer.Screen
                    name="login"
                    options={{
                        headerShown: true, headerStyle:{position: 'relative', backgroundColor: "#e7e6e6", elevation: 0}, drawerLabel: "صاحب مطعم", headerTitle: "", headerLeft:  () => (<Image  style={styles.headerLogo} source={require('../assets/images/logo_sm.png')}/>),
                    }}
                    component={LoginWeb}
                />
                <Drawer.Screen
                    name="try"
                    beforeRemove={() => console.log("leave")}
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
                            headerShown: this.state.resClicked, headerStyle:{backgroundColor: "#e7e6e6", elevation: 0}, drawerLabel: "ابحث عن مطعم", headerTitle: "", headerTitleStyle: {color: "white", fontFamily:'Cairo-SemiBold'}, headerRight:  () => (null), headerLeft:  () => (<TouchableOpacity style={styles.menuIcon} onPress={() => this.goBackFromSearch(navigation)}><FontAwesomeIcon name="arrow-back" icon={faArrowLeft} size={26} color="#1d4254" /></TouchableOpacity>),
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

export default MyStack;

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

const screenOptions =  ({route,navigation}) => ({
    headerRight:  () => (
        <TouchableOpacity style={styles.menuIcon} onPress={() => navigation.openDrawer()}>
            <FontAwesomeIcon icon={faBars} size={26} color={route.name === "login" || route.name === "register" || route.name === "restaurantOrCafe" || route.name === "try" || route.name === "restaurant" ? "#1d4254": "white"} />
        </TouchableOpacity>
    ),
    headerLeft:  () => (
        <TouchableOpacity style={styles.menuIcon} onPress={() => navigation.goBack()}>
            <FontAwesomeIcon icon={faArrowLeft} size={26} color={route.name === "try" ? "#1d4254" : "white"} />
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
        shadowOpacity: 0,
        borderBottomWidth: 0,
    },
    headerTitleStyle: {color: "transparent"},
    headerTitleAlign: "center",
    headerTransparent: true,   
})