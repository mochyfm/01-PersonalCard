import { Image, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.nameBanner}>
        <Image style={styles.prof_Picture} source={require('./assets/profile/example.jpg')}></Image>
        <Text style={styles.nameText}>Moisés Fernández Muiña</Text>
      </View>
      <View style={styles.biography}>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  nameBanner: {
    backgroundColor: '#808080',
    height: 100,
    paddingTop: 30,
    paddingRight: 20,
    paddingBottom: 10,
    paddingLeft: 20,
    

    flex: 1,
    flexDirection: 'row',

    alignItems: 'center',
    justifyContent: 'center',
  },
  prof_Picture: {
    borderRadius: 50,
    flex: 2,
    width: 90,
    height: 80
  },
  nameText: {
    flex: 7,
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 22,
    paddingLeft: 10,
    textAlign: 'left'
  },
  biography: {
    flex: 5
  }

});
