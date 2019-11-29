import React from 'react';
import { ExpoConfigView } from '@expo/samples';


const list = [
	'mission 1',
	'mission 2',
	'mission 3'
];
export default function SettingsScreen() {
  /**
   * Go ahead and delete ExpoConfigView and replace it with your content;
   * we just wanted to give you a quick view of your config.
   */

  return <ExpoConfigView />;
}

SettingsScreen.navigationOptions = {
  title: 'app.json',
};
