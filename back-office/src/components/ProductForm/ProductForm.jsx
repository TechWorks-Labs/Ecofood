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
        // headers: { 'Content-Type': 'multipart/form-data; boundary=something' },
        method: 'POST',
        // body: JSON.stringify({ values }),
        body: formData,
      })
        .then(res => res.json())
        .then(json => console.log(json));
    },
  });

  return (
    <div>
      <h1>Ajouter un produit</h1>
      <form onSubmit={formik.handleSubmit}>
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

        <button type="submit">Submit</button>
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