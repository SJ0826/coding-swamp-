import styled from 'styled-components'
import { AiOutlineWarning } from 'react-icons/ai'
import { ButtonWrapper } from 'src/pages/memberInfo/styles'
import { Dispatch, SetStateAction } from 'react'
import { useAppSelector } from 'src/lib/hooks'
import { studyAPI } from 'src/lib/api/study/StudyAPI'
import { useNavigate } from 'react-router-dom'
import { Container } from '../mainPage/StudyApplyModal/style'
import { ModalWrapper, WarningMessage } from '../member/MemberModal'
import { Icon } from './StudyDescription'

interface Props {
  isOpenDeleteModal: boolean
  setIsOpenDeleteModal: Dispatch<SetStateAction<boolean>>
}
const DeleteStudyModal = ({ isOpenDeleteModal, setIsOpenDeleteModal }: Props) => {
  const { studyId } = useAppSelector(({ studyItem }) => studyItem.studyInfo)
  const navigate = useNavigate()

  const onClickStudyDeleteButton = () => {
    studyAPI.deleteStudy(studyId)
    navigate('/user')
  }

  return (
    <Container isOpen={isOpenDeleteModal}>
      <ModalWrapper>
        <Text>스터디를 삭제하시겠습니까?</Text>
        <WarningMessage isVisibility={true}>
          <Icon>
            <AiOutlineWarning />
          </Icon>
          삭제된 데이터는 복구되지 않습니다.
        </WarningMessage>
        <ButtonWrapper>
          <StudyDeleteButton onClick={onClickStudyDeleteButton}>확인</StudyDeleteButton>
          <StudyDeleteButton onClick={() => setIsOpenDeleteModal(false)}>취소</StudyDeleteButton>
        </ButtonWrapper>
      </ModalWrapper>
    </Container>
  )
}

export default DeleteStudyModal

const Text = styled.h3`
  margin-top: 3rem;
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
