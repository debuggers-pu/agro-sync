import React from "react";
import * as eva from "@eva-design/eva";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  ApplicationProvider,
  Input,
  Layout,
  Text,
} from "@ui-kitten/components";
import { ToastAndroid, Button, StatusBar } from "react-native";

import InputNumber from "./components/resuables/inputfield-number/InputNumber";
import CustomSelect from "./components/resuables/Select/CustomSelect";
import GetStarted from "./screens/GetStarted";
import ChooseOption from "./screens/ChooseOption";
import PlantEntry from "./screens/PlantEntry";

const Stack = createNativeStackNavigator();
export default () => (
  <ApplicationProvider {...eva} theme={eva.light}>
    {/* <HomeScreen /> */}
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={PlantEntry}
          options={{ title: "Welcome" }}
        />
        {/* <Stack.Screen name="Profile" component={SplashScreen} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  </ApplicationProvider>
);
