import { View, Text, FlatList, StyleSheet, StatusBar } from 'react-native'

import { Article } from '../../core/domain/model/Feed/Feed'
import { Row } from '../_objects/Row'
import { SmallArticleImage } from './_components/Image'
import { Separator } from './_components/Separator'

type Props = { articles: Article[] }

export const Feed = ({ articles }: Props) => (
  <View style={styles.feedWrapper}>
    <FlatList
      data={articles}
      ItemSeparatorComponent={() => <Separator />}
      renderItem={({ item }) => (
        <Row key={item.id}>
          <SmallArticleImage />
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
})
