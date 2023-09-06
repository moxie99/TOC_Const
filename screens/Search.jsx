import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from '../styles/search.styles';
import { Feather, Ionicons } from '@expo/vector-icons';
import { COLORS, SIZES } from '../constants';
import axios from 'axios';
import { ProductCardView } from '../components';
import SearchTile from '../components/product/SearchTile';

const Search = () => {
  const [searchInput, setSearchInput] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [error, setError] = useState(null);
  const handleSearch = async () => {
    try {
      const response = await axios.get(
        `http://localhost:3000/api/products/search/${searchInput}`
      );
      setSearchResults(response.data);
      console.log('response', response.data);
    } catch (error) {
      setError(error);
      console.log('error', error);
    }
  };
  return (
    <SafeAreaView>
      <View style={styles.searchBar}>
        <TouchableOpacity>
          <Ionicons name='camera-outline' size={24} style={styles.searchIcon} />
        </TouchableOpacity>
        <View style={styles.searchWrapper}>
          <TextInput
            style={styles.searchInput}
            value={searchInput}
            placeholder='where are you looking at...'
            onChangeText={setSearchInput}
          />
        </View>

        <View>
          <TouchableOpacity
            style={styles.searchBtn}
            onPress={() => handleSearch()}
          >
            <Feather
              name='search'
              size={SIZES.large}
              color={COLORS.secondary}
            />
          </TouchableOpacity>
        </View>
      </View>
      {searchResults?.length === 0 ? (
        <View style={{ flex: 1 }}>
          <Image
            style={styles.searchImage}
            source={require('../assets/images/Pose23.png')}
          />
        </View>
      ) : searchResults?.length > 0 ? (
        <FlatList
          keyExtractor={(item) => item._id}
          data={searchResults}
          // contentContainerStyle={styles.container}
          // ItemSeparatorComponent={() => <View style={styles.separator} />}
          style={{ marginHorizontal: SIZES.small }}
          renderItem={({ item }) => <SearchTile item={item} />}
        />
      ) : (
        <View></View>
      )}
    </SafeAreaView>
  );
};

export default Search;
