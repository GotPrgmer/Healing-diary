import { View, ScrollView, StyleSheet, Dimensions } from "react-native";
c

import RecentDiary from "../components/main/RecentDiary";
import RecommendGroup from "../components/main/RecommendGroup";
import RecommendDiary from "./../components/main/RecommendDiary";
import Buttons from "../components/main/Buttons";
import DiaryList from "./../components/diary/DiaryList";

const deviceHeight = Dimensions.get("window").height - 130;
const HomeScreen = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const handleActiveIndex = (index) => {
    setActiveIndex(index);
  };

  const renderItem = () => {
    if (activeIndex === 0) {
      return (
        <ScrollView>
          <RecommendGroup />
          <RecommendDiary />
          <RecentDiary />
        </ScrollView>
      );
    }
    if (activeIndex === 1) {
      return <DiaryList />;
    }
    if (activeIndex === 2) return;
  };

  return (
    <View style={styles.container}>
      <Buttons
        activeIndex={activeIndex}
        handleActiveIndex={handleActiveIndex}
      />
      {renderItem()}
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 24,
    height: deviceHeight,
  },
});
