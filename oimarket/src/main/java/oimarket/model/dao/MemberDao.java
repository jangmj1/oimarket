package oimarket.model.dao;

import oimarket.model.dto.MemberDto;

public class MemberDao extends Dao{
	private static MemberDao dao = new MemberDao();
	private MemberDao() {}
	public static MemberDao getInstance() {return dao;}

	// 1. 회원가입
	public boolean signup(MemberDto dto) {
		String sql = "insert into member(mname , mid , mpwd , mresidence , mmw , mphone , mimg) values(?,?,?,?,?,?,?)";
		try {
			ps = con.prepareStatement(sql);
			ps.setString(1, dto.getMname());	ps.setString(2, dto.getMid());
			ps.setString(3, dto.getMpwd());		ps.setString(4, dto.getMresidence());
			ps.setString(5, dto.getMmw());		ps.setString(6, dto.getMphone());	ps.setString(7, dto.getMimg());
			ps.executeUpdate();
			return true;
		}catch (Exception e) {System.out.println(e);}
		return false;
	}
	
	// 2. 중복 체크
	public boolean membercheck( String mid , String type , String mphone) {
		if(type.equals("1")) {	// 만약 타입이 1번이면
			String sql = "select * from member where mid = ? "; // 아이디 같은놈 있나 찾아보기
			try {
				ps = con.prepareStatement(sql);
				ps.setString(1, mid);
				rs=ps.executeQuery();
				if(rs.next()) return false;
			}catch (Exception e) {System.out.println(e);}
		}else if(type.equals("2")){	// 만약 타입이 2번이면
			String sql = "select * from member where mphone = ? ";	// 전번 같은놈 있나 찾아보기
			try {
				ps = con.prepareStatement(sql);
				ps.setString(1, mid);	ps.setString(2, type);	ps.setString(3, mphone);
				rs = ps.executeQuery();
				if(rs.next()) return false;
			}catch (Exception e) {System.out.println(e);}
		}
		return true;
	}
	
	// 3. 로그인
	public boolean login(String mid , String mpwd) {
		String sql = "select * from member where mid = ? and mpwd = ?";
		try {
			ps = con.prepareStatement(sql);
			ps.setString(1, mid);	ps.setString(2, mpwd);
			rs= ps.executeQuery();
			if(rs.next()) {return true;}
		}catch (Exception e) {System.out.println(e);}
		return false;
	}
		
}









