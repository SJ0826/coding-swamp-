import styled from 'styled-components'

export const Content = styled.div`
  width: 700px;
  padding-bottom: 5rem;

  margin-top: 2rem;
  margin-left: auto;
  margin-right: auto;

  @media ${(props) => props.theme.large} {
    width: calc(100% - 20rem);
  }

  @media ${(props) => props.theme.medium} {
    width: calc(100% - 8rem);
  }

  @media ${(props) => props.theme.small} {
    width: calc(100% - 3rem);
  }
`

export const Title = styled.h1`
  height: 3rem;
  padding-top: 0.5rem;
  padding-bottom: 1rem;

  background: ${(props) => props.theme.green6};
  color: gray;
  font-size: 24px;

  @media ${(props) => props.theme.medium} {
    padding-left: 1rem;
    padding-right: 1rem;
  }

  @media ${(props) => props.theme.small} {
    width: 100%;
    margin-top: 1.5rem;
    font-size: 16px;
    height: 2rem;
  }
`

export const StudyName = styled.input`
  width: 100%;
  height: 5rem;
  padding-left: 1rem;

  font-size: 24px;
  font-weight: bold;
`

export const SelectStudyType = styled.div`
  display: flex;
  flex-direction: row;

  height: 3rem;
  padding-left: 1rem;

  font-size: 18px;
  font-weight: bold;
  color: ${(props) => props.theme.text1};
`

export const SubTitle = styled.div`
  width: 10rem;
  @media ${(props) => props.theme.small} {
    width: 8rem;
  }
`

export const SelectTags = styled.div`
  height: 4rem;
  background: red;
`

export const DivisionLine = styled.div`
  position: relative;
  clear: both;
  widht: 100%;
  height: 5px;
  background: ${(props) => props.theme.border4};
  margin-top: 1rem;
  margin-bottom: 1rem;

  @media ${(props) => props.theme.small} {
    visibility: hidden;
  }
`
