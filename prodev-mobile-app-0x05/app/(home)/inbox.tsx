import { View, Text, ScrollView, TouchableHighlight } from "react-native";
import { styles } from "@/styles/_homestyle";
import MessagesList from "@/components/MessagesList";

const Inbox = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.screenTitle}>Inbox</Text>
      <ScrollView style={styles.listingContainer}>
        <MessagesList />
        <View style={styles.paginationContainer}>
          <TouchableHighlight
            style={styles.showMoreButton}
            underlayColor="#ddd"
            activeOpacity={0.8}
          >
            <Text style={styles.showMoreButtonText}>Load more messages</Text>
          </TouchableHighlight>
        </View>
      </ScrollView>
    </View>
  );
};

export default Inbox;
