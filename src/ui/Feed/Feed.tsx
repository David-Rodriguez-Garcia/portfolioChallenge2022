import { View, Text, FlatList, StyleSheet, StatusBar } from 'react-native'

import { aSetOfArticles } from '../../core/domain/model/Feed/Feed.model'
import { Row } from '../_objects/Row'

const FakeData = aSetOfArticles(30)

export const Feed = () => (
  <View style={styles.feedWrapper}>
    <FlatList
      data={FakeData}
      ItemSeparatorComponent={() => <View style={styles.separator}></View>}
      renderItem={({ item }) => (
        <Row key={item.id}>
          <View style={styles.image} />
          <View style={{ flex: 1 }}>
            <Text>{item.title}</Text>
            <Text numberOfLines={2} ellipsizeMode="tail">
              {item.description}
            </Text>
          </View>
        </Row>
      )}
    />
  </View>
)

const styles = StyleSheet.create({
  feedWrapper: {
    paddingTop: StatusBar.currentHeight,
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
