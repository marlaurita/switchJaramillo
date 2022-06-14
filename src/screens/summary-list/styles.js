import { StyleSheet } from "react-native";
import theme from "../../../constants/theme";

export const styles = StyleSheet.create({
    container: {
        flex: 1, 
        alignItems: "center",
        justifyContent: "center"
      },
      text: {
        color: theme.colors.primary,
        fontFamily: "NunitoVariable",
      }
});