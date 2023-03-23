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



	public boolean signup(MemberDto dto) {
		String sql="insert into member (mname,mid,mpwd,mresidence,memail,mmw,mphone,mimg) value(?,?,?,?,?,?,?,?)";
		try {
			ps=con.prepareStatement(sql);
			ps.setString(1, dto.getMname());
			ps.setString(2, dto.getMid());
			ps.setString(3, dto.getMpwd());
			ps.setString(4, dto.getMresidence());
			ps.setString(5, dto.getMemail());
			ps.setString(6, dto.getMmw());
			ps.setString(7, dto.getMphone());
			ps.setString(8, dto.getMimg());
			
			ps.executeUpdate();
			return true;
			
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}return false;
	}

}
