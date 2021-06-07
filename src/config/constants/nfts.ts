import { Nft, NftRareType, NftSource, NftType } from './types'

export const IPFS_GATEWAY = 'https://gateway.pinata.cloud'

export const nftSources: NftSource = {
  [NftType.GAME]: {
    address: {
      56: '0xBE62b6c4d3eD41Ee9602825d9aEc63D5906A49a1',
      97: '',
    },
    identifierKey: 'image',
  },
}

const Nfts: Nft[] = [
  {
    name: 'Red wyvern',
    description: 'It is a subspecies of the dragon race.\nIn front of its fangs, claws, and flames, humans are nothing more than a piece of paper.',
    images: {
      lg: 'red-wyvern-lg.png',
      md: 'red-wyvern-lg.png',
      sm: 'red-wyvern-lg.png',
      ipfs: 'https://gateway.pinata.cloud/ipfs/Qmc8hLitC1DF6cJoctGcgASrHSDeGx99Sy1XzxQRuod18d/red-wyvern.png',
    },
    rare: NftRareType.N,
    sortOrder: 999,
    identifier: 'red-wyvern',
    type: NftType.GAME,
    variationId: 1,
  },
  {
    name: 'Ruined golem',
    description: 'They are the guardians of the ruin.\nEven without their guardians, they continue to faithfully guard their lives today.\nIt is a remnant of a civilization that must have been very prosperous.',
    images: {
      lg: 'ruined-golem-lg.png',
      md: 'ruined-golem-lg.png',
      sm: 'ruined-golem-lg.png',
      ipfs: 'https://gateway.pinata.cloud/ipfs/Qmc8hLitC1DF6cJoctGcgASrHSDeGx99Sy1XzxQRuod18d/ruined-golem.png',
    },
    rare: NftRareType.N,
    sortOrder: 999,
    identifier: 'ruined-golem',
    type: NftType.GAME,
    variationId: 2,
  },
  {
    name: 'The graveyard lich',
    description: 'They were the great mages of ancient times, who materialized their own lives to become immortal in order to reach the truth.',
    images: {
      lg: 'the-graveyard-lich-lg.png',
      md: 'the-graveyard-lich-lg.png',
      sm: 'the-graveyard-lich-lg.png',
      ipfs: 'https://gateway.pinata.cloud/ipfs/Qmc8hLitC1DF6cJoctGcgASrHSDeGx99Sy1XzxQRuod18d/the-graveyard-lich.png',
    },
    rare: NftRareType.N,
    sortOrder: 999,
    identifier: 'the-graveyard-lich',
    type: NftType.GAME,
    variationId: 3,
  },
  {
    name: 'Goblin King',
    description: 'Big, strong, and cunning! These are the requirements for their leader!',
    images: {
      lg: 'goblin-king-lg.gif',
      md: 'goblin-king-lg.gif',
      sm: 'goblin-king-lg.gif',
      ipfs: 'https://gateway.pinata.cloud/ipfs/Qmd56KujdG6CgYXeG6wztHhAaTqgjFN5yahWdLApC8UxLX/goblin-king.gif',
    },
    rare: NftRareType.LR,
    sortOrder: 1,
    identifier: 'goblin-king',
    type: NftType.GAME,
    variationId: 4,
  },
  {
    name: 'Little Wyvern',
    description: 'Even a child has great firepower!',
    images: {
      lg: 'little-wyvern-lg.png',
      md: 'little-wyvern-lg.png',
      sm: 'little-wyvern-lg.png',
      ipfs: 'https://gateway.pinata.cloud/ipfs/Qmd56KujdG6CgYXeG6wztHhAaTqgjFN5yahWdLApC8UxLX/little-wyvern.png',
    },
    rare: NftRareType.SR,
    sortOrder: 2,
    identifier: 'little-wyvern',
    type: NftType.GAME,
    variationId: 5,
  },
  {
    name: 'Goblin Mage',
    description: 'Hitting with a club is barbaric! The time has come for magic!',
    images: {
      lg: 'goblin-mage-lg.png',
      md: 'goblin-mage-lg.png',
      sm: 'goblin-mage-lg.png',
      ipfs: 'https://gateway.pinata.cloud/ipfs/Qmd56KujdG6CgYXeG6wztHhAaTqgjFN5yahWdLApC8UxLX/goblin-mage.png',
    },
    rare: NftRareType.SR,
    sortOrder: 3,
    identifier: 'goblin-mage',
    type: NftType.GAME,
    variationId: 6,
  },
  {
    name: 'Ferocious Hare',
    description: 'For some reason, this rabbit is fierce, and it will go straight for the neck of its prey!',
    images: {
      lg: 'ferocious-hare-lg.png',
      md: 'ferocious-hare-lg.png',
      sm: 'ferocious-hare-lg.png',
      ipfs: 'https://gateway.pinata.cloud/ipfs/Qmd56KujdG6CgYXeG6wztHhAaTqgjFN5yahWdLApC8UxLX/ferocious-hare.png',
    },
    rare: NftRareType.R,
    sortOrder: 4,
    identifier: 'ferocious-hare',
    type: NftType.GAME,
    variationId: 7,
  },
  {
    name: 'Goblin Rider',
    description: 'Is he riding you or is he making you ride him?',
    images: {
      lg: 'goblin-rider-lg.png',
      md: 'goblin-rider-lg.png',
      sm: 'goblin-rider-lg.png',
      ipfs: 'https://gateway.pinata.cloud/ipfs/Qmd56KujdG6CgYXeG6wztHhAaTqgjFN5yahWdLApC8UxLX/goblin-rider.png',
    },
    rare: NftRareType.R,
    sortOrder: 5,
    identifier: 'goblin-rider',
    type: NftType.GAME,
    variationId: 8,
  },
  {
    name: 'Ground Eagle',
    description: 'An eagle that has abandoned the sky to live on the ground. Its wings are now fists.',
    images: {
      lg: 'ground-eagle-lg.png',
      md: 'ground-eagle-lg.png',
      sm: 'ground-eagle-lg.png',
      ipfs: 'https://gateway.pinata.cloud/ipfs/Qmd56KujdG6CgYXeG6wztHhAaTqgjFN5yahWdLApC8UxLX/ground-eagle.png',
    },
    rare: NftRareType.R,
    sortOrder: 6,
    identifier: 'ground-eagle',
    type: NftType.GAME,
    variationId: 9,
  },
  {
    name: 'Wild Boar',
    description: 'Once you\'ve found your prey, you\'re on your way!',
    images: {
      lg: 'wild-boar-lg.png',
      md: 'wild-boar-lg.png',
      sm: 'wild-boar-lg.png',
      ipfs: 'https://gateway.pinata.cloud/ipfs/Qmd56KujdG6CgYXeG6wztHhAaTqgjFN5yahWdLApC8UxLX/wild-boar.png',
    },
    rare: NftRareType.N,
    sortOrder: 7,
    identifier: 'wild-boar',
    type: NftType.GAME,
    variationId: 10,
  },
  {
    name: 'Cudgel Goblin',
    description: 'Always hungry.',
    images: {
      lg: 'cudgel-goblin-lg.png',
      md: 'cudgel-goblin-lg.png',
      sm: 'cudgel-goblin-lg.png',
      ipfs: 'https://gateway.pinata.cloud/ipfs/Qmd56KujdG6CgYXeG6wztHhAaTqgjFN5yahWdLApC8UxLX/cudgel-goblin.png',
    },
    rare: NftRareType.N,
    sortOrder: 8,
    identifier: 'cudgel-goblin',
    type: NftType.GAME,
    variationId: 11,
  },
  {
    name: 'Sword Goblin',
    description: 'He\'s a little guy, but he\'s got a big voice and a big attitude.',
    images: {
      lg: 'sword-goblin-lg.png',
      md: 'sword-goblin-lg.png',
      sm: 'sword-goblin-lg.png',
      ipfs: 'https://gateway.pinata.cloud/ipfs/Qmd56KujdG6CgYXeG6wztHhAaTqgjFN5yahWdLApC8UxLX/sword-goblin.png',
    },
    rare: NftRareType.N,
    sortOrder: 9,
    identifier: 'sword-goblin',
    type: NftType.GAME,
    variationId: 12,
  },
  {
    name: 'Wolf',
    description: 'Strong on their own, stronger in a pack.',
    images: {
      lg: 'wolf-lg.png',
      md: 'wolf-lg.png',
      sm: 'wolf-lg.png',
      ipfs: 'https://gateway.pinata.cloud/ipfs/Qmd56KujdG6CgYXeG6wztHhAaTqgjFN5yahWdLApC8UxLX/wolf.png',
    },
    rare: NftRareType.N,
    sortOrder: 10,
    identifier: 'wolf',
    type: NftType.GAME,
    variationId: 13,
  },
]

export default Nfts
