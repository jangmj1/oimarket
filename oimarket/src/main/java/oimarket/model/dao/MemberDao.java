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
	
	// 2. 아이디 체크
	public boolean idcheck( String mid ) {
		String sql = "select * from member where mid = ? ";
		try {
			ps = con.prepareStatement(sql);
			ps.setString(1, mid);
			rs=ps.executeQuery();
			if(rs.next()) return true;
		}catch (Exception e) {System.out.println(e);}
		return false;
	}
}
