import { View, Text, FlatList, StyleSheet, StatusBar } from 'react-native'
import { aSetOfArticles } from '../../core/domain/model/Feed/Feed.model'

const FakeData = aSetOfArticles(30)

export const Feed = () => {
  return (
    <View style={styles.feedWrapper}>
      <FlatList
        data={FakeData}
        ItemSeparatorComponent={() => <View style={styles.separator}></View>}
        renderItem={({ item }) => (
          <View key={item.id} style={styles.articleWrapper}>
            <View style={styles.image}></View>
            <View style={{ flex: 1 }}>
              <Text>{item.title}</Text>
              <Text numberOfLines={2} ellipsizeMode="tail">
                {item.description}
              </Text>
            </View>
          </View>
        )}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  feedWrapper: {
    paddingTop: StatusBar.currentHeight,
  },
  articleWrapper: {
    flexDirection: 'row',
  },
  image: {
    height: 50,
    width: 50,
    backgroundColor: 'black',
  },
  separator: {
    height: 20,
  },
})
