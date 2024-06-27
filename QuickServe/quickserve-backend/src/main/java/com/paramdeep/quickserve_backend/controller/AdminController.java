package com.paramdeep.quickserve_backend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.paramdeep.quickserve_backend.model.Admin;
import com.paramdeep.quickserve_backend.service.AdminService;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/quickserve/admin")
public class AdminController {

    @Autowired
    private AdminService adminService;

    @PostMapping("/login")
    public boolean login(@RequestBody Admin admin) {
        Admin existingAdmin = adminService.findByUsername(admin.getUsername());
        return existingAdmin != null && existingAdmin.getPassword().equals(admin.getPassword());
    }
}
