import React from 'react';
import { View, Text, Button } from 'react-native';
import { useTranslation } from 'react-i18next';

const Inventory = ({ navigation }) => {
  const { t } = useTranslation();
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>{t('inventory')}</Text>
      <Button
        title={t('add_product')}
        onPress={() => navigation.navigate('AddProduct')}
      />
    </View>
  );
};

export default Inventory;
