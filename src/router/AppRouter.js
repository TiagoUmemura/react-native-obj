import { createStackNavigator, createAppContainer } from "react-navigation";

import Home from "./screens/Home";
import Products from "./screens/Product";

const AppRouter = createStackNavigator(
  {
    Home: { screen: Home },
    Products: { screen: Products }
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: "#01a699"
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontWeight: "bold"
      }
    }
  }
);

export default createAppContainer(AppRouter);
