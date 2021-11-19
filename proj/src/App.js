import { ChatEngine } from 'react-chat-engine'
import ChatFeed from './Components/ChatFeed'
import './App.css';
import LoginForm from './Components/LoginForm';



const App = () => {
  if(!localStorage.getItem('username')) return <LoginForm />
  return (
    <ChatEngine 
        height="100vh"
        projectID="ce26eca5-d894-4369-b843-58a5966301ed"
        userName={localStorage.getItem('username')}
        userSecret={localStorage.getItem('password')}
        renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}

    
    
    />
  )
}

export default App



