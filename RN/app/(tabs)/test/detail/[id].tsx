import { router, useLocalSearchParams } from "expo-router";
import { Pressable, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Detail() {
  const { id } = useLocalSearchParams<{ id: string }>();

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "white",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={{ fontSize: 20 }}>상세 페이지</Text>
      <Text style={{ marginTop: 8 }}>ID: {id}</Text>

      <Pressable
        onPress={() => router.back()}
        style={{ marginTop: 20, padding: 12, backgroundColor: "#ddd" }}
      >
        <Text>뒤로가기</Text>
      </Pressable>
    </SafeAreaView>
  );
}
