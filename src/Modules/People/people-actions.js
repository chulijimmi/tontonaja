export const SET_PEOPLE = "People/set_people";
export const SET_PEOPLE_DETAIL = "People/set_people_detail";

// Set people when users click on listing people
// on modules Movies related with movies-detail-overview
// payload is related with detail people overview
// credits is type from pros is related with Credits crew or cast
export const setPeople = (payload, credits) => ({
  type: SET_PEOPLE,
  payload,
  credits
});

// Set people response from api when component
// people-detail loaded
export const setPeopleDetail = response => ({
  type: SET_PEOPLE_DETAIL,
  response
});
