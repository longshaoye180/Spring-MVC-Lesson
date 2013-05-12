package com.cscw.view.excel;

import java.util.Date;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.poi.hssf.usermodel.HSSFCell;
import org.apache.poi.hssf.usermodel.HSSFCellStyle;
import org.apache.poi.hssf.usermodel.HSSFDataFormat;
import org.apache.poi.hssf.usermodel.HSSFRow;
import org.apache.poi.hssf.usermodel.HSSFSheet;
import org.apache.poi.hssf.usermodel.HSSFWorkbook;

import org.springframework.web.servlet.view.document.AbstractExcelView;

public class MyExcelView extends AbstractExcelView {

	@Override
	 protected void buildExcelDocument(
		     Map<String, Object> model, HSSFWorkbook workbook,
		     HttpServletRequest request, HttpServletResponse response) 
	{

		   // Go to the first sheet.
		   // getSheetAt: only if workbook is created from an existing document
		 	 // HSSFSheet sheet = workbook.getSheetAt(0);
		 	HSSFSheet sheet = workbook.createSheet("Spring");
		 	sheet.setDefaultColumnWidth(12);

		   // Write a text at A1.
		   HSSFCell cell = getCell(sheet, 0, 0);
		   setText(cell, "Spring POI test");

		   // Write the current date at A2.
		   HSSFCellStyle dateStyle = workbook.createCellStyle();
		   dateStyle.setDataFormat(HSSFDataFormat.getBuiltinFormat("m/d/yy"));
		   cell = getCell(sheet, 1, 0);
		   cell.setCellValue(new Date());
		   cell.setCellStyle(dateStyle);

		   // Write a number at A3
		   getCell(sheet, 2, 0).setCellValue(458);

		   // Write a range of numbers.
		   HSSFRow sheetRow = sheet.createRow(3);
		   for (short i = 0; i < 10; i++) {
		     sheetRow.createCell(i).setCellValue(i * 10);
		   }
		 }

}
