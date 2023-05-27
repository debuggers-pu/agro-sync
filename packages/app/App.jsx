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
// import BottomNav from "./src/components/resuables/bottom-nav/BottomNav";
import InputNumber from "./src/components/resuables/inputfield-number/InputNumber";
import CustomSelect from "./src/components/resuables/Select/CustomSelect";
import SplashScreen from "./src/screens/SplashScren";

const Stack = createNativeStackNavigator();
export default () => (
  <ApplicationProvider {...eva} theme={eva.light}>
    {/* <HomeScreen /> */}
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={SplashScreen}
          options={{ title: "Welcome" }}
        />
        {/* <Stack.Screen name="Profile" component={SplashScreen} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  </ApplicationProvider>
);

// const HomeScreen = ({ navigation }) => {
//   return (
//     <Button
//       title="Go to Jane's profile"
//       onPress={() => navigation.navigate("Profile", { name: "Jane" })}
//     />
//   );
// };
const ProfileScreen = ({ navigation, route }) => {
  return <Text>This is {route.params.name}'s profile</Text>;
};
