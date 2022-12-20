import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet, View, ActivityIndicator } from 'react-native';
import MovieCard from './src/components/MovieCard';
import { api } from './src/services/api';

const MOVIES_ROUTE = '/r-api/?api=filmes';

export default function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getMovies = async () => {
      const response = await api.get(MOVIES_ROUTE);

      setMovies(response.data);

      setIsLoading(false);
    };

    getMovies();
  }, []);

  if (isLoading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator color="#121212" size={45} />
      </View>
    );
  }

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
  loadingContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
});
