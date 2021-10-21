import { LoginBox } from './components/LoginBox';
import { MessageList } from './components/MessageList';
import appStyles from './styles/App.module.scss';

function App() {
  return (
    <main className={appStyles.contentWrapper}>
      <MessageList />
      <LoginBox />
    </main>
  )
}

export { App }
