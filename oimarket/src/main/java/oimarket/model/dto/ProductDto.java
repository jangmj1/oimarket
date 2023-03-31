package oimarket.model.dto;

import java.util.List;

public class ProductDto {

	private int pno;				//물품 고유번호
    private String ptitle	;		//물품 제목
    private String pcontent	;		//물품 내용
    private int pprice	;	 		//물품 가격
    private int pview	;			//조회수
    private String plat	;			//위도
    private String plng	;			//경도
    private String pdate;			//등록일
    private int pstate	;			//물품상태	[ 1 : 판매 가능 / 2 : 판매 완료 ]
    private String buydate	;		//구매일
    private int rmno;				//판매등록한 회원번호
    private int buymno;				//구매한 회원번호
    private int pcno;				//카테고리번호
	
    //추가필드
    private List<String>pimglist;	//등록한 사진목록들
	
    public ProductDto() {
		// TODO Auto-generated constructor stub
	}//깡통생성자
	
    public ProductDto(int pno, String ptitle, String pcontent, int pprice, int pview, String plat, String plng,
			String pdate, int pstate, String buydate, int rmno, int buymno, int pcno, List<String> pimglist) {
		super(); //풀생성자
		this.pno = pno;
		this.ptitle = ptitle;
		this.pcontent = pcontent;
		this.pprice = pprice;
		this.pview = pview;
		this.plat = plat;
		this.plng = plng;
		this.pdate = pdate;
		this.pstate = pstate;
		this.buydate = buydate;
		this.rmno = rmno;
		this.buymno = buymno;
		this.pcno = pcno;
		this.pimglist = pimglist;
	}
    
 

	public ProductDto(int pno, String ptitle, String pcontent, int pprice, String pdate, List<String> pimglist) {
		super();
		this.pno = pno;
		this.ptitle = ptitle;
		this.pcontent = pcontent;
		this.pprice = pprice;
		this.pdate = pdate;
		this.pimglist = pimglist;
	}

	public int getPno() {
		return pno;
	}
	public void setPno(int pno) {
		this.pno = pno;
	}
	public String getPtitle() {
		return ptitle;
	}
	public void setPtitle(String ptitle) {
		this.ptitle = ptitle;
	}
	public String getPcontent() {
		return pcontent;
	}
	public void setPcontent(String pcontent) {
		this.pcontent = pcontent;
	}
	public int getPprice() {
		return pprice;
	}
	public void setPprice(int pprice) {
		this.pprice = pprice;
	}
	public int getPview() {
		return pview;
	}
	public void setPview(int pview) {
		this.pview = pview;
	}
	public String getPlat() {
		return plat;
	}
	public void setPlat(String plat) {
		this.plat = plat;
	}
	public String getPlng() {
		return plng;
	}
	public void setPlng(String plng) {
		this.plng = plng;
	}
	public String getPdate() {
		return pdate;
	}
	public void setPdate(String pdate) {
		this.pdate = pdate;
	}
	public int getPstate() {
		return pstate;
	}
	public void setPstate(int pstate) {
		this.pstate = pstate;
	}
	public String getBuydate() {
		return buydate;
	}
	public void setBuydate(String buydate) {
		this.buydate = buydate;
	}
	public int getRmno() {
		return rmno;
	}
	public void setRmno(int rmno) {
		this.rmno = rmno;
	}
	public int getBuymno() {
		return buymno;
	}
	public void setBuymno(int buymno) {
		this.buymno = buymno;
	}
	public int getPcno() {
		return pcno;
	}
	public void setPcno(int pcno) {
		this.pcno = pcno;
	}
	public List<String> getPimglist() {
		return pimglist;
	}
	public void setPimglist(List<String> pimglist) {
		this.pimglist = pimglist;
	}
	@Override
	public String toString() {
		return "ProductDto [pno=" + pno + ", ptitle=" + ptitle + ", pcontent=" + pcontent + ", pprice=" + pprice
				+ ", pview=" + pview + ", plat=" + plat + ", plng=" + plng + ", pdate=" + pdate + ", pstate=" + pstate
				+ ", buydate=" + buydate + ", rmno=" + rmno + ", buymno=" + buymno + ", pcno=" + pcno + ", pimglist="
				+ pimglist + "]";
	}

	
	
	
	
	
	
}
