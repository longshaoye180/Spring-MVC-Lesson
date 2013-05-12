package service;

import model.User;



public interface UserService
{
	public User getUser(String username);
	
	public void register(User user);
}
