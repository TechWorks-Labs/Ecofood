import React, { useState, useEffect } from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';

const hostname = 'http://localhost:9000';

function valuesToFormdata(values) {
  const formData = new FormData();
  for (let key in values) {
    formData.append(key, values[key]);
  }
  return formData;
}

export default function ProductForm({ productData }) {
  const [product, setproduct] = useState({});

  useEffect(() => {
    if (productData) {
      setproduct({
        productName: productData.name,
        weight: productData.weight,
        nutrition: productData.nutrition,
        price: productData.price,
        origin: productData.origin
      });
    }
  }, [productData]);

  return (
    <Formik
      enableReinitialize
      initialValues={{
        productName: product.productName || '',
        weight: product.weight || '',
        nutrition: product.nutrition || '',
        price: product.price || '',
        origin: product.origin || ''
      }}
      // validationSchema={Yup.object({
      //   productName: Yup.string().max(20, 'Must be 20 characters or less').required
      // })}
      onSubmit={async values => {
        const formData = valuesToFormdata(values);
        await fetch(`${hostname}/product/create`, {
          method: 'POST',
          body: formData,
        })
          .then(res => res.json())
          .then(json => console.log(json));
      }}
    >
      {formik => (
        <form onSubmit={formik.handleSubmit} className="flex flex-col">
          {formik.errors.productName && formik.touched.productName ? <label className='text-red-600' htmlFor="productName">Nom requis</label> : <label htmlFor="productName">Nom</label>}
          <input
            id="productName"
            type="text"
            {...formik.getFieldProps('productName')}
            className="pl-2"
          />

          {formik.errors.weight && formik.touched.weight ? <label className='text-red-600' htmlFor="weight">Poids requis</label> : <label htmlFor="weight">Poids</label>}
          <input
            id="weight"
            type="text"
            {...formik.getFieldProps('weight')}
            className="pl-2"
          />

          {formik.errors.nutrition && formik.touched.nutrition ? <label className='text-red-600' htmlFor="nutrition">Nutrition requis</label> : <label htmlFor="nutrition">Nutrition</label>}
          <input
            id="nutrition"
            type="text"
            {...formik.getFieldProps('nutrition')}
            className="pl-2"
          />

          {formik.errors.price && formik.touched.price ? <label className='text-red-600' htmlFor="price">Prix requis</label> : <label htmlFor="price">Prix</label>}
          <input
            id="price"
            type="text"
            {...formik.getFieldProps('price')}
            className="pl-2"
          />

          {formik.errors.origin && formik.touched.origin ? <label className='text-red-600' htmlFor="origin">Origine requis</label> : <label htmlFor="origin">Origine</label>}
          <input
            id="origin"
            name="origin"
            type="text"
            {...formik.getFieldProps('origin')}
            className="pl-2"
          />

          <button type="submit" className="self-start bg-green-400 hover:bg-green-500 p-2 mt-2 rounded-md">Valider</button>
        </form>
      )}
    </Formik>
  );
};