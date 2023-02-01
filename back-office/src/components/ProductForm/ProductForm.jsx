import React from 'react';
import { useFormik } from 'formik';

const hostname = 'http://localhost:9000';

const validate = values => {
  const errors = {};
  if (!values.productName) {
    errors.productName = 'Requis';
  }
  if (!values.weight) {
    errors.weight = 'Requis';
  }
  if (!values.nutrition) {
    errors.nutrition = 'Requis';
  }
  if (!values.price) {
    errors.price = 'Requis';
  }
  if (!values.origin) {
    errors.origin = 'Requis';
  }

  return errors;
};

function valuesToFormdata(values) {
  const formData = new FormData();
  for (let key in values) {
    formData.append(key, values[key]);
  }
  return formData;
}

export default function ProductForm() {
  const formik = useFormik({
    initialValues: {
      weight: '',
      productName: '',
    },
    validate,
    onSubmit: async values => {
      const formData = valuesToFormdata(values);
      console.log(formData.getAll('productName'));
      await fetch(`${hostname}/product/create`, {
        method: 'POST',
        body: formData,
      })
        .then(res => res.json())
        .then(json => console.log(json));
    },
  });

  return (
    <div>
      <form onSubmit={formik.handleSubmit} className="flex flex-col">
        { formik.errors.productName && formik.touched.productName ? <label className='text-red-600' htmlFor="productName">Nom requis</label> : <label htmlFor="productName">Nom</label> }
        <input
          id="productName"
          name="productName"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.productName}
          className="pl-2"
        />

        { formik.errors.weight && formik.touched.weight ? <label className='text-red-600' htmlFor="weight">Poids requis</label> : <label htmlFor="weight">Poids</label> }
        <input
          id="weight"
          name="weight"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.weight}
          className="pl-2"
        />

        {formik.errors.nutrition && formik.touched.nutrition ? <label className='text-red-600' htmlFor="nutrition">Nutrition requis</label> : <label htmlFor="nutrition">Nutrition</label>}
        <input
          id="nutrition"
          name="nutrition"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.nutrition}
          className="pl-2"
        />

        {formik.errors.price && formik.touched.price ? <label className='text-red-600' htmlFor="price">Prix requis</label> : <label htmlFor="price">Prix</label>}
        <input
          id="price"
          name="price"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.price}
          className="pl-2"
        />

        {formik.errors.origin && formik.touched.origin ? <label className='text-red-600' htmlFor="origin">Origine requis</label> : <label htmlFor="origin">Origine</label>}
        <input
          id="origin"
          name="origin"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.origin}
          className="pl-2"
        />

        <button type="submit" className="self-start bg-green-400 hover:bg-green-500 p-2 mt-2 rounded-md">Valider</button>
      </form>
    </div>
  );
};

{/* <form onSubmit={handleSubmit} method="post" className="flex flex-col">
            <label htmlFor="name">Nom</label>
            <input className="border" type="text" name="name" id="name"/>
            <label htmlFor="weight">Poids</label>
            <input className="border" type="text" name="weight" id="weight"/>
            <label htmlFor="nutrition">Nutrition</label>
            <input className="border" type="text" name="nutrition" id="nutrition"/>
            <label htmlFor="price">Prix</label>
            <input className="border" type="text" name="price" id="price"/>
            <label htmlFor="origin">Origine</label>
            <input className="border" type="text" name="origin" id="origin"/>
            <button type="submit">Ajouter</button>
          </form> */}