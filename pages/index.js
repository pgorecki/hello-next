import Link from 'next/link';

export default () => (
  <div>
    <h1>Explore Star Wars Universe</h1>
    <p><Link href="/people"><a>People</a></Link></p>
    <p><Link href="/planets"><a>Planets</a></Link></p>
  </div>
);
