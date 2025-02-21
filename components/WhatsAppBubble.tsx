import styles from './WhatsAppBubble.module.css';

interface WhatsAppTranslations {
  whatsapp: string;
}

const WhatsAppBubble = ({w}: {w: WhatsAppTranslations}) => {
  return (
    <div className={styles.container}>
      <a
        href="https://wa.me/PHONE_NUMBER"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.link}
      >
        <span className={styles.text}>{w.whatsapp}</span>
        <img 
          src="/images/whatsapp.png" 
          alt="Chat on WhatsApp"
          className={styles.icon}
        />
      </a>
    </div>
  );
};

export default WhatsAppBubble;