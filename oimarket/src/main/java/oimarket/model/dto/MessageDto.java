package oimarket.model.dto;

import java.text.SimpleDateFormat;
import java.util.Date;

import javax.websocket.Session;

import oimarket.control.product.chatting;

public class MessageDto {
	int nno	;
	String ncontent;					
	String ndate;			
	int pno;					
	int frommno;							
	int tomno;	
	
	
	public MessageDto() {
		// TODO Auto-generated constructor stub
	}


	public MessageDto(int nno, String ncontent, String ndate, int pno, int frommno, int tomno) {
		super();
		this.nno = nno;
		this.ncontent = ncontent;
		this.ndate = ndate;
		this.pno = pno;
		this.frommno = frommno;
		this.tomno = tomno;
	}


	public int getNno() {
		return nno;
	}


	public void setNno(int nno) {
		this.nno = nno;
	}


	public String getNcontent() {
		return ncontent;
	}


	public void setNcontent(String ncontent) {
		this.ncontent = ncontent;
	}


	public String getNdate() {
		return ndate;
	}


	public void setNdate(String ndate) {
		this.ndate = ndate;
	}


	public int getPno() {
		return pno;
	}


	public void setPno(int pno) {
		this.pno = pno;
	}


	public int getFrommno() {
		return frommno;
	}


	public void setFrommno(int frommno) {
		this.frommno = frommno;
	}


	public int getTomno() {
		return tomno;
	}


	public void setTomno(int tomno) {
		this.tomno = tomno;
	}


	@Override
	public String toString() {
		return "MessageDto [nno=" + nno + ", ncontent=" + ncontent + ", ndate=" + ndate + ", pno=" + pno + ", frommno="
				+ frommno + ", tomno=" + tomno + "]";
	}
	
	
	
	

}
