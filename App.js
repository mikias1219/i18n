import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { I18nextProvider } from 'react-i18next';
import i18n from './src/i18n/index';
import Home from './Home';
import Details from './Details';
import Inventory from './Inventory';
import AddProduct from './AddProduct';
import ProductDetails from './ProductsDetails';

const Stack = createStackNavigator();

const App = () => {
  return (
    <I18nextProvider i18n={i18n}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={Home}
            options={{ title: i18n.t('welcome') }}
          />
          <Stack.Screen
            name="Details"
            component={Details}
            options={{ title: i18n.t('details_page') }}
          />
          <Stack.Screen
            name="Inventory"
            component={Inventory}
            options={{ title: i18n.t('inventory') }}
          />
          <Stack.Screen
            name="AddProduct"
            component={AddProduct}
            options={{ title: i18n.t('add_product') }}
          />
          <Stack.Screen
            name="ProductDetails"
            component={ProductDetails}
            options={{ title: i18n.t('product_details') }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </I18nextProvider>
  );
};

export default App;
