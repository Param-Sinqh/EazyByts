package com.paramdeep.quickserve_backend.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.paramdeep.quickserve_backend.model.Item;
import com.paramdeep.quickserve_backend.repository.ItemRepository;

@Service
public class ItemService {

	@Autowired
	private ItemRepository itemRepository;

	public List<Item> getAllItems() {
		return itemRepository.findAll();
	}

	public Item saveItem(Item item) {
		return itemRepository.save(item);
	}
}
