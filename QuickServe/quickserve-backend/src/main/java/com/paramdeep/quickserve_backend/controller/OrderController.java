package com.paramdeep.quickserve_backend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.paramdeep.quickserve_backend.model.Order;
import com.paramdeep.quickserve_backend.service.OrderService;

@RestController
@RequestMapping("/quickserve/orders")
public class OrderController {

	@Autowired
	private OrderService orderService;

	@PostMapping
	public Order placeOrder(@RequestBody Order order) {
		return orderService.saveOrder(order);
	}
}