package oimarket.model.dao;

import java.util.ArrayList;

public class ProductDao extends Dao{
	
	
	private static ProductDao dao=new ProductDao();
	

	private ProductDao() {
		// TODO Auto-generated constructor stub
	}


	public static ProductDao getInstance() {
		return dao;
	}
	
	
	//물품출력
	/*
	 * public ArrayList<ProductDao> getproduct(){
	 * 
	 * }
	 */
	
	
	
	
}
