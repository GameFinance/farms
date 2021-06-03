import { useCallback } from 'react'
import { useWallet } from '@binance-chain/bsc-use-wallet'
import { useDispatch } from 'react-redux'
import { fetchLootBoxesUserDataAsync } from 'state/actions'
import { mintLootBox } from 'utils/callHelpers'
import { useLootBox } from './useContract'

const useMintLootBox = (id: number) => {
  const dispatch = useDispatch()
  const { account } = useWallet()
  const lootBoxContract = useLootBox(id)

  const handleMint = useCallback(
    async () => {
      try {
        const txHash = await mintLootBox(lootBoxContract, account)
        dispatch(fetchLootBoxesUserDataAsync(account))
        console.info(txHash)
        return txHash
      } catch (e) {
        return false
      }
    },
    [account, dispatch, lootBoxContract],
  )

  return { onMintLootBox: handleMint }
}

export default useMintLootBox
