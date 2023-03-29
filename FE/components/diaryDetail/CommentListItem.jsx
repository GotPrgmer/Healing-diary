import {
  View,
  StyleSheet,
  Text,
  Image,
  FlatList,
  Pressable,
} from "react-native";
import { GlobalColors } from "../../constants/color";
import ReplyListItem from "./ReplyListItem";
import { AntDesign } from "@expo/vector-icons";

const CommentListItem = ({ comment, onDelete }) => {
  const handleDelete = () => {
    onDelete && onDelete(comment.commentId);
  };
  return (
    <View style={styles.container}>
      <View style={styles.container1}>
        <View style={styles.container2}>
          <View style={styles.imageContainer}>
            <Image
              style={styles.image}
              source={require("../../assets/images/SAMPLE3.png")}
            />
          </View>
          <View style={styles.commentContainer}>
            {/* 닉네임 */}
            <Text style={[styles.bold, styles.text]}>{comment?.nickname}</Text>
            {/* 댓글 */}
            <Text style={[styles.regular, styles.text2]}>
              {comment?.content}
            </Text>
          </View>
        </View>
        {/* 시간경과, 답글달기 */}
        <View style={styles.etc}>
          <Text style={[styles.regular, styles.time]}>1일전</Text>
          <Text style={[styles.regular, styles.reply]}>답글 달기</Text>
          <Pressable style={styles.trash} onPress={handleDelete}>
            <AntDesign name="delete" size={12} color="gray" />
          </Pressable>
        </View>
      </View>
      {/* 대댓글 */}
      <View style={styles.replyList}>
        {comment.children && (
          <FlatList
            renderItem={({ item }) => (
              <ReplyListItem item={item} onDelete={onDelete} />
            )}
            data={comment?.children}
          />
        )}
      </View>
    </View>
  );
};

export default CommentListItem;

const styles = StyleSheet.create({
  regular: {
    fontFamily: "KoddiUDOnGothic-Regular",
  },
  bold: {
    fontFamily: "KoddiUDOnGothic-ExtraBold",
  },
  container: {
    paddingHorizontal: 15,
    paddingBottom: 15,
  },
  container1: {},
  container2: {
    flexDirection: "row",
  },
  container3: {
    paddingLeft: 50,
  },
  etc: {
    flexDirection: "row",
    paddingLeft: 50,
  },
  imageContainer: {
    width: 42,
    height: 42,
    marginRight: 10,
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 24,
  },

  commentContainer: {
    // width: "80%",
    paddingTop: 3,
    paddingBottom: 3,
    justifyContent: "space-around",
  },
  text: {
    color: GlobalColors.colors.black500,
    fontSize: 12,
  },
  text2: {
    fontSize: 14,
  },

  time: {
    color: GlobalColors.colors.gray500,
    fontSize: 10,
  },
  reply: {
    color: GlobalColors.colors.gray500,
    fontSize: 10,
    paddingLeft: 15,
  },
  replyList: {
    paddingLeft: 50,
  },
  trash: {
    paddingLeft: 15,
  },
});