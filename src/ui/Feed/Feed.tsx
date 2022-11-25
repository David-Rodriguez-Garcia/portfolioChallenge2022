import { View, FlatList, StyleSheet, StatusBar } from 'react-native'

import { Article } from '../../core/domain/model/Feed/Feed'
import { Separator } from './_components/atoms/Separator'
import { ArticleEntry } from './_components/organisms/ArticleEntry'

type Props = { articles: Article[]; onArticlePress: () => void }

export const Feed = ({ articles, onArticlePress }: Props) => (
  <View style={styles.feedWrapper}>
    <FlatList
      data={articles}
      ItemSeparatorComponent={() => <Separator />}
      renderItem={({ item }) => (
        <ArticleEntry
          key={item.id}
          title={item.title}
          description={item.description}
          image={item.img}
          date={item.date}
          onPress={onArticlePress}
        />
      )}
    />
  </View>
)

const styles = StyleSheet.create({
  feedWrapper: {
    paddingTop: StatusBar.currentHeight,
  },
})
