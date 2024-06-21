package com.paramdeep.quickserve_backend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.paramdeep.quickserve_backend.model.Item;
import com.paramdeep.quickserve_backend.service.ItemService;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/quickserve/items")
public class ItemController {

	@Autowired
	private ItemService itemService;

	@GetMapping
	public List<Item> getItems() {
		return itemService.getAllItems();
	}

	@PostMapping
	public Item createItem(@RequestBody Item item) {
		return itemService.saveItem(item);
	}
}