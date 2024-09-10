export default function ContactForm(){
    return(
        <section className="contact-form">
            <h2 className="title">Une question ? <span className="subtitle">N'hésitez pas à remplir ce formulaire de contact</span></h2>
            <form>
               <div className="form-group">
                    <div className="input-group">
                        <label for="name">Nom</label>
                        <input type="text" id="name" placeholder="Votre nom ou celle de l'entreprise"/>
                    </div>
                    <div className="input-group">
                        <label for="phone">Téléphone</label>
                        <input type="phone" id="phone" placeholder="Votre numéro de téléphone"/>
                    </div>
               </div>
                <div className="input-group">
                    <label for="email">Email</label>
                    <input type="email" id="email"  placeholder="Votre adresse mail"/>
                </div>
                <div className="input-group">
                    <label for="message">Message</label>
                    <textarea cols="30" rows="10" placeholder="Votre message..."></textarea>
                </div>
                <input type="submit" className='btn-submit' value="Envoyer"/>
            </form>
        </section>
    )
}