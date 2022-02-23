import { Icon } from '@components'
import React from 'react'
import {
  Image,
  Pressable,
  StyleProp,
  Text,
  View,
  ViewStyle,
} from 'react-native'
import styles from './styles'

type Indicator = {
  flex?: boolean
  label?: string
  icon?: string
  text: string | number
}

type CardProps = {
  onPress?: () => void
  imageUrl?: string
  title?: string
  topIndicators?: Indicator[]
  bottomIndicators?: Indicator[]
}

const Card: React.FC<CardProps> = ({
  onPress,
  imageUrl,
  title,
  topIndicators,
  bottomIndicators,
}) => {
  const renderIndicators = (
    indicators: Indicator[],
    style: StyleProp<ViewStyle>,
  ) => (
    <View style={style}>
      {indicators.map((indicator, index) => {
        const isLast = index + 1 === indicators.length
        const indicatorStyle = isLast ? styles.indicatorLast : styles.indicator
        return (
          <View
            key={index}
            style={[indicatorStyle, indicator.flex && styles.flex]}>
            {!!indicator.icon && (
              <Icon name={indicator.icon} style={styles.indicatorIcon} />
            )}
            {!!indicator.label && (
              <Text style={styles.indicatorLabel}>{indicator.label}</Text>
            )}
            <Text style={styles.indicatorText}>{indicator.text}</Text>
          </View>
        )
      })}
    </View>
  )

  return (
    <Pressable style={styles.card} onPress={onPress}>
      {imageUrl && (
        <Image
          resizeMode="cover"
          source={{ uri: imageUrl }}
          style={styles.image}
        />
      )}
      <View style={styles.container}>
        {topIndicators && renderIndicators(topIndicators, styles.top)}
        {title && (
          <Text numberOfLines={2} style={styles.title}>
            {title}
          </Text>
        )}
        {bottomIndicators && renderIndicators(bottomIndicators, styles.bottom)}
      </View>
    </Pressable>
  )
}

export default Card
