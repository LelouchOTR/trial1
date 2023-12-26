import React, { useState } from 'react';
import { Configure, InstantSearch } from 'react-instantsearch';

const YourComponent = () => {
  const [filterActive, setFilterActive] = useState(false);

  const handleFilterToggle = () => {
    // Toggle the filter state when the button is clicked
    setFilterActive(!filterActive);
  };

  return (
    <div>
      <InstantSearch
        // Add your InstantSearch configuration here
      >
        <Configure
          filters={filterActive ? 'price:[1 TO *]' : ''}
        />
        <button onClick={handleFilterToggle}>
          {filterActive ? 'Disable Filter' : 'Enable Filter'}
        </button>
        {/* Other components for displaying search results, etc. */}
      </InstantSearch>
    </div>
  );
};

export default YourComponent;
