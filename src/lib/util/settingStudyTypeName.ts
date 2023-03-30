const settingStudyTypeName = (studytype: string) => {
  switch (studytype) {
    case 'STUDY':
      return '스터디'
    case 'MOGAKKO':
      return '모각코'
    default:
      return 'ALL'
  }
}

export default settingStudyTypeName
