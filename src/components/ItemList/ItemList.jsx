import React from 'react';
import Item from './Item';

const ItemList = ({ items }) => {
  return (
    <div className="container">
      <div className="row">
        {items.map((item) => (
          <div key={item.id} className="col-12 col-sm-6 col-md-4 col-lg-3 p-2 mt-1 mb-5">
            <Item {...item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ItemList;
