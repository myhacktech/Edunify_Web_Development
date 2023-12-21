import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

const ShowSchools = () => {
  const [schools, setSchools] = useState([]);
  const router = useRouter();

  useEffect(() => {
   
  }, []);

  return (
    <div>
      <h1>Schools List</h1>
      <div>
      </div>
    </div>
  );
};

export default ShowSchools;
