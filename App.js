import { StyleSheet, View } from 'react-native';
import NameBanner from './Components/NameBanner';
import DescriptionBody from './Components/DescriptionBody'

const App = () => {

  const userName = 'Moisés Fernández Muiña'

  return (
    <View style={styles.container}>
      <NameBanner style={styles.nameBanner} givenName={userName}/>
      <DescriptionBody givenName={userName}/>
    </View>
  );

}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
