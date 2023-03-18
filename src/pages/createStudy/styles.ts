import styled from 'styled-components'

export const Content = styled.div`
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

export const Title = styled.h1<{ bgColor: string }>`
  height: 3rem;
  padding-top: 0.5rem;
  padding-bottom: 1rem;

  background: ${(props) => props.bgColor};
  color: ${(props) => props.theme.text1};
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
  height: 4rem;
  padding-left: 1rem;

  font-size: 24px;
  font-weight: bold;

  border-bottom: 1px solid ${(props) => props.theme.border3};
`

export const SubMenu = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  height: 3rem;
  padding-left: 1rem;

  font-size: 1.1rem;
  font-weight: bold;
  color: ${(props) => props.theme.text1};

  border-bottom: 1px solid ${(props) => props.theme.border3};
`

export const SubTitle = styled.div`
  width: 13rem;
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
export const ButtonWrapper = styled.div`
  margin-top: 2rem;
  width: 100%;
  display: flex;
  justify-content: right;
`

export const CreateButton = styled.button<{ buttonName: string }>`
  width: 5rem;
  height: 2rem;
  margin-left: 2rem;

  font-size: 1.2rem;

  border: 1px solid ${(props) => props.theme.border3};
  border-radius: 20px;
  background: ${(props) => props.theme.bgGroundColor1};
  color: ${(props) => props.theme.text1};
  transition: box-shadow 300ms ease-in-out, 100ms ease-in-out;
  :hover {
    cursor: pointer;
    background: ${(props) => (props.buttonName === 'create' ? props.theme.blue : props.theme.warning2)};
    color: ${(props) => props.theme.buttonText};
  }
`
