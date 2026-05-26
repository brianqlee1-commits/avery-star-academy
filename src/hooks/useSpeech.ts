import { useState, useEffect, useCallback, useMemo } from 'react'

const PREFERRED_VOICES = [
  'Samantha',               // macOS / iOS default female
  'Microsoft Zira',         // Windows 10
  'Microsoft Aria',         // Windows 11
  'Microsoft Jenny',        // Windows 11
  'Google UK English Female',
  'Karen',                  // macOS / iOS
  'Victoria',               // macOS
  'Moira',                  // macOS Irish
  'Fiona',                  // macOS Scottish
]

function stripEmoji(text: string): string {
  return text.replace(/[\p{Emoji_Presentation}\p{Extended_Pictographic}]/gu, '').replace(/\s{2,}/g, ' ').trim()
}

export function useSpeech() {
  const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([])

  useEffect(() => {
    if (!('speechSynthesis' in window)) return
    const load = () => setVoices(window.speechSynthesis.getVoices())
    load()
    window.speechSynthesis.addEventListener('voiceschanged', load)
    return () => {
      window.speechSynthesis.removeEventListener('voiceschanged', load)
      window.speechSynthesis.cancel()
    }
  }, [])

  const femaleVoice = useMemo(() => {
    for (const name of PREFERRED_VOICES) {
      const match = voices.find(v => v.name.includes(name))
      if (match) return match
    }
    return voices.find(v => v.lang.startsWith('en')) ?? null
  }, [voices])

  const speak = useCallback((text: string) => {
    if (!('speechSynthesis' in window)) return
    window.speechSynthesis.cancel()
    const clean = stripEmoji(text)
    if (!clean) return
    const utt = new SpeechSynthesisUtterance(clean)
    if (femaleVoice) utt.voice = femaleVoice
    utt.rate = 0.88
    utt.pitch = 1.05
    utt.volume = 1.0
    window.speechSynthesis.speak(utt)
  }, [femaleVoice])

  const stop = useCallback(() => {
    if ('speechSynthesis' in window) window.speechSynthesis.cancel()
  }, [])

  return { speak, stop }
}
