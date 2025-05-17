import { StyleSheet } from "react-native";

export const primary = '#030014';
const accent = '#ab8bff';
const secondary = '#151312';
const light = {
    100: '#d6c6ff',
    200: '#a8b5db',
    300: '#9ca4ab',
};
const dark = {
    100: '#22153d',
    200: '#0f0d23'
}
const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: "center"
    }
});

export default style;