import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import MovieCard from './src/components/MovieCard';
import { api } from './src/services/api';

const MOVIES_ROUTE = '/r-api/?api=filmes';

export default function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      const response = await api.get(MOVIES_ROUTE);

      setMovies(response.data);
    };

    getMovies();
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        keyExtractor={item => String(item.id)}
        data={movies}
        renderItem={({ item }) => <MovieCard movie={item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
