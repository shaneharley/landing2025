//import tools
import parse from 'html-react-parser'

//import styles
import styles from '@/components/contact/contactItem.module.css'

export default function ContactItem(props) {
  return (
    <div className={`${styles.contactInfoItem}`}>
      <p className={`${styles.columnTitle}`}>
        {parse(props.contactItem.title)}
      </p>
      <p className={`${styles.contactInfoBlurb}`}>
        {parse(props.contactItem.blurb)}
      </p>
    </div>
  )
}
