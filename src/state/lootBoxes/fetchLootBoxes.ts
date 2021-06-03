import BigNumber from 'bignumber.js'
import multicall from 'utils/multicall'
import { lootBoxesConfig } from 'config/constants'
import lootBox from 'config/abi/lootbox.json'

const CHAIN_ID = process.env.REACT_APP_CHAIN_ID

const fetchLootBoxes = async () => {
  const data = await Promise.all(
    lootBoxesConfig.map(async (lootBoxConfig) => {
      const calls = [
        {
          address: lootBoxConfig.address[CHAIN_ID],
          name: 'price'
        },
        {
          address: lootBoxConfig.address[CHAIN_ID],
          name: 'paused'
        },
      ]

      const [
        price,
        paused
      ] = await multicall(lootBox, calls)

      return {
        ...lootBoxConfig,
        price: new BigNumber(price).toJSON(),
        paused: paused[0]
      }
    })
  )
  return data
}

export default fetchLootBoxes
