// Import the necessary modules from react-instantsearch
import {
    InstantSearch, // A component that provides the instant search experience
    SearchBox, // A component that displays a search box with a query
    Hits, // A component that displays the list of hits matching the query
    RefinementList, // A component that displays a list of values for a specific attribute
    RangeInput, // A component that displays a range input for a numeric attribute
    SortBy // A component that displays a list of indices to sort the results
} from "react-instantsearch";

// Define the default export function that returns the search component
export default function Search() {
    return (
        <InstantSearch searchClient={searchClient} indexName="products"> // Create an InstantSearch component with the search client and the index name as props
            <SearchBox /> // Create a SearchBox component
            <RangeInput attribute="price" /> // Create a RangeInput component for the price attribute
            <RefinementList attribute="category" /> // Create a RefinementList component for the category attribute
            <SortBy defaultRefinement="products" items={[ // Create a SortBy component with the default and the available indices as props
                { value: 'products', label: 'Relevance' },
                { value: 'products_price_asc', label: 'Lowest Price' },
                { value: 'products_price_desc', label: 'Highest Price' }
            ]}/>
            <Hits hitComponent={Hit} /> // Create a Hits component with a custom hit component as a prop
        </InstantSearch>
    );
}
