import fetch from 'isomorphic-unfetch';
import Header from '../components/Header';

const Details = props => (
  <div>
    {console.log(props)}
    <Header />
    <h1>{props.details.name}</h1>
    <p>{props.details.gender}, {props.details.eye_color} eyes, {props.details.hair_color} hair</p>
    <p>Database ID: {props.url.query.id}</p>
  </div>
);

Details.getInitialProps = async (options) => {
  const { id } = options.query;
  const res = await fetch(`https://swapi.co/api/people/${id}/`);
  const data = await res.json();
  return {
    details: data,
  };
};

export default Details;
