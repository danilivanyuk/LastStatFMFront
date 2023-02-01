import React from 'react';
import { useNavigation } from 'react-router-dom';

export default function MainPage() {
  const t = '';
  const navigate = useNavigation();
  // const onclick = () => {

  // }
  return (
    <div>
      <div>
        <input type='text' placeholder='LastFm username' />
        <button type='submit'>
          Submit
        </button>
      </div>
    </div>
  );
}
