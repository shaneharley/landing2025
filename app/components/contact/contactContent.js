//import tools
import parse from 'html-react-parser'
import Link from 'next/link'

//import styles
import styles from '@/components/contact/contactContent.module.css'

//import components
import ContactItem from '@/components/contact/contactItem'

export default function ContactContent(props) {
  const contactItem = props.contact.contactInfo
  const contactItemArray = Object.keys(contactItem).map(key => ({ ...contactItem[key], "key": key }));

  return (
    <>
      <div className={`${styles.hello}`}>
        <Link href="mailto:hello@shaneharley.net">
          <p className={`${styles.link}`}>
            {parse(props.contact.title)}
          </p>
        </Link>
      </div>

      {contactItemArray.map(contactItem => (
        <ContactItem contactItem={(contactItem)} key={contactItem.id} />
      ))}
    </>
  )
}
