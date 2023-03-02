import styled from 'styled-components'

export const Container = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 20;
  background-color : rgb(255,255,255,0.5);
  font-size: 1.2rem;
  display: ${(props) => (props.isOpen ? '' : 'none')};

  @media${(props) => props.theme.small} {
    font-size: 1rem;
  }
  
}
`

export const StudyModalWrapper = styled.div`
  width: 906px;
  height: 730px;
  display: flex;
  flex-direction: column;
  box-shadow: rgb(0 0 0 / 9%) 0px 2px 12px 0px;
  background: ${(props) => props.theme.bgGroundColor1};

  @media ${(props) => props.theme.medium} {
    width: auto;
    height: 100%;
  }
`

export const Header = styled.div`
  margin: 1rem 0rem;
  display: flex;
  justify-content: right;
`

export const CloseButton = styled.button`
  height: 100%;
  margin-right: 1rem;
  font-size: 2rem;
  color: ${(props) => props.theme.text4};
  background: none;

  :hover {
    background: ${(props) => props.theme.bgGroundColor3};
  }
`
export const Content = styled.div`
  padding: 4rem 5rem;

  @media${(props) => props.theme.small} {
    padding: 1rem;
  }
`

export const Title = styled.h1<{ bgColor: string }>`
  padding-left: 1rem;
  font-size: 3rem;
  background: ${(props) => props.bgColor};
  @media${(props) => props.theme.small} {
    font-size: 2rem;
  }
`
export const Info = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1rem 0rem;
`

export const InfoWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 0.5rem 0rem;
`
export const InfoTitle = styled.div`
  width: 8rem;
  color: ${(props) => props.theme.text2};
`

export const InfoContents = styled.div`
  color: ${(props) => props.theme.text1};
`

export const ApplyInfo = styled.div``

export const ButtonWrapper = styled.div<{ bgColor: string }>`
  display: flex;
  align-items: center;
  margin-top: 1rem;
  background: ${(props) => props.bgColor};
`

export const ShowApplyButton = styled.button`
  font-size: 2rem;
  background: none;
`

export const Label = styled.label`
  margin-left: 1rem;
  :hover {
    cursor: pointer;
  }
`

export const WarningMessage = styled.span`
  margin-left: 1rem;
  color: ${(props) => props.theme.text2};
`

export const FormWrapper = styled.div<{ isOpen: boolean }>`
  display: ${(props) => (props.isOpen ? '' : 'none')};
  transition: box-shadow 300ms ease-in-out, 300ms ease-in-out;
`

export const ApplyForm = styled.textarea`
  width: 100%;
  height: 7rem;
  margin-top: 1rem;
  padding: 1rem;
  font-size: 1.2rem;
  resize: none;

  border: 1px solid ${(props) => props.theme.border2};
  border-radius: 10px;
  outline: none;

  @media${(props) => props.theme.small} {
    font-size: 1rem;
  }
`

export const SubmitButton = styled.button`
  margin-left: 1rem;
  font-size: 1.2rem;
  background: none;

  &:hover {
    color: ${(props) => props.theme.blue};
  }
`
export const ApplyButtonWrapper = styled.div`
  display: flex;
  margin-top: 1rem;
  align-items: center;
`
