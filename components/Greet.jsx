import { View, Text } from "react-native";

const Greet = ({ name }) => {
  return (
    <View>
      <Text>hello, {name}</Text>
    </View>
  );
};

export default Greet;
