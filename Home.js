import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useTranslation } from 'react-i18next';
import { Menu, Provider } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Home = ({ navigation }) => {
  const { t, i18n } = useTranslation();
  const [visible, setVisible] = useState(false);

  const openMenu = () => setVisible(true);
  const closeMenu = () => setVisible(false);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    closeMenu();
  };

  return (
    <Provider>
      <View style={styles.container}>
        {/* Header with Language Menu */}
        <View style={styles.header}>
          <Menu
            visible={visible}
            onDismiss={closeMenu}
            anchor={
              <TouchableOpacity onPress={openMenu} style={styles.menuButton}>
                <Text style={styles.menuText}>{t('language')}</Text>
              </TouchableOpacity>
            }
          >
            <Menu.Item onPress={() => changeLanguage('en')} title="English" />
            <Menu.Item onPress={() => changeLanguage('am')} title="አማርኛ" />
          </Menu>
        </View>

        {/* Welcome Section */}
        <Text style={styles.welcome}>{t('welcome')}</Text>
        <Text style={styles.subtitle}>{t('recently_added_products')}</Text>
        <Text style={styles.description}>
          {t('recently_added_products_sub')} {t('quantity_added').replace('{quantity}', '5')}
        </Text>

        {/* Navigation Buttons */}
        <View style={styles.navigationContainer}>
          <TouchableOpacity
            style={styles.navButton}
            onPress={() => navigation.navigate('Details')}
          >
            <Icon name="information-outline" size={24} color="#fff" />
            <Text style={styles.navButtonText}>{t('details_page')}</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.navButton}
            onPress={() => navigation.navigate('Inventory')}
          >
            <Icon name="warehouse" size={24} color="#fff" />
            <Text style={styles.navButtonText}>{t('inventory')}</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.navButton}
            onPress={() => navigation.navigate('AddProduct')}
          >
            <Icon name="plus-circle-outline" size={24} color="#fff" />
            <Text style={styles.navButtonText}>{t('add_product')}</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.navButton}
            onPress={() => navigation.navigate('ProductDetails')}
          >
            <Icon name="file-document-outline" size={24} color="#fff" />
            <Text style={styles.navButtonText}>{t('product_details')}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    backgroundColor: '#f8f9fa',
  },
  header: {
    position: 'absolute',
    top: 20,
    right: 20,
    zIndex: 1,
  },
  menuButton: {
    backgroundColor: '#6c757d',
    padding: 10,
    borderRadius: 5,
    elevation: 3,
  },
  menuText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
  welcome: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
    color: '#343a40',
  },
  subtitle: {
    fontSize: 18,
    textAlign: 'center',
    marginVertical: 10,
    color: '#495057',
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
    color: '#6c757d',
  },
  navigationContainer: {
    marginTop: 20,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  navButton: {
    backgroundColor: '#007bff',
    width: '45%',
    margin: 10,
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 3,
    flexDirection: 'row',
  },
  navButtonText: {
    marginLeft: 10,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
});

export default Home;
