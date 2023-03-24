package oimarket.control.member;

import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import oimarket.model.dao.MemberDao;

/**
 * Servlet implementation class findmember
 */
@WebServlet("/findmember")
public class findmember extends HttpServlet {
	private static final long serialVersionUID = 1L;
    public findmember() {
        super();
        // TODO Auto-generated constructor stub
    }

	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
		String mid= request.getParameter("mid");
		boolean result=MemberDao.getInstance().findid(mid);
		response.getWriter().print(result);
		
	}

	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
	}

}
