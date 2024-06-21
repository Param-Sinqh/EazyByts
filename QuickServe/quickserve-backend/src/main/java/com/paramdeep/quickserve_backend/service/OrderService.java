package com.paramdeep.quickserve_backend.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.paramdeep.quickserve_backend.model.Order;
import com.paramdeep.quickserve_backend.repository.OrderRepository;

@Service
public class OrderService {

	@Autowired
	private OrderRepository orderRepository;

	public List<Order> getAllOrders() {
		return orderRepository.findAll();
	}

	public Order saveOrder(Order order) {
		return orderRepository.save(order);
	}
}