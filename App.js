import React, { useState } from "react";
import { SafeAreaView, ActivityIndicator } from "react-native";

import { useFonts } from "expo-font";
import { styles } from "./styles";
import ShoppingList from "./src/screens/shopping-list/index";
import SummaryList from "./src/screens/summary-list/index";
import theme from "./constants/theme";

export default function App() {
  const [itemLengths, setItemLengths] = useState(0);
  const [loaded] = useFonts({
    NunitoVariable: require("./assets/fonts/Nunito-VariableFont_wght.ttf"),
  });

  if (!loaded) {
    return <ActivityIndicator size="large" color={theme.colors.primary} />;
  }

  const onEvalList = (items) => {
    setItemLengths(items);
  };
  let content = <ShoppingList onEvalList={onEvalList} />;
  if (itemLengths > 5) {
    content = <SummaryList/>
  }
  return (
    <SafeAreaView style={styles.container}>
      {content}
    </SafeAreaView>
  );
};