import { View, Text, Image, ImageBackground, ScrollView } from "react-native";
const logoImg = require("./assets/adaptive-icon.png");

export default function App() {
  return (
    <View style={{ flex: 1, backgroundColor: "plum", padding: 60 }}>
      <ScrollView>
        <Image source={logoImg} style={{ width: 300, height: 300 }} />

        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ipsum
          faucibus vitae aliquet nec ullamcorper sit. Pharetra massa massa
          ultricies mi quis hendrerit. Eleifend donec pretium vulputate sapien
          nec. Lacinia quis vel eros donec ac odio tempor orci. Arcu bibendum at
          varius vel pharetra vel turpis. Molestie nunc non blandit massa enim.
          Quis enim lobortis scelerisque fermentum. Elit at imperdiet dui
          accumsan sit amet. Nunc sed augue lacus viverra vitae congue eu
          consequat ac. Fringilla urna porttitor rhoncus dolor purus non.
          Molestie at elementum eu facilisis sed odio morbi.
        </Text>

        <Image source={logoImg} style={{ width: 300, height: 300 }} />
      </ScrollView>
    </View>
  );
}
