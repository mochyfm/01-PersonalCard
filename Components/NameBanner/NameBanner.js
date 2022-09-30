import { Image, StyleSheet, Text, View } from 'react-native';

const NameBanner = ({givenName}) => {
    return (
      <View>
        <View style={styles.nameBanner}>
          <Image style={styles.prof_Picture} source={require('./profile/example.jpg')}></Image>
          <Text style={styles.nameText}>{givenName}</Text>
        </View>
      </View>
    );
  }

export default NameBanner;


const styles = StyleSheet.create({
  nameBanner: {
    backgroundColor: '#808080',
    height: 175,
    paddingTop: 30,
    paddingRight: 20,
    paddingBottom: 10,
    paddingLeft: 20,
    
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
  }

});