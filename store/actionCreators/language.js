import { NativeModules, Platform, I18nManager } from 'react-native';
import RNRestart from 'react-native-restart';
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
                if (value === "ar" && !I18nManager.isRTL) {
                    I18nManager.forceRTL(true);
                    RNRestart.Restart();
                }
                if (value === "en" && I18nManager.isRTL) {
                    I18nManager.allowRTL(false);
                    I18nManager.forceRTL(false);
                    RNRestart.Restart();
                }
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
            return dispatch(IntlActions.setLocale("en"))
		}
    }
}

export function handleChangeLanguage (language) {
    return async (dispatch) => {
        try {
            await AsyncStorage.setItem('language', language);
            // if (language === "ar" && !I18nManager.isRTL) {
            //     I18nManager.forceRTL(true);
            //     RNRestart.Restart();
            // }
            // if (language === "en" && I18nManager.isRTL) {
            //     I18nManager.allowRTL(false);
            //     I18nManager.forceRTL(false);
            //     RNRestart.Restart();
            // }
            return dispatch(IntlActions.setLocale(language))
        } catch (e) {
            return dispatch(IntlActions.setLocale("ar"))
        }
    }
}