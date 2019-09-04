package com.cinephilia.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import com.cinephilia.dto.UserDTO;
import com.cinephilia.service.UserService;


@RestController
@CrossOrigin
public class UserController {
	
	@Autowired
	
	private UserService userService ;

	@PostMapping(path = "/signup", produces = MediaType.APPLICATION_JSON_VALUE)
	public @ResponseBody UserDTO createUser(@RequestBody UserDTO newUser) {
		return userService.createUser(newUser);
	}
	
	@GetMapping(path = "/admin/users", produces = MediaType.APPLICATION_JSON_VALUE)
	public @ResponseBody List <UserDTO> findAllUsersDtos () {
		return userService.getAllUsers();
	}

	@GetMapping(path = "/signup/{mail}", produces = MediaType.APPLICATION_JSON_VALUE)
	public @ResponseBody boolean checkUserExist (@PathVariable String mail) {
		return userService.checkUserExist(mail);
	}

	@PostMapping(path = "/user/update", produces = MediaType.APPLICATION_JSON_VALUE)
	public @ResponseBody UserDTO updateUser(@RequestBody UserDTO newUser) {
		return userService.updateUser(newUser);
	}

	@GetMapping(path = "/user/{mail}", produces = MediaType.APPLICATION_JSON_VALUE)
	public @ResponseBody UserDTO  getUserByEmail (@PathVariable String mail) {
		return userService.getUserByEmail(mail);
	}


	@GetMapping(path = "/users", produces = MediaType.APPLICATION_JSON_VALUE)
	public @ResponseBody List <UserDTO>  getAllUsers () {
		return userService.getAllUsers();
	}


	@DeleteMapping(path = "/delete/{email}", produces = MediaType.APPLICATION_JSON_VALUE)
		public @ResponseBody String deleteUserByEmail(@PathVariable String email) {

		userService.deleteUserByEmail(email);

		return "User is deleted successfully";

	}

}
