package oimarket.model.dao;

import java.util.ArrayList;

import oimarket.model.dto.MemberDto;


public class MemberDao extends Dao{

	private static MemberDao mDao =new MemberDao();
	private MemberDao() {}
	public static MemberDao getInstance(){return mDao;}
	
	
	//1.등록
		public boolean register(MemberDto dto) {
			String sql="insert into member(mname,mid,mpwd,mresidence,mmw,mphone,mimg)values(?,?,?,?,?,?,?)";
			try {
				ps=con.prepareStatement(sql);
				ps.setString(1,dto.getMname());
				ps.setString(2,dto.getMid() );
				ps.setString(3,dto.getMpwd() );
				ps.setString(4,dto.getMresidence() );
				
				ps.setString(5,dto.getMmw() );
				ps.setString(6,dto.getMphone() );
				ps.setString(7,dto.getMimg() );
				ps.executeUpdate(); return true;
				
			} catch (Exception e) {
				System.out.println(e);
			}return false;
			
		}
		
		/* 
		//2.출력
		public ArrayList<MemberDto> print(){ ArrayList<MemberDto>list =new
			ArrayList<>(); String sql="select*from member"; try {
		  ps=con.prepareStatement(sql); rs=ps.executeQuery(); while(rs.next()) {
		  MemberDto dto=new MemberDto( rs.getInt(1), rs.getString(2), rs.getString(3),
		  rs.getString(4), rs.getString(5), rs.getString(6), rs.getString(7),
		  rs.getString(8), rs.getString(9)); list.add(dto); } } catch (Exception e) {
		 System.out.println(e); }return list;
		 
		  }
		 
		*/
		
		//3.아이디 중복검사 
		public boolean idcheck(String mid) {
		  
		  String sql="select*from member where mid=?"; try {
		  ps=con.prepareStatement(sql); ps.setString(1, mid); rs=ps.executeQuery();
		  if(rs.next()) {return true;}
		  
		  } catch (Exception e) { System.out.println(e); }return false;//없으면 중복아이디 없음 
		  }
		 
		//4.로그인
		public boolean login(String mid, String mpwd) {
			String sql="select*from member where mid=? and mpwd=?";
			//아이디와 비밀번호를 입력하면 멤머가 나온다(있으면=즉,회원이라면)
			try {
				ps=con.prepareStatement(sql);
				ps.setString(1, mid);
				ps.setString(2, mpwd);
				rs=ps.executeQuery();
				if(rs.next()) {return true;}
			} catch (Exception e) {
				System.out.println(e);
			}return false;
		}
		
}
