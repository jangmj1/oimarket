package oimarket.control.board;

import java.io.IOException;
import java.util.ArrayList;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.oreilly.servlet.MultipartRequest;
import com.oreilly.servlet.multipart.DefaultFileRenamePolicy;

import oimarket.model.dao.BoardDao;
import oimarket.model.dao.MemberDao;
import oimarket.model.dto.BoardDto;


@WebServlet("/boardinfo")
public class Boardinfo extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    
    public Boardinfo() {
        super();
    
    }


	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		int type = Integer.parseInt(request.getParameter("type"));
		if(type==1) { // 게시물 전체 출력
		ArrayList<BoardDto> result = BoardDao.getInstance().getBoardList();
		ObjectMapper mapper = new ObjectMapper();
		String jsonArray = mapper.writeValueAsString(result);
		response.setCharacterEncoding("UTF-8");
		response.setContentType("application/json");
		response.getWriter().print(jsonArray);
		}else if(type==2) { // 게시물 개별 출력
			int bno = Integer.parseInt(request.getParameter("bno"));	System.out.println("bno : " + bno); // bno 입력받은 값 가져오기
			BoardDto result = BoardDao.getInstance().getBoard(bno);					// Dao에 bno넣어서 응답 값 가져오기
			// 형변환
			ObjectMapper mapper = new ObjectMapper();
			String json = mapper.writeValueAsString(result);
			// js로 반환
			response.setCharacterEncoding("UTF-8");
			response.setContentType("application/json");
			response.getWriter().print(json);
		}
	}


	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// 업로드 한 파일 저장할 서버의 경로 찾기
		String path = request.getSession().getServletContext().getRealPath("/board/bfile");
			System.out.println("path : " +path);

		MultipartRequest multi = new MultipartRequest(
				request, path , 1024*1024*10 , "UTF-8" , new DefaultFileRenamePolicy());
			System.out.println("파일복사 : " + multi);
			
		int bcno = Integer.parseInt(multi.getParameter("bcno"));	System.out.println("카테고리번호 : " +bcno);
		String btitle = multi.getParameter("btitle");				System.out.println("게시물제목 : " +btitle);
		String bcontent = multi.getParameter("bcontent");			System.out.println("게시물내용 : " +bcontent);
		String bfile = multi.getFilesystemName("bfile");			System.out.println("파일이름 : " +bfile);
		
		String mid = (String)request.getSession().getAttribute("login"); // 로그인세션에서 로그인중인 아이디 가져와서
		int mno = MemberDao.getInstance().getMno(mid);					 // MemberDao에 있는 getMno에 아이디를 넣어서 회원번호 꺼내고
		if(mno<1) {response.getWriter().print("false");}				 // 회원번호가 1보다 작으면(모든 회원번호는 1이상) 글쓰기 불가
		
		BoardDto dto = new BoardDto(btitle, bcontent, bfile, mno, bcno);
			System.out.println("Dto : " +dto);
			
		boolean result = BoardDao.getInstance().bwrite(dto);
		
		response.getWriter().print(result);
	}


	protected void doPut(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

	}


	protected void doDelete(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

	}

}
