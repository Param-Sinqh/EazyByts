package com.paramdeep.quickserve_backend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.paramdeep.quickserve_backend.model.Order;
import com.paramdeep.quickserve_backend.service.OrderService;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/quickserve/orders")
public class OrderController {

	@Autowired
	private OrderService orderService;

	@PostMapping
	public Order placeOrder(@RequestBody Order order) {
		return orderService.saveOrder(order);
	}

	@GetMapping("/{orderId}")
	public Order getOrderStatus(@PathVariable Long orderId) {
		return orderService.getOrderById(orderId);
	}

	@GetMapping
	public List<Order> getAllOrders() {
		return orderService.getAllOrders();
	}

	@PutMapping("/{orderId}/status")
	public Order updateOrderStatus(@PathVariable Long orderId, @RequestParam int status) {
		return orderService.updateOrderStatus(orderId, status);
	}
}
