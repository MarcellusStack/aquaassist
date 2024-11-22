import React, { useState } from "react";
import { observer } from "@legendapp/state/react";
import { deleteTodo, todos$, toggleDone } from "@lib/legendstate/models";
import { Tables } from "@/lib/supabase/database.types";
import { FlashList } from "@shopify/flash-list";
import { Button, StateScreen, Text, View } from "react-native-ui-lib";
import { observable, syncState } from "@legendapp/state";
import { colors } from "@/constants/colors";
import { ActivityIndicator } from "react-native";

export const Todos = observer(() => {
  const [refreshing, setRefreshing] = useState(false);
  const todos = todos$.get();
  const state = syncState(todos$);

  const onRefresh = () => {
    setRefreshing(true);
    state.sync().then(() => setRefreshing(false));
  };

  if (!todos) return <Text>We got no todos</Text>;

  return (
    <View className="w-full h-[400px] flex flex-col">
      <FlashList
        data={Object.values(todos)}
        renderItem={({ item }) => (
          <View className="flex flex-col justify-between items-center">
            <Text onPress={() => toggleDone(item.id)}>
              {item.text} {item.done ? "✅" : "❌"}
            </Text>
            <Button
              label="Delete"
              size="small"
              backgroundColor={colors.primary[600]}
              onPress={() => deleteTodo(item.id)}
            />
          </View>
        )}
        estimatedItemSize={15}
        onRefresh={onRefresh}
        refreshing={refreshing}
      />
    </View>
  );
});
