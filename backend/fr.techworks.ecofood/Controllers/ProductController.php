<?php

namespace Controllers;

use Models\ProductModel;

class ProductController
{
    public function setHeaders() 
    {
        header("Access-Control-Allow-Origin: *");
        header("Access-Control-Allow-Methods: POST, GET, OPTIONS, PUT, DELETE");
        header("Access-Control-Allow-Headers: Accept, Content-Type, Content-Length, Accept-Encoding, X-CSRF-Token, Authorization");
    }

    public function create()
    {
        $this->setHeaders();

        $data_product = [
            'name' => $_POST['productName'],
            'type' => 1,
            'brand' => null,
            'image' => '/public/images/products/blank.jpg',
            'weight' => 0,
            'composition' => null,
            'nutrition' => null,
            'price' => 12,
            'sku' => null,
            'origin' => 'france',
            'status' => 0
        ];

        $filters = array(
            'name' => FILTER_SANITIZE_ENCODED,
            'type' => FILTER_SANITIZE_NUMBER_INT,
            'brand_id' => FILTER_SANITIZE_NUMBER_INT,
            'image' => FILTER_SANITIZE_URL,
            'weight' => FILTER_SANITIZE_NUMBER_INT,
            'composition' => FILTER_SANITIZE_ENCODED,
            'nutrition' => FILTER_SANITIZE_ENCODED,
            'price' => FILTER_SANITIZE_NUMBER_INT,
            'sku' => FILTER_SANITIZE_ENCODED,
            'origin' => FILTER_SANITIZE_ENCODED,
            'status' => FILTER_SANITIZE_NUMBER_INT
        );
       
        $new_product = filter_var_array($data_product, $filters);
        
        $Product = new ProductModel();
        $Product->create('product', $new_product);
    }

    public function getProductFromId(int $id)
    {
        $this->setHeaders();
        $Product = new ProductModel();
        $product = $Product->getProductFromId($id);
        $Product->sendJSON($product);
    }

    public function update(int $id)
    {
        $this->setHeaders();
        $product = json_decode(file_get_contents('php://input'));

        try {
            $data_product = [
                'name'          => $product->productName ?? null,
                'type'          => $product->type ?? 1,
                'brand_id'      => $product->brand ?? 1,
                'image'         => $product->image ?? '/public/images/products/blank.jpg',
                'weight'        => $product->weight ?? '0',
                'composition'   => $product->composition ?? "",
                'nutrition'     => $product->nutrition ?? "",
                'price'         => $product->price ?? 0,
                'sku'           => $product->sku ?? null,
                'origin'        => $product->origin ?? 'france',
                'status'        => $product->status ?? 0
            ];
    
            $filters = array(
                'name' => FILTER_SANITIZE_SPECIAL_CHARS,
                'type' => FILTER_SANITIZE_NUMBER_INT,
                'brand_id' => FILTER_SANITIZE_NUMBER_INT,
                'image' => FILTER_SANITIZE_URL,
                'weight' => FILTER_SANITIZE_NUMBER_INT,
                'composition' => FILTER_SANITIZE_SPECIAL_CHARS,
                'nutrition' => FILTER_SANITIZE_SPECIAL_CHARS,
                'price' => FILTER_SANITIZE_NUMBER_INT,
                'sku' => FILTER_SANITIZE_ENCODED,
                'origin' => FILTER_SANITIZE_SPECIAL_CHARS,
                'status' => FILTER_SANITIZE_NUMBER_INT
            );
    
            $updated_product = filter_var_array($data_product, $filters);
            $Product = new ProductModel();
            $Product->update('product', $updated_product, ['id_product', $id]);
        } catch (\Exception $error) {
            echo $error->getMessage();
        }
    }

    public function delete(int $id)
    {
        header("Access-Control-Allow-Origin: *");
        header("Access-Control-Allow-Methods: OPTIONS, DELETE");
        header("Access-Control-Allow-Headers: Accept, Content-Type, Content-Length, Accept-Encoding, X-CSRF-Token, Authorization");

        $Product = new ProductModel();
        $Product::delete('product', $id);
        $Product->sendJSON(['product' => $Product]);
    }
}