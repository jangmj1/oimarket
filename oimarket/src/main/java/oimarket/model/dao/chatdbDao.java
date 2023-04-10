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
	
	public ArrayList<MessageDto>getchat(int pno,int mno){
		ArrayList<MessageDto>list=new ArrayList<>();
		String sql="select * from chat where pno=? and ( tomno=? or frommno=?)";
		try {
			ps=con.prepareStatement(sql);
			ps.setInt(1, pno);
			ps.setInt(2, mno );
			ps.setInt(3, mno );
			
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
