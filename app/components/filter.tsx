import React, { useState } from 'react';
import { Configure, InstantSearch } from 'react-instantsearch';

const apiConfig = () => {
  const [filterActive, setFilterActive] = useState(false);

  const handleFilterToggle = () => {
    // Toggle the filter state when the button is clicked
    setFilterActive(!filterActive);
  };

  return (
    <div>
      <InstantSearch>
        <Configure
          filters={filterActive ? 'price:[1 TO *]' : ''}
        />
        <button onClick={handleFilterToggle}>
          {filterActive ? 'Disable Filter' : 'Enable Filter'}
        </button>
      </InstantSearch>
    </div>
  );
};

export default apiConfig;
