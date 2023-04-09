package oimarket.control.product;

import java.util.ArrayList;

import javax.websocket.OnMessage;
import javax.websocket.OnOpen;
import javax.websocket.Session;
import javax.websocket.server.PathParam;
import javax.websocket.server.ServerEndpoint;


import oimarket.model.dto.ClientDto;

@ServerEndpoint("/chatting/{mid}")
public class chatting {
	
	public static ArrayList<ClientDto> 접속명단 = new ArrayList<>();
	
	@OnOpen
	public void OnOpen(Session session,@PathParam("mid")String mid) {
		
		ClientDto clientDto =new ClientDto(session, mid);
		접속명단.add(clientDto);
		System.out.println(접속명단.toString());
		
		
	}

	
	
	
	
}
