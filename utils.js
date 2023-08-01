import * as ImagePicker from 'expo-image-picker'
export async function pickImage(){
    let result=ImagePicker.launchCameraAsync();
    
}
export async function askForPerrmission(){
    const {status}=await ImagePicker.requestMediaLibraryPermissionsAsync()
    return status
}   
const palette={
    tealGreen:'#128c7e',
    tealGreenDark:'#075e54',
    green:'#35d366',
    lime:'#dcf8c6',
    skyblue:'#34b7f1',
    smokeWhite:'#ece5dd',
    white:'white',
    gray:'#3C3C3C',
    lightgray:'#757575',
    icongray:'#717171'

}
export const theme={
    colors:{
        background:palette.smokeWhite,
        foreground:palette.tealGreenDark,
        primary:palette.tealGreen,
        tertiary:palette.lime,
        secondary:palette.green,
        white:palette.white,
        text:palette.gray,
        secondaryText:palette.lightgray,
        icongray:palette.icongray
    },
};
