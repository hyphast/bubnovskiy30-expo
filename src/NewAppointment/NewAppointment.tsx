import React from 'react';
import { ListRenderItemInfo, StyleSheet, View } from 'react-native';
import {Button, Card, Icon, Layout, List, Text} from '@ui-kitten/components';
import { ImageOverlay } from './extra/image-overlay.component';
import { HeartIcon, PlusIcon, ShareIcon } from './extra/icons';
import { Training } from './extra/data';

const data: Training[] = [
  Training.basketball(),
  Training.running(),
];

export default (): React.ReactElement => {

  const renderItemHeader = (info: ListRenderItemInfo<Training>): React.ReactElement => (
    <ImageOverlay
      style={styles.itemHeader}
      source={info.item.photo}>
      <Text
        style={styles.itemTitle}
        category='h4'
        status='control'>
        {info.item.title}
      </Text>
    </ImageOverlay>
  );

  const renderItemFooter = (): React.ReactElement => (
    <View style={styles.itemFooter}>
      {/*<View style={styles.itemReactionsContainer}>*/}
      {/*  <Button*/}
      {/*    style={styles.iconButton}*/}
      {/*    appearance='ghost'*/}
      {/*    status='basic'*/}
      {/*    accessoryLeft={ShareIcon}/>*/}
      {/*  <Button*/}
      {/*    style={styles.iconButton}*/}
      {/*    appearance='ghost'*/}
      {/*    status='danger'*/}
      {/*    accessoryLeft={HeartIcon}*/}
      {/*  />*/}
      {/*</View>*/}
      <Button
        style={styles.itemAddButton}
        appearance='ghost'
        accessoryLeft={PlusIcon}>
        Записаться
      </Button>
    </View>
  );

  const renderItem = (info: ListRenderItemInfo<Training>): React.ReactElement => (
  <Card
      style={styles.item}
      header={() => renderItemHeader(info)}
      footer={renderItemFooter}>
    <Layout
        style={styles.itemStyxContainer}
        level='2'>
      <Text
          style={styles.itemStyxText}
          category='h6'>
        время занятия
      </Text>
      <Button
          style={styles.itemStyxButton}
          size='tiny'
          accessoryLeft={<Icon name='clock-outline'/>}>
        {`${info.item.styx}`}
      </Button>
    </Layout>
    <Text
        style={styles.itemDescription}
        category='s1'>
      {info.item.description}
    </Text>
  </Card>
  );

  return (
    <List
      style={styles.list}
      contentContainerStyle={styles.listContent}
      data={data}
      renderItem={renderItem}
    />
  );
};

const styles = StyleSheet.create({
  list: {
    flex: 1,
  },
  listContent: {
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  item: {
    marginVertical: 8,
  },
  itemHeader: {
    minHeight: 220,
  },
  itemTitle: {
    position: 'absolute',
    left: 24,
    bottom: 24,
  },
  itemDescription: {
    marginHorizontal: -8,
  },
  itemFooter: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  itemReactionsContainer: {
    flexDirection: 'row',
  },
  itemAddButton: {
    flexDirection: 'row-reverse',
    paddingHorizontal: 0,
  },
  iconButton: {
    paddingHorizontal: 0,
  },
  itemStyxContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 4,
    marginHorizontal: -8,
  },
  itemStyxText: {
    marginHorizontal: 16,
    marginVertical: 14,
  },
  itemStyxButton: {
    paddingHorizontal: 0,
    paddingVertical: 0,
    borderRadius: 24,
  },
});
