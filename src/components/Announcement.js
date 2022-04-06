import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  font-size: 1rem;
  height: 2rem;
  background-color: teal;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 600;
  `

const Announcement = () => {
  return (
    <Container>50% off on all deals!!!!!!!</Container>
  )
}

export default Announcement