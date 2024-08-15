package com.example.MobliePhone.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.MobliePhone.model.User;
import com.example.MobliePhone.services.UserImpl;

@RestController
@RequestMapping("/api/user")
public class UserController {
    @Autowired
    UserImpl userImpl;

        @PostMapping("/register")
    public String add(@RequestBody User user){
            userImpl.saveUser(user);
            return "new"+" "+user.getRole()+" "+"is add";
    }
     
}
