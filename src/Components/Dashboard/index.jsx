import React from 'react'
import Dashboard from './dashboard'
import styled from 'styled-components'
import Header from '../Common/Header';

const Wrapper = styled.div``;


function Index() {
  return (
    <Wrapper>
      <Header />
      
      <Dashboard />
    </Wrapper>
  )
}

export default Index