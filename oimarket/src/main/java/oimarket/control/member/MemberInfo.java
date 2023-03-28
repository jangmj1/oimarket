package oimarket.control.member;

import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.oreilly.servlet.MultipartRequest;
import com.oreilly.servlet.multipart.DefaultFileRenamePolicy;

import oimarket.model.dao.memberDao;
import oimarket.model.dto.MemberDto;

@WebServlet("/member/info")
public class MemberInfo extends HttpServlet {
	private static final long serialVersionUID = 1L;

    public MemberInfo() { super();}

	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

	}

	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		String path = request.getSession().getServletContext().getRealPath("/img");
		
		MultipartRequest multi = new MultipartRequest(
				request, path , 1024*1024*10 , "UTF-8" , new DefaultFileRenamePolicy() );
		
		String mname = multi.getParameter("mname");
		String mid = multi.getParameter("mid");
		String mpwd = multi.getParameter("mpwd");
		String mresidence = multi.getParameter("mresidence");
		String mmw = multi.getParameter("mmw");
		String mphone = multi.getParameter("mphone") ;
		String mimg = multi.getFilesystemName("mimg");
				
		response.setCharacterEncoding("UTF-8");			// 응답 데이터 한글 인코딩 
		
		MemberDto dto = new MemberDto(mname, mid, mpwd, mresidence, mmw, mphone, mimg);
		boolean result = memberDao.getInstance().signup(dto);
		response.getWriter().print(result);
	}

	
	protected void doPut(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

	}

	protected void doDelete(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

	}

}
