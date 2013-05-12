package util;

import java.awt.Color;
import java.awt.Font;
import java.awt.Graphics2D;
import java.awt.image.BufferedImage;

public class RandomImgUtil
{
	//----------------------------------------------------------------
		private static java.util.Random ran = new java.util.Random();
		 
		private static int length = 5; //验证码长度
		
		//生成随机文本
		public static String createRandomString(int len)
		{
			 String str = "";
	         // a-z:97-122 //36--61
	         // A-Z:65-90 //10-35
	         // 0-9:48-57; 0--9
			 
			 for(int i=0; i<len; i++)
			 {
				 int tmp = ran.nextInt(61); //0--61
				 
				 if(tmp <= 9)
				 {
					 str += (char)(tmp+48);
				 }
				 else if(tmp <= 35)  //A--Z
				 {
					 str += (char)(tmp+55);
				 }
				 else //a--z
				 {
					 str += (char)(tmp+61);
				 }
			 }
			
			
			return str;
		}
		

		
		//默认大小
		private static int width =  120;
		
		private static int height = 40;
		
		//
		public static BufferedImage StringToImage(String str)
		{
			//创建 图片缓冲区
			BufferedImage bfImage = new BufferedImage(width,height,BufferedImage.TYPE_USHORT_555_RGB);
					
			//在图片缓冲区 创建一个画板
			Graphics2D g = bfImage.createGraphics();
			
			//设置背景色
			g.setColor(Color.WHITE);
			g.fillRect(0, 0, width, height);
			
			
			//字符颜色:紫色: 统一颜色的图片更难破解 
			g.setColor(new Color(101,101,254));
					
			//要画板上绘图
			
			//绘出逐个字符
			String tmp;
			for(int i=0; i<length; i++)
			{
				setRandomStyle(g);
				
				tmp = "";
				
				tmp += str.charAt(i);
				
				int x = width/length * i;
				
				//使y的值随机化
				int y = height- ran.nextInt(g.getFont().getSize()/3);
			
				g.drawString(tmp, x, y);

			}
			
			
			
			//添加干扰元素 10条直线或曲线
			for(int i=0; i<10; i++)
			{
				//随机起始位置
				int X = ran.nextInt(width);
				int Y = ran.nextInt(height);
				
				int X2 = ran.nextInt(width);
				int Y2 = ran.nextInt(height);
				
				g.drawLine(X, Y, X2, Y2);
				
				//int startAngle = ran.nextInt(50);
				//int arcAngle = ran.nextInt(50);
						
				
				//g.drawArc(X, Y, width, height, startAngle, arcAngle);
			}
			
			
			//析放图板资源
			g.dispose();
					
			return bfImage;
		}
		
		private static String[] fontNames = {"TimesRoman","Courier","Arial","Calibri","Cambria"};
		
		public static void setRandomStyle(Graphics2D g)
		{
			String name = fontNames[ran.nextInt(5)];
			
			//风格：三个常量 lFont.PLAIN: 0, 加粗Font.BOLD : 1, 斜体: Font.ITALIC:2 
			//3:Font.BOLD+Font.ITALIC
			int style = Font.ITALIC+ran.nextInt(2); //
			
			//字体大小范围: 图片高度的1/2--1
			int size = height/2+ran.nextInt(height/2);
			
			//设计字体显示效果 Font mf = new Font(String 字体，int 风格，int 字号);
			g.setFont(new Font(name,style,size) );	
		}
		
		//-----------------------------------------------------------------------------

}
