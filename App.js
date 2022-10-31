import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

import { NavigationContainer } from "@react-navigation/native";
import Routes from "./src/routes";
import Welcome from "./src/pages/Welcome";
import SignIn from "./src/pages/SignIn";

export default function App() {
  return(
<NavigationContainer>
  <Routes/>
</NavigationContainer>

  );
}