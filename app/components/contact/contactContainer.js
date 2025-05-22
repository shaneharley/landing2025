import styles from '@/components/contact/contactContainer.module.css'

import ContactContent from '@/components/contact/contactContent'

export default function ContactContainer(props) {

  return (
    <section className={`${styles.contactSection} grid`}>
      <ContactContent {...props} />
    </section>
  )
}
