package oimarket.control.board;

import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;


@WebServlet("/boardinfo")
public class Boardinfo extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    
    public Boardinfo() {
        super();
    
    }


	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
	
	}


	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// 업로드 한 파일 저장할 서버의 경로 찾기
		String path = request.getSession().getServletContext().getRealPath("/board/bfile");
			System.out.println("path : " +path);
		// 파일 복사 [ 대용량 바이트 복사하기 ]
			
	}


	protected void doPut(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

	}


	protected void doDelete(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

	}

}
