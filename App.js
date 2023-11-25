import { View, Button, Image, Text, Pressable, Modal } from "react-native";
import { useState } from "react";

export default function App() {
  const [isModalVisible, setModalVisible] = useState(false);
  return (
    <View style={{ flex: 1, backgroundColor: "plum", padding: 60 }}>
      <Button
        title="Press"
        onPress={() => setModalVisible(true)}
        color="#191970"
      ></Button>
      {/* presentationStyle only for iOS */}
      <Modal
        visible={isModalVisible}
        onRequestClose={() => setModalVisible(false)}
        animationType="slide"
        presentationStyle="pageSheet"
      >
        <View style={{ flex: 1, padding: 60 }}>
          <Text>Modal Content</Text>
          <Button title="close" onPress={() => setModalVisible(false)}></Button>
        </View>
      </Modal>
    </View>
  );
}
