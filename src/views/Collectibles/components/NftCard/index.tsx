import React, { useState } from 'react'
import { PromiEvent } from 'web3-core'
import { Contract } from 'web3-eth-contract'
import styled, { keyframes } from 'styled-components'
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  ChevronDownIcon,
  ChevronUpIcon,
  Flex,
  Heading,
  Tag,
  Text,
  useModal,
} from 'uikit'
import useI18n from 'hooks/useI18n'
import { Nft, NftRareType } from 'config/constants/types'
import InfoRow from '../InfoRow'
import TransferNftModal from '../TransferNftModal'
import ClaimNftModal from '../ClaimNftModal'
import Preview from './Preview'
import NftRareText from './NftRareText'

export interface NftCardProps {
  nft: Nft
  canClaim?: boolean
  tokenIds?: number[]
  onClaim?: () => PromiEvent<Contract>
  refresh: () => void
}

const Header = styled(InfoRow)`
  min-height: 28px;
`

const DetailsButton = styled(Button).attrs({ variant: 'text' })`
  height: auto;
  padding: 16px 24px;

  &:hover:not(:disabled):not(:active) {
    background-color: transparent;
  }

  &:focus:not(:active) {
    box-shadow: none;
  }
`

const InfoBlock = styled.div`
  padding: 24px;
`

const AnimateLight = keyframes`
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

const LRCard = styled(Card)`
  background: linear-gradient(
    -45deg,
    rgba(0, 0, 0, 1) 0%,
    rgba(128, 0, 128, 1) 50%,
    rgba(0, 0, 0, 1) 100%
  );
  background-size: 400% 400%;
  animation: ${AnimateLight} 6s ease infinite;
`

const SRCard = styled(Card)`
  background: linear-gradient(
    135deg,
    rgba(0, 0, 0, 1) 0%,
    rgba(184, 131, 14, 1) 50%,
    rgba(0, 0, 0, 1) 100%
  );
  background-size: 200% 200%;
`

const RCard = styled(Card)`
  background: linear-gradient(
    135deg,
    rgba(0, 0, 0, 1) 0%,
    rgba(128, 128, 128, 1) 50%,
    rgba(0, 0, 0, 1) 100%
  );
  background-size: 200% 200%;
`


const ShinyAnimation = keyframes`
  0% {
    transform: scale(0) rotate(45deg); 
    opacity: 0; 
  }
  80% {
    transform: scale(0) rotate(45deg); 
    opacity: 0.5; 
  }
  81% {
    transform: scale(4) rotate(45deg); 
    opacity: 1; 
  }
  100% {
    transform: scale(50) rotate(45deg); 
    opacity: 0; 
  }
`

const ShinyEffect = styled.div`
  height: 100%;
  width: 30px;
  top: -180px;
  position: absolute;
  background: linear-gradient(
    100deg,
    rgba(255, 255, 255, 0) 10%, 
    rgba(255, 255, 255, .5) 100%, 
    rgba(255, 255, 255, 0) 0%);
  opacity: 0;
  z-index: 10;
  transform: rotate(45deg);
  animation: ${ShinyAnimation} 3s ease-in-out infinite;
`

const NftCard: React.FC<NftCardProps> = ({ nft, canClaim = false, tokenIds = [], onClaim, refresh }) => {
  const [isOpen, setIsOpen] = useState(false)
  const TranslateString = useI18n()
  const { name, description } = nft
  const walletOwnsNft = tokenIds.length > 0
  const Icon = isOpen ? ChevronUpIcon : ChevronDownIcon

  const handleClick = async () => {
    setIsOpen(!isOpen)
  }

  const handleSuccess = () => {
    refresh()
  }

  const [onPresentTransferModal] = useModal(
    <TransferNftModal nft={nft} tokenIds={tokenIds} onSuccess={handleSuccess} />,
  )
  const [onPresentClaimModal] = useModal(<ClaimNftModal nft={nft} onSuccess={handleSuccess} onClaim={onClaim} />)

  let RareCard
  if (nft.rare === NftRareType.LR) {
    RareCard = LRCard
  } else if (nft.rare === NftRareType.SR) {
    RareCard = SRCard
  } else if (nft.rare === NftRareType.R) {
    RareCard = RCard
  } else {
    RareCard = Card
  }

  return (
    <RareCard isActive={walletOwnsNft}>
      {nft.rare === NftRareType.LR && (
        <ShinyEffect />
      )}
      <Preview nft={nft} isOwned={walletOwnsNft} />
      <CardBody>
        <Header>
          <Heading mr={2}>{name}</Heading>
          {walletOwnsNft && (
            <Tag outline variant="secondary">
              {TranslateString(999, 'In Wallet')}
            </Tag>
          )}
        </Header>
        <Flex mt={2}>
          <NftRareText rare={nft.rare} />
        </Flex>
        {canClaim && (
          <Button fullWidth mt="24px" onClick={onPresentClaimModal}>
            {TranslateString(999, 'Claim this NFT')}
          </Button>
        )}
        {walletOwnsNft && (
          <Button fullWidth variant="secondary" mt="24px" onClick={onPresentTransferModal}>
            {TranslateString(999, 'Transfer')}
          </Button>
        )}
      </CardBody>
      <CardFooter p="0">
        <DetailsButton fullWidth endIcon={<Icon width="24px" color="primary" />} onClick={handleClick}>
          {TranslateString(999, 'Details')}
        </DetailsButton>
        {isOpen && (
          <InfoBlock>
            <Text as="p" color="textSubtle" style={{ textAlign: 'center' }}>
              {description}
            </Text>
          </InfoBlock>
        )}
      </CardFooter>
    </RareCard>
  )
}

export default NftCard
