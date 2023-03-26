package oimarket.control.member;

import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import oimarket.model.dao.MemberDao;

/**
 * Servlet implementation class login
 */
@WebServlet("/login")
public class login extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public login() {
        super();
    }

	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
	}

	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		request.setCharacterEncoding("UTF-8");
		
		String mid=request.getParameter("mid");
		String mpwd=request.getParameter("mpwd");
		
		boolean result=MemberDao.getInstance().login(mid,mpwd);
		if(result==true) {
			request.getSession().setAttribute("login", mid);//저장 로그인 세션 만듬!
		}
		//Dao 받은 결과 전달 ajax에게 전달
		response.getWriter().print(result);
	}

}
