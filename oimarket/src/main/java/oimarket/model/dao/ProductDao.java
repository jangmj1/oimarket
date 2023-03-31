package oimarket.model.dao;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;

import oimarket.model.dto.ProductDto;

public class ProductDao extends Dao{
	
	
	private static ProductDao dao=new ProductDao();
	

	private ProductDao() {
		// TODO Auto-generated constructor stub
	}


	public static ProductDao getInstance() {
		return dao;
	}
	
	
	//물품출력
	  public ArrayList<ProductDto> getproduct(){
		 ArrayList<ProductDto>list=new ArrayList<>(); 
		  String sql="select pno,ptitle,pcontent,pprice,pdate from product";
		  try {
			ps=con.prepareStatement(sql);
			rs=ps.executeQuery();
			while (rs.next()) {
				ArrayList<String>pimglist=new ArrayList<>();
				sql="select * from product_img where pno=?";
				ps=con.prepareStatement(sql);
				ps.setInt(1, rs.getInt(1));
				ResultSet rs2=ps.executeQuery();
				while (rs2.next()){
					pimglist.add(rs2.getString(2));
				}
			ProductDto dto=new ProductDto(
					rs.getInt(1), rs.getString(2), rs.getString(3),
					rs.getInt(4), rs.getString(5), pimglist);
				list.add(dto);
			}
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			System.out.println(e);
		}return list;
	 }
	 
	
	
	
	
}
;