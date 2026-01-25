import { router } from "expo-router";
import { FlatList, Pressable, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const items = Array.from({ length: 30 }, (_, i) => ({
  id: String(i),
  title: `리스트 아이템 ${i + 1}`,
}));

export default function Test() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <Text>Full Screen</Text>
      <Pressable
        onPress={() => console.log("pressed")}
        style={{ padding: 12, backgroundColor: "skyblue", borderRadius: 12 }}
      >
        <Text>클릭</Text>
      </Pressable>
      <FlatList
        data={items}
        keyExtractor={(item) => item.id}
        ListHeaderComponent={
          <View style={{ padding: 16 }}>
            <Text>목록</Text>
          </View>
        }
        renderItem={({ item }) => (
          <Pressable
            onPress={() => router.push(`/test/detail/${item.id}`)}
            style={{
              padding: 16,
              borderBottomWidth: 1,
              borderColor: "#eee",
            }}
          >
            <Text>{item.title}</Text>
          </Pressable>
        )}
      />
    </SafeAreaView>
  );
}
