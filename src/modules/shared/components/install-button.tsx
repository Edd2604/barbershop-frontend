'use client'
import { useEffect, useState } from 'react'
import { BsDownload } from 'react-icons/bs'

import { useMediaQuery } from '@/modules/shared/hooks/useMediaQuery'

import { Button } from './ui/button'

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>
}

export const InstallButton = () => {
  const [installPrompt, setInstallPrompt] =
    useState<BeforeInstallPromptEvent | null>(null)
  const [isStandalone, setIsStandalone] = useState(false)
  const [isCompatible, setIsCompatible] = useState(false)
  const isInStandalone = useMediaQuery('(display-mode: standalone)')

  useEffect(() => {
    const isInStandaloneMode =
      isInStandalone ||
      (window.navigator as Navigator & { standalone?: boolean }).standalone ===
        true

    setIsStandalone(isInStandaloneMode)

    if ('serviceWorker' in navigator) {
      setIsCompatible(true)
    }

    const handleBeforeInstallPrompt = (event: Event) => {
      const beforeInstallEvent = event as BeforeInstallPromptEvent
      beforeInstallEvent.preventDefault()
      setInstallPrompt(beforeInstallEvent)
    }

    window.addEventListener(
      'beforeinstallprompt',
      handleBeforeInstallPrompt as () => void
    )

    return () =>
      window.removeEventListener(
        'beforeinstallprompt',
        handleBeforeInstallPrompt
      )
  }, [isInStandalone])

  const handleInstallClick = () => {
    if (installPrompt) {
      installPrompt.prompt()
      installPrompt.userChoice.then((choiceResult) => {
        if (choiceResult.outcome === 'accepted') {
          console.log('El usuario aceptó la instalación')
        } else {
          console.log('El usuario rechazó la instalación')
        }
        setInstallPrompt(null)
      })
    }
  }

  if (isStandalone || !isCompatible) return null

  return (
    <>
      {installPrompt && (
        <Button
          onClick={handleInstallClick}
          variant={'outline'}
          size={'icon'}
          className="duration-200"
        >
          <BsDownload size={18} />
        </Button>
      )}
    </>
  )
}
