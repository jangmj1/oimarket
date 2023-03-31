package oimarket.control.product;

import java.io.File;
import java.io.IOException;
<<<<<<< HEAD
import java.util.List;
=======
import java.util.ArrayList;
>>>>>>> branch '장민정3' of https://github.com/jangmj1/oimarket

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.tomcat.util.http.fileupload.FileItem;
import org.apache.tomcat.util.http.fileupload.disk.DiskFileItemFactory;
import org.apache.tomcat.util.http.fileupload.servlet.ServletFileUpload;

import oimarket.model.dao.ProductDao;
import oimarket.model.dto.ProductDto;

@WebServlet("/product")
public class Product extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
   
    public Product() {
        super();
    }

	
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
	
		//ArrayList<ProductDto> result= ProductDao.getInstance().getproduct();
	
	}

	//제품등록
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
	//첨부파일 여러개 하기위해 commons.jar 사용
		request.setCharacterEncoding("UTF-8");
		String path=request.getSession().getServletContext().getRealPath("/img");//다운로드할 서버경로
		//해당 파일을 객체화시키기
		File setpath=new File(path);
		DiskFileItemFactory fileset= new DiskFileItemFactory();
		fileset.setRepository(setpath);	//파일저장소 위치 대입
		fileset.setSizeThreshold(1024*1024*10);	//파일저장소에 저장할수 있는 최대용량 범위
		fileset.setDefaultCharset("UTF-8"); //파일저장소 한글 인코딩 타입
		
		ServletFileUpload fileupload=new ServletFileUpload(fileset);
		
		List<FileItem> fileList=fileupload.parseRequest(request);//매개변수 요청 리스트에담기
		
		for(FileItem item:fileupload) {
			
		}
		
		
		
	}

	
	protected void doPut(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
	}

	
	protected void doDelete(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
	}

}
