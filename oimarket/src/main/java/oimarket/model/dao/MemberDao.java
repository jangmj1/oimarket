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

	
	//*아이디 중복확인(회원가입용)
	public boolean idCheck(String mid) {
			String sql="select * from member where mid =?";
			
			try {
				ps=con.prepareStatement(sql);
				ps.setString(1, mid);
				rs=ps.executeQuery();
				//같은 아이디가 있다는뜻
				if(rs.next()) {return false;}
				
			} catch (SQLException e) {
				System.out.println(e);
			}return false;
		}
	
	//*존재하는 핸드폰 확인하기(회원가입용)
	public boolean findphone(String mphone) {
		
		
		String sql="select * from member where mphone =?";
		
		try {
			ps=con.prepareStatement(sql);
			ps.setString(1, mphone);
			rs=ps.executeQuery();
			
			//같은 핸드폰번호가가 있다는뜻
			if(rs.next()) {return false;}
		} catch (SQLException e) {
			System.out.println(e);
		}
		return true;//같은 핸드폰 번호가 없으니 등록가능한 핸드폰번호
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
			System.out.println(e);
		}return false;
	}

	
//----------------------------------------------------------------------------------------------------//
	
	//*비밀번호 찾기,변경--연습용
	public String findpwd(String mid,String mphone,String newpwd) {
							
			String sql="select mno from member where mid =? and mphone=?";
			
			try {
				ps=con.prepareStatement(sql);
				ps.setString(1, mid);
				ps.setString(2, mphone);
				rs=ps.executeQuery();
				//만약에 존재하면 비밀번호를 알려주는게 아니라 변경한다
				if(rs.next()) {
					sql="update member set mpwd=? where mno=?";
					ps=con.prepareStatement(sql);
					ps.setString(1, newpwd);
					ps.setInt(2, rs.getInt(1));
					ps.executeUpdate();
					return newpwd;
							
					}
				
			} catch (SQLException e) {
				System.out.println(e);
			}return null;
			
		}
	
		

	
	
	//*아이디찾기--연습용
	public String findId(String mname, String mphone) {
		

		String sql="select mid from member where mphone =? and mname=?";
		
			try {
				ps=con.prepareStatement(sql);
				ps.setString(1, mphone);
				ps.setString(2, mname);
				rs=ps.executeQuery();
				
				
				if(rs.next()) {return rs.getString(1);}
			} catch (SQLException e) {
				System.out.println(e);
			}
			return null;
	}
	
	//로그인하기--연습용
	public boolean Login(String mid , String mpwd) {
	 String	sql="select * from member where mid =? and mpwd=?";
		try {
			ps=con.prepareStatement(sql);
			ps.setString(1, mid);
			ps.setString(2, mpwd);
			rs=ps.executeQuery();
			if(rs.next() ){return true;}
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}return false;
		
	}
	
	
	
	

}
