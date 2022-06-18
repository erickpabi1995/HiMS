var UserProfile = (function () {
  let user_id = 1
  let userName = 'The Administrator'
  let group = 18
  let accessLevel = 4

  var getUserId = function () {
    return user_id // Or pull this from cookie/localStorage
  }
  var setUserId = function (value) {
    user_id = value
    // Also set this in cookie/localStorage
  }

  var getUserName = function () {
    return userName // Or pull this from cookie/localStorage
  }
  var setUserName = function (value) {
    userName = value
    // Also set this in cookie/localStorage
  }
  var getGroup = function () {
    return group // Or pull this from cookie/localStorage
  }
  var setGroup = function (value) {
    group = value
    // Also set this in cookie/localStorage
  }
  var getAccessLevel = function () {
    return accessLevel // Or pull this from cookie/localStorage
  }
  var setAccessLevel = function (value) {
    accessLevel = value
    // Also set this in cookie/localStorage
  }

  // use this in the login to set the session variable
  // import UserProfile from './UserProfile';

  // UserProfile.setUserName("Some Guy");

  return {
    getUserId: getUserId,
    setUserId: setUserId,
    getUserName: getUserName,
    setUserName: setUserName,
    getGroup: getGroup,
    setGroup: setGroup,
    getAccessLevel: getAccessLevel,
    setAccessLevel: setAccessLevel,
  }
})()

export default UserProfile
