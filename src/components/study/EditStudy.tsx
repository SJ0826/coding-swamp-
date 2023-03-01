import { FiEdit } from 'react-icons/fi'
import styled from 'styled-components'
import { ChangeEvent, FormEvent, useRef, useState } from 'react'
import { studyColor } from 'src/style/theme'
import { useAppDispatch, useAppSelector } from 'src/lib/hooks'
import { Editor } from '@toast-ui/react-editor'
import { studyAPI } from 'src/lib/api/study/StudyAPI'
import { useNavigate } from 'react-router-dom'
import { changeTargetedStudyNav } from 'src/lib/store/studyItemSlice'
import { Container, Icon, Title } from './StudyDescription'
import { StudyFormParams } from '../../lib/types/StudyInterface'
import { EndDate, StartDate } from '../createStudy/SelectDate'
import DefaultButton from '../DefaultButton'

const EditStudy = () => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const { studyInfo } = useAppSelector(({ studyItem }) => studyItem)
  const initialStudyForm = {
    title: studyInfo.title,
    description: studyInfo.description,
    studyType: studyInfo.studyType,
    thumbnail: studyInfo.thumbnail,
    startDate: studyInfo.startDate,
    endDate: studyInfo.endDate,
    maxMemberCount: studyInfo.maxMemberCount,
    tags: studyInfo.tags,
  }
  const [studyForm, setStudyForm] = useState<StudyFormParams>(initialStudyForm)
  const [clickedColor, setClickedColor] = useState(studyForm.thumbnail)
  const editorRef = useRef<Editor>(null)
  const [tagInput, setTagInput] = useState('')

  const onChangeContent = (e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>) => {
    setStudyForm({ ...studyForm, [e.target.id]: e.target.value })
  }

  const onChangeEditor = () => {
    const data = editorRef.current?.getInstance().getHTML()
    if (data) setStudyForm({ ...studyForm, description: data })
  }

  const onClickColor = (e: React.MouseEvent) => {
    const colorCode = e.currentTarget.id
    setClickedColor(colorCode)
    setStudyForm({ ...studyForm, thumbnail: colorCode })
  }

  const onSubmitTag = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const newTags = [...studyForm.tags, tagInput]
    setStudyForm({ ...studyForm, tags: newTags })
    setTagInput('')
  }

  const onClickTag = (e: React.MouseEvent) => {
    const tagName = e.currentTarget.id
    const newTags = studyForm.tags.filter((tag) => tag !== tagName)
    setStudyForm({ ...studyForm, tags: newTags })
  }

  const onClickSaveButton = () => {
    const data = { studyId: studyInfo.studyId, studyForm }
    studyAPI.postEditedStudyForm(data)
    setStudyForm(initialStudyForm)
    dispatch(changeTargetedStudyNav('home'))
    navigate('/study/home')
  }

  return (
    <Container>
      <Title>
        <Icon>
          <FiEdit />
        </Icon>
        스터디 수정하기
      </Title>
      <EditWrapper>
        <EditContentWrapper>
          <SubTitle>이름</SubTitle>
          <NameInput type="text" id="title" value={studyForm.title} onChange={onChangeContent} required />
        </EditContentWrapper>
        <EditContentWrapper>
          <SubTitle>소개글</SubTitle>
          <EditorWrapper>
            <Editor ref={editorRef} onChange={onChangeEditor} usageStatistics={false} />
          </EditorWrapper>
        </EditContentWrapper>
        <EditContentWrapper>
          <SubTitle>스터디 타입</SubTitle>
          <StudyType id="studyType" onChange={onChangeContent}>
            <option>STUDY</option>
            <option>MOGAKKO</option>
          </StudyType>
        </EditContentWrapper>
        <EditContentWrapper>
          <SubTitle>스터디 대표 색상</SubTitle>
          {studyColor.map((color) => (
            <Color key={color} id={color} colorCode={color} onClick={onClickColor} isClicked={clickedColor === color} />
          ))}
        </EditContentWrapper>
        <EditContentWrapper>
          <SubTitle>스터디 시작일</SubTitle>
          <StartDate type="date" id="startDate" value={studyForm.startDate} onChange={onChangeContent} required />
        </EditContentWrapper>
        <EditContentWrapper>
          <SubTitle>스터디 종료일</SubTitle>
          <EndDate type="date" id="endDate" value={studyForm.endDate} onChange={onChangeContent} />
        </EditContentWrapper>
        <EditContentWrapper>
          <SubTitle>스터디 최대인원</SubTitle>
          <MaxCount id={'maxMemberCount'} onChange={onChangeContent} value={studyForm.maxMemberCount} />명
        </EditContentWrapper>
        <EditContentWrapper>
          <TagForm onSubmit={onSubmitTag}>
            <SubTitle>스터디 태그</SubTitle>
            <TagInput value={tagInput} onChange={(e: ChangeEvent<HTMLInputElement>) => setTagInput(e.target.value)} />
            {studyForm.tags.map((tag: string) => (
              <Tag key={tag} id={tag} onClick={onClickTag}>
                {tag}
              </Tag>
            ))}
          </TagForm>
        </EditContentWrapper>
        <DefaultButton
          onClick={onClickSaveButton}
          height={'2rem'}
          color={''}
          bgColor={''}
          hoverColor={''}
          hoverBGColor={studyInfo.thumbnail}
          text={'저장'}
        />
      </EditWrapper>
    </Container>
  )
}

export default EditStudy

const EditWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 2rem 0rem;
`

const EditContentWrapper = styled.div`
  display: flex;
  margin-bottom: 2rem;
`

const SubTitle = styled.div`
  width: 9rem;
`
const NameInput = styled.input`
  height: 2rem;
  padding: 0.02rem 1rem;
  border-radius: 10px;
  box-shadow: rgb(0 0 0 / 9%) 0px 0px 8px;
  font-size: 1rem;
`

const EditorWrapper = styled.div`
  width: 70%;
`

const StudyType = styled.select`
  font-size: 1rem;
  :hover {
    cursor: pointer;
  }
`

const Color = styled.div<{ colorCode: string; isClicked: boolean }>`
  width: 2rem;
  height: 2rem;
  margin-right: 1rem;
  border: 1px solid ${(props) => (props.isClicked ? props.theme.border1 : props.theme.border4)};
  background: ${(props) => props.colorCode};
  border-radius: 10px;
  box-shadow: rgb(0 0 0 / 9%) 0px 0px 8px;

  :hover {
    cursor: pointer;
  }
`
const MaxCount = styled.input`
  width: 4rem;
  height: 2rem;
  margin-right: 0.5rem;
  padding: 0.02rem 0.5rem;
  border-radius: 10px;
  box-shadow: rgb(0 0 0 / 9%) 0px 0px 8px;
  font-size: 1rem;
  text-align: center;
`
const TagInput = styled.input`
  width: 10rem;
  height: 2rem;
  margin-right: 0.5rem;
  padding: 0.02rem 0.5rem;
  border-radius: 10px;
  box-shadow: rgb(0 0 0 / 9%) 0px 0px 8px;
  font-size: 1rem;
  text-align: center;
`

const Tag = styled.div`
  padding: 0.3rem 0.8rem;
  margin-right: 1rem;
  border-radius: 10px;
  box-shadow: rgb(0 0 0 / 9%) 0px 0px 8px;
  text-align: center;
  background: ${(props) => props.theme.bgGroundColor4};

  :hover {
    cursor: pointer;
  }
`
const TagForm = styled.form`
  display: flex;
`
