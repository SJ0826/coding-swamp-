type Props = {
  studyId: number
  title: string
  studyType: string
  thumbnail: string
  startDate: string
  endDate: string
  tags: string[]
}

const StudyItem = ({ studyId, title, studyType, thumbnail, startDate, endDate, tags }: Props) => {
  const test = 'test'
  return (
    <>
      <div></div>
      <div>test</div>
    </>
  )
}

export default StudyItem
