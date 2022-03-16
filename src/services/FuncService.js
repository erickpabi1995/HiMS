function getAge(dob) {
  var today = new Date()
  var birthDate = new Date(dob) // create a date object directly from `dob` argument
  var age_now = today.getFullYear() - birthDate.getFullYear()
  var m = today.getMonth() - birthDate.getMonth()
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age_now--
  }
  // console.log(age_now)
  return age_now < 2 ? age_now + ' yr.' : age_now + ' yrs.'
}

export default getAge
