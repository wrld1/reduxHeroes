import {
  filtersFetching,
  filtersFetched,
  filtersFetchingError,
} from "../components/heroesFilters/filtersSlice";

export const fetchFilters = (request) => (dispatch) => {
  dispatch(filtersFetching());
  request("http://localhost:3001/filters")
    .then((data) => dispatch(filtersFetched(data)))
    .catch(() => dispatch(filtersFetchingError()));
};

// export const heroesFetching = () => {
//   return {
//     type: "HEROES_FETCHING",
//   };
// };

// export const heroesFetching = createAction("HEROES_FETCHING");

// export const filtersFetching = () => {
//   return {
//     type: "FILTERS_FETCHING",
//   };
// };

// export const filtersFetched = (filters) => {
//   return {
//     type: "FILTERS_FETCHED",
//     payload: filters,
//   };
// };

// export const filtersFetchingError = () => {
//   return {
//     type: "FILTERS_FETCHING_ERROR",
//   };
// };

// export const activeFilterChanged = (filter) => {
//   return {
//     type: "ACTIVE_FILTER_CHANGED",
//     payload: filter,
//   };
// };

// export const activeFilterChanged = (filter) => (dispatch) => {
//   setTimeout(() => {
//     dispatch({ type: "ACTIVE_FILTER_CHANGED", payload: filter });
//   }, 1000);
// };
