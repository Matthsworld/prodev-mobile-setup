import PropertyListing from "@/components/PropertyListing";
import { styles } from "@/styles/_homestyle";
import { Feather } from "@expo/vector-icons";
import {
  View,
  Text,
  TextInput,
  Image,
  ScrollView,
  TouchableHighlight,
} from "react-native";
import { FILTERS, SAMPLE_DATA } from "@/constants/data";

const Home = () => {
  return (
    <View style={styles.container}>
      {/* Search Bar */}
      <View style={styles.searchGroup}>
        <View style={styles.searchFormGroup}>
          <View style={styles.searchControlGroup}>
            <Text style={styles.searchFormText}>Where to?</Text>
            <TextInput
              style={styles.searchInput} // Use a dedicated style for cleaner code
              placeholder="Location . Date . Add guest"
              placeholderTextColor="#999"
            />
          </View>
          <View style={styles.searchButton}>
            <Feather name="search" size={24} color="white" />
          </View>
        </View>
      </View>

      {/* Filters Section */}
      <View style={styles.filtersContainer}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={styles.filterGroup}>
            {FILTERS.map((filter, index) => (
              <View style={styles.filterContainer} key={index}>
                <Image
                  style={styles.filterImage}
                  source={require("@/assets/images/mansion.png")} // Consider using dynamic sources if applicable
                  resizeMode="contain"
                />
                <Text style={styles.filterText}>{filter}</Text>
              </View>
            ))}
          </View>
        </ScrollView>
      </View>

      {/* Property Listings */}
      <ScrollView style={styles.listingContainer}>
        <PropertyListing listings={SAMPLE_DATA} />
        <View style={styles.paginationContainer}>
          <TouchableHighlight
            style={styles.showMoreButton}
            underlayColor="#ddd" // Provides visual feedback when pressed
            activeOpacity={0.8}
          >
            <Text style={styles.showMoreButtonText}>Show more</Text>
          </TouchableHighlight>
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;
