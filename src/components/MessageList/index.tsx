import styles from './styles.module.scss';
import logoImg from '../../assets/logo.svg';

export function MessageList() {
  return (
    <div className={styles.messageListWrapper}>
      <img src={logoImg} alt="DoWhile 2021" />

      <ul className={styles.messageList}>
        <li className={styles.message}>
          <p className={styles.messageContent}>não vejo a hora de começar esse dowhile</p>
          <div className={styles.messageUser}>
            <div className={styles.UserImage}>
              <img src="https://github.com/gabriel-mendes-camargo-de-barros.png" alt="Gabriel Mendes" />
            </div>
            <span>Gabrie Mendes</span>
          </div>
        </li>
      </ul>
    </div>
  )
}