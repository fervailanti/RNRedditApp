import { fireEvent, render } from '@testing-library/react-native'
import { colors } from '@utils/colors'
import React from 'react'
import 'react-native'
import Button from './Button.component'

const props = {
  children: 'Test Button',
  color: colors.primary,
  icon: 'close',
  onPress: () => {},
}

describe('Components > Button', () => {
  it('<Button {...props} /> should render correctly', () => {
    const { toJSON } = render(<Button {...props} />)
    expect(toJSON()).toMatchSnapshot()
  })

  it('Given elements inside Button should work as expected', () => {
    const { getByText } = render(<Button {...props} />)
    const button = getByText('Test Button')
    expect(button).toBeTruthy()
    fireEvent.press(button)
  })
})
