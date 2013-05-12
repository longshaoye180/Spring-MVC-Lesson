package service.impl;

import java.sql.ResultSet;
import java.sql.SQLException;


import model.User;


import service.UserService;
import util.JDBC;



public class UserServiceImpl implements UserService
{
	JDBC conn = new JDBC();
	ResultSet rs = null;
	
	@Override
	public User getUser(String username)
	{
		
		String sql = "select * from users where username = '"+username+"'";
		
		rs = conn.executeQuery(sql);
		
		User user = null;
		
		try {
		
			if(rs.next())
			{
				user = new User();
				user.setUsername(rs.getString(1));
				user.setPassword(rs.getString(2));
				
			}
	
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
		
		return user;
	}

	
	@Override
	public void register(User user) 
	{
	
		String sql = "insert into users values('"+user.getUsername()+"','"+user.getPassword()+"')";
		
		conn.excuteUpdate(sql);
		conn.close();
	
	}


}
