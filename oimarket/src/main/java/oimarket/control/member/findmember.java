package oimarket.control.member;

import java.io.IOException;
import java.util.Random;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import oimarket.model.dao.MemberDao;

@WebServlet("/findmember")
public class findmember extends HttpServlet {
	private static final long serialVersionUID = 1L;
    public findmember() {
        super();
        // TODO Auto-generated constructor stub
    }

	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
		boolean result=false; //type 1,2 를 쓸예정
		String r=null;//type 3,4 를 쓸예정
		//준비물들 지우면안됨
		String type=request.getParameter("type");//1 ,2, 3, 4 있음
		String mid= request.getParameter("mid");
		String mphone= request.getParameter("mphone");
		String mname= request.getParameter("mname");
		
		//보안설정을 하기위한 준비물--연습용
		String myid=(String)request.getSession().getAttribute("login");
		int mno= MemberDao.getInstance().getmember(myid).getMno();
		String mpwd=request.getParameter("mpwd");
		
		//비밀번호 찾기를했을때 난수비밀번호를 업데이트하고 알려주기위한 준비물!--연습용
		Random random=new Random();
		String ranstr="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
		
		String newpwd="";
		for(int i=0; i<12; i++) {
			int ran=random.nextInt(ranstr.length());
			newpwd+=ranstr.charAt(ran);
			
		}//System.out.println("새로운 비밀번호:"+newpwd);
		
		
		
		
		
		if(type.equals("1")) {//동일한 아이디가 있는지 확인하기(signup에서 중복확인용)
			 result=MemberDao.getInstance().idCheck(mid);
		}
		else if (type.equals("2")) {//동일한 핸드폰번호가 있는지 확인하기
			 result=MemberDao.getInstance().findphone(mphone);
		}
		else if (type.equals("3")) {//아이디찾기--연습용
			 r=MemberDao.getInstance().findId(mname,mphone);
			response.getWriter().print(r);
			return;
		}
		else if (type.equals("4")) {//비밀번호찾기--연습용
			 r=MemberDao.getInstance().findpwd(mid, mphone, newpwd);
			response.getWriter().print(r);
			return;		
		}
		else if(type.equals("5")){//비밀번호수정시 현재비밀번호 동일한지--연습용
			 result=MemberDao.getInstance().findoldpwd(mno, mpwd);
		}
		
		//type 1,2 사용됨
		response.getWriter().print(result);
		
		
		
		
	}

	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
	}

}
