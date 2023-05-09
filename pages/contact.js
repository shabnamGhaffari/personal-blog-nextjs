import ContactForm from "../components/contact/contact-form"
import Head from 'next/head'
function ContactPage(){
return(
    <>
    <Head>
      <title>Contact me</title>
      <meta name="description" content="send me your messages"/>
    </Head>
   <ContactForm/>
   </>
)
}

export default ContactPage