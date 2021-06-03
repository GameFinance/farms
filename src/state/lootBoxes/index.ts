/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit'
import lootBoxesConfig from 'config/constants/lootboxes'
import fetchLootBoxUser from './fetchLootBoxUser'
import { LootBox, LootBoxesState } from '../types'
import fetchLootBoxes from './fetchLootBoxes'

const initialState: LootBoxesState = { data: [...lootBoxesConfig] }

export const lootBoxesSlice = createSlice({
  name: 'LootBoxes',
  initialState,
  reducers: {
    setLootBoxesPublicData: (state, action) => {
      const liveLootBoxesData: LootBox[] = action.payload
      state.data = state.data.map((lootBox) => {
        const liveLootBoxData = liveLootBoxesData.find((f) => f.id === lootBox.id)
        return { ...lootBox, ...liveLootBoxData }
      })
    },
    setLootBoxUserData: (state, action) => {
      const { arrayOfUserDataObjects } = action.payload
      arrayOfUserDataObjects.forEach((userDataEl) => {
        const { index } = userDataEl
        state.data[index] = { ...state.data[index], userData: userDataEl }
      })
    },
  },
})

// Actions
export const { setLootBoxesPublicData, setLootBoxUserData } = lootBoxesSlice.actions

// Thunks
export const fetchLootBoxesPublicDataAsync = () => async (dispatch) => {
  const lootBoxes = await fetchLootBoxes()
  dispatch(setLootBoxesPublicData(lootBoxes))
}
export const fetchLootBoxesUserDataAsync = (account) => async (dispatch) => {
  const userLootBoxAllowances = await fetchLootBoxUser(account)

  const arrayOfUserDataObjects = userLootBoxAllowances.map((lootBoxAllowance, index) => {
    return {
      index,
      allowance: userLootBoxAllowances[index],
    }
  })

  dispatch(setLootBoxUserData({ arrayOfUserDataObjects }))
}

export default lootBoxesSlice.reducer
