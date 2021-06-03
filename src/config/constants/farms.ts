import contracts from './contracts'
import { FarmConfig, QuoteToken } from './types'

const farms: FarmConfig[] = [
  {
    pid: 0,
    risk: 5,
    lpSymbol: 'BNB-GAME LP',
    lpAddresses: {
      97: '',
      56: '0x4ead478d3b7cf35feaec4c7b6f57c8fd51ae69f6',
    },
    tokenSymbol: 'GAME',
    tokenAddresses: {
      97: '',
      56: '0xa26E3cF376c4E7872B169fFC96512DcaCe982A1b',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 1,
    risk: 5,
    lpSymbol: 'BUSD-GAME LP',
    lpAddresses: {
      97: '',
      56: '0xde5947e8af1c8ce8fb8bc4878c4dbb0b429f493c',
    },
    tokenSymbol: 'GAME',
    tokenAddresses: {
      97: '',
      56: '0xa26E3cF376c4E7872B169fFC96512DcaCe982A1b',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 2,
    risk: 5,
    lpSymbol: 'CAKE-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x0eD7e52944161450477ee417DE9Cd3a859b14fD0',
    },
    tokenSymbol: 'CAKE',
    tokenAddresses: {
      97: '',
      56: '0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 3,
    risk: 5,
    lpSymbol: 'BNB-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0x58F876857a02D6762E0101bb5C46A8c1ED44Dc16',
    },
    tokenSymbol: 'BNB',
    tokenAddresses: {
      97: '',
      56: '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 4,
    risk: 5,
    lpSymbol: 'USDT-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0x7EFaEf62fDdCCa950418312c6C91Aef321375A00',
    },
    tokenSymbol: 'USDT',
    tokenAddresses: {
      97: '',
      56: '0x55d398326f99059fF775485246999027B3197955',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 5,
    risk: 5,
    isTokenOnly: true,
    lpSymbol: 'GAME',
    lpAddresses: {
      97: '0x46b2702a5Cb5da391EA17235F1aa1E38e25bA67B',
      56: '0xde5947e8af1c8ce8fb8bc4878c4dbb0b429f493c', // GAME-BUSD LP
    },
    tokenSymbol: 'GAME',
    tokenAddresses: {
      97: '0x72dbd80F2B11D183bfaa28EA16aaCee716ACC8aB',
      56: '0xa26E3cF376c4E7872B169fFC96512DcaCe982A1b',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 6,
    risk: 5,
    isTokenOnly: true,
    lpSymbol: 'WBNB',
    lpAddresses: {
      97: '',
      56: '0x58F876857a02D6762E0101bb5C46A8c1ED44Dc16', // BNB-BUSD LP
    },
    tokenSymbol: 'WBNB',
    tokenAddresses: {
      97: '',
      56: '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 7,
    risk: 5,
    isTokenOnly: true,
    lpSymbol: 'BUSD',
    lpAddresses: {
      97: '',
      56: '0xde5947e8af1c8ce8fb8bc4878c4dbb0b429f493c', // BUSD-GAME LP
    },
    tokenSymbol: 'BUSD',
    tokenAddresses: {
      97: '',
      56: '0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 8,
    risk: 5,
    isTokenOnly: true,
    lpSymbol: 'CAKE',
    lpAddresses: {
      97: '',
      56: '0x804678fa97d91B974ec2af3c843270886528a9E6', // CAKE-BUSD LP
    },
    tokenSymbol: 'CAKE',
    tokenAddresses: {
      97: '',
      56: '0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 9,
    risk: 5,
    isTokenOnly: true,
    lpSymbol: 'SWAMP',
    lpAddresses: {
      97: '',
      56: '0x90946d2f9fB68ecc40ad8Bc0C1cB15D6cCbC4022', // SWAMP-BUSD LP
    },
    tokenSymbol: 'SWAMP',
    tokenAddresses: {
      97: '',
      56: '0xc5a49b4cbe004b6fd55b30ba1de6ac360ff9765d',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 10,
    risk: 5,
    isTokenOnly: true,
    lpSymbol: 'ATOM',
    lpAddresses: {
      97: '',
      56: '0xE8e1a7A9A8Cf745cED06147925CA26Fb3941FabE', // ATOM-BUSD LP
    },
    tokenSymbol: 'ATOM',
    tokenAddresses: {
      97: '',
      56: '0x0Eb3a705fc54725037CC9e008bDede697f62F335',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
]

export default farms
