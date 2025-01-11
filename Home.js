import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useTranslation } from 'react-i18next';

const Home = ({ navigation }) => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>{t('welcome')}</Text>
      <Text style={styles.subtitle}>{t('recently_added_products')}</Text>
      <Text>{t('recently_added_products_sub')} {t('quantity_added').replace('{quantity}', '5')}</Text>

      <View style={styles.buttonContainer}>
        <Button title={t('details_page')} onPress={() => navigation.navigate('Details')} />
      </View>

      <View style={styles.languageButtons}>
        <Button title="English" onPress={() => changeLanguage('en')} />
        <Button title="አማርኛ" onPress={() => changeLanguage('am')} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  welcome: {
    fontSize: 22,
    marginBottom: 20,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 18,
    marginVertical: 10,
  },
  buttonContainer: {
    marginTop: 20,
    marginBottom: 20,
  },
  languageButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '60%',
  },
});

export default Home;
