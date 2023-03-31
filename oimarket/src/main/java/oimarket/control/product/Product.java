package oimarket.control.product;

import java.io.File;
import java.io.IOException;

import java.util.List;
import java.util.UUID;
import java.util.ArrayList;


import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.commons.fileupload.FileItem;
import org.apache.commons.fileupload.disk.DiskFileItemFactory;
import org.apache.commons.fileupload.servlet.ServletFileUpload;

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
		System.out.println("경로:"+path);
		//해당 파일을 객체화시키기
		File setpath=new File(path);
		DiskFileItemFactory fileset= new DiskFileItemFactory();
		fileset.setRepository(setpath);	//파일저장소 위치 대입
		fileset.setSizeThreshold(1024*1024*10);	//파일저장소에 저장할수 있는 최대용량 범위
		fileset.setDefaultCharset("UTF-8"); //파일저장소 한글 인코딩 타입
		
		ServletFileUpload fileupload=new ServletFileUpload(fileset);
		try {//5.매개변수 요청해서 리스트에 담기 [무조건 예외처리 발생]
			List<FileItem> fileList = fileupload.parseRequest(request);
			//*DB에 저장할 데이터를 분류
			List<String> 일반필드목록= new ArrayList<>();
			List<String> 파일필드목록= new ArrayList<>();
			
			for(FileItem item:fileList) {//요청된 모든 매개변수들을 반복문 돌려서 확인
				if(item.isFormField()) {
					
					
					
				}else {
					String filename=UUID.randomUUID()+" "+( item.getName().replaceAll(" ", "-"));
					
					File 업로드할파일= new File(path+"/"+filename);
					item.write(업로드할파일);
				}
			}

		} catch (Exception e) {
		System.out.println("파일저장 실패");
		}
		
		
		
	}

	
	protected void doPut(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
	}

	
	protected void doDelete(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
	}

}
