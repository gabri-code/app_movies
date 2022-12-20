import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function ModalMovieDetailsBody({ movie, toBack }) {
  return (
    <View style={styles.container}>
      <View style={styles.body}>
        <TouchableOpacity style={styles.buttonToBack} onPress={toBack}>
          <Text style={styles.buttonText}>Voltar</Text>
        </TouchableOpacity>
        <Text style={styles.title}>{movie.nome}</Text>
        <Text style={styles.sinopseTitle}>Sinopse:</Text>
        <Text style={styles.sinopse}>{movie.sinopse}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  body: {
    height: '80%',
    width: '100%',
    backgroundColor: '#121212',
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
  },
  buttonToBack: {
    backgroundColor: '#e52246',
    padding: 10,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
  },
  buttonText: {
    fontSize: 16,
    color: '#fff',
  },
  title: {
    textAlign: 'center',
    color: '#fff',
    padding: 10,
    fontSize: 28,
    fontWeight: 'bold',
  },
  sinopseTitle: {
    color: '#fff',
    fontSize: 18,
    marginHorizontal: 10,
  },
  sinopse: {
    color: '#fff',
    marginHorizontal: 10,
  },
});
