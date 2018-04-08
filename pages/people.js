import fetch from 'isomorphic-unfetch';
import Header from '../components/Header';

const People = props => (
  <div>
    <Header />
    <h1>People</h1>
    <ul>
      {console.log(props.people)}
      {props.people.map(({ name }) => <li key={name}>{name}</li>)}
    </ul>
  </div>
);

People.getInitialProps = async () => {
  console.log('getInitialProps');
  const res = await fetch('https://swapi.co/api/people/');
  const data = await res.json();
  return {
    people: data.results,
  };
};

export default People;
