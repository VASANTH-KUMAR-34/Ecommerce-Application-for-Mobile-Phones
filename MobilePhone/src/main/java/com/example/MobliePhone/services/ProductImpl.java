package com.example.MobliePhone.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.MobliePhone.model.Product;
import com.example.MobliePhone.repository.ProductRepository;

@Service
public class ProductImpl implements ProductServices {
     @Autowired
    public ProductRepository productRepository;
    @Override
    public Product save(Product product) {
       return  productRepository.save(product);
    }
 
    public List<Product> searchProducts(String model, Double lessThanPrice, Double greaterThanPrice, String displaySize,String brand) {
      return productRepository.findByModelContainingOrPricesLessThanOrPricesGreaterThanOrDisplaysizeOrBrand(
          model, lessThanPrice, greaterThanPrice, displaySize,brand);
  }
}
