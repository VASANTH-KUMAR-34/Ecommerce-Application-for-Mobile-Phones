package com.example.MobliePhone.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.MobliePhone.model.Product;
import com.example.MobliePhone.services.ProductImpl;

@RestController
@RequestMapping("/api")
public class ProductController {
    @Autowired
    ProductImpl productImpl;

    @PostMapping("/admin/product/add")
    public Product add(@RequestBody Product product){
        Product data= productImpl.save(product);
        return data;
    }
    
    @GetMapping("/search")
    public List<Product> searchProduct(
            @RequestParam(required = false) String model,
            @RequestParam(required = false) Double pricesLessThan,
            @RequestParam(required = false) Double pricesGreaterThan,
            @RequestParam(required = false) String displaysize,
            @RequestParam(required = false) String brand) {

        return productImpl.searchProducts(model, pricesLessThan, pricesGreaterThan, displaysize,brand);
    }
  }
