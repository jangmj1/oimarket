package oimarket.control.member;

import java.io.IOException;
import java.util.ArrayList;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.fasterxml.jackson.databind.ObjectMapper;

import oimarket.model.dao.MemberDao;
import oimarket.model.dao.MypageDao;
import oimarket.model.dto.BoardDto;
import oimarket.model.dto.ProductDto;

@WebServlet("/member/mypage")
public class Mypage extends HttpServlet {
	private static final long serialVersionUID = 1L;

    public Mypage() { super();}

	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

		// 각 type 받기 [ 1 : 등록 / 2 : 판매 / 3 : 구매 / 4 : 찜하기 / 5 : 게시물 ]
		int type = Integer.parseInt(request.getParameter("type") );
		// mypage 출력부 전부 mno 필요해서 따로 빼놓음
		int mno=MemberDao.getInstance().getMno((String)request.getSession().getAttribute("login")) ;
		
		// String result = null;
		
		// mypage 등록한 물품 출력
		if ( type == 1 ) {
			int rmno = mno ;
						
			ArrayList<ProductDto> result = MypageDao.getInstance().MypageRegisterProductList( rmno );						
			ObjectMapper mapper = new ObjectMapper();
			String jsonArray = mapper.writeValueAsString(result);
			response.setCharacterEncoding("UTF-8");
			response.setContentType("application/json");
			response.getWriter().print(jsonArray);
		}
		
		// mypage 판매한 물품 출력
		else if ( type == 2 ) {
			int rmno = mno;
			int pstate = Integer.parseInt(request.getParameter("pstate") );
						
			ArrayList<ProductDto> result = MypageDao.getInstance().MypageSellProductList( rmno , pstate );						
			ObjectMapper mapper = new ObjectMapper();
			String jsonArray = mapper.writeValueAsString(result);
			response.setCharacterEncoding("UTF-8");
			response.setContentType("application/json");
			response.getWriter().print(jsonArray);
		}
		
		// mypage 구매한 물품 출력
		else if ( type == 3 ) {
			int buymno = mno;
						
			ArrayList<ProductDto> result = MypageDao.getInstance().MypageBuyProductList( buymno );						
			ObjectMapper mapper = new ObjectMapper();
			String jsonArray = mapper.writeValueAsString(result);
			response.setCharacterEncoding("UTF-8");
			response.setContentType("application/json");
			response.getWriter().print(jsonArray);
		}
		
		// mypage 찜한 물품 출력
		else if ( type == 4 ) { 			
			ArrayList<ProductDto> result = MypageDao.getInstance().MypageLikeProductList( mno );						
			ObjectMapper mapper = new ObjectMapper();
			String jsonArray = mapper.writeValueAsString(result);
			response.setCharacterEncoding("UTF-8");
			response.setContentType("application/json");
			response.getWriter().print(jsonArray);	
		}
		
		// mypage 게시물 출력
		else if ( type == 5 ) { // 게시물 출력 start
			
			ArrayList<BoardDto> result = MypageDao.getInstance().MypageBoardList( mno );			
			ObjectMapper mapper = new ObjectMapper();
			String jsonArray = mapper.writeValueAsString(result);
			response.setCharacterEncoding("UTF-8");
			response.setContentType("application/json");
			response.getWriter().print(jsonArray);
			
		} // type : 5 , 게시물 출력 end
		
		
		
		
		
		
		
		
		
		
		
		
		
	}
	
	
	
	
	
	
	
	
	
	
	
	
	

	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

	}

}
