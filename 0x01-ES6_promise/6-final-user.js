import signUpUser from './4-user-promise.js';
import uploadPhoto from './5-photo-reject.js';

export default function handleProfileSignup (firstName, lastName, fileName) {
  return Promise.all([signUpUser(firstName, lastName), uploadPhoto(fileName)])
    .then((res) => (
      res.map((st) => ({
        status: st.status,
        value: st.status === 'fulfilled' ? st.value : String(st.reason)
      }))
    ));
}
