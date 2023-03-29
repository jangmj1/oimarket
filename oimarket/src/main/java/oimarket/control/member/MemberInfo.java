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

@WebServlet("/member/info")
public class MemberInfo extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    public MemberInfo() {
        super();
    }

	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
	}

	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		String uploadpath=request.getSession().getServletContext().getRealPath("/img");
		
		MultipartRequest multi=new MultipartRequest(
				request,
				uploadpath,
				1024*1024*10,
				"UTF-8",
				new DefaultFileRenamePolicy()
				);
		
		String mname=multi.getParameter("mname");				System.out.println(mname);
		String mid=multi.getParameter("mid");					System.out.println(mid);
		String mpwd=multi.getParameter("mpwd");					System.out.println(mpwd);
		String mresidence=multi.getParameter("mresidence") ;	System.out.println(mresidence);
		String mmw= multi.getParameter("mmw") ;					System.out.println(mmw);
		String mphone=multi.getParameter("mphone") ;			System.out.println(mphone);
		String mimg=multi.getFilesystemName("mimg");			System.out.println(mimg);
		
		MemberDto dto=new MemberDto(0, mname, mid, mpwd, mresidence,mmw, mphone, mimg);
		boolean result=MemberDao.getInstance().signup(dto);
		
		response.getWriter().print(result);
		
	}

	protected void doPut(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		//수정하기 --연습용
			//준비물들
		String path=request.getSession().getServletContext().getRealPath("/img");
		
		MultipartRequest multi=new MultipartRequest(
				request,
				path,
				1024*1024*10,
				"UTF-8",
				new DefaultFileRenamePolicy()
				);
		
		String type=multi.getParameter("type");
		String updatemimg=multi.getFilesystemName("updatemimg");System.out.println(updatemimg);
		String updatamname=multi.getParameter("updatamname");System.out.println(updatamname);
		String mid=(String)request.getSession().getAttribute("login") ; //실제사용하진않음 아이디로 번호와
		int mno=MemberDao.getInstance().getmember(mid).getMno();
		
		//유효성
		if(updatemimg==null||updatamname.equals("")) { //아무것도 안하고 그냥 적용하면 기존꺼 사용
			updatemimg=MemberDao.getInstance().getmember(mid).getMimg();
			updatamname=MemberDao.getInstance().getmember(mid).getMname();
		}
		
		if(type.equals("1")) {
			//dao
			boolean result=MemberDao.getInstance().updateProfile(mno,updatemimg,updatamname);
			response.getWriter().print(result);
		}
		
	}

	protected void doDelete(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
	
	}

}
