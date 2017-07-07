/* eslint-env jest */

import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import AuthorHead from './author-head';

const data = {
  uri: 'https://feeds.thetimes.co.uk/web/imageserver/imageserver/image/methode%2Ftimes%2Fprod%2Fweb%2Fbin%2F0694e84e-04ff-11e7-976a-0b4b9a1a67a3.jpg?crop=854,854,214,0&resize=200',
  name: 'Carol Midgley',
  title: 'Columnist',
  twitter: '@carolmidgley',
  bio: 'Carol Midgley joined The Times in 1996, and won feature writer of the year in 2004. Find her Wednesday column in Times2 each week and a weekly comment piece on Fridays.'
};

it('renders a snapshot', () => {
  const tree = renderer.create(<AuthorHead />).toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders a snapshot with data', () => {
  const tree = renderer.create(<AuthorHead {...data} />).toJSON();
  expect(tree).toMatchSnapshot();
});