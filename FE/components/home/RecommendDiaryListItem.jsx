import {
  View,
  Image,
  Text,
  StyleSheet,
  Dimensions,
  Pressable,
  ActivityIndicator,
} from "react-native";
import { GlobalColors } from "../../constants/color";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";

const { width } = Dimensions.get("window");

const RecommendDiaryListItem = ({ item }) => {
  const navigation = useNavigation();
  const [isLoading, setIsLoading] = useState(true);
  const handleImageLoad = () => {
    setIsLoading(false);
  };

  return (
    <Pressable
      style={styles.diaries}
      onPress={() => {
        navigation.navigate("diaryDetail", { diaryId: item.diaryId });
      }}
    >
      {isLoading && (
        <ActivityIndicator
          style={StyleSheet.absoluteFill}
          color={GlobalColors.colors.primary500}
          size="large"
        />
      )}
      <View style={styles.diary}>
        <Image
          source={{ uri: item?.imageUrl }}
          style={styles.image}
          onLoadEnd={handleImageLoad}
        />
        <View style={styles.hashtag}>
          <Text style={styles.hashtagText}>#{item?.emotion.value}</Text>
        </View>
      </View>
    </Pressable>
  );
};

export default RecommendDiaryListItem;

const styles = StyleSheet.create({
  diaries: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  diary: {
    marginBottom: 8,
    marginRight: 8,
  },

  image: {
    width: width / 2,
    height: width / 2,
    borderRadius: 12,
  },

  hashtag: {
    position: "absolute",
    top: 8,
    left: 8,
    minWidth: 65,
    height: 25,
    backgroundColor: GlobalColors.colors.white500,
    borderRadius: 13,
    alignItems: "center",
    justifyContent: "center",
  },

  hashtagText: {
    fontFamily: "KoddiUDOnGothic-ExtraBold",
    fontSize: 12,
    color: GlobalColors.colors.primary500,
  },
});
