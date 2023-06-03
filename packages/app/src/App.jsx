import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { PaperProvider } from "react-native-paper";
import PlantEntryScreen from "./screens/PlantEntryScreen";
import GetStartedScreen from "./screens/GetStartedScreen";
import ChooseOptionScreen from "./screens/ChooseOptionScreen";
import AnimalEntryScreen from "./screens/AnimalEntryScreen";

const App = () => {
  const Stack = createNativeStackNavigator();
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
        refetchOnMount: false,
        refetchOnReconnect: false,
        retry: false,
        staleTime: 5 * 60 * 1000,
      },
    },
  });
  return (
    <PaperProvider>
      <QueryClientProvider client={queryClient}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="Main"
              component={GetStartedScreen}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="Choose"
              component={ChooseOptionScreen}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="Plant"
              component={PlantEntryScreen}
              options={{ title: "Plant Entry Form" }}
            />
            <Stack.Screen
              name="Animal"
              component={AnimalEntryScreen}
              options={{ title: "Animal Entry Form" }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </QueryClientProvider>
    </PaperProvider>
  );
};

export default App;
