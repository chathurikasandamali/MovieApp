import { Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');

export default {
    width,
    height,

    colors: {
        white: '#FFFFFF',
        black: '#111719',
        green: '#228B22',
    },

    fontFamily: {
        bold: 'RobotoSlab-Bold',
        medium: 'RobotoSlab-Medium',
        light: 'RobotoSlab-Light',
    },
}