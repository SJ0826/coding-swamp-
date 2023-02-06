const getValidation = (type: 'username' | 'email' | 'password', value: string) => {
  const regexp = {
    username: /^.{3,30}$/,
    email: /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i,
    password: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%#?&])[A-Za-z\d$@$!%*#?&]{8,}$/,
  }
  return regexp[type].test(value)
}

export default getValidation
