import axios from 'axios';

export default function getApi(success, failure) {
  const options = {
    params: {
      user_profile: 500,
    },
    headers: {
      Authorization: 'c3fb04334a7c647338cdfd500e2997bb9898cf52',
    },
  };

  axios
    .get(
      'http://api.reward-dragon.com:8000/customers/customer-josh-reason-today/',
      options,
    )
    .then(response => {
      success(response.data.moodalytics);
    })
    .catch(error => {
      failure(error);
    });
  // const APi = fetch(
  //   'http://api.reward-dragon.com:8000/customers/customer-josh-reason-today/?' +
  //     new URLSearchParams({
  //       user_profile: 500,
  //     }),
  //   {
  //     method: 'GET',
  //     headers: {
  //       Authorization: 'c3fb04334a7c647338cdfd500e2997bb9898cf52',
  //     },
  //   },
  // )
  //   .then(res => {
  //     console.log(
  //       'Res',
  //       res.json().then(res => {
  //         console.log('Data', res);
  //       }),
  //     );
  //   })
  //   .catch(err => {
  //     console.log('Error', err);
  //   });
}
