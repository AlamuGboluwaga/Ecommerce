import React from "react";
import new_collections from "../Assets/new_collections";
import Item from "../Item/Item";

const NewCollections = () => {
  return (
    <div className="flex flex-col items-center gap-[10px] h-[90vh]">
      <h1 className="text-[#171727] text-[50px] font-[600]">NewCollections</h1>
      <hr className="w-[200px] h-[6px] rounded-[10px] bg-[#252525]" />
      <div className="mt-[50px] flex gap-[30px]">
        {new_collections.map((item, index) => (
          <Item
            key={index}
            id={item.id}
            name={item.name}
            image={item.image}
            new_price={item.new_price}
            old_price={item.old_price}
          />
        ))}
      </div>
    </div>
  );
};

export default NewCollections;
