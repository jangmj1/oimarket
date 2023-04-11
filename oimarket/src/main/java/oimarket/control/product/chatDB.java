package oimarket.control.product;

import java.io.IOException;
import java.util.ArrayList;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.fasterxml.jackson.databind.ObjectMapper;

import oimarket.model.dao.ProductDao;
import oimarket.model.dao.chatdbDao;
import oimarket.model.dto.MessageDto;

/**
 * Servlet implementation class chatDB
 */
@WebServlet("/chat/db")
public class chatDB extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    public chatDB() {
    }

	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		ObjectMapper mapper=new ObjectMapper();
		int pno=Integer.parseInt(request.getParameter("pno"));
		int frommno=ProductDao.getInstance().getproductmember(pno).getMno();
		int tomno=Integer.parseInt(request.getParameter("mno"));
		ArrayList<MessageDto> result=chatdbDao.getInstance().getchat(pno,frommno,tomno);
		
		String jsonArray=mapper.writeValueAsString(result);
		response.setCharacterEncoding("UTF-8");
		response.setContentType("application/json");
		response.getWriter().print(jsonArray); 
		}
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		String ncontent=request.getParameter("textbox");
		int pno=Integer.parseInt(request.getParameter("pno"));
		int frommno=ProductDao.getInstance().getproductmember(pno).getMno();
		int tomno=Integer.parseInt(request.getParameter("mno"));
		
		boolean result=chatdbDao.getInstance().chatting(ncontent, pno, tomno, frommno);
		response.getWriter().print(result);
		
	}

	protected void doPut(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
	}

	protected void doDelete(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
	}

}
