// TODO: BackendURI -> BackendEndpoint


class ListenWebsocketMessages {

  constructor(event) {
    this.event = event;
  }

  run() {
    console.log(this.event.data);
  }

}


class EchoServerSocket {

  constructor(socket) {
    this.socket = socket;
  }

  run() {
    this.socket.send("Hello, World!");
  }

}


class InitDataReceiver {

  constructor(endpoint) {
    this.endpoint = endpoint;
  }

  run() {
    // TODO: ignore or process the event
    let socket = new WebSocket("ws://127.0.0.1:12345");

    socket.onopen = function(event) {
      let ess = new EchoServerSocket(socket);
      ess.run();
    }

    socket.onmessage = function(event) {
      let lwm = new ListenWebsocketMessages(event);
      lwm.run();
    }

    socket.onclose = function(event) {
      console.log("OnClose" + event);
    }

    socket.onerror = function(event) {
      console.log("OnError" + event);
    }

  }

}
