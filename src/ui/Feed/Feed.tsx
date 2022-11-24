import { View, Text, FlatList, StyleSheet, StatusBar } from 'react-native'

import { Article } from '../../core/domain/model/Feed/Feed'
import { Row } from '../_objects/Row'

type Props = { articles: Article[] }

export const Feed = ({ articles }: Props) => (
  <View style={styles.feedWrapper}>
    <FlatList
      data={articles}
      ItemSeparatorComponent={() => <View style={styles.separator} />}
      renderItem={({ item }) => (
        <Row key={item.id}>
          <View style={styles.image} />
          <View style={{ flex: 1 }}>
            <Row justifyContent="space-between">
              <Text>{item.title}</Text>
              <Text>{item.date.toLocaleDateString()}</Text>
            </Row>
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
