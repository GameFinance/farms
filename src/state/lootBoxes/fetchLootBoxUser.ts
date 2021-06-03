import BigNumber from 'bignumber.js'
import erc20ABI from 'config/abi/erc20.json'
import multicall from 'utils/multicall'
import { lootBoxesConfig } from 'config/constants'
import { getGameAddress } from 'utils/addressHelpers'

const CHAIN_ID = process.env.REACT_APP_CHAIN_ID

const fetchLootBoxUserAllowances = async (account: string) => {
  // Game Token
  const gameTokenAddress = getGameAddress()

  const calls = lootBoxesConfig.map((lootBox) => {
    const lootBoxAddress = lootBox.address[CHAIN_ID]
    return { address: gameTokenAddress, name: 'allowance', params: [account, lootBoxAddress] }
  })

  const rawLootBoxAllowances = await multicall(erc20ABI, calls)
  const parsedLootBoxAllowances = rawLootBoxAllowances.map((tokenBalance) => {
    return new BigNumber(tokenBalance).toJSON()
  })
  return parsedLootBoxAllowances
}

export default fetchLootBoxUserAllowances
