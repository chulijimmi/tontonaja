// I think about this environment
// Its better save the domain api key to node environment
const apiDomain =
  process.env.NODE_ENV === "development"
    ? "https://api.themoviedb.org"
    : "https://api.themoviedb.org";
const apiKey =
  process.env.NODE_ENV === "development"
    ? "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwYWEyMDk4YjUwMjdjY2UzNmRlMTg5OTA2MGUwODllZiIsInN1YiI6IjVlN2JkMWIwYWIxYmM3NTg3NGMxMmUwMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.3XSdx8E5BgQmF2sHpB_q4LVW7fibcjdPFyN6KOGByws"
    : "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwYWEyMDk4YjUwMjdjY2UzNmRlMTg5OTA2MGUwODllZiIsInN1YiI6IjVlN2JkMWIwYWIxYmM3NTg3NGMxMmUwMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.3XSdx8E5BgQmF2sHpB_q4LVW7fibcjdPFyN6KOGByws";

const location = `${process.env.PUBLIC_URL}`;
export { apiDomain, apiKey, location };
