import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
`

export const Content = styled.main`
  width: min(75rem, 95%);
  height: calc(100vh - 7rem);

  overflow-y: auto;
  overflow-y: overlay;

  margin: 0 auto;
`

export const CharactersList = styled.div`
  display: flex;
  flex-direction: column;
`

export const Character = styled.form`
  > div {
    width: 21rem;

    display: grid;
    grid-template-columns: 8rem 1fr;
    align-items: center;
    gap: 0.5rem;
  }
`
