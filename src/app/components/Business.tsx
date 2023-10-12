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
    <div className="bg-white rounded-lg shadow-lg p-4 mx-4 my-8">
      <div className="flex items-center justify-between">
        <div className="w-16 h-16 rounded-full overflow-hidden">
          <Image
            src="https://picsum.photos/200"
            alt="business"
            width={64}
            height={64}
          />
        </div>
        <div className="ml-4">
          <h2 className="text-xl font-semibold">{props.name}</h2>
          <p className="text-gray-600">{props.category}</p>
        </div>
      </div>

      <div className="mt-4">
        <div className="flex items-center">
          <span className="text-yellow-500 text-xl">{props.rating}</span>
          <span className="text-gray-500 ml-2">stars</span>
        </div>
        <p className="text-gray-500">{props.reviewCount} reviews</p>
      </div>

      <div className="mt-4">
        <p className="text-gray-700">{props.address}</p>
        <p className="text-gray-700">
          {props.city}, {props.state} {props.zipCode}
        </p>
      </div>
    </div>
  );
};

export default Business;