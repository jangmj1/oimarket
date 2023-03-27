package oimarket.control.member;

import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.fasterxml.jackson.databind.ObjectMapper;

import oimarket.model.dao.memberDao;
import oimarket.model.dto.MemberDto;

@WebServlet("/login")
public class Login extends HttpServlet {
	private static final long serialVersionUID = 1L;

    public Login() { super(); }

    // [최성아] 로그인 성공 후 정보 호출
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
		String mid = (String)request.getSession().getAttribute("login");
				
		MemberDto result = memberDao.getInstance().getMember( mid );
		ObjectMapper mapper = new ObjectMapper();
		String json = mapper.writeValueAsString(result);
		
		response.setCharacterEncoding("UTF-8");
		response.setContentType("application/json");
		response.getWriter().print(json);
		
		
	}
	// [최성아] 로그인 성공 여부 체크
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		String mid = request.getParameter("mid");
		String mpwd = request.getParameter("mpwd");
				
		boolean result = memberDao.getInstance().login( mid , mpwd );
		
		System.out.println(result);
		
		if (result == true) {
			request.getSession().setAttribute("login", mid);
		}
		response.getWriter().print(result);}


	protected void doPut(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

	}


	protected void doDelete(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		String mid = (String)request.getSession().getAttribute("login");
		String mpwd = request.getParameter("mpwd");
		
		boolean result = memberDao.getInstance().delete(mid, mpwd);
		response.getWriter().print(result);
		
	}

}
