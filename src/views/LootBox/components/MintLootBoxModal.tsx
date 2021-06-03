import React, { useState } from 'react'
import confetti from 'canvas-confetti'
import { Card, Button, Modal, Text } from 'uikit'
import styled, { keyframes } from 'styled-components'
import ModalActions from 'components/ModalActions'
import useI18n from 'hooks/useI18n'
import getNftFromVariationId from 'utils/collectibleHelpers'
import { LootBox } from 'state/types'
import Preview from './Preview'
import LootBoxDirection from './LootBoxDirection'

interface MintLootBoxModalProps {
  onConfirm: () => any
  onDismiss?: () => void
  lootBox?: LootBox
}

const RainbowLight = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`

const StyledCardAccent = styled.div`
  background: linear-gradient(
    10deg,
    rgba(255, 0, 0, 1) 0%,
    rgba(255, 154, 0, 1) 10%,
    rgba(208, 222, 33, 1) 20%,
    rgba(79, 220, 74, 1) 30%,
    rgba(63, 218, 216, 1) 40%,
    rgba(47, 201, 226, 1) 50%,
    rgba(28, 127, 238, 1) 60%,
    rgba(95, 21, 242, 1) 70%,
    rgba(186, 12, 248, 1) 80%,
    rgba(251, 7, 217, 1) 90%,
    rgba(255, 0, 0, 1) 100%
  );
  background-size: 300% 300%;
  animation: ${RainbowLight} 2s linear infinite;
  border-radius: 10px;
  filter: blur(6px);
  position: absolute;
  top: -2px;
  right: -2px;
  bottom: -2px;
  left: -2px;
  z-index: -1;
`

const Wrapper = styled.div`
  padding: 0;
  margin: 0;
`

const InfoBlock = styled.div`
  width: 320px;
  padding: 24px;
`

const showConfetti = () => {
  confetti({
    resize: true,
    particleCount: 200,
    startVelocity: 30,
    gravity: 0.5,
    spread: 350,
    origin: {
      x: 0.5,
      y: 0.3,
    },
  })
}

const MintLootBoxModal: React.FC<MintLootBoxModalProps> = ({ onConfirm, onDismiss, lootBox }) => {
  const [pendingTx, setPendingTx] = useState(false)
  const [nft, setNft] = useState(undefined)
  const [isCollect, setIsCollect] = useState(false)
  const [isClick, setIsClick] = useState(false)
  const TranslateString = useI18n()

  const onClick = async () => {
    setPendingTx(true)
    const txHash = await onConfirm()
    setPendingTx(false)
    if (txHash === false) {
      // TODO: handler
      setIsCollect(false)
    } else {
      setNft(getNftFromVariationId(Number( txHash.events.MonsterMint.returnValues.monsterId )))
      setIsCollect(true)
    }
  }

  const onOpenClick = () => {
    setIsClick(true)
    showConfetti()
  }

  const renderInit = () => {
    return (
      <Wrapper>
        <ModalActions>
          <Button variant="secondary" onClick={onDismiss}>
            {TranslateString(462, 'Cancel')}
          </Button>
          <Button
            disabled={pendingTx}
            onClick={onClick}
          >
            {TranslateString(464, 'Confirm')}
          </Button>
        </ModalActions>
      </Wrapper>
    )
  }

  const renderPending = () => {
    return (
      <Wrapper>
        <LootBoxDirection href="/images/lootbox-loading.gif" />
        <ModalActions>
          <Button
            fullWidth
            disabled={pendingTx}
            onClick={onClick}
          >
            {TranslateString(999, 'Pending')}
          </Button>
        </ModalActions>
      </Wrapper>
    )
  }

  const renderCollect = () => {
    return (
      <Wrapper>
        <LootBoxDirection href="/images/lootbox-open.gif" onClick={onOpenClick} style={{cursor: 'pointer'}} />
        <InfoBlock>
          <Text as="p" color="textSubtle" style={{ textAlign: 'center', wordBreak: 'normal' }}>
            Transaction confirmed!
            Click on the image to display the NFT you got.
          </Text>
        </InfoBlock>
      </Wrapper>
    )
  }

  const renderFinish = () => {
    return (
      <Wrapper>
        <Card>
          <Preview nft={nft} />
        </Card>
        <ModalActions>
          <Button fullWidth variant="secondary" onClick={onDismiss}>
            {TranslateString(999, 'Close')}
          </Button>
        </ModalActions>
      </Wrapper>
    )
  }

  return (
    <Modal title="Summon a monster" onDismiss={onDismiss}>
      {!pendingTx && !isCollect && !nft && (
        renderInit()
      )}
      {pendingTx && (
        renderPending()
      )}
      {!pendingTx && isCollect && nft && !isClick && (
        renderCollect()
      )}
      {!pendingTx && isCollect && nft && isClick && (
        renderFinish()
      )}
    </Modal>
  )
}

export default MintLootBoxModal
