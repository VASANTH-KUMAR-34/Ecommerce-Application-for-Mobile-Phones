package com.example.MobliePhone.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String brand;
    private String model;
    private String ram;
    private String displaysize;
    private double prices;

    public Product(){}
    public Product(Integer id,String brand,String model,String ram,String displaysize,double prices){
        super();
        this.brand=brand;
        this.model=model;
        this.displaysize=displaysize;
        this.id=id;
        this.ram=ram;
        this.prices=prices;
    }
    public int getId() {
        return id;
    }
    public void setId(int id) {
        this.id = id;
    }
    public String getBrand() {
        return brand;
    }
    public void setBrand(String brand) {
        this.brand = brand;
    }
    public String getModel() {
        return model;
    }
    public void setModel(String model) {
        this.model = model;
    }
    public String getRam() {
        return ram;
    }
    public void setRam(String ram) {
        this.ram = ram;
    }
    public String getDisplaysize() {
        return displaysize;
    }
    public void setDisplaysize(String displaysize) {
        this.displaysize = displaysize;
    }
    public double getPrices() {
        return prices;
    }
    public void setPrices(double prices) {
        this.prices = prices;
    }

    
}
