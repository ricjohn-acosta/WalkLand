import React from 'react'
import renderWithRedux from './renderWithRedux'
import { fireEvent } from '@testing-library/react'

import '@testing-library/jest-dom/extend-expect'
import '@babel/polyfill'

// this might need to be imported as { sideBar }
import SideBar, { Sidebar as SideTest } from '../client/components/SideBar'

test('Test the sideBar title is loading', async () => {
  const data = [{ id: 1, title: 'TestTitle1' }, { id: 2, title: 'TestTitle1' }]

  const { getAllByTestId } = renderWithRedux(
    <SideTest allWalks = {data}

    />)
  const sideBarItem = getAllByTestId('sideBarItem')
  expect(sideBarItem).toHaveLength(2)
})

//created an array with length of 2 and test if mapfunction creates 2 components