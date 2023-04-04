package oimarket.model.dao;

import java.util.ArrayList;

import oimarket.model.dto.BoardDto;

public class BoardDao extends Dao{
	// 게시판Dao 싱글톤
	private static BoardDao dao = new BoardDao();
	private BoardDao() {};
	public static BoardDao getInstance() {return dao;}
	
	// [김동혁] 게시물 글 쓰기
	public boolean bwrite(BoardDto dto) {
		String sql = "insert into board(btitle , bcontent , bfile , mno , bcno)values(?,?,?,?,?)";
		try {
			ps = con.prepareStatement(sql);
			ps.setString(1, dto.getBtitle());	ps.setString(2, dto.getBcontent());
			ps.setString(3, dto.getBfile());	ps.setInt(4, dto.getMno());
			ps.setInt(5, dto.getBcno());
			ps.executeUpdate(); return true;
		}catch (Exception e) {System.out.println(e);} return false;
	}
	
	// [김동혁] 전체게시글 출력
	public ArrayList<BoardDto> getBoardList(String key , String keyword){
		ArrayList<BoardDto> list = new ArrayList<>();
		String sql = "";
		if( key.equals("") && keyword.equals("")) {
			sql = "select board.* , member.mid from member natural join board";
		}else {
			sql = "select board.* , member.mid from member natural join board where "+key+" like '%"+keyword+"%' order by board.bdate desc";
		}
		try {
			ps=con.prepareStatement(sql);
			rs=ps.executeQuery();
			while(rs.next()) {
				BoardDto dto = new BoardDto(
						rs.getInt(1), rs.getString(2), rs.getString(3),
						rs.getString(4), rs.getString(5), rs.getInt(6),
						rs.getInt(7), rs.getInt(8), rs.getInt(9),
						rs.getInt(10), rs.getString(11));
				list.add(dto);
			}
		}catch (Exception e) {System.out.println(e);}
		return list;
	}
	
	// [김동혁] 개별 게시글 출력
	public BoardDto getBoard( int bno ) {	// 게시물 1개 출력이니까 dto리스트가 아닌 dto를 출력
		String sql ="select board.* , member.mid , member.mimg from board natural join member where board.bno =?";
		try {
			ps = con.prepareStatement(sql);
			ps.setInt(1, bno); rs = ps.executeQuery();
			if(rs.next()) {BoardDto dto = new BoardDto(
					rs.getInt(1), rs.getString(2), rs.getString(3),
					rs.getString(4), rs.getString(5), rs.getInt(6),
					rs.getInt(7), rs.getInt(8), rs.getInt(9),
					rs.getInt(10), rs.getString(11));
			return dto;
			}
		}catch (Exception e) {System.out.println(e);} return null;
	}
}

		