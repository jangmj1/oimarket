package oimarket.model.dao;

import oimarket.model.dto.MemberDto;

public class memberDao extends Dao{

	private static memberDao dao = new memberDao();
	private memberDao() {}
	public static memberDao getInstance() { return dao; }
	
	// 1. 회원가입
	public boolean signup ( MemberDto dto ) {
		String sql = "insert into member ( mname , mid , mpwd , mresidence ,  mmw , mphone , mimg ) values ( ? , ? , ? , ? , ? , ? , ? )";
		try {
			ps = con.prepareStatement(sql);
			ps.setString(1, dto.getMname() );
			ps.setString(2, dto.getMid() );
			ps.setString(3, dto.getMpwd() );
			ps.setString(4, dto.getMresidence() );
			ps.setString(5, dto.getMmw() );
			ps.setString(6, dto.getMphone() );
			ps.setString(7, dto.getMimg() );
			ps.executeUpdate(); return true;
		}catch (Exception e) {System.out.println(e);}
		return false;
	}
	
	// 2. 아이디 중복 검사
	public boolean idcheck( String mid ) {
		String sql = "select * from member where mid = '"+mid+"' ";
		try {
			ps = con.prepareStatement(sql);
			rs = ps.executeQuery();
			if ( rs.next() ) { return true; } // 아이디 중복이면 true
		}catch (Exception e) {System.out.println(e);}
		return false; // 아이디 중복 아니면 false
	}
	
	// 3. 번호 중복 검사
	public boolean phonecheck( String mphone ) {
		String sql = "select * from member where mphone = '"+mphone+"' ";
		try {
			ps = con.prepareStatement(sql);
			rs = ps.executeQuery();
			if ( rs.next() ) { return true; } // 아이디 중복이면 true
		}catch (Exception e) {System.out.println(e);}
		return false; // 아이디 중복 아니면 false
	}	
	
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
	
	// 5. 아이디 찾기
	public String findid ( String mname , String mphone ) {
		String sql = "select mid from member where mname = ? and mphone = ? ";
		try {
			ps = con.prepareStatement(sql);
			ps.setString(1, mname);
			ps.setString(2, mphone);
			rs = ps.executeQuery();
			if (rs.next() ) { return rs.getString(1); }
		}catch (Exception e) {System.out.println("아이디찾기 오류 : " + e );}
		return "false";
	}
	
	// 6. 비밀번호 찾기
	public String findpwd ( String mid , String mphone , String updatePwd ) {
		String sql = "select mno from member where mid = ? and mphone = ? ";
		try {
			ps = con.prepareStatement(sql);
			ps.setString(1, mid);
			ps.setString(2, mphone);
			rs = ps.executeQuery();
			if ( rs.next() ) {
				sql = "update member set mpwd = ? where mno = ? ";
				ps = con.prepareStatement(sql);
				ps.setString(1, updatePwd);
				ps.setInt(2, rs.getInt(1) );
				int result = ps.executeUpdate();
				if ( result == 1 ) { return updatePwd; }
			}
		}catch (Exception e) {System.out.println("비밀번호찾기 오류 : " + e );}
		return "false";
	}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
}

