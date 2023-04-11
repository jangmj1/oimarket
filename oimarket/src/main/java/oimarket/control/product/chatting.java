package oimarket.control.product;

import java.util.ArrayList;

import javax.websocket.OnClose;
import javax.websocket.OnMessage;
import javax.websocket.OnOpen;
import javax.websocket.Session;
import javax.websocket.server.PathParam;
import javax.websocket.server.ServerEndpoint;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;

import oimarket.model.dto.ClientDto;
import oimarket.model.dto.MessageDto;

@ServerEndpoint("/chatting/{mid}")
public class chatting {
	
	public static ArrayList<ClientDto> 접속명단 = new ArrayList<>();
	
	@OnOpen
	public void OnOpen(Session session,@PathParam("mid")String mid) throws Exception {
		
		ClientDto clientDto =new ClientDto(session, mid);
		접속명단.add(clientDto);
		System.out.println(접속명단.toString());
		
		onMessage(session,"enter");
		
		
	}
	@OnClose
	public void onclose(Session session) throws Exception {
		
		for(ClientDto dto:접속명단) {
			if(dto.getSession()==session) {
				접속명단.remove(dto);
				
				String msg="{\"textbox\":\""+dto.getMid()+"님이 채팅방에 나갔습니다.\"}";
				onMessage(session, msg);
				onMessage(session, "enter");
				break;
				
			}
		}
	}
	
	
	
	@OnMessage			//필수인수![누가,어떤내용을]
	public void onMessage(Session session,String msg) throws Exception {
		System.out.println("어떤내용?:"+msg);
		
		//접속명단 알림
		ObjectMapper mapper=new ObjectMapper();
		String json=null;
		if(msg.equals("enter")) {//클라이언트가 채팅방에 입장했을시
			System.out.println(session+"입장");
			
			ArrayList<MessageDto>list=new ArrayList<>();
			for(ClientDto clientDto:접속명단) {
				list.add(new MessageDto(clientDto.getSession(),null));
			}
			json=mapper.writeValueAsString(list);
		}else {
			MessageDto dto=new MessageDto(session, msg);
			json=mapper.writeValueAsString(dto);
		}
		
		System.out.println("json:"+json);
		
		//4.보낸사람에게 메세지를 보내야함
		for(ClientDto dto:접속명단) {
			dto.getSession().getBasicRemote().sendText(json);
							//getBasicRemote() 어디서나옴?
		}
	}

	
	
	
	
}
