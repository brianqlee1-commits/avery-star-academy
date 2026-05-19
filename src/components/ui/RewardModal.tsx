import { motion, AnimatePresence } from 'framer-motion'
import type { Reward } from '../../types'

interface Props {
  reward: Reward | null
  onClose: () => void
}

export default function RewardModal({ reward, onClose }: Props) {
  return (
    <AnimatePresence>
      {reward && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="bg-white rounded-3xl p-8 mx-6 text-center shadow-2xl border-4 border-yellow-300"
            initial={{ scale: 0, rotate: -10 }}
            animate={{ scale: 1, rotate: 0 }}
            exit={{ scale: 0 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            onClick={e => e.stopPropagation()}
          >
            <motion.div
              className="text-8xl mb-4"
              animate={{ scale: [1, 1.2, 1, 1.15, 1], rotate: [0, -5, 5, -3, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
            >
              {reward.emoji}
            </motion.div>
            <h2 className="text-2xl font-black text-purple-700 mb-2">NEW FRIEND UNLOCKED!</h2>
            <h3 className="text-xl font-bold text-pink-500 mb-3">{reward.name}</h3>
            <p className="text-gray-600 mb-6">{reward.description}</p>
            <div className="flex gap-2 text-2xl justify-center mb-4">
              {'⭐'.repeat(5)}
            </div>
            <button
              onClick={onClose}
              className="bg-gradient-to-r from-purple-500 to-pink-500 text-white font-black py-3 px-8 rounded-2xl text-lg shadow-lg active:scale-95 transition-transform"
            >
              YAY! Let's keep going! 🚀
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
