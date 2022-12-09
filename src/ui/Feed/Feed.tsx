import { View, FlatList, StyleSheet, StatusBar } from 'react-native'

import { Article } from '../../core/domain/model/Article/Article'
import { DetailRouteParams } from '../_navigation/NavigationTypes'
import { Separator } from './_components/atoms/Separator'
import { ArticleEntry } from './_components/organisms/ArticleEntry'

type Props = { articles: Article[]; onArticlePress: (params: DetailRouteParams) => void }

export const Feed = ({ articles, onArticlePress }: Props) => (
  <View style={styles.feedWrapper}>
    <FlatList
      data={articles}
      ItemSeparatorComponent={() => <Separator />}
      renderItem={({ item: { id, title, description, image, date } }) => (
        <ArticleEntry
          key={id}
          title={title}
          description={description}
          image={image}
          date={date}
          onPress={() => onArticlePress({ title, description, image })}
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
