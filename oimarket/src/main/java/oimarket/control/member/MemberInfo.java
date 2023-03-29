package oimarket.control.member;

import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.oreilly.servlet.MultipartRequest;
import com.oreilly.servlet.multipart.DefaultFileRenamePolicy;

import oimarket.model.dao.MemberDao;
import oimarket.model.dto.MemberDto;

/**
 * Servlet implementation class MemberInfo
 */
@WebServlet("/oimarket/member/info")
public class MemberInfo extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public MemberInfo() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		response.getWriter().append("Served at: ").append(request.getContextPath());
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
		String uploadpath = request.getSession().getServletContext().getRealPath("/member/pimg");
		
		MultipartRequest multi = new MultipartRequest(
				request, uploadpath , 1024*1024*10 , "UTF-8" , new DefaultFileRenamePolicy());
		
		String mname = multi.getParameter("mname");
		String mid = multi.getParameter("mid");
		String mpwd = multi.getParameter("mpwd");
		String mresidence = multi.getParameter("mresidence");
		String mmw = multi.getParameter("mmw");
		String mphone = multi.getParameter("mphone");
		String mimg = multi.getFilesystemName("mimg");	// 첨부된 파일명 호출
		
		System.out.println(mname);		System.out.println(mid);
		System.out.println(mpwd);		System.out.println(mresidence);
		System.out.println(mmw);		System.out.println(mphone);		System.out.println(mimg);
		
		MemberDto dto = new MemberDto(0, mname, mid, mpwd, mresidence, mmw, mphone, mimg);
			System.out.println("dto : " + dto);
			
		boolean result = MemberDao.getInstance().signup(dto);
		response.getWriter().print(result);
		
	}

	/**
	 * @see HttpServlet#doPut(HttpServletRequest, HttpServletResponse)
	 */
	protected void doPut(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
	}

	/**
	 * @see HttpServlet#doDelete(HttpServletRequest, HttpServletResponse)
	 */
	protected void doDelete(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
	}

}
