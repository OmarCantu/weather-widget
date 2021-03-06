import { useState, useEffect } from 'react';

export const useFetch = (url, dependencies) => {
  const [isLoading, setIsLoading] = useState(true);
  const [fetchedData, setFetchedData] = useState(null);

  useEffect(() => {
    if (url) {
      fetch(url)
        .then(response => {
          if (!response.ok) {
            throw new Error('Failed to fetch data');
          }
          return response.json();
        })
        .then(data => {
          setFetchedData(data); 
          setIsLoading(false);         
        })
        .catch(e => {
          console.log('Error: ', e);
          setIsLoading(false);
        })
    }
  }, dependencies);

  return [isLoading, fetchedData];
};