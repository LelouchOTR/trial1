import {
    InstantSearch,
    SearchBox,
    Hits,
    RefinementList,
    RangeInput,
    SortBy
} from "react-instantsearch";



export default function Search() {
    return (
        <InstantSearch searchClient={searchClient} indexName="products">
            <SearchBox />
            <RangeInput attribute="price" />



            <Hits hitComponent={Hit} />
        </InstantSearch>
    );
}