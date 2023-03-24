package oimarket.control.member;

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

import oimarket.model.dao.MemberDao;
import oimarket.model.dto.MemberDto;

/**
 * Servlet implementation class MemberInfo
 */
@WebServlet("/member/info")
public class MemberInfo extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
   
    public MemberInfo() {
        super();
        // TODO Auto-generated constructor stub
    }

	//출력
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
		ArrayList< MemberDto>list=new ArrayList<>();
		//JAVA에서 JS으로 가기위한 형변환
		ObjectMapper mapper=new ObjectMapper();
		String json=mapper.writeValueAsString(list);
		
		//응답
		response.setCharacterEncoding("UTF-8");
		response.setContentType("application/json");
		response.getWriter().print(json);
		
	}

	
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		String path=request.getSession().getServletContext().getRealPath("/img");
		MultipartRequest multi=new MultipartRequest(
				request,
				path,
				1024*1024*10, 
				"UTF-8",
				new DefaultFileRenamePolicy());
		String mname=multi.getParameter("mname"); System.out.println("mname:"+mname);
		String mid=multi.getParameter("mid"); System.out.println("mid:"+mid);
		String mpwd=multi.getParameter("mpwd"); System.out.println("mpwd:"+mpwd);
		String mresidence=multi.getParameter("mresidence"); System.out.println("mresidence:"+mresidence);
		String mmw= multi.getParameter("mmw"); System.out.println("mmw:"+mmw);
		String mphone=multi.getParameter("mphone"); System.out.println("mphone:"+mphone);
		String mimg=multi.getFilesystemName("mimg"); System.out.println("mimg:"+mimg);
				
		MemberDto meDto=new MemberDto(0, mname, mid, mpwd, mresidence, mresidence, mmw, mphone, mimg);
				
				
			
				
		boolean result=MemberDao.getInstance().register(meDto);
		response.setCharacterEncoding("UTF-8");
		response.getWriter().print(result);//결과보내기
		
	}

	
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
