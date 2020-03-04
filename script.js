let button = document.getElementById('send');

startWebsocket = () => {    
    const url = 'ws://localhost:8080';  
    let connection = new WebSocket(url); 
    
    connection.onmessage = (e) => {
        console.log(e.data)
    }

    connection.onopen = () => {
        connection.send('hey') 
    }
      
    connection.onerror = (error) => {
        console.log(`WebSocket error: ${error}`)
    }

    button.onclick = () => {
        connection.send('heist') ;
    }
        
    setTimeout(() => {connection.close(); console.log('end')}, 5000);
  
    connection.onclose = () => {
      // connection closed, discard old websocket and create a new one in 5s
      connection = null
      setTimeout(startWebsocket, 5000)
    }
  }

startWebsocket();