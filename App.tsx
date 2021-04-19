import { ApplicationProvider } from '@ui-kitten/components';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import * as eva from '@eva-design/eva';

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <>
        <ApplicationProvider {...eva} theme={eva.light}>
          <Navigation colorScheme={colorScheme} />
          <StatusBar />
        </ApplicationProvider>
      </>
    );
  }
}
