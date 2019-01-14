package com.sz.szdocker;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Arrays;
import java.util.List;

@RestController
@CrossOrigin("*")
public class UserListController {
    @GetMapping("users")
    List<String> getUsers() {
        return Arrays.asList("Ivan", "Elena", "Sergey", "Petya");
    }
}
