import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";

const DamageProducts = () => {
  const { id } = useParams();
  const { register, handleSubmit } = useForm();
  const [singleItem, setSingleItem] = useState({});
  useEffect(() => {
    fetch(`https://young-tundra-08226.herokuapp.com/data/${id}`)
      .then((res) => res.json())
      .then((data) => setSingleItem(data));
  }, []);

  const onSubmit = (data) => {
    const newData = { ...data };
    newData.rQ = data.rQ ? data.rQ : singleItem?.rQ;
    newData.damagePrice = data.damagePrice
      ? data.damagePrice
      : singleItem?.damagePrice;

    fetch(`https://young-tundra-08226.herokuapp.com/data/${id}`, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(newData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };
  return (
    <>
      <h1 className="text-center">Add Damage products{id}</h1>
      <form className="text-start w-75 griD" onSubmit={handleSubmit(onSubmit)}>
        <input
          placeholder="Return cutton"
          className="form-control rounded p-2"
          {...register("rQ")}
        />
        <input
          placeholder="Damage cotton"
          className="form-control rounded p-2"
          {...register("damagePrice")}
        />
        <input
          className="rounded px-3 border-0 btn-primary py-2"
          value={"Add Damages"}
          type="submit"
        />
      </form>
    </>
  );
};

export default DamageProducts;
