package com.devsuperior.dsvendas.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.devsuperior.dsvendas.SellerDTO;
import com.devsuperior.dsvendas.services.SellerService;

@RestController
@RequestMapping(value = "/sellers")
public class SellerController {
	@Autowired
	private SellerService service;
	@GetMapping
	public ResponseEntity<List<SellerDTO>> findall(){
		List<SellerDTO> List = service.findall();
		return ResponseEntity.ok(List);
	}

}
