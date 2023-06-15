import React from 'react';
import Skeleton from 'react-loading-skeleton';

const ProductSkeleton = () => {
  return (
    <div className="flex space-x-12  mt-20  bg-white rounded-md shadow-md  w-full">
      <div className="w-64 h-96 bg-gray-100 mb-6  ">
        <Skeleton height={348} width={100} />
      </div>
      <div className="w-64 h-96 bg-gray-100  ">
        <Skeleton height={348} width={100} />
      </div>
      <div className="w-64 h-96 bg-gray-100  ">
        <Skeleton height={348} width={100} />
      </div>
      <div className="w-64 h-96 bg-gray-100  ">
        <Skeleton height={348} width={100} />
      </div>
    </div>
  );
};

export default ProductSkeleton;
