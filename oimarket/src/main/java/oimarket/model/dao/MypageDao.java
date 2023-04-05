package oimarket.model.dao;

import java.sql.ResultSet;
import java.util.ArrayList;

import oimarket.model.dto.BoardDto;
import oimarket.model.dto.ProductDto;

public class MypageDao extends Dao{

	private static MypageDao dao = new MypageDao();
	public MypageDao() {};
	public static MypageDao getInstance() { return dao; }
	
	// [최성아] 2. 로그인 된 회원의 판매중 물품 5개 출력
	public ArrayList<ProductDto> MypageSellProductList( int rmno , int pstate , int pno ){
		ArrayList<ProductDto> list = new ArrayList<>();
		String sql = "select p.pno, p.pcno , p.ptitle , p.pprice , p.pdate from product p  where rmno = ? and pstate = ?  order by pdate desc limit 5 ";
			
			try {
				ps = con.prepareStatement(sql);
				ps.setInt(1, rmno);
				ps.setInt(2, pstate);
				rs = ps.executeQuery();
				while ( rs.next() ) {
					ProductDto dto = new ProductDto(
							rs.getInt(1), rs.getInt(2), 
							rs.getString(3), rs.getInt(4), rs.getString(5) );
					
					sql = "select * from product_img where pno = ? limit 1";
					ps = con.prepareStatement(sql);
					ps.setInt(1, rs.getInt(1));
					ResultSet rs2 = ps.executeQuery();
					if ( rs2.next() ) { dto.setMainImg(rs2.getString(2) );
					list.add(dto);
				}
			}
		}catch (Exception e) {System.out.println(e);}
		return list;
		
	} // 판매중 물품 end
	
	
	// [최성아] 5. 로그인 된 회원의 게시물 5개까지 출력
	public ArrayList<BoardDto> MypageBoardList(int mno){
		ArrayList<BoardDto> list = new ArrayList<>();
		String sql = "select b.bcno , b.btitle , b.bdate , b.bview , b.bup , b.bdown "
				+ " from board b where bdate between  '20230301'  and '20230430' and mno = ? order by bdate desc limit 5;";
		try {
			ps = con.prepareStatement(sql);
			ps.setInt(1, mno); 
			rs = ps.executeQuery();
			while( rs.next() ) {
				BoardDto dto = new BoardDto(
						rs.getInt(1), rs.getString(2), rs.getString(3), 
						rs.getInt(4), rs.getInt(5), rs.getInt(6) );
				list.add(dto);						
			}
			return list;
		}catch (Exception e) {System.out.println(e);}
		return null;
	}// 게시물 출력 end
	
	
}
