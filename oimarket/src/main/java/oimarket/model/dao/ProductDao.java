package oimarket.model.dao;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;

import oimarket.model.dto.MemberDto;
import oimarket.model.dto.ProductDto;

public class ProductDao extends Dao{
	
	
	private static ProductDao dao=new ProductDao();
	

	private ProductDao() {
		// TODO Auto-generated constructor stub
	}


	public static ProductDao getInstance() {
		return dao;
	}
	
	//물픔등록
	public  boolean productPrint(ProductDto dto) {//제품 우선등록하고 이미지는 나중에 추가
		String sql="insert into product(ptitle,pcontent,pprice,plat,plng,rmno,pcno) values(?,?,?,?,?,?,?)";
		try {
			ps=con.prepareStatement(sql,Statement.RETURN_GENERATED_KEYS);
			ps.setString(1, dto.getPtitle());
			ps.setString(2, dto.getPcontent());
			ps.setInt(3, dto.getPprice());
			ps.setString(4, dto.getPlat());
			ps.setString(5, dto.getPlng());
			ps.setInt(6, dto.getRmno());
			ps.setInt(7, dto.getPcno());
			ps.executeUpdate();
			//제품우선 등록한 후에 pk번호를 받음
			rs=ps.getGeneratedKeys();
			if(rs.next()) {//존재하면 productdto내에 리스트에서 하나씩 ?//물어보기 
				for(String pimgname: dto.getPimglist()) {
					
					sql="insert into product_img(pimgname,pno) values(?,?) ";
					ps=con.prepareStatement(sql);
					ps.setString(1, pimgname);
					ps.setInt(2, rs.getInt(1));
					ps.executeUpdate();
				}
			}return true;
		} catch (Exception e) {
			System.out.println(e);
		}return false;
	}
	
	
	
	
	
	
	
	
	
	
	
	
	
	//등록된 물품전체출력
	  public ArrayList<ProductDto> getproductlist(){
		 ArrayList<ProductDto>list=new ArrayList<>(); 
		  String sql="select pno,ptitle,pcontent,pprice,pdate,c.* from product natural join product_category c ";
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
					rs.getInt(4), rs.getString(5), rs.getInt(6), pimglist, rs.getString(7));
					
				list.add(dto); 
			}
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			System.out.println(e);
		}return list;
	 }
	 
	 //개별출력:판매상품 pk번호로 판매자의 정보를 호출하는 함수
	  public MemberDto getproduct(int pno) {
		 
		  String sql="select m.*  from product p natural join member m  where pno=?  and p.rmno=m.mno;";
		  try {
			ps=con.prepareStatement(sql);
			ps.setInt(1, pno);
			rs=ps.executeQuery();
			if(rs.next()) {
				MemberDto dto=new MemberDto(
						rs.getInt(1), rs.getString(2), rs.getString(3),
						rs.getString(5), rs.getString(6), rs.getString(7), rs.getString(8));
				return dto;
			}
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return null;
		
		  
	  }
	
	
	
	
}
;