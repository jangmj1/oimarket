package oimarket.model.dao;

import java.util.ArrayList;

import oimarket.model.dto.MemberDto;


public class MemberDao extends Dao{

	private static MemberDao mDao =new MemberDao();
	private MemberDao() {}
	public static MemberDao getInstance(){return mDao;}
	
	
	//1.등록
		public boolean register(MemberDto dto) {
			String sql="insert into member(mname,mid,mpwd,mresidence,memail,mmw,mphone,mimg)values(?,?,?,?,?,?,?,?)";
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
	//2.출력
		public ArrayList<MemberDto> print(){
			ArrayList<MemberDto>list =new ArrayList<>();
			String sql="select*from member";
			try {
				ps=con.prepareStatement(sql);
				rs=ps.executeQuery();
				while(rs.next()) {
					MemberDto dto=new MemberDto(
							rs.getInt(1), rs.getString(2), rs.getString(3), 
							rs.getString(4), rs.getString(5), rs.getString(6),
							rs.getString(7), rs.getString(8), rs.getString(9));
					list.add(dto);
				}
			} catch (Exception e) {
				System.out.println(e);
			}return list;
			
		}
	
		//3.아이디 중복검사
		 public boolean idcheck()
		
		
		
}
