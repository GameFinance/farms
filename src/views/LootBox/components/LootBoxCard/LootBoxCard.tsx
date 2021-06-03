import React, { useState } from 'react'
import BigNumber from 'bignumber.js'
import styled, { keyframes } from 'styled-components'
import { getFullDisplayBalance } from 'utils/formatBalance'
import { Flex, Heading, Text } from 'uikit'
import { LootBox } from 'state/types'
import { provider } from 'web3-core'
import useI18n from 'hooks/useI18n'
import ExpandableSectionButton from 'components/ExpandableSectionButton'
import Spacer from 'components/Spacer'
import CardActionsContainer from './CardActionsContainer'
import Preview from './Preview'


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

const LCard = styled.div`
  align-self: baseline;
  background: ${(props) => props.theme.card.background};
  border-radius: 10px;
  box-shadow: 0px 2px 12px -8px rgba(25, 19, 38, 0.1), 0px 1px 1px rgba(25, 19, 38, 0.05);
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 24px;
  position: relative;
  text-align: center;
`

const Divider = styled.div`
  background-color: ${({ theme }) => theme.colors.borderColor};
  height: 1px;
  margin: 28px auto;
  width: 100%;
`

const ExpandingWrapper = styled.div<{ expanded: boolean }>`
  height: ${(props) => (props.expanded ? '100%' : '0px')};
  overflow: hidden;
`

const InfoBlock = styled.div`
  padding: 24px;
`


interface LootBoxCardProps {
  lootBox: LootBox
  ethereum?: provider
  account?: string
}

const LootBoxCard: React.FC<LootBoxCardProps> = ({ lootBox, ethereum, account }) => {
  const TranslateString = useI18n()
  const [showExpandableSection, setShowExpandableSection] = useState(false)

  const originalPrice = '0.1'
  const displayPrice = getFullDisplayBalance(new BigNumber(lootBox.price))
  const priceLabel = 'GAME'

  return (
    <LCard>
      <Heading mb="8px">{lootBox.lootBoxName}</Heading>
      <Preview lootBox={lootBox} />
      <Flex mt={2}  justifyContent="space-between">
        <Spacer />
        <Text bold color="#999999" style={{ textDecoration: 'line-through' }}>{originalPrice} {priceLabel}</Text>
      </Flex>
      <Flex justifyContent="space-between">
        <Text color="primary">{TranslateString(999, 'Price')}:</Text>
        <Text bold color="secondary">{displayPrice} {priceLabel}</Text>
      </Flex>
      <CardActionsContainer lootBox={lootBox} ethereum={ethereum} account={account} />
      <Divider />
      <ExpandableSectionButton
        onClick={() => setShowExpandableSection(!showExpandableSection)}
        expanded={showExpandableSection}
      />
      <ExpandingWrapper expanded={showExpandableSection}>
        <InfoBlock>
          <Text as="p" color="textSubtle" style={{ textAlign: 'center' }}>
            {lootBox.description}
          </Text>
        </InfoBlock>
      </ExpandingWrapper>
    </LCard>
  )
}

export default LootBoxCard
