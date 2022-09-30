import { StyleSheet, View } from 'react-native';
import NameBanner from './Components/NameBanner';
import DescriptionBody from './Components/DescriptionBody'
import QrCodeFooter from './Components/QrCodeFooter';

const App = () => {

  const userName = 'Moisés Fernández Muiña'

  return (
    <View style={styles.container}>
      <NameBanner style={styles.nameBanner} givenName={userName}/>
      <DescriptionBody givenName={userName}/>
      <QrCodeFooter link={'https://github.com/mochyfm/01-PersonalCard'}/>
    </View>
  );

}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  nameBanner: {
    flex: 2
  },
  DescriptionBody: {
    flex: 3
  },
  QrCodeFooter: {
    flex: 2
  }
});
