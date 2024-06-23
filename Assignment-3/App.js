import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import Button from "./components/Button";

export default function App() {
  return (
    <View className="flex-1 justify-center items-center px-4 ">
      <Button variant="primary" size="sm" />
      <Button variant={"outline"} size="lg" />
      <Button variant={"success"} size="lg" />
      <Button variant={"danger"} size="md" />
      <StatusBar style="auto" />
    </View>
  );
}
