import React from 'react'

import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

import './styles.css'

function TeacherItem() {
  return (
    <article className="teacher-item">
      <header>
        <img
          src="https://avatars0.githubusercontent.com/u/41699484?s=460&u=d37cb7c6852e8f1c5cec578cc10d8a54f3253cc2&v=4"
          alt="Meu Avatar"
        />
        <div>
          <strong>Mayron Souza</strong>
          <span>Matemática</span>
        </div>
      </header>
      <p>
        Lorem ipsum dolor sit amet consectetur adipiscing elit cras fringilla scelerisque phasellus pharetra, placerat class aptent blandit enim aliquet in fames libero dapibus facilisis.
        <br/> <br/>
        Aliquet lacus fusce dictum auctor lacinia vehicula a, eros porta aliquam mattis faucibus lorem morbi pretium, fringilla ultricies vulputate imperdiet quam sem.
      </p>
      <footer>
        <p>
          Preço/Hora
          <strong>R$ 80,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="WhatsApp"/>
          Entrar em contato
        </button>
      </footer>
    </article>
  )
}

export default TeacherItem