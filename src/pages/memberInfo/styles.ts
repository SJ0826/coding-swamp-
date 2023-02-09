import styled from 'styled-components'

export const Container = styled.div``

export const MainWrapper = styled.main`
  width: 768px;
  padding-bottom: 5rem;
  margin-top: 3rem;
  margin-left: auto;
  margin-right: auto;

  @media ${(props) => props.theme.medium} {
    padding-left: 1rem;
    padding-right: 1rem;
  }

  @media ${(props) => props.theme.small} {
    width: 100%;
    margin-top: 1.5rem;
  }
`
export const Profile = styled.section`
  display: flex;
  height: 14rem;

  @media ${(props) => props.theme.small} {
    height: auto;
    flex-direction: column;
  }
`

export const Thumbnail = styled.div`
  padding-right: 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  @media ${(props) => props.theme.small} {
    align-items: center;
    padding-bottom: 1.5rem;
    padding-right: 0px;
  }
`

export const MemberImage = styled.img`
  width: 8rem;
  height: 8rem;
  margin-bottom: 1.25rem;
  background-color: black;
  border-radius: 50%;

  @media ${(props) => props.theme.small} {
    width: 6rem;
    height: 6rem;
    margin-bottom: 1rem;
  }
`

export const MemberInfo = styled.div`
  flex: 1 1 0%;
  padding-left: 1.5rem;
  border-left: 1px solid ${(props) => props.theme.border4};

  @media ${(props) => props.theme.small} {
    padding-top: 1.5rem;
    padding-bottom: 1.5rem;
    border-top: 1px solid ${(props) => props.theme.border4};
    border-bottom: 1px solid ${(props) => props.theme.border4};
    border-left: none;
    padding-left: 0px;
  }
`

export const Name = styled.h2`
  font-size: 2.25rem;
  line-height: 1.5;
  color: ${(props) => props.theme.text1};

  @media ${(props) => props.theme.small} {
    font-size: 1.25rem;
  }
`

export const Email = styled.text`
  font-size: 1.5rem;
  margin-top: 0.25rem;
  margin-bottom: 0.5rem;
  line-height: 1.5;
  color: ${(props) => props.theme.text4};

  @media ${(props) => props.theme.small} {
    font-size: 0.875rem;
  }
`
