import React, { useEffect } from 'react'
import { Route, useRouteMatch } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { useWallet } from '@binance-chain/bsc-use-wallet'
import { provider } from 'web3-core'
import { Image, Heading } from 'uikit'
import FlexLayout from 'components/layout/Flex'
import Page from 'components/layout/Page'
import { useLootBoxes } from 'state/hooks'
import useRefresh from 'hooks/useRefresh'
import { fetchLootBoxesUserDataAsync } from 'state/actions'
import useI18n from 'hooks/useI18n'
import LootBoxCard from './components/LootBoxCard/LootBoxCard'
import Divider from './components/Divider'


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
      <Heading as="h1" size="lg" color="text" mb="50px" style={{ textAlign: 'center' }}>
        {TranslateString(320, 'Stake LP tokens to earn GAME')}
      </Heading>
      <Heading as="h2" color="text" mb="50px" style={{ textAlign: 'center' }}>
        {TranslateString(10000, 'Deposit Fee will be used to buyback GAME')}
      </Heading>
      <div>
        <Divider />
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
