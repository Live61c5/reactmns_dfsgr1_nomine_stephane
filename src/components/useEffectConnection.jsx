import { useEffect, useState } from 'react'; 
import { createConnection } from './chat.js';

function ChatRoom({ roomId }) { 
    const [serverUrl, setServerUrl] = useState(null);

    useEffect(() => {
        const connection = createConnection(serverUrl, roomId);
        connection.connect();
        return () => {
            connection.disconnect();
        };
    }, [serverUrl, roomId]);
} 