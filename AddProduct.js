import React from 'react';
import { View, Text, Button } from 'react-native';
import { useTranslation } from 'react-i18next';

const AddProduct = ({ navigation }) => {
  const { t } = useTranslation();
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>{t('add_product')}</Text>
      <Button
        title={t('go_back')}
        onPress={() => navigation.goBack()}
      />
    </View>
  );
};

export default AddProduct;
