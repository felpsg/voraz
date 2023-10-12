import React from 'react';
import Image from 'next/image';

interface BusinessProps {
  name: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  category: string;
  rating: number;
  reviewCount: number;
}

const Business: React.FC<BusinessProps> = (props) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 mx-4 my-8">
      <div className="flex items-center justify-between mb-4">
        {' '}
        {/* Margem inferior adicionada */}
        <div className="w-16 h-16 rounded-full overflow-hidden">
          <Image
            src="https://picsum.photos/200"
            alt={`${props.name} business`}
            width={64}
            height={64}
          />
        </div>
        <div className="ml-4">
          <h2 className="text-xl font-semibold mb-1">{props.name}</h2>{' '}
          {/* Margem inferior adicionada */}
          <p className="text-gray-600">{props.category}</p>
        </div>
      </div>

      <div className="mt-2">
        {' '}
        {/* Margem superior ajustada */}
        <div className="flex items-center mb-1">
          {' '}
          {/* Margem inferior adicionada */}
          <span className="text-yellow-500 text-xl">{props.rating}</span>
          <span className="text-gray-500 ml-2">stars</span>
        </div>
        <p className="text-gray-500 mb-2">{props.reviewCount} reviews</p>{' '}
        {/* Margem inferior adicionada */}
      </div>

      <div className="mt-2">
        {' '}
        {/* Margem superior ajustada */}
        <p className="text-gray-700 mb-1">{props.address}</p>{' '}
        {/* Margem inferior adicionada */}
        <p className="text-gray-700">
          {props.city}, {props.state} {props.zipCode}
        </p>
      </div>
    </div>
  );
};

export default Business;
