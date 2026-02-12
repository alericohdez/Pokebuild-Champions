import React from "react";
import "./privacyPolicy.css";

export default function PrivacyPolicy() {
  return (
    <div className="privacy-container">
      <header className="privacy-header">
        <h1>Política de Privacidad</h1>
        <p>Cómo se gestiona la información en esta web de Pokémon competitivo</p>
      </header>

      <section className="privacy-section">
        <h2>1. Información recopilada</h2>
        <p>
          Esta página web no recopila datos personales identificables como nombre,
          correo electrónico, dirección IP personalizada ni información de pago.
        </p>
        <p>
          Únicamente pueden recopilarse datos anónimos de uso con fines
          estadísticos y de mejora del contenido.
        </p>
      </section>

      <section className="privacy-section">
        <h2>2. Uso de la información</h2>
        <p>La información anónima recopilada se utiliza exclusivamente para:</p>
        <ul>
          <li>Mejorar la experiencia del usuario.</li>
          <li>Analizar el uso y rendimiento del sitio web.</li>
          <li>Optimizar el contenido competitivo y los tiers.</li>
        </ul>
      </section>

      <section className="privacy-section">
        <h2>3. Cookies</h2>
        <p>
          Este sitio puede utilizar cookies técnicas o de análisis básicas para
          su correcto funcionamiento. No se utilizan cookies con fines
          publicitarios ni de seguimiento personalizado.
        </p>
      </section>

      <section className="privacy-section">
        <h2>4. Enlaces externos</h2>
        <p>
          La web puede contener enlaces a sitios externos como Smogon o Pokémon
          Showdown. No somos responsables de las políticas de privacidad ni del
          contenido de dichos sitios.
        </p>
      </section>

      <section className="privacy-section">
        <h2>5. Derechos del usuario</h2>
        <p>
          Al no recopilarse datos personales, no se almacenan ni procesan datos
          que permitan identificar directamente a los usuarios de este sitio.
        </p>
      </section>

      <section className="privacy-section">
        <h2>6. Cambios en la política</h2>
        <p>
          Esta política de privacidad puede modificarse en cualquier momento
          para adaptarse a cambios legales o mejoras del sitio web.
        </p>
      </section>

      <div className="privacy-footer">
        Última actualización: Febrero de 2026
      </div>
    </div>
  );
}

