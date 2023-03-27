package oimarket.model.dao;

import oimarket.model.dto.MemberDto;

public class memberDao extends Dao{

	private static memberDao dao = new memberDao();
	private memberDao() {}
	public static memberDao getInstance() { return dao; }

	// 4. 로그인
	public boolean login( String mid , String mpwd ) {
		String sql = "select * from member where mid = ? and mpwd = ? ";
		try {
			ps = con.prepareStatement(sql);		
			ps.setString(1, mid);
			ps.setString(2, mpwd);
			rs = ps.executeQuery(); 
			if( rs.next() ) { return true; }
		}catch (Exception e) {System.out.println(e);}
		return false;
		
	}

}

