import { render } from '@testing-library/react-native'
import { colors } from '@utils/colors'
import React from 'react'
import 'react-native'
import Icon from './Icon.component'

const props = {
  color: colors.primary,
  size: 16,
}

describe('Components > Icon', () => {
  it.each([
    // Case #1
    ['Entypo' as const, 'aircraft'],
    // Case #2
    ['Fontisto' as const, 'paw'],
    // Case #3
    ['AntDesign' as const, 'phone'],
    // Case #4
    ['EvilIcons' as const, 'plus'],
    // Case #5
    ['Feather' as const, 'activity'],
    // Case #6
    ['FontAwesome' as const, 'table'],
    // Case #7
    ['Foundation' as const, 'puzzle'],
    // Case #8
    ['Ionicons' as const, 'basket'],
    // Case #9
    ['MaterialCommunityIcons' as const, 'account'],
    // Case #10
    ['MaterialIcons' as const, 'drafts'],
    // Case #11
    ['Octicons' as const, 'plug'],
    // Case #12
    ['SimpleLineIcons' as const, 'like'],
    // Case #13
    ['Zocial' as const, 'android'],
  ])(
    '<Icon {...props} /> should render correctly every type of family',
    (family, name) => {
      const allProps = { ...props, family, name }
      const { toJSON } = render(<Icon {...allProps} />)
      expect(toJSON()).toMatchSnapshot()
    },
  )
})
