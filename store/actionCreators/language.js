import { NativeModules, Platform } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { IntlActions } from 'react-redux-multilingual'

export const SET_LANGUAGE = 'SET_LANGUAGE';

function setLanguage (language, error=null) {
    return {
        type: SET_LANGUAGE,
        language,
        error
    }
}

export function handleSetLanguage () {
    return async (dispatch) => {
        try {
			const value = await AsyncStorage.getItem('language');
			if (value !== null) {
                const userObj = JSON.parse(value)
                return dispatch(IntlActions.setLocale(value))
			} else {
                const deviceLanguage =
                Platform.OS === 'ios'
                    ? NativeModules.SettingsManager.settings.AppleLocale ||
                    NativeModules.SettingsManager.settings.AppleLanguages[0] // iOS 13
                    : NativeModules.I18nManager.localeIdentifier;

                console.log(deviceLanguage); //en_US
                const lang = deviceLanguage[0]+deviceLanguage[1];
                return lang === "ar"
                    ? dispatch(IntlActions.setLocale("ar"))
                    : dispatch(IntlActions.setLocale("en"))
                 
            }
		} catch(e) {
			console.log(e);
            return dispatch(IntlActions.setLocale("ar"))
		}
    }
}

export function handleChangeLanguage (language) {
    return async (dispatch) => {
        try {
            await AsyncStorage.setItem('language', language);
            return dispatch(IntlActions.setLocale(language))
        } catch (e) {
            return dispatch(IntlActions.setLocale("ar"))
        }
    }
}