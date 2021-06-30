import { SET_LANGUAGE } from '../actionCreators/language';

export default function language (state = null, action) {
    switch (action.type) {
        case SET_LANGUAGE :
            return action.language;
        default :
            return state;
    }
} 