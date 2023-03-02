import styled from 'styled-components'
import { AiOutlineClose, AiOutlineWarning } from 'react-icons/ai'
import { ButtonWrapper } from 'src/pages/memberInfo/styles'
import { Container } from '../mainPage/StudyApplyModal/style'
import { CloseButton, ModalWrapper, WarningMessage } from '../member/MemberModal'
import { Icon } from './StudyDescription'

const DeleteStudyModal = () => {
  const test = 'test'
  return (
    <Container isOpen={true}>
      <ModalWrapper>
        <CloseButton>
          <AiOutlineClose />
        </CloseButton>
        <Text>스터디를 삭제하시겠습니까?</Text>
        <WarningMessage isVisibility={true}>
          <Icon>
            <AiOutlineWarning />
          </Icon>
          삭제된 데이터는 복구되지 않습니다.
        </WarningMessage>
        <ButtonWrapper>
          <StudyDeleteButton>확인</StudyDeleteButton>
          <StudyDeleteButton>취소</StudyDeleteButton>
        </ButtonWrapper>
      </ModalWrapper>
    </Container>
  )
}

export default DeleteStudyModal

const Text = styled.h3`
  margin-top: 2rem;
`

const StudyDeleteButton = styled.button`
  width: 6rem;
  margin: 2rem 1rem 0rem 0rem;
  font-size: 1rem;
  line-height: 2rem;

  :hover {
    background: ${(props) => props.theme.bgGroundColor3};
  }
`
