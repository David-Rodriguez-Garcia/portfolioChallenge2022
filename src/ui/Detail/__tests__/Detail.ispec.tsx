import { render as baseRender } from '@testing-library/react-native'

import { Detail } from '..'
import { DetailProps } from '../../_navigation/NavigationTypes'

describe('Detail', () => {
  it('displays title', () => {
    const title = 'Title of the screen'
    const { getByText } = render(title)

    expect(getByText(title)).toBeDefined()
  })
})

const render = (title: string) => {
  const detailProps = {
    navigation: () => null,
    route: { params: { title } },
  } as unknown as DetailProps
  return baseRender(<Detail {...detailProps} />)
}
