import http from 'http'
import SocketService from './services/socket';

async function init() {
    const socketService = new SocketService();

    const server = http.createServer();

    socketService.io.attach(server);

    const PORT = process.env.PORT ? process.env.PORT : 8000;

    server.listen(PORT, () => {
        console.log(`Server is listening on port ${PORT}`);
    });

    socketService.initListeners();
}

init();
