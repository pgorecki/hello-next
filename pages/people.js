import Link from 'next/link';
import fetch from 'isomorphic-unfetch';
import Header from '../components/Header';

const People = props => (
  <div>
    <Header />
    <h1>People</h1>
    <ul>
      {console.log(props.people)}
      {props.people.map(({ id, name }) => (
        <li key={name}>
          <Link as={`/people/${id}`} href={`/peopleDetails?id=${id}`}>
            <a>{name}</a>
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

People.getInitialProps = async () => {
  console.log('getInitialProps');
  const res = await fetch('https://swapi.co/api/people/');
  const data = await res.json();
  return {
    people: data.results.map(p => ({
      ...p,
      id: p.url.split('/').slice(-2)[0],
    })),
  };
};

export default People;
