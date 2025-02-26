import styles from './WhatsAppBubble.module.css';
import Image from 'next/image';

interface WhatsAppTranslations {
  whatsapp: string;
}

const WhatsAppBubble = ({ w }: { w: WhatsAppTranslations }) => {
  return (
    <div className={styles.container}>
      <a
        href="https://wa.me/PHONE_NUMBER"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.link}
      >
        <span className={styles.text}>{w.whatsapp}</span>
        <Image
          src="/images/whatsapp.png"
          alt="Chat on WhatsApp"
          width={48}
          height={48}
          className={styles.icon}
        />
      </a>
    </div>
  );
};

export default WhatsAppBubble;