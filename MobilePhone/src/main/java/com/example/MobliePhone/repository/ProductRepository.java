package com.example.MobliePhone.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.MobliePhone.model.Product;



@Repository
public interface ProductRepository extends JpaRepository<Product,Integer> {
    List<Product> findByModelContainingOrPricesLessThanOrPricesGreaterThanOrDisplaysizeOrBrand(
        String model, Double pricesLessThan, Double pricesGreaterThan, String displaysize,String brand);
}
