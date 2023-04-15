import React, { createContext, useContext } from 'react';

// Create our theme context using React.CreateContext()
export const SearchContext = createContext();
const { Provider } = SearchContext;

// Create a custom hook that allows easy access to our NameContext values
export const useName = () => useContext(SearchContext);

// Creating our theme provider. Accepts an argument of "props"
export default function NameProvider(props) {
  const initialState = {
    name: '1337user',
    isValid: false,
  };

  return <Provider value={initialState} {...props} />;
}