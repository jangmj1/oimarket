package oimarket.control.member;

import java.io.IOException;
import java.util.Random;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import oimarket.model.dao.memberDao;

@WebServlet("/find")
public class Find extends HttpServlet {
	private static final long serialVersionUID = 1L;

    public Find() {super();}
    
    // [최성아] 아이디찾기 type : 1 / 비밀번호찾기 type : 2
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

		String type = request.getParameter("type");
		String result = null;
		if ( type.equals("1") ) {
			String mname = request.getParameter("mname");
			String mphone = request.getParameter("mphone");
			result = memberDao.getInstance().findid( mname , mphone );
		} else if ( type.equals("2") ) {
			String mid = request.getParameter("mid");
			String mphone = request.getParameter("mphone");
						
			Random random = new Random();
			String randomPwd = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
			
			String updatePwd = "";
			for ( int i = 0 ; i<12; i++ ) {
				int ran = random.nextInt( randomPwd.length() );
				updatePwd += randomPwd.charAt( ran );
			} // for end
			result = memberDao.getInstance().findpwd( mid , mphone , updatePwd );
		}
		response.getWriter().print(result);
		
	}

	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

	}

}
