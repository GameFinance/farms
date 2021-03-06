import React from 'react'
import { Card, CardBody, Heading, Text } from 'uikit'
import BigNumber from 'bignumber.js/bignumber'
import styled from 'styled-components'
import { getBalanceNumber, getDisplayBalance } from 'utils/formatBalance'
import { useTotalSupply, useBurnedBalance } from 'hooks/useTokenBalance'
import useI18n from 'hooks/useI18n'
import { getCakeAddress } from 'utils/addressHelpers'
import CardValue from './CardValue'
import { useFarms, usePriceCakeBusd } from '../../../state/hooks'

const StyledCakeStats = styled(Card)`
  margin-left: auto;
  margin-right: auto;
`

const Row = styled.div`
  align-items: center;
  display: flex;
  font-size: 14px;
  justify-content: space-between;
  margin-bottom: 8px;
`

const CakeStats = () => {
  const TranslateString = useI18n()
  const totalSupply = useTotalSupply()
  const burnedBalance = useBurnedBalance(getCakeAddress())
  const farms = useFarms()
  const gamePrice = usePriceCakeBusd()
  const circSupply = totalSupply ? totalSupply.minus(burnedBalance) : new BigNumber(0)
  const cakeSupply = getBalanceNumber(circSupply)
  const marketCap = gamePrice.times(circSupply)

  let gamePerBlock = 0
  if (farms && farms[0] && farms[0].gamePerBlock) {
    gamePerBlock = new BigNumber(farms[0].gamePerBlock).div(new BigNumber(10).pow(18)).toNumber()
  }

  return (
    <StyledCakeStats>
      <CardBody>
        <Heading size="xl" mb="24px">
          {TranslateString(534, 'Game Stats')}
        </Heading>
        <Row>
          <Text fontSize="14px">{TranslateString(10005, 'Market Cap')}</Text>
          <CardValue fontSize="14px" value={getBalanceNumber(marketCap)} decimals={0} prefix="$" />
        </Row>
        <Row>
          <Text fontSize="14px">{TranslateString(536, 'Total Minted')}</Text>
          { totalSupply && <Text fontSize="14px">{getDisplayBalance(totalSupply, 18, 6)}</Text> }
        </Row>
        <Row>
          <Text fontSize="14px">{TranslateString(538, 'Total Burned')}</Text>
          <Text fontSize="14px">{getDisplayBalance(burnedBalance, 18, 6)}</Text>
        </Row>
        <Row>
          <Text fontSize="14px">{TranslateString(10004, 'Circulating Supply')}</Text>
          {cakeSupply && <Text fontSize="14px">{getDisplayBalance(circSupply,18, 6)}</Text> }
        </Row>
        <Row>
          <Text fontSize="14px">{TranslateString(540, 'New GAME/block')}</Text>
          <Text bold fontSize="14px">
            {gamePerBlock}
          </Text>
        </Row>
      </CardBody>
    </StyledCakeStats>
  )
}

export default CakeStats
