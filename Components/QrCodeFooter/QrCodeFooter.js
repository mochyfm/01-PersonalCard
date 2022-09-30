import { Text, StyleSheet, View } from 'react-native'
import React, { Component } from 'react'
import QRCode from 'react-native-qrcode-svg'

const QrCodeFooter = ({link}) => {
    return (
      <View style={styles.qrBody}>
        <QRCode value={link}/>
      </View>
    )
}

export default QrCodeFooter;

const styles = StyleSheet.create({
  qrBody: {
    margin: 40,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})