import { View, Text, FlatList, StyleSheet, StatusBar } from 'react-native'

import { Article } from '../../core/domain/model/Feed/Feed'
import { SmallArticleImage } from './_components/Image'
import { Separator } from './_components/Separator'
import { Box } from './_objects/Box'
import { Row } from './_objects/Row'

type Props = { articles: Article[] }

export const Feed = ({ articles }: Props) => (
  <View style={styles.feedWrapper}>
    <FlatList
      data={articles}
      ItemSeparatorComponent={() => <Separator />}
      renderItem={({ item }) => (
        <Row key={item.id}>
          <SmallArticleImage />
          <Box>
            <Row justifyContent="space-between">
              <Text>{item.title}</Text>
              <Text>{item.date.toLocaleDateString()}</Text>
            </Row>
            <Text numberOfLines={2} ellipsizeMode="tail">
              {item.description}
            </Text>
          </Box>
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
