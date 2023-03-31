package oimarket.model.dao;

public class BoardDao extends Dao{
	// 게시판Dao 싱글톤
	private static BoardDao dao = new BoardDao();
	private BoardDao() {};
	public static BoardDao getInstance() {return dao;}
	
	
}
