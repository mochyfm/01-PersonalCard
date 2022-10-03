import { Button, Image, StyleSheet, Text, View } from 'react-native';



const NameBanner = ({userData, setUser}) => {

  const template = (value) => {
    if (!value) return styles.lightMode;
    else return styles.darkMode;
  } 

    return (
      <View>
        <View style={[styles.nameBanner, template(userData.template)]}>
          <Image style={styles.prof_Picture} source={require('./profile/example.jpg')}></Image>
          <Text style={[styles.nameText, template(userData.template)]}>{userData.userName}</Text>
        </View>
        <Button title='Change Template'/>
      </View>
    );
  }

export default NameBanner;


const styles = StyleSheet.create({
  lightMode: {
    backgroundColor: '#000',
    color: '#FFF'
  },
  darkMode: {
    backgroundColor: '#FFF',
    color: '#000'
  },
  nameBanner: {
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
    borderWidth: 2,
    borderRadius: 50,
    flex: 2,
    width: 90,
    height: 80,
  },
  nameText: {
    flex: 7,
    fontWeight: 'bold',
    fontSize: 22,
    textShadowColor: '#808080',
    textShadowOffset: {width: 3, height: 3},
    textShadowRadius: 3,

    paddingLeft: 10,
    textAlign: 'left'
  }

});