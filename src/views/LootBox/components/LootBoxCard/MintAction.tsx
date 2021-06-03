import React from 'react'
import { Button, Flex, useModal } from 'uikit'
import useI18n from 'hooks/useI18n'
import { LootBox } from 'state/types'
import useMintLootBox from 'hooks/useMintLootBox'
import MintLootBoxModal from '../MintLootBoxModal'

interface LootBoxCardActionsProps {
  id?: number
  lootBox?: LootBox
}

const MintAction: React.FC<LootBoxCardActionsProps> = ({ id, lootBox }) => {
  const TranslateString = useI18n()
  const { onMintLootBox } = useMintLootBox(id)

  const [onPresentMint] = useModal(
    <MintLootBoxModal onConfirm={onMintLootBox} lootBox={lootBox} />
  , false)

  return (
    <Flex justifyContent="space-between" alignItems="center">
      <Button fullWidth onClick={onPresentMint}>{TranslateString(999, 'Summon')}</Button>
    </Flex>
  )
}

export default MintAction
