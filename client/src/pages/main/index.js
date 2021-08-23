import React from 'react'
import { PalindromeContainer } from '@containers/palindrome'
import { SearchContainer } from '@containers/search'
import { DataLayout, Layout, SearchLayout } from './styles'

export const Main = () => (
  <Layout>
    <SearchLayout>
      <SearchContainer />
    </SearchLayout>
    <DataLayout>
      <h3>Results:</h3>
      <PalindromeContainer />
    </DataLayout>
  </Layout>
)
