import { useCallback, useMemo, useRef } from "react";
import { ScrollView, StyleSheet, View, Text, Button } from "react-native";
import {
  BottomSheetModal,
  BottomSheetModalProvider,
  BottomSheetBackdrop,
} from "@gorhom/bottom-sheet";

import GroupDiaryList from "./GroupDiaryList";
import GroupIntroduction from "./GroupIntroduction";
import GroupDetailHeader from "./GroupDetailHeader";
import GroupSetting from "./GroupSetting";

const GroupDetail = () => {
  const bottomSheetModalRef = useRef(null);
  const snapPoints = useMemo(() => ["70%"], []);
  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);

  const handleCloseModalPress = useCallback(() => {
    bottomSheetModalRef.current?.close();
  }, []);

  const renderBackdrop = useCallback(
    (props) => (
      <BottomSheetBackdrop
        {...props}
        pressBehavior="close"
        disappearsOnIndex={-1}
        appearsOnIndex={0}
      />
    ),
    []
  );
  return (
    <>
      <GroupDetailHeader handlePresentModalPress={handlePresentModalPress} />
      <ScrollView style={styles.container}>
        <GroupIntroduction />
        <GroupDiaryList />
      </ScrollView>
      <BottomSheetModalProvider>
        <BottomSheetModal
          ref={bottomSheetModalRef}
          index={0}
          snapPoints={snapPoints}
          backdropComponent={renderBackdrop}
          enabledPanDownToClose={true}
        >
          <GroupSetting handleCloseModalPress={handleCloseModalPress} />
        </BottomSheetModal>
      </BottomSheetModalProvider>
    </>
  );
};

export default GroupDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 32,
    paddingHorizontal: 16,
  },

  contentContainer: {
    flex: 1,
    alignItems: "center",
  },
});
