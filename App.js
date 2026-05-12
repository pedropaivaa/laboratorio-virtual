import { useState } from 'react'

import LoginScreen from './src/screens/LoginScreen'
import HomeScreen from './src/screens/HomeScreen'
import CreateExperimentScreen from './src/screens/CreateExperimentScreen'
import ExperimentsScreen from './src/screens/ExperimentsScreen'

export default function App() {

  const [screen, setScreen] = useState('login')

  const [experiments, setExperiments] = useState([])

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
        setScreen={setScreen}
      />
    )
  }

  if (screen === 'create') {
    return (
      <CreateExperimentScreen
        setScreen={setScreen}
        experiments={experiments}
        setExperiments={setExperiments}
      />
    )
  }

  if (screen === 'experiments') {
    return (
      <ExperimentsScreen
        setScreen={setScreen}
        experiments={experiments}
      />
    )
  }
}