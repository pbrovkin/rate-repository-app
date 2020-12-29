import React from 'react';
import { View, Image, StyleSheet, TouchableWithoutFeedback, Linking } from 'react-native';

import Text from './Text';
import LanguageTag from './LanguageTag';
import StatsTag from './StatsTag';
import theme from '../theme';

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: 'white',
  },
  topContainer: {
    display: 'flex',
    flexDirection: 'row',
  },
  topRightContainer: {
    display: 'flex',
    paddingLeft: 10,
    flexShrink: 1,
  },
  statsContainer: {
    paddingTop: 5,
    display: 'flex',
    flexDirection: 'row',
  },
  topRightItem: {
    marginTop: 5,
    marginBottom: 5,
  },
  statItem: {
    flexGrow: 1,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 5,
  },
});

const RepositoryItem = ({ item }) => {
  const onPressLink = (url) => {
    Linking.openURL(url);
  };

  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <Image style={styles.avatar} source={{ uri: item.ownerAvatarUrl }} />
        <View style={styles.topRightContainer}>
          <Text fontWeight='bold' fontSize='subheading' testID='fullName'>
            {item.fullName}
          </Text>
          <Text color='textSecondary' style={styles.topRightItem} testID='description'>
            {item.description}
          </Text>
          <LanguageTag text={item.language} />
        </View>
      </View>
      <View style={styles.statsContainer}>
        <StatsTag name='Stars' stat={item.stargazersCount} style={styles.statItem} />
        <StatsTag name='Forks' stat={item.forksCount} style={styles.statItem} />
        <StatsTag name='Reviews' stat={item.reviewCount} style={styles.statItem} />
        <StatsTag name='Rating' stat={item.ratingAverage} flag={false} style={styles.statItem} />
      </View>
      {item.url
        ?
        <View>
          <TouchableWithoutFeedback onPress={() => onPressLink(item.url)}>
            <Text fontSize='subheading' fontWeight='bold' style={theme.button}>
              Open in GitHub
            </Text>
          </TouchableWithoutFeedback>
        </View>
        : null}
    </View>
  );
};

export default RepositoryItem;