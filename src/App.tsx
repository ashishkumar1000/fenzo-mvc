import { useState } from 'react'
import { OnboardingFlow, DashboardFlow, TechnicianFlow } from './screens'

type AppView = 'onboarding' | 'dashboard' | 'technician' | 'messaging'

function App() {
  const [currentView, setCurrentView] = useState<AppView>('onboarding')

  const handleOnboardingComplete = () => {
    setCurrentView('dashboard')
  }

  const handleGoToTechnician = () => {
    setCurrentView('technician')
  }

  const handleGoToMessaging = () => {
    setCurrentView('messaging')
  }

  const handleBackFromTechnician = () => {
    setCurrentView('onboarding')
  }

  const handleBackFromMessaging = () => {
    setCurrentView('onboarding')
  }

  return (
    <>
      {currentView === 'onboarding' && (
        <OnboardingFlow
          onComplete={handleOnboardingComplete}
          onTechnicianFlow={handleGoToTechnician}
          onMessagingFlow={handleGoToMessaging}
        />
      )}
      {currentView === 'dashboard' && <DashboardFlow />}
      {currentView === 'technician' && (
        <TechnicianFlow onBack={handleBackFromTechnician} />
      )}
      {currentView === 'messaging' && (
        <TechnicianFlow onBack={handleBackFromMessaging} initialStep="messaging" />
      )}
    </>
  )
}

export default App
