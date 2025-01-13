import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
const resources = {
  en: {
    translation: {
      welcome: 'Welcome to the App',
      recently_added_products: 'Recently Added Products',
      recently_added_products_sub: 'Check out the latest products added.',
      quantity_added: 'Total added: {quantity}',
      details_page: 'Go to Details',
      details_description: 'This is the details page.',
      go_back: 'Go Back',
      inventory: 'Inventory',
      add_product: 'Add Product',
      product_details: 'Product Details',
    },
  },
  am: {
    translation: {
      welcome: 'እንኳን ወደ መተግበሪያው በሰላም መጡ',
      recently_added_products: 'በቅርቡ የታከሉ ምርቶች',
      recently_added_products_sub: 'አዲስ የታከሉትን ምርቶች ይመልከቱ።',
      quantity_added: 'አጠቃላይ የታከሉት: {quantity}',
      details_page: 'ወደ ዝርዝር ይሂዱ',
      details_description: 'ይህ ዝርዝር ገጽ ነው።',
      go_back: 'ተመለስ',
      inventory: 'እቃዎች',
      add_product: 'ምርት አክል',
      product_details: 'ዝርዝር ምርት',
    },
  },
};


i18n.use(initReactI18next).init({
  resources,
  lng: 'en', // Default language
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
