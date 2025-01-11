import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useTranslation } from 'react-i18next';

const Details = ({ navigation }) => {
  const { t, i18n } = useTranslation();

  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>{t('details_page')}</Text>
      <Text style={styles.subtitle}>{t('details_description')}</Text>
      <View style={styles.buttonContainer}>
        <Button title={t('go_back')} onPress={() => navigation.goBack()} />
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
});

export default Details;
