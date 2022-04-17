// TODO: BackendURI -> BackendEndpoint


class InitDataReceiver {

  constructor(endpoint) {
    this.endpoint = endpoint;
  }

  run() {
    let socket = new WebSocket("ws://127.0.0.1:12345");
    socket.onopen = function(event) {
      console.log("OnOpen" + event);
    }
    socket.onmessage = function(event) {
      console.log("OnMessage" + event);
    }
    socket.onclose = function(event) {
      console.log("OnClose" + event);
    }
    socket.onerror = function(event) {
      console.log("OnError" + event);
    }
  }

}
