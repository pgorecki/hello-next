import Header from '../components/Header';

const People = props => (
  <div>
    <Header />
    <h1>People</h1>
    <ul>
      {props.people.map(({ name }) => <li key={name}>{name}</li>)}
    </ul>
  </div>
);

People.getInitialProps = () => {
  console.log('getInitialProps');
  return {
    people: [
      { name: 'Luke' },
      { name: 'R2D2' },
    ],
  };
};

export default People;
