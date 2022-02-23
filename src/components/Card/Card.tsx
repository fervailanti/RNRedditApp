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
        const isFirst = index === 0
        return (
          <View
            key={index}
            style={isFirst ? styles.firstIndicator : styles.indicator}>
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
        {title && <Text style={styles.title}>{title}</Text>}
        {bottomIndicators && renderIndicators(bottomIndicators, styles.bottom)}
      </View>
    </Pressable>
  )
}

export default Card
