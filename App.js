import { StyleSheet, View } from 'react-native';
import NameBanner from './Components/NameBanner';

const App = () => {

  return (
    <View style={styles.container}>
      <NameBanner style={styles.nameBanner} givenName={'Moisés Fernández Muiña'}/>
    </View>
  );

}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
