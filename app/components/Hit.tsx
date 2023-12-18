import { Highlight } from "react-instantsearch";

const hitView = (props) => {
  return (
    <div>
      <h2>
        <Highlight hit={props.hit} attribute="name" />
      </h2>
      <br />

      <Highlight hit={props.hit} attribute="price" />
    </div>
  );
};
