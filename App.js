import { View, Button, Image, Text, Pressable } from "react-native";
const logoImg = require("./assets/adaptive-icon.png");

export default function App() {
  return (
    <View style={{ flex: 1, backgroundColor: "plum", padding: 60 }}>
      <Button
        title="Press"
        onPress={() => console.log("Button pressed")}
        color="#191970"
        disabled
      ></Button>

      <Pressable onPress={() => console.log("image pressed")}>
        <Image source={logoImg} style={{ width: 300, height: 300 }}></Image>
      </Pressable>

      <Pressable onPress={() => console.log("text pressed")}>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consequat
          nisl nulla, ac placerat leo maximus hendrerit. Aliquam velit sem,
          pharetra elementum erat eu, accumsan viverra libero. Suspendisse
          potenti. Sed vel tincidunt ex. Vestibulum erat odio, auctor a gravida
          sagittis, fermentum consectetur justo. Morbi id tincidunt leo, non
          malesuada tortor. Pellentesque cursus velit nibh, semper rhoncus arcu
          blandit efficitur. Quisque iaculis id ligula ut maximus. Aenean
          maximus vel neque et molestie.
        </Text>
      </Pressable>
    </View>
  );
}
