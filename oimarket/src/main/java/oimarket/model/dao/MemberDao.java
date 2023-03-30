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
	public boolean findmember(String mid,String type,String mphone) {
		
		if(type.equals("1")) {//만약에 타입이 1이면 즉 동일한 아이디를 찾는거면
			
			String sql="select * from member where mid =?";
			
				try {
					ps=con.prepareStatement(sql);
					ps.setString(1, mid);
					rs=ps.executeQuery();
					//같은 아이디가 있다는뜻
					if(rs.next()) {return false;}
						
				} catch (SQLException e) {
					System.out.println(e);
				}
		}else if(type.equals("2")){//만약에 타입이 2이면 즉 동일한 핸드폰 번호를 찾는거면
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
		
		}	
		
		return true;//같은 회원이 없거나 같은 번호가 없거나
		
		
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

		
		//5.아이디 찾기
		public String findid(String mname,String mphone) {
			String sql="select mid from member where mname=? and mphone=?;";
			try {
				ps=con.prepareStatement(sql);
				ps.setString(1, mname);
				ps.setString(2, mphone);
				rs=ps.executeQuery();
				if(rs.next()) {return rs.getString(1);}//찾은 아이디 주기
			} catch (Exception e) {
				System.out.println(e);
			}return "false";
		}
		
	//비밀번호찾기
		public String findpwd(String mid, String mphone,String newpwd) {
			String sql="select mno from member where mid=? and mphone=?;";
			try {
				ps=con.prepareStatement(sql);
				ps.setString(1, mid);
				ps.setString(2, mphone);
				rs=ps.executeQuery();
				if(rs.next()) {
					sql="update member set mpwd=? where mno=?";
					ps=con.prepareStatement(sql);
					ps.setString(1, newpwd);
					ps.setInt(2, rs.getInt(1));//회원번호
					int result=ps.executeUpdate();
					if(result==1) {
						return newpwd;
					}
					
					}
				
			} catch (Exception e) {
				System.out.println(e);
			}return "false";
			
		}
}
