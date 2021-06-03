import BigNumber from 'bignumber.js';
import React from 'react'
import { Button, Flex, useModal } from 'uikit'
import useI18n from 'hooks/useI18n'
import { LootBox } from 'state/types'
import useMintLootBox from 'hooks/useMintLootBox'
import useTokenBalance from 'hooks/useTokenBalance'
import { getGameAddress } from 'utils/addressHelpers'
import MintLootBoxModal from '../MintLootBoxModal'

interface LootBoxCardActionsProps {
  lootBox?: LootBox
}

const MintAction: React.FC<LootBoxCardActionsProps> = ({ lootBox }) => {
  const TranslateString = useI18n()
  const { onMintLootBox } = useMintLootBox(lootBox.id)

  const tokenAddress = getGameAddress()
  const gameBalance = useTokenBalance(tokenAddress)
  const isSufficient = gameBalance.gte(new BigNumber(lootBox.price))

  const [onPresentMint] = useModal(
    <MintLootBoxModal onConfirm={onMintLootBox} lootBox={lootBox} />
  , false)

  return (
    <Flex justifyContent="space-between" alignItems="center">
      <Button fullWidth onClick={onPresentMint} disabled={!isSufficient}>
        {isSufficient
          ? (TranslateString(999, 'Summon'))
          : (TranslateString(999, 'Game is not enough'))}
      </Button>
    </Flex>
  )
}

export default MintAction
