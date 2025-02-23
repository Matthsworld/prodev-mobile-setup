import { View, Text, ScrollView, TouchableHighlight } from "react-native";
import { styles } from "@/styles/_homestyle";
import SavedListings from "@/components/SavedListings";

const Saved = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.screenTitle}>Saved Listings</Text>
      <ScrollView style={styles.listingContainer}>
        <SavedListings />
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

export default Saved;
