import React, { useEffect } from 'react'
import { Route, useRouteMatch } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { useWallet } from '@binance-chain/bsc-use-wallet'
import { provider } from 'web3-core'
import { Image, Heading } from 'uikit'
import FlexLayout from 'components/layout/Flex'
import Page from 'components/layout/Page'
import styled from 'styled-components'
import { useLootBoxes } from 'state/hooks'
import useRefresh from 'hooks/useRefresh'
import { fetchLootBoxesUserDataAsync } from 'state/actions'
import useI18n from 'hooks/useI18n'
import LootBoxCard from './components/LootBoxCard/LootBoxCard'

const StyledHero = styled.div`
  border-bottom: 2px solid ${({ theme }) => theme.colors.textSubtle};
  margin-bottom: 24px;
  padding-bottom: 32px;
`

const LootBox: React.FC = () => {
  const { path } = useRouteMatch()
  const TranslateString = useI18n()
  const lootBoxes = useLootBoxes()
  const { account, ethereum }: { account: string; ethereum: provider } = useWallet()

  const dispatch = useDispatch()
  const { fastRefresh } = useRefresh()
  useEffect(() => {
    if (account) {
      dispatch(fetchLootBoxesUserDataAsync(account))
    }
  }, [account, dispatch, fastRefresh])

  return (
    <Page>
      <StyledHero>
        <Heading as="h1" size="xxl" color="secondary">
          {TranslateString(999, 'LootBox')}
        </Heading>
      </StyledHero>
      <div>
        <FlexLayout>
          <Route exact path={`${path}`}>
            {lootBoxes.map(( lootBox ) => {
              return (
                  <LootBoxCard key={lootBox.id} lootBox={lootBox} account={account} ethereum={ethereum} />
                )
            })}
          </Route>
        </FlexLayout>
      </div>
      <Image src="/images/egg/game-footer.png" alt="illustration" width={1352} height={587} responsive />
    </Page>
  )
}

export default LootBox
