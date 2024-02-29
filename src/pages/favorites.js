import React from 'react';

export default function Favorites({ favorites }) {
  return (
    <div style={{ padding: '16px 124px'}}>
      <h1>Favorites</h1>
      {favorites.map((favorite, index) => (
        <div key={index} style={{ padding: '4px', backgroundColor: index % 2 === 0 ? 'grey' : 'white' }}>
          <p>{favorite.name}</p>
        </div>
      ))}
    </div>
  );
}

export async function getStaticProps() {
  const res = await fetch('https://api.mixcloud.com/lpuskas/favorites/');
  const { data } = await res.json();

  return {
    props: {
      favorites: data,
    },
  };
}