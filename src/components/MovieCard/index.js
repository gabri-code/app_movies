import React, { useState } from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Modal,
} from 'react-native';
import ModalMovieDetailsBody from '../ModalMovieDetailsBody';

export default function MovieCard({ movie }) {
  const [openModal, setOpenModal] = useState(false);

  return (
    <View>
      <View style={styles.card}>
        <Text style={styles.title}>{movie.nome}</Text>
        <Image source={{ uri: movie.foto }} style={styles.folder} />
        <View style={styles.footer}>
          <TouchableOpacity style={styles.moreButton}>
            <Text style={styles.buttonText} onPress={() => setOpenModal(true)}>
              LEIA MAIS
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <Modal transparent={true} animationType="slide" visible={openModal}>
        <ModalMovieDetailsBody
          movie={movie}
          toBack={() => setOpenModal(false)}
        />
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    margin: 15,
    elevation: 2,
  },
  title: {
    padding: 15,
    fontSize: 18,
  },
  folder: {
    height: 250,
    zIndex: 2,
  },
  footer: {
    alignItems: 'flex-end',
    marginTop: -45,
    zIndex: 9,
  },
  moreButton: {
    width: 100,
    backgroundColor: '#09A6FF',
    opacity: 1,
    padding: 8,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
  },
});
