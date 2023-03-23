package oimarket.control.member;

import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import oimarket.model.dao.memberDao;

@WebServlet("/member/mconfirm1")
public class Mconfirm1 extends HttpServlet {
	private static final long serialVersionUID = 1L;

    public Mconfirm1() { super(); }

    
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

		String mid = request.getParameter("mid");
		boolean result = memberDao.getInstance().idcheck(mid);
		response.getWriter().print(result);
		
	}

	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

	}

}
