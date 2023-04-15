import React, { createContext, useContext } from "react";
import { useSearchReducer } from './reducers'

const SearchContext = createContext();
const { Provider } = SearchContext;

const SearchProvider = ({ ...props }) => {
  const [state, dispatch] = useSearchReducer({
    movies: true,
    ratings: false
  });

  return <Provider value={[state, dispatch]} {...props} />;
};

const useSearchContext = () => {
  return useContext(SearchContext);
};

export { SearchProvider, useSearchContext };