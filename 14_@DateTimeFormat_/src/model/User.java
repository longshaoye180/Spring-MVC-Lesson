package model;

import java.util.Date;

import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.format.annotation.DateTimeFormat.ISO;

public class User
{
	private String username;
	
	private String password;
	
    @DateTimeFormat(iso=ISO.DATE)
	private Date birthdate;

	public String getUsername()
	{
		return username;
	}

	public void setUsername(String username)
	{
		this.username = username;
	}

	public String getPassword()
	{
		return password;
	}

	public void setPassword(String password)
	{
		this.password = password;
	}

	public Date getBirthdate()
	{
		return birthdate;
	}

	public void setBirthdate(Date birthdate)
	{
		this.birthdate = birthdate;
	}
	
	

}
