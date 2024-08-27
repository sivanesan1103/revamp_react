import axios from 'axios';
import { Card } from '../Card/Card';
import { useState, useEffect } from 'react';

export const Body = () => {
  const [Productdatas, setProductdatas] = useState([]);

  const fetchData = async () => {
    try {
      let response = await axios.get('https://api.escuelajs.co/api/v1/products');
      if (response.status === 200) {
        setProductdatas(response.data);
      }
    } catch (error) {
      console.error('Error fetching the product data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className='mx-auto my-5 2xl:container'>
      <div className='grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4'>
        {Productdatas.map((product) => {
          return (
            <Card
              key={product.id}
              img={product.images[0]} // Use the first image from the product data
              des={product.title}
              price={`$${product.price}`}
            />
          );
        })}
      </div>
    </div>
  );
};
