package servlet;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import model.User;

@WebServlet(urlPatterns="/producer")
public class Producer extends HttpServlet
{

	@Override
	protected void doGet(HttpServletRequest req, HttpServletResponse resp)
			throws ServletException, IOException
	{
		User user1 = new User();
		user1.setName("ken");
		user1.setAge(18);
		
		System.out.println("user: "+user1);
		
		req.getSession().setAttribute("user1", user1);
		
		req.getRequestDispatcher("/comsumer.do").forward(req,resp);
	}

}
