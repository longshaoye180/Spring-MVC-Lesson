package controller;



import java.awt.image.BufferedImage;

import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import util.RandomImgUtil;


/**
 * 
 * 随机生成验证码的控制器
 * 
 * 图片大小0.9KB左右
 * 
 * 生成好验证码图片后,利用BufferedImageHttpMessageConverter,将BufferedImage转换为Http Response
 * 
 * @author Ken
 *
 */


@Controller
public class VerifyCodeController
{
	
	@RequestMapping(value="/verifyCode",produces="image/png")
	@ResponseBody
	public BufferedImage getValidateImg(HttpServletResponse resp,HttpSession session,@RequestParam(value="r") String clientId)
	{
		
		//禁用浏览器的缓存
		resp.setHeader("pragma", "no-cache");
		resp.setHeader("cache-control", "no-cache");
				
		
		//生成随机文本
		String randomStr = RandomImgUtil.createRandomString(5);
		

		//将验证码放到Session中    clientId: 客户端随机生成的ID,clientId-randomStr具有对应关系
		session.setAttribute("clientId", clientId);
		session.setAttribute("randomStr", randomStr);
		
		
		
		//将文本 转换成 图片,返回BufferedImage
		BufferedImage bfImage = RandomImgUtil.StringToImage(randomStr);
		
		
		return bfImage;
	}

}
