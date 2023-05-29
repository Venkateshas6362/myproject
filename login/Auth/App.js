import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React, { useState, useEffect } from "react";
import { firebase } from './config';

import Login from "./src/Login";
import Registration from "./src/Registration";
import Dashboard from "./src/Dashboard";
import Header from "./src/components/Header"

const Stack = createStackNavigator();

function App() {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  function onAuthStateChanged(user) {
    setUser(user);
    if (setInitializing) setInitializing(false);
  }
  useEffect(() => {
    const subscriber = firebase.auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, []);
  if (initializing) return null;

  if (!user) {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="login"
          components={Login}
          options={{
            headerTitle: () => <Header name="VENKI" />,
            headerStyle: {
              height: 150,
              borderBottomLeftRadius: 50,
              borderBottomRightRadius: 50,
              backgroundColor: '#000',
              shadowColor: '0000',
              elevation: 25
            }
          }}
        />

        <Stack.Screen
          name="Registration"
          components={Registration}
          options={{
            headerTitle: () => <Header name="VENKI" />,
            headerStyle: {
              height: 150,
              borderBottomLeftRadius: 50,
              borderBottomRightRadius: 50,
              backgroundColor: '#000',
              shadowColor: '0000',
              elevation: 25
            }
          }}
          />
      </Stack.Navigator>
    );
  }

  return(
    <Stack.Navigator>
       <Stack.Screen
          name="Dashboard"
          components={Dashboard}
          options={{
            headerTitle: () => <Header name="DASHBOARD" />,
            headerStyle: {
              height: 150,
              borderBottomLeftRadius: 50,
              borderBottomRightRadius: 50,
              backgroundColor: '#000',
              shadowColor: '0000',
              elevation: 25
            }
          }}
          />
    </Stack.Navigator>
  );

}

export default() =>{
  return(
    <NavigationContainer>
      <App />
    </NavigationContainer>
  )
}