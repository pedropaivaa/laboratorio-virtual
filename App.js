import { useState } from 'react'

import ExperimentDetailsScreen from './src/screens/ExperimentDetailsScreen'
import LoginScreen from './src/screens/LoginScreen'
import HomeScreen from './src/screens/HomeScreen'
import CreateExperimentScreen from './src/screens/CreateExperimentScreen'
import ExperimentsScreen from './src/screens/ExperimentsScreen'
import EditExperimentScreen from './src/screens/EditExperimentScreen'

export default function App() {
const [screen, setScreen] =
  useState('login')

const [selectedExperiment, setSelectedExperiment] =
  useState(null)
  if (screen === 'login') {

    return (
      <LoginScreen
        setScreen={setScreen}
      />
    )
  }

  if (screen === 'home') {

    return (
      <HomeScreen
        navigation={{
          navigate: setScreen
        }}
      />
    )
  }

  if (screen === 'CreateExperiment') {

    return (
      <CreateExperimentScreen
        setScreen={setScreen}
      />
    )
  }

  if (screen === 'Experiments') {

    return (
<ExperimentsScreen
  setScreen={setScreen}
  setSelectedExperiment={setSelectedExperiment}
/>
    )
  }

  if (screen === 'experimentDetails') {

  return (
<ExperimentDetailsScreen
  setScreen={setScreen}
  experiment={selectedExperiment}
/>
  )
}
if (screen === 'editExperiment') {

  return (

    <EditExperimentScreen
      experiment={
        selectedExperiment
      }
      setScreen={setScreen}
    />

  )
}
}