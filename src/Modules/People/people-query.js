import { useLocation } from "react-router-dom";

export function getPeopleId() {
  const query = new URLSearchParams(useLocation().search);
  if (query.id) return query.id;
  return false;
}
