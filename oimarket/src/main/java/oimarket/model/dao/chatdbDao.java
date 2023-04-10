package oimarket.model.dao;

import java.sql.SQLException;
import java.util.ArrayList;

import oimarket.model.dto.MessageDto;

public class chatdbDao extends Dao{
	
	private static chatdbDao dao=new chatdbDao();
	

	private chatdbDao() {
		// TODO Auto-generated constructor stub
	}


	public static chatdbDao getInstance() {
		return dao;
	}
	//[장민정] 채팅하기
	public boolean chatting(String ncontent,int pno,int frommno,int tomno) {
		String sql="insert into chat(ncontent,pno,frommno,tomno) values(?,?,?,?)";
		try {
			ps=con.prepareStatement(sql);
			ps.setString(1, ncontent);
			ps.setInt(2, pno);
			ps.setInt(3, frommno);
			ps.setInt(4, tomno);
			ps.executeUpdate();
			return true;
			
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}return false;
		
	}
	//[장민정] 채팅출력하기
	public ArrayList<MessageDto>getchat(int pno,int frommno,int tomno){
		ArrayList<MessageDto>list=new ArrayList<>();
		String sql="select * from chat where pno=? and (frommno=? or frommno=?) and (tomno=? or tomno=?);"; //지혼자 말한것도 나옴
		//String sql="select * from chat  where pno=4 and (frommno=1 or tomno=1) and (frommno=4 or tomno=4)"; 어떤걸 써야하는지잘모르겠음
		try {
			ps=con.prepareStatement(sql);
			ps.setInt(1, pno);
			ps.setInt(2, frommno );
			ps.setInt(3, tomno );
			ps.setInt(4, tomno );
			ps.setInt(5, frommno );
			rs=ps.executeQuery();
			while (rs.next()) {
				MessageDto dto=new MessageDto(
						rs.getInt(1), rs.getString(2), rs.getString(3),
						rs.getInt(4), rs.getInt(5), rs.getInt(6));
				list.add(dto);
			}
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}return list;
	}

	//[장민정]채팅리스트출력하기
	public ArrayList<MessageDto>getallchat(int pno,int frommno,int tomno){
		ArrayList<MessageDto>list=new ArrayList<>();
		String sql="select * from chat where pno=? and (frommno=? or frommno=?) and (tomno=? or tomno=?);";
		try {
			ps=con.prepareStatement(sql);
			ps.setInt(1, pno);
			ps.setInt(2, frommno );
			ps.setInt(3, tomno );
			ps.setInt(4, tomno );
			ps.setInt(5, frommno );
			rs=ps.executeQuery();
			while (rs.next()) {
				MessageDto dto=new MessageDto(
						rs.getInt(1), rs.getString(2), rs.getString(3),
						rs.getInt(4), rs.getInt(5), rs.getInt(6));
				list.add(dto);
			}
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}return list;
	}
}
