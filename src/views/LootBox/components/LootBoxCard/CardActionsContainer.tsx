import React, { useMemo, useState, useCallback } from 'react'
import styled from 'styled-components'
import { provider } from 'web3-core'
import { getContract } from 'utils/erc20'
import { Button } from 'uikit'
import { LootBox } from 'state/types'
import { useLootBoxUser} from 'state/hooks'
import useI18n from 'hooks/useI18n'
import UnlockButton from 'components/UnlockButton'
import { useLootBoxApprove } from 'hooks/useApprove'
import { getGameAddress } from 'utils/addressHelpers'
import MintAction from './MintAction'

const Action = styled.div`
  padding-top: 16px;
`

interface LootBoxCardActionsProps {
  lootBox: LootBox
  ethereum?: provider
  account?: string
}

const CardActions: React.FC<LootBoxCardActionsProps> = ({ lootBox, ethereum, account }) => {
  const TranslateString = useI18n()
  const [requestedApproval, setRequestedApproval] = useState(false)
  const { allowance } = useLootBoxUser(lootBox.id)
  const isApproved = account && allowance && allowance.isGreaterThan(0)

  const tokenAddress = getGameAddress()
  const tokenContract = useMemo(() => {
    return getContract(ethereum as provider, tokenAddress)
  }, [ethereum, tokenAddress])

  const { onApprove } = useLootBoxApprove(lootBox.id, tokenContract)

  const handleApprove = useCallback(async () => {
    try {
      setRequestedApproval(true)
      await onApprove()
      setRequestedApproval(false)
    } catch (e) {
      console.error(e)
    }
  }, [onApprove])

  const renderApprovalOrMintButton = () => {
    return isApproved ? (
      <MintAction id={lootBox.id} lootBox={lootBox} />
    ) : (
      <Button mt="8px" fullWidth disabled={requestedApproval} onClick={handleApprove}>
        {TranslateString(999, 'Approve Contract')}
      </Button>
    )
  }

  return (
    <Action>
      {!account && !lootBox.paused && (
        <UnlockButton mt="8px" fullWidth />
      )}
      {account && !lootBox.paused && (
        renderApprovalOrMintButton()
      )}
      {lootBox.paused && (
        <Button mt="8px" fullWidth disabled={lootBox.paused}>
          {TranslateString(999, 'Closed')}
        </Button>
      )}
    </Action>
  )
}

export default CardActions
