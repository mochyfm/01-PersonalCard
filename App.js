import { StyleSheet, View } from 'react-native';
import { useState } from 'react';
import NameBanner from './Components/NameBanner';
import DescriptionBody from './Components/DescriptionBody'
import QrCodeFooter from './Components/QrCodeFooter';


const App = () => {
  
  const [userData, setUser] = useState({
    userName: 'Moisés Fernández Muiña',
    age: 21,
    template: false
  })

  return (
    <View style={styles.container}>
      <NameBanner userData={userData} setUser={setUser}/>
      <DescriptionBody userData={userData}/>
      <QrCodeFooter link={'https://github.com/mochyfm/01-PersonalCard'}/>
    </View>
  );

}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});
