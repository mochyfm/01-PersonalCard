import { Image, StyleSheet, Text, View } from 'react-native';

const DescriptionBody = ({givenName}) => {
    return (
      <View style={styles.descriptionBody}>
        <Text style={styles.descriptionText}>
            Mi nombre es {givenName}, tengo 21 años y actualmente soy estudiante
            de CFGS en el colegio <Text style={styles.italicText}>Salesianos San Juan Bosco en La Cuesta</Text>. El ciclo que estoy cursando es <Text style={styles.boldText}>DAM</Text> (<Text style={styles.italicText}>Desarrollo de Aplicaciones Multiplataformas</Text>) actualmente me encuentro en el segundo año de este, de hecho esta aplicación está hecha como práctica para una de las asignaturas de este segundo año.
        </Text>
      </View>
    );
  }

export default DescriptionBody;


const styles = StyleSheet.create({
    descriptionBody: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 35
    },
    descriptionText: {
        textAlign: 'justify',
        fontSize: 14
    },
    italicText: {
        fontStyle: 'italic'
    },
    boldText: {
        fontWeight: 'bold'
    }
});