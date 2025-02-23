import { View, Text, TextInput, ScrollView, TouchableHighlight } from "react-native";
import { Feather } from "@expo/vector-icons";
import { styles } from "@/styles/_homestyle";
import SearchResults from "@/components/SearchResults";

const Search = () => {
  return (
    <View style={styles.container}>
      <View style={styles.searchGroup}>
        <View style={styles.searchFormGroup}>
          <View style={styles.searchControlGroup}>
            <Text style={styles.searchFormText}>Search Listings</Text>
            <TextInput
              style={styles.searchInput}
              placeholder="Enter location, property type..."
              placeholderTextColor="#999"
            />
          </View>
          <View style={styles.searchButton}>
            <Feather name="search" size={24} color="white" />
          </View>
        </View>
      </View>

      <ScrollView style={styles.listingContainer}>
        <SearchResults />
        <View style={styles.paginationContainer}>
          <TouchableHighlight
            style={styles.showMoreButton}
            underlayColor="#ddd"
            activeOpacity={0.8}
          >
            <Text style={styles.showMoreButtonText}>Show more</Text>
          </TouchableHighlight>
        </View>
      </ScrollView>
    </View>
  );
};

export default Search;
