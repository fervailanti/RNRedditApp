import { Icon } from '@components'
import { isHttpUrl } from '@utils/helpers'
import React from 'react'
import {
  Image,
  StyleProp,
  Text,
  TouchableOpacity,
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
            <Text numberOfLines={1} style={styles.indicatorText}>
              {indicator.text}
            </Text>
          </View>
        )
      })}
    </View>
  )

  const showImage = !!imageUrl && isHttpUrl(imageUrl)

  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      {showImage && (
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
    </TouchableOpacity>
  )
}

export default Card
