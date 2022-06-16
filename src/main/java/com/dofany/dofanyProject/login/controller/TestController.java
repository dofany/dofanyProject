package com.dofany.dofanyProject.login.controller;


import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class TestController {

    @GetMapping("/list")
    public String test(){
        return "hello world";
    }

    @GetMapping("/list2")
    public String test2(){
        return "hello world2";
    }
}
