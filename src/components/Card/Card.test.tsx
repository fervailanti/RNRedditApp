import { render } from '@testing-library/react-native'
import React from 'react'
import 'react-native'
import Card from './Card.component'

const props = {
  imageUrl: 'https://via.placeholder.com/100',
  title: 'Test Card',
  topIndicators: [{ label: 'T Label', text: 'T Text' }],
  bottomIndicators: [{ label: 'B Label', text: 'B Text' }],
  onPress: () => {},
}

describe('Components > Card', () => {
  it('<Card {...props} /> should render correctly', () => {
    const { toJSON } = render(<Card {...props} />)
    expect(toJSON()).toMatchSnapshot()
  })

  it('Given elements inside Card should be visible', () => {
    const { getByText } = render(<Card {...props} />)
    expect(getByText('Test Card')).toBeTruthy()
    expect(getByText('T Label')).toBeTruthy()
    expect(getByText('T Text')).toBeTruthy()
    expect(getByText('B Label')).toBeTruthy()
    expect(getByText('B Text')).toBeTruthy()
  })
})
