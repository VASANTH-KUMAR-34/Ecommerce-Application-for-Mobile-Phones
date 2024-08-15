package com.example.MobliePhone.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.MobliePhone.model.User;
import com.example.MobliePhone.repository.UserRepository;

@Service
public class UserImpl implements UserServices {
    @Autowired
    UserRepository userRepository;

    @Override
    public User saveUser(User user) {
      return userRepository.save(user);
    }
   
}
