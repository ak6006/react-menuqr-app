import { Dimensions, Platform, PixelRatio } from 'react-native';

const {
	width: SCREEN_WIDTH,
	height: SCREEN_HEIGHT,
} = Dimensions.get('window');
  
// based on iphone 5s's scale
const scale = SCREEN_WIDTH < SCREEN_HEIGHT ? SCREEN_WIDTH / SCREEN_HEIGHT * 2 : SCREEN_HEIGHT / SCREEN_WIDTH * 2;
  
export default function actuatedNormalize(size) {
	const newSize = size * scale
	if (Platform.OS === 'ios') {
	  	return Math.round(PixelRatio.roundToNearestPixel(newSize))
	} else {
	  	return Math.round(PixelRatio.roundToNearestPixel(newSize))
	}
}