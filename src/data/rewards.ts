import type { Reward } from '../types'

export const REWARDS: Reward[] = [
  {
    id: 'dino-rex',
    name: 'Roary the T-Rex',
    emoji: '🦖',
    description: 'A friendly T-Rex who loves to learn!',
    starsRequired: 10,
    unlocked: false,
  },
  {
    id: 'unicorn-sparkle',
    name: 'Sparkle the Unicorn',
    emoji: '🦄',
    description: 'A magical unicorn with rainbow powers!',
    starsRequired: 25,
    unlocked: false,
  },
  {
    id: 'owl-wise',
    name: 'Professor Hoot',
    emoji: '🦉',
    description: 'The wisest owl in Star Academy!',
    starsRequired: 50,
    unlocked: false,
  },
  {
    id: 'dragon-blaze',
    name: 'Blaze the Dragon',
    emoji: '🐉',
    description: 'A friendly dragon who breathes rainbow fire!',
    starsRequired: 75,
    unlocked: false,
  },
  {
    id: 'astronaut-luna',
    name: 'Luna the Astronaut',
    emoji: '👩‍🚀',
    description: 'An explorer of galaxies and knowledge!',
    starsRequired: 100,
    unlocked: false,
  },
  {
    id: 'dino-bronto',
    name: 'Sunny the Brontosaurus',
    emoji: '🦕',
    description: 'A gentle giant who loves books!',
    starsRequired: 150,
    unlocked: false,
  },
  {
    id: 'mermaid-coral',
    name: 'Coral the Mermaid',
    emoji: '🧜‍♀️',
    description: 'A mermaid who collects pearls of wisdom!',
    starsRequired: 200,
    unlocked: false,
  },
  {
    id: 'fox-fennec',
    name: 'Finn the Fennec Fox',
    emoji: '🦊',
    description: 'A clever fox who solves every puzzle!',
    starsRequired: 250,
    unlocked: false,
  },
  {
    id: 'butterfly-rainbow',
    name: 'Rainbow the Butterfly',
    emoji: '🦋',
    description: 'A butterfly born from hard work and growth!',
    starsRequired: 300,
    unlocked: false,
  },
  {
    id: 'phoenix-ember',
    name: 'Ember the Phoenix',
    emoji: '🔥',
    description: 'A legendary phoenix of learning — the ultimate reward!',
    starsRequired: 500,
    unlocked: false,
  },
]

export function getNextReward(totalStars: number, unlockedIds: string[]): Reward | null {
  return REWARDS.find(r => !unlockedIds.includes(r.id) && r.starsRequired > totalStars) ?? null
}

export function checkNewRewards(totalStars: number, unlockedIds: string[]): Reward[] {
  return REWARDS.filter(r => !unlockedIds.includes(r.id) && r.starsRequired <= totalStars)
}
