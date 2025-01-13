import React from 'react';
import { View, Text, Button } from 'react-native';
import { useTranslation } from 'react-i18next';

const ProductDetails = ({ navigation }) => {
  const { t } = useTranslation();
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>{t('product_details')}</Text>
      <Button
        title={t('go_back')}
        onPress={() => navigation.goBack()}
      />
    </View>
  );
};

export default ProductDetails;
