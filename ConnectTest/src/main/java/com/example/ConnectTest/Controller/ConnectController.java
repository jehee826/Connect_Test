package com.example.ConnectTest.Controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api")
public class ConnectController {

    @GetMapping("/hello")
    public Map<String, Object> hello() {
        Map<String, Object> response = new HashMap<>();
        response.put("message", "스프링에서 보낸 데이터입니다!");
        response.put("test", 1);
        return response;
    }
}


