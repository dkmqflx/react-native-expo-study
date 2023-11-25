import { View, Alert, Button } from "react-native";

export default function App() {
  return (
    <View style={{ flex: 1, backgroundColor: "plum", padding: 60 }}>
      <Button
        title="alert"
        onPress={() => Alert.alert("Invalid data!")}
      ></Button>

      <Button
        title="alert2"
        onPress={() => Alert.alert("Invalid data!", "DDDD")}
      ></Button>

      <Button
        title="alert3"
        onPress={() =>
          Alert.alert("Invalid data!", "DDDD", [
            {
              text: "Third",
              onPress: () => console.log("cancel Process"),
            },
            {
              text: "Fourth",
              onPress: () => console.log("ok Process"),
            },
          ])
        }
      ></Button>
    </View>
  );
}
