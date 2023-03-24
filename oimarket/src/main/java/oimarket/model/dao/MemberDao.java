package oimarket.model.dao;

import java.sql.SQLException;

import oimarket.model.dto.MemberDto;

public class MemberDao extends Dao{
	
	
	private static MemberDao dao=new MemberDao();
	
	public MemberDao() {
		// TODO Auto-generated constructor stub
	}
	
	
	
	public static MemberDao getInstance() {
		return dao;
	}

	
	//*아이디 유효성-존재하는 아이디인지 확인하기
	public boolean findid(String mid) {
		String sql="select * from member where mid =?";
		try {
			ps=con.prepareStatement(sql);
			ps.setString(1, mid);
			rs=ps.executeQuery();
			if(rs.next()) {
				//같은 아이디가 있다는뜻
				return false;
			}
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return true;//같은 아이디가 없으면
		
		
	}
	

	//회원가입하기 
	public boolean signup(MemberDto dto) {
		String sql="insert into member (mname,mid,mpwd,mresidence,mmw,mphone,mimg) value(?,?,?,?,?,?,?)";
		try {
			ps=con.prepareStatement(sql);
			ps.setString(1, dto.getMname());
			ps.setString(2, dto.getMid());
			ps.setString(3, dto.getMpwd());
			ps.setString(4, dto.getMresidence());
			ps.setString(5, dto.getMmw());
			ps.setString(6, dto.getMphone());
			ps.setString(7, dto.getMimg());
			
			ps.executeUpdate();
			return true;
			
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}return false;
	}

}
