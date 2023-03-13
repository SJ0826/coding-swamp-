import styled from 'styled-components'

export const SignUpForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const ImageWrapper = styled.div`
  width: 100%;
  height: 14vh;
  display: flex;
  justify-content: space-between;

  margin: 12px 0 12px 0;
`

export const ImgUploadInput = styled.input`
  display: none;
`
export const ShowImage = styled.div<{ imageUrl: string | null }>`
  width: 110px;
  height: 110px;
  border: 1px solid lightgray;
  border-radius: 40%;

  background-image: url(${(props) => props.imageUrl});
  background-size: cover;
  background-position: center center;
`

export const ImageButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  width: 55%;
  height: 100px;
  padding: 0;
`

export const ImgUploadButton = styled.label`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 70%;
  height: 30%;
  padding-bottom: 4px;

  border-radius: 20px;
  color: #61876e;
  font-weight: bold;
  text-align: center;

  :hover {
    background: #f4ead5;
    cursor: pointer;
  }
`

export const ImgRemoveButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 70%;
  height: 30%;

  border-radius: 20px;
  color: #61876e;
  font-weight: bold;
  text-align: center;

  transition: box-shadow 300ms ease-in-out, 300ms ease-in-out;

  :hover {
    background: #f4ead5;
    cursor: pointer;
  }
`
