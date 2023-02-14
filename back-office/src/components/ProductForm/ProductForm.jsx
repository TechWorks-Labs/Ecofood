import React, { useState, useEffect } from 'react';
import { Navigate } from "react-router-dom";
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

export default function ProductForm({ productData, update }) {
  const [product, setproduct] = useState({});
  const [imageFile, setImageFile] = useState();

  function handleFileChange(e) {
    if (e.target.files) {
      setImageFile(e.target.files[0]);
    }
  };

  useEffect(() => {
    if (productData) {
      setproduct({
        productName: productData.name,
        weight: productData.weight,
        nutrition: productData.nutrition,
        composition: productData.composition,
        brand: productData.brand,
        price: productData.price,
        origin: productData.origin,
        id: productData.id_product
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
        composition: product.composition || '',
        brand: product.brand || '',
        price: product.price || '',
        origin: product.origin || '',
        image: imageFile || ''
      }}
      validationSchema={Yup.object({
        productName: Yup.string().required(),
        weight: Yup.string().required(),
        nutrition: Yup.string().required(),
        composition: Yup.string().required(),
        brand: Yup.string().required(),
        price: Yup.string().required(),
        origin: Yup.string().required()
      })}
      onSubmit={async values => {
        const formData = valuesToFormdata(values)
        
        if (update) {
          await fetch(`${hostname}/product/${product.id}`, {
            method: 'POST', 
            body: formData
          })
          .then(res => {
            if (res.status == 200) {
              window.location.href = `/product/${product.id}`;
            }  
          });
        } else {
          await fetch(`${hostname}/product/create`, {
            method: 'POST',
            body: formData
          })
          .then(res => {
            if (res.status == 200) {
              window.location.href = '/products';
            }  
          });
        }
      }}
    >
      {formik => (
        <form onSubmit={formik.handleSubmit} enctype="multipart/form-data" className="flex flex-col">
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
            type="number"
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

          {formik.errors.composition && formik.touched.composition ? <label className='text-red-600' htmlFor="composition">Composition requise</label> : <label htmlFor="composition">Composition</label>}
          <input
            id="composition"
            type="text"
            {...formik.getFieldProps('composition')}
            className="pl-2"
          />

          {formik.errors.brand && formik.touched.brand ? <label className='text-red-600' htmlFor="brand">Marque requise</label> : <label htmlFor="brand">brand</label>}
          <input
            id="brand"
            type="text"
            {...formik.getFieldProps('brand')}
            className="pl-2"
          />

          {formik.errors.price && formik.touched.price ? <label className='text-red-600' htmlFor="price">Prix requis</label> : <label htmlFor="price">Prix</label>}
          <input
            id="price"
            type="number"
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

          {/* {formik.errors.image && formik.touched.image ? <label className='text-red-600' htmlFor="image">Origine requis</label> : <label htmlFor="image">Image</label>}
          <input
            id="image"
            name="image"
            type="file"
            {...formik.getFieldProps('image')}
            className="pl-2"
          /> */}
          <input type="hidden" name="MAX_FILE_SIZE" value="3145728" />
          <label htmlFor="file">3mo maximum (jpeg/png,webp)</label>
          <input id="file" name="file" type="file" onChange={handleFileChange} />

          {!update
            ? <button type="submit" className="self-start bg-green-400 hover:bg-green-500 p-2 mt-2 rounded-md">Valider</button>
            : <button type="submit" className="self-start bg-green-400 hover:bg-green-500 p-2 mt-2 rounded-md">Mettre à jour</button>
          }
        </form>
      )}
    </Formik>
  );
};