import React from 'react';
import Business from './Business';

const businesses = [
  {
    name: 'McDonalds',
    address: '123 Main St',
    city: 'San Diego',
    state: 'CA',
    zipCode: '92101',
    category: 'Fast Food',
    rating: 4.5,
    reviewCount: 100,
  },
  {
    name: 'Burger King',
    address: '456 Main St',
    city: 'San Diego',
    state: 'CA',
    zipCode: '92101',
    category: 'Fast Food',
    rating: 4.0,
    reviewCount: 50,
  },
  {
    name: 'Taco Bell',
    address: '789 Main St',
    city: 'San Diego',
    state: 'CA',
    zipCode: '92101',
    category: 'Fast Food',
    rating: 3.5,
    reviewCount: 25,
  },
];

const BusinessList: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-8">
      {businesses.map((business, index) => (
        <div
          className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transform hover:-translate-y-1 hover:scale-105 transition duration-300"
          key={index}
        >
          <Business
            name={business.name}
            address={business.address}
            city={business.city}
            state={business.state}
            zipCode={business.zipCode}
            category={business.category}
            rating={business.rating}
            reviewCount={business.reviewCount}
          />
        </div>
      ))}
    </div>
  );
};

export default BusinessList;