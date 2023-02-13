import '@toast-ui/editor/dist/toastui-editor.css'
import styled from 'styled-components'
import { Editor } from '@toast-ui/react-editor'
import { useRef } from 'react'

const ToastEditor = () => {
  const editorRef = useRef<Editor>(null)
  return (
    <Container>
      <SubTitle>스터디 소개글</SubTitle>
      <Editor ref={editorRef} placeholder="스터디를 소개해보세요" usageStatistics={false} />
    </Container>
  )
}

export default ToastEditor

const Container = styled.div`
  position: relative;
`

const SubTitle = styled.div`
  margin-bottom: 2.5rem;
  margin-left: 1rem;
  font-size: 18px;
  font-weight: bold;
  color: ${(props) => props.theme.text1};
`
