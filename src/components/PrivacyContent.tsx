const linkCls = "text-indigo-600 dark:text-indigo-400 hover:underline";
const bodyCls = "text-gray-700 dark:text-gray-300 leading-relaxed";
const listCls = "list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2 pl-2";
const h3Cls = "text-base font-semibold mb-2 mt-4 text-gray-900 dark:text-white";

/* -------------------------------------------------------------------------- */
/*  German                                                                     */
/* -------------------------------------------------------------------------- */

/** German privacy policy content. */
export const PrivacyContentDE = () => (
  <>
    <h1 className="text-3xl font-bold mb-2">Datenschutzerklärung</h1>
    <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
      Stand: 15. März 2026
    </p>

    {/* ── Table of contents ─────────────────────────────────────────────── */}
    <section className="mb-10">
      <h2 className="text-xl font-semibold mb-3">Inhaltsübersicht</h2>
      <ul className={listCls}>
        {[
          ["#verantwortlicher", "Verantwortlicher"],
          ["#ubersicht", "Übersicht der Verarbeitungen"],
          ["#rechtsgrundlagen", "Maßgebliche Rechtsgrundlagen"],
          ["#sicherheit", "Sicherheitsmaßnahmen"],
          ["#webhosting", "Bereitstellung des Onlineangebots und Webhosting"],
          ["#speed-insights", "Vercel Speed Insights"],
          ["#kontakt", "Kontaktaufnahme"],
          ["#cookies", "Keine Verwendung von Cookies"],
          ["#localstorage", "Lokaler Speicher"],
          ["#externe-links", "Externe Links"],
          ["#rechte", "Rechte der betroffenen Personen"],
          ["#anderung", "Änderung und Aktualisierung"],
        ].map(([href, label]) => (
          <li key={href}>
            <a href={href} className={linkCls}>{label}</a>
          </li>
        ))}
      </ul>
    </section>

    {/* ── Verantwortlicher ──────────────────────────────────────────────── */}
    <section id="verantwortlicher" className="mb-10">
      <h2 className="text-xl font-semibold mb-3">Verantwortlicher</h2>
      <p className={bodyCls}>siehe Impressum</p>
    </section>

    {/* ── Übersicht der Verarbeitungen ──────────────────────────────────── */}
    <section id="ubersicht" className="mb-10">
      <h2 className="text-xl font-semibold mb-3">Übersicht der Verarbeitungen</h2>
      <p className={`${bodyCls} mb-3`}>
        Die nachfolgende Übersicht fasst die Arten der verarbeiteten Daten und die Zwecke ihrer
        Verarbeitung zusammen und verweist auf die betroffenen Personen.
      </p>
      <h3 className={h3Cls}>Arten der verarbeiteten Daten</h3>
      <ul className={`${listCls} mb-4`}>
        <li>Kontaktdaten (z. B. Name, E-Mail-Adresse).</li>
        <li>Inhaltsdaten (z. B. Texteingaben in Formularen).</li>
        <li>
          Nutzungsdaten (z. B. Seitenaufrufe und Verweildauer, Klickpfade, verwendete Gerätetypen
          und Betriebssysteme).
        </li>
        <li>Meta-, Kommunikations- und Verfahrensdaten (z. B. IP-Adressen, Zeitangaben).</li>
        <li>Protokolldaten (z. B. Logfiles betreffend Zugriffe und Abrufe).</li>
      </ul>
      <h3 className={h3Cls}>Kategorien betroffener Personen</h3>
      <ul className={`${listCls} mb-4`}>
        <li>Nutzer (z. B. Webseitenbesucher).</li>
        <li>
          Kommunikationspartner (z. B. Personen, die über das Kontaktformular Anfragen stellen).
        </li>
      </ul>
      <h3 className={h3Cls}>Zwecke der Verarbeitung</h3>
      <ul className={listCls}>
        <li>Bereitstellung unseres Onlineangebotes und Nutzerfreundlichkeit.</li>
        <li>Beantwortung von Kontaktanfragen und Kommunikation.</li>
        <li>Sicherheitsmaßnahmen.</li>
        <li>Informationstechnische Infrastruktur.</li>
      </ul>
    </section>

    {/* ── Maßgebliche Rechtsgrundlagen ──────────────────────────────────── */}
    <section id="rechtsgrundlagen" className="mb-10">
      <h2 className="text-xl font-semibold mb-3">Maßgebliche Rechtsgrundlagen</h2>
      <p className={`${bodyCls} mb-3`}>
        <strong>Maßgebliche Rechtsgrundlagen nach der DSGVO:</strong> Im Folgenden erhalten Sie
        eine Übersicht der Rechtsgrundlagen der DSGVO, auf deren Basis wir personenbezogene Daten
        verarbeiten. Bitte nehmen Sie zur Kenntnis, dass neben den Regelungen der DSGVO nationale
        Datenschutzvorgaben in Ihrem bzw. unserem Wohn- oder Sitzland gelten können. Sollten ferner
        im Einzelfall speziellere Rechtsgrundlagen maßgeblich sein, teilen wir Ihnen diese in der
        Datenschutzerklärung mit.
      </p>
      <ul className={`${listCls} mb-4`}>
        <li>
          <strong>
            Vertragserfüllung und vorvertragliche Anfragen (Art. 6 Abs. 1 S. 1 lit. b) DSGVO)
          </strong>{" "}
          – die Verarbeitung ist für die Erfüllung eines Vertrags, dessen Vertragspartei die
          betroffene Person ist, oder zur Durchführung vorvertraglicher Maßnahmen erforderlich, die
          auf Anfrage der betroffenen Person erfolgen.
        </li>
        <li>
          <strong>Berechtigte Interessen (Art. 6 Abs. 1 S. 1 lit. f) DSGVO)</strong> – die
          Verarbeitung ist zur Wahrung der berechtigten Interessen des Verantwortlichen oder eines
          Dritten notwendig, vorausgesetzt, dass die Interessen, Grundrechte und Grundfreiheiten
          der betroffenen Person, die den Schutz personenbezogener Daten verlangen, nicht
          überwiegen.
        </li>
      </ul>
      <p className={bodyCls}>
        <strong>Nationale Datenschutzregelungen in Deutschland:</strong> Zusätzlich zu den
        Datenschutzregelungen der DSGVO gelten nationale Regelungen zum Datenschutz in Deutschland.
        Hierzu gehört insbesondere das Gesetz zum Schutz vor Missbrauch personenbezogener Daten bei
        der Datenverarbeitung (Bundesdatenschutzgesetz – BDSG). Das BDSG enthält insbesondere
        Spezialregelungen zum Recht auf Auskunft, zum Recht auf Löschung, zum Widerspruchsrecht,
        zur Verarbeitung besonderer Kategorien personenbezogener Daten, zur Verarbeitung für andere
        Zwecke und zur Übermittlung sowie automatisierten Entscheidungsfindung im Einzelfall
        einschließlich Profiling. Ferner können Landesdatenschutzgesetze der einzelnen Bundesländer
        zur Anwendung gelangen.
      </p>
    </section>

    {/* ── Sicherheitsmaßnahmen ──────────────────────────────────────────── */}
    <section id="sicherheit" className="mb-10">
      <h2 className="text-xl font-semibold mb-3">Sicherheitsmaßnahmen</h2>
      <p className={`${bodyCls} mb-3`}>
        Wir treffen nach Maßgabe der gesetzlichen Vorgaben unter Berücksichtigung des Stands der
        Technik, der Implementierungskosten und der Art, des Umfangs, der Umstände und der Zwecke
        der Verarbeitung sowie der unterschiedlichen Eintrittswahrscheinlichkeiten und des Ausmaßes
        der Bedrohung der Rechte und Freiheiten natürlicher Personen geeignete technische und
        organisatorische Maßnahmen, um ein dem Risiko angemessenes Schutzniveau zu gewährleisten.
      </p>
      <p className={bodyCls}>
        Zu den Maßnahmen gehören insbesondere die Sicherung der Vertraulichkeit, Integrität und
        Verfügbarkeit von Daten durch Kontrolle des physischen und elektronischen Zugangs zu den
        Daten als auch des sie betreffenden Zugriffs, der Eingabe, der Weitergabe, der Sicherung
        der Verfügbarkeit und ihrer Trennung. Die Übertragung von Daten zwischen Ihrem Browser und
        unserem Server ist durch TLS-/SSL-Verschlüsselung (HTTPS) geschützt.
      </p>
    </section>

    {/* ── Webhosting ────────────────────────────────────────────────────── */}
    <section id="webhosting" className="mb-10">
      <h2 className="text-xl font-semibold mb-3">
        Bereitstellung des Onlineangebots und Webhosting
      </h2>
      <p className={`${bodyCls} mb-3`}>
        Wir verarbeiten die Daten der Nutzer, um ihnen unsere Online-Dienste zur Verfügung stellen
        zu können. Zu diesem Zweck verarbeiten wir die IP-Adresse des Nutzers, die notwendig ist,
        um die Inhalte und Funktionen unserer Online-Dienste an den Browser oder das Endgerät der
        Nutzer zu übermitteln.
      </p>
      <h3 className={h3Cls}>Hosting-Anbieter</h3>
      <p className={`${bodyCls} mb-3`}>
        Diese Website wird gehostet von{" "}
        <strong>Vercel Inc., San Francisco, CA, USA</strong>. Vercel verarbeitet als
        Auftragsverarbeiter Nutzungsdaten und Protokolldaten (z. B. IP-Adressen, Browsertyp,
        Zugriffszeiten) zum Betrieb und zur Sicherung der Website. Vercel ist unter dem EU-US Data
        Privacy Framework (DPF) zertifiziert und bietet damit ein angemessenes Datenschutzniveau
        für die Übermittlung personenbezogener Daten in die USA. Weitere Informationen finden Sie
        in der{" "}
        <a
          href="https://vercel.com/legal/privacy-policy"
          target="_blank"
          rel="noopener noreferrer"
          className={linkCls}
        >
          Datenschutzerklärung von Vercel
        </a>.
      </p>
      <h3 className={h3Cls}>Erhebung von Zugriffsdaten und Logfiles</h3>
      <p className={`${bodyCls} mb-3`}>
        Der Zugriff auf unser Onlineangebot wird in Form von Server-Logfiles protokolliert. Zu den
        Serverlogfiles können die Adresse und der Name der abgerufenen Webseiten und Dateien, Datum
        und Uhrzeit des Abrufs, übertragene Datenmengen, Meldung über erfolgreichen Abruf,
        Browsertyp nebst Version, das Betriebssystem des Nutzers, Referrer URL und im Regelfall
        IP-Adressen und der anfragende Provider gehören. Die Serverlogfiles werden zu
        Sicherheitszwecken (z. B. zur Vermeidung von DDoS-Attacken) und zur Sicherstellung der
        Serverstabilität eingesetzt. Logfile-Informationen werden für die Dauer von maximal 30
        Tagen gespeichert und danach gelöscht oder anonymisiert. Daten, deren weitere Aufbewahrung
        zu Beweiszwecken erforderlich ist, sind bis zur endgültigen Klärung des jeweiligen Vorfalls
        von der Löschung ausgenommen.
      </p>
      <p className={bodyCls}>
        <strong>Rechtsgrundlagen:</strong> Berechtigte Interessen (Art. 6 Abs. 1 S. 1 lit. f)
        DSGVO).
      </p>
    </section>

    {/* ── Vercel Speed Insights ─────────────────────────────────────────── */}
    <section id="speed-insights" className="mb-10">
      <h2 className="text-xl font-semibold mb-3">Vercel Speed Insights</h2>
      <p className={`${bodyCls} mb-3`}>
        Diese Website nutzt <strong>Vercel Speed Insights</strong>, einen Dienst der Vercel Inc.,
        San Francisco, CA, USA, zur Messung von Webseitenperformance und Core Web Vitals. Dabei
        werden technische Messdaten erhoben, insbesondere:
      </p>
      <ul className={`${listCls} mb-3`}>
        <li>Performance-Kennzahlen (Core Web Vitals: LCP, INP, CLS, FCP, TTFB).</li>
        <li>Aufgerufene URL bzw. Seite.</li>
        <li>Browsertyp und Gerätetyp.</li>
        <li>Verbindungsdaten (z. B. IP-Adresse, Land).</li>
      </ul>
      <p className={`${bodyCls} mb-3`}>
        Die Daten werden an Server von Vercel in den USA übermittelt. Vercel ist unter dem EU-US
        Data Privacy Framework (DPF) zertifiziert. Es werden keine Cookies gesetzt und keine
        Nutzerprofile erstellt. Die Messdaten dienen ausschließlich der technischen Optimierung
        dieser Website. Weitere Informationen finden Sie in der{" "}
        <a
          href="https://vercel.com/legal/privacy-policy"
          target="_blank"
          rel="noopener noreferrer"
          className={linkCls}
        >
          Datenschutzerklärung von Vercel
        </a>.
      </p>
      <p className={bodyCls}>
        <strong>Rechtsgrundlagen:</strong> Berechtigte Interessen (Art. 6 Abs. 1 S. 1 lit. f)
        DSGVO) – berechtigtes Interesse an der technischen Qualitätssicherung und Optimierung
        dieser Website.
      </p>
    </section>

    {/* ── Kontaktaufnahme ───────────────────────────────────────────────── */}
    <section id="kontakt" className="mb-10">
      <h2 className="text-xl font-semibold mb-3">Kontaktaufnahme</h2>
      <p className={`${bodyCls} mb-3`}>
        Wenn Sie uns über das Kontaktformular kontaktieren, verarbeiten wir die von Ihnen
        angegebenen Daten (Name, E-Mail-Adresse, Nachrichteninhalt) zur Bearbeitung Ihrer Anfrage.
        Dabei werden Ihre Daten über den Dienst{" "}
        <strong>Formspree (Formspree, Inc., USA)</strong> übermittelt und auf dessen Servern in den
        USA (Amazon Web Services) verarbeitet und gespeichert.
      </p>
      <p className={`${bodyCls} mb-3`}>
        Die Datenübermittlung in die USA erfolgt auf Grundlage von Standardvertragsklauseln
        (Standard Contractual Clauses – SCCs) gemäß Art. 46 Abs. 2 lit. c) DSGVO. Weitere
        Informationen finden Sie in der{" "}
        <a
          href="https://formspree.io/legal/privacy-policy"
          target="_blank"
          rel="noopener noreferrer"
          className={linkCls}
        >
          Datenschutzerklärung von Formspree
        </a>.
      </p>
      <p className={`${bodyCls} mb-3`}>
        Wir löschen Kontaktanfragen, sobald sie für die Bearbeitung nicht mehr erforderlich sind,
        in der Regel nach 6 Monaten, sofern keine gesetzlichen Aufbewahrungspflichten
        entgegenstehen.
      </p>
      <p className={bodyCls}>
        <strong>Rechtsgrundlagen:</strong> Vertragserfüllung und vorvertragliche Anfragen (Art. 6
        Abs. 1 S. 1 lit. b) DSGVO); Berechtigte Interessen (Art. 6 Abs. 1 S. 1 lit. f) DSGVO).
      </p>
    </section>

    {/* ── Keine Cookies ─────────────────────────────────────────────────── */}
    <section id="cookies" className="mb-10">
      <h2 className="text-xl font-semibold mb-3">Keine Verwendung von Cookies</h2>
      <p className={bodyCls}>
        Diese Website verwendet keine Cookies. Es werden weder eigene Cookies noch Cookies von
        Drittanbietern gesetzt.
      </p>
    </section>

    {/* ── Lokaler Speicher ──────────────────────────────────────────────── */}
    <section id="localstorage" className="mb-10">
      <h2 className="text-xl font-semibold mb-3">Lokaler Speicher (localStorage)</h2>
      <p className={bodyCls}>
        Diese Website speichert Ihre Darstellungseinstellung (Hell- oder Dunkel-Modus) im lokalen
        Speicher (localStorage) Ihres Browsers. Es handelt sich dabei nicht um ein Cookie und es
        werden keine personenbezogenen Daten übertragen. Diese Einstellung verbleibt ausschließlich
        auf Ihrem Gerät und kann jederzeit über die Browser-Einstellungen gelöscht werden.
      </p>
    </section>

    {/* ── Externe Links ─────────────────────────────────────────────────── */}
    <section id="externe-links" className="mb-10">
      <h2 className="text-xl font-semibold mb-3">Externe Links</h2>
      <p className={bodyCls}>
        Diese Website enthält Links zu externen Diensten (z. B. GitHub, LinkedIn, YouTube). Wenn
        Sie diese Links anklicken, verlassen Sie diese Website. Für die dortige Datenverarbeitung
        sind die jeweiligen Anbieter verantwortlich. Auf deren Datenschutzpraktiken haben wir
        keinen Einfluss.
      </p>
    </section>

    {/* ── Rechte der betroffenen Personen ────────────────────────────────── */}
    <section id="rechte" className="mb-10">
      <h2 className="text-xl font-semibold mb-3">Rechte der betroffenen Personen</h2>
      <p className={`${bodyCls} mb-3`}>
        <strong>Rechte der betroffenen Personen aus der DSGVO:</strong> Ihnen stehen als Betroffene
        nach der DSGVO verschiedene Rechte zu, die sich insbesondere aus Art. 15 bis 21 DSGVO
        ergeben:
      </p>
      <ul className={listCls}>
        <li>
          <strong>Widerspruchsrecht:</strong> Sie haben das Recht, aus Gründen, die sich aus Ihrer
          besonderen Situation ergeben, jederzeit gegen die Verarbeitung der Sie betreffenden
          personenbezogenen Daten, die aufgrund von Art. 6 Abs. 1 lit. e oder f DSGVO erfolgt,
          Widerspruch einzulegen; dies gilt auch für ein auf diese Bestimmungen gestütztes
          Profiling.
        </li>
        <li>
          <strong>Widerrufsrecht bei Einwilligungen:</strong> Sie haben das Recht, erteilte
          Einwilligungen jederzeit zu widerrufen.
        </li>
        <li>
          <strong>Auskunftsrecht:</strong> Sie haben das Recht, eine Bestätigung darüber zu
          verlangen, ob betreffende Daten verarbeitet werden und auf Auskunft über diese Daten
          sowie auf weitere Informationen und Kopie der Daten entsprechend den gesetzlichen
          Vorgaben.
        </li>
        <li>
          <strong>Recht auf Berichtigung:</strong> Sie haben entsprechend den gesetzlichen Vorgaben
          das Recht, die Vervollständigung der Sie betreffenden Daten oder die Berichtigung der Sie
          betreffenden unrichtigen Daten zu verlangen.
        </li>
        <li>
          <strong>Recht auf Löschung und Einschränkung der Verarbeitung:</strong> Sie haben nach
          Maßgabe der gesetzlichen Vorgaben das Recht, zu verlangen, dass Sie betreffende Daten
          unverzüglich gelöscht werden, bzw. alternativ nach Maßgabe der gesetzlichen Vorgaben eine
          Einschränkung der Verarbeitung der Daten zu verlangen.
        </li>
        <li>
          <strong>Recht auf Datenübertragbarkeit:</strong> Sie haben das Recht, Sie betreffende
          Daten, die Sie uns bereitgestellt haben, nach Maßgabe der gesetzlichen Vorgaben in einem
          strukturierten, gängigen und maschinenlesbaren Format zu erhalten oder deren Übermittlung
          an einen anderen Verantwortlichen zu fordern.
        </li>
        <li>
          <strong>Beschwerde bei Aufsichtsbehörde:</strong> Sie haben unbeschadet eines
          anderweitigen verwaltungsrechtlichen oder gerichtlichen Rechtsbehelfs das Recht auf
          Beschwerde bei einer Aufsichtsbehörde, insbesondere in dem Mitgliedstaat ihres
          gewöhnlichen Aufenthaltsorts, ihres Arbeitsplatzes oder des Orts des mutmaßlichen
          Verstoßes, wenn Sie der Ansicht sind, dass die Verarbeitung der Sie betreffenden
          personenbezogenen Daten gegen die Vorgaben der DSGVO verstößt.
        </li>
      </ul>
    </section>

    {/* ── Änderung und Aktualisierung ───────────────────────────────────── */}
    <section id="anderung" className="mb-10">
      <h2 className="text-xl font-semibold mb-3">Änderung und Aktualisierung</h2>
      <p className={`${bodyCls} mb-3`}>
        Wir bitten Sie, sich regelmäßig über den Inhalt unserer Datenschutzerklärung zu
        informieren. Wir passen die Datenschutzerklärung an, sobald die Änderungen der von uns
        durchgeführten Datenverarbeitungen dies erforderlich machen. Wir informieren Sie, sobald
        durch die Änderungen eine Mitwirkungshandlung Ihrerseits (z. B. Einwilligung) oder eine
        sonstige individuelle Benachrichtigung erforderlich wird.
      </p>
      <p className={bodyCls}>
        Sofern wir in dieser Datenschutzerklärung Adressen und Kontaktinformationen von Unternehmen
        und Organisationen angeben, bitten wir zu beachten, dass die Adressen sich über die Zeit
        ändern können und bitten die Angaben vor Kontaktaufnahme zu prüfen.
      </p>
    </section>
  </>
);

/* -------------------------------------------------------------------------- */
/*  English                                                                    */
/* -------------------------------------------------------------------------- */

/** English privacy policy content. */
export const PrivacyContentEN = () => (
  <>
    <h1 className="text-3xl font-bold mb-2">Privacy Policy</h1>
    <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
      As of: 15 March 2026
    </p>

    {/* ── Table of contents ─────────────────────────────────────────────── */}
    <section className="mb-10">
      <h2 className="text-xl font-semibold mb-3">Table of Contents</h2>
      <ul className={listCls}>
        {[
          ["#controller", "Controller"],
          ["#overview", "Overview of Processing Activities"],
          ["#legal-bases", "Applicable Legal Bases"],
          ["#security", "Security Measures"],
          ["#hosting", "Provision of the Online Offering and Web Hosting"],
          ["#speed-insights", "Vercel Speed Insights"],
          ["#contact", "Contact"],
          ["#cookies", "No Use of Cookies"],
          ["#localstorage", "Local Storage"],
          ["#external-links", "External Links"],
          ["#rights", "Rights of Data Subjects"],
          ["#changes", "Changes and Updates"],
        ].map(([href, label]) => (
          <li key={href}>
            <a href={href} className={linkCls}>{label}</a>
          </li>
        ))}
      </ul>
    </section>

    {/* ── Controller ────────────────────────────────────────────────────── */}
    <section id="controller" className="mb-10">
      <h2 className="text-xl font-semibold mb-3">Controller</h2>
      <p className={bodyCls}>See Legal Notice</p>
    </section>

    {/* ── Overview of Processing Activities ──────────────────────────────── */}
    <section id="overview" className="mb-10">
      <h2 className="text-xl font-semibold mb-3">Overview of Processing Activities</h2>
      <p className={`${bodyCls} mb-3`}>
        The following overview summarises the types of data processed and the purposes of their
        processing, and refers to the data subjects concerned.
      </p>
      <h3 className={h3Cls}>Types of Data Processed</h3>
      <ul className={`${listCls} mb-4`}>
        <li>Contact data (e.g. name, email address).</li>
        <li>Content data (e.g. text entered in forms).</li>
        <li>
          Usage data (e.g. page views and time spent, click paths, types of devices and operating
          systems used).
        </li>
        <li>Meta, communication and procedural data (e.g. IP addresses, timestamps).</li>
        <li>Log data (e.g. log files relating to access and retrieval).</li>
      </ul>
      <h3 className={h3Cls}>Categories of Data Subjects</h3>
      <ul className={`${listCls} mb-4`}>
        <li>Users (e.g. website visitors).</li>
        <li>Communication partners (e.g. persons making enquiries via the contact form).</li>
      </ul>
      <h3 className={h3Cls}>Purposes of Processing</h3>
      <ul className={listCls}>
        <li>Provision of our online offering and user experience.</li>
        <li>Responding to contact enquiries and communication.</li>
        <li>Security measures.</li>
        <li>IT infrastructure.</li>
      </ul>
    </section>

    {/* ── Applicable Legal Bases ─────────────────────────────────────────── */}
    <section id="legal-bases" className="mb-10">
      <h2 className="text-xl font-semibold mb-3">Applicable Legal Bases</h2>
      <p className={`${bodyCls} mb-3`}>
        <strong>Applicable legal bases under the GDPR:</strong> The following provides an overview
        of the legal bases under the GDPR on which we process personal data. Please note that, in
        addition to the provisions of the GDPR, national data protection laws may apply in your
        country or our country of residence or establishment. Where more specific legal bases apply
        in individual cases, we will inform you of these in this Privacy Policy.
      </p>
      <ul className={`${listCls} mb-4`}>
        <li>
          <strong>
            Performance of a contract and pre-contractual enquiries (Art. 6(1)(b) GDPR)
          </strong>{" "}
          – Processing is necessary for the performance of a contract to which the data subject is
          party or in order to take steps at the request of the data subject prior to entering into
          a contract.
        </li>
        <li>
          <strong>Legitimate interests (Art. 6(1)(f) GDPR)</strong> – Processing is necessary for
          the purposes of the legitimate interests pursued by the controller or by a third party,
          provided that the interests, fundamental rights and fundamental freedoms of the data
          subject that require the protection of personal data do not override those interests.
        </li>
      </ul>
      <p className={bodyCls}>
        <strong>National data protection regulations in Germany:</strong> In addition to the data
        protection provisions of the GDPR, national data protection laws apply in Germany. These
        include, in particular, the Act on Protection against Misuse of Personal Data in Data
        Processing (Federal Data Protection Act – BDSG). The BDSG contains specific provisions on
        the right of access, the right to erasure, the right to object, the processing of special
        categories of personal data, processing for other purposes and transmission, as well as
        automated individual decision-making including profiling. In addition, the data protection
        laws of the individual federal states may apply.
      </p>
    </section>

    {/* ── Security Measures ──────────────────────────────────────────────── */}
    <section id="security" className="mb-10">
      <h2 className="text-xl font-semibold mb-3">Security Measures</h2>
      <p className={`${bodyCls} mb-3`}>
        We implement appropriate technical and organisational measures in accordance with the
        applicable legal requirements, taking into account the state of the art, the costs of
        implementation, and the nature, scope, context and purposes of processing, as well as the
        varying likelihood and severity of the risks to the rights and freedoms of natural persons,
        in order to ensure a level of protection appropriate to the risk.
      </p>
      <p className={bodyCls}>
        The measures include, in particular, safeguarding the confidentiality, integrity and
        availability of data by controlling physical and electronic access to the data, as well as
        access to, input, disclosure, securing of availability and separation of such data. Data
        transmission between your browser and our server is protected by TLS/SSL encryption
        (HTTPS).
      </p>
    </section>

    {/* ── Hosting ────────────────────────────────────────────────────────── */}
    <section id="hosting" className="mb-10">
      <h2 className="text-xl font-semibold mb-3">
        Provision of the Online Offering and Web Hosting
      </h2>
      <p className={`${bodyCls} mb-3`}>
        We process users&apos; data in order to be able to provide our online services. For this
        purpose, we process users&apos; IP addresses, which are necessary to transmit the content
        and functions of our online services to the user&apos;s browser or device.
      </p>
      <h3 className={h3Cls}>Hosting Provider</h3>
      <p className={`${bodyCls} mb-3`}>
        This website is hosted by{" "}
        <strong>Vercel Inc., San Francisco, CA, USA</strong>. As a data processor, Vercel processes
        usage data and log data (e.g. IP addresses, browser type, access times) for the operation
        and security of the website. Vercel is certified under the EU-US Data Privacy Framework
        (DPF) and thus provides an adequate level of data protection for the transfer of personal
        data to the United States. Further information can be found in{" "}
        <a
          href="https://vercel.com/legal/privacy-policy"
          target="_blank"
          rel="noopener noreferrer"
          className={linkCls}
        >
          Vercel&apos;s Privacy Policy
        </a>.
      </p>
      <h3 className={h3Cls}>Collection of Access Data and Log Files</h3>
      <p className={`${bodyCls} mb-3`}>
        Access to our online offering is logged in the form of server log files. Server log files
        may include the address and name of the web pages and files accessed, the date and time of
        access, the volume of data transferred, notification of successful access, the browser type
        and version, the user&apos;s operating system, the referrer URL and, as a rule, IP
        addresses and the requesting provider. Server log files are used for security purposes
        (e.g. to prevent DDoS attacks) and to ensure server stability. Log file information is
        stored for a maximum period of 30 days and thereafter erased or anonymised. Data whose
        further retention is required for evidentiary purposes is exempt from erasure until the
        final resolution of the incident concerned.
      </p>
      <p className={bodyCls}>
        <strong>Legal bases:</strong> Legitimate interests (Art. 6(1)(f) GDPR).
      </p>
    </section>

    {/* ── Vercel Speed Insights ──────────────────────────────────────────── */}
    <section id="speed-insights" className="mb-10">
      <h2 className="text-xl font-semibold mb-3">Vercel Speed Insights</h2>
      <p className={`${bodyCls} mb-3`}>
        This website uses <strong>Vercel Speed Insights</strong>, a service provided by Vercel
        Inc., San Francisco, CA, USA, for measuring website performance and Core Web Vitals. The
        following technical metrics data is collected:
      </p>
      <ul className={`${listCls} mb-3`}>
        <li>Performance metrics (Core Web Vitals: LCP, INP, CLS, FCP, TTFB).</li>
        <li>URL / page visited.</li>
        <li>Browser type and device type.</li>
        <li>Connection data (e.g. IP address, country).</li>
      </ul>
      <p className={`${bodyCls} mb-3`}>
        Data is transmitted to Vercel&apos;s servers in the United States. Vercel is certified under
        the EU-US Data Privacy Framework (DPF). No cookies are set and no user profiles are
        created. The metrics data is used solely for the technical optimisation of this website.
        Further information can be found in{" "}
        <a
          href="https://vercel.com/legal/privacy-policy"
          target="_blank"
          rel="noopener noreferrer"
          className={linkCls}
        >
          Vercel&apos;s Privacy Policy
        </a>.
      </p>
      <p className={bodyCls}>
        <strong>Legal bases:</strong> Legitimate interests (Art. 6(1)(f) GDPR) — legitimate
        interest in the technical quality assurance and optimisation of this website.
      </p>
    </section>

    {/* ── Contact ────────────────────────────────────────────────────────── */}
    <section id="contact" className="mb-10">
      <h2 className="text-xl font-semibold mb-3">Contact</h2>
      <p className={`${bodyCls} mb-3`}>
        When you contact us via the contact form, we process the data you provide (name, email
        address, message content) to handle your enquiry. Your data is transmitted via and processed
        and stored on the servers of{" "}
        <strong>Formspree (Formspree, Inc., USA)</strong> in the United States (Amazon Web
        Services).
      </p>
      <p className={`${bodyCls} mb-3`}>
        The data transfer to the United States is based on standard contractual clauses (SCCs)
        pursuant to Art. 46(2)(c) GDPR. Further information can be found in{" "}
        <a
          href="https://formspree.io/legal/privacy-policy"
          target="_blank"
          rel="noopener noreferrer"
          className={linkCls}
        >
          Formspree&apos;s Privacy Policy
        </a>.
      </p>
      <p className={`${bodyCls} mb-3`}>
        We erase contact enquiries as soon as they are no longer required for processing, typically
        after 6 months, unless statutory retention obligations require otherwise.
      </p>
      <p className={bodyCls}>
        <strong>Legal bases:</strong> Performance of a contract and pre-contractual enquiries
        (Art. 6(1)(b) GDPR); legitimate interests (Art. 6(1)(f) GDPR).
      </p>
    </section>

    {/* ── No Cookies ─────────────────────────────────────────────────────── */}
    <section id="cookies" className="mb-10">
      <h2 className="text-xl font-semibold mb-3">No Use of Cookies</h2>
      <p className={bodyCls}>
        This website does not use cookies. Neither first-party nor third-party cookies are set.
      </p>
    </section>

    {/* ── Local Storage ──────────────────────────────────────────────────── */}
    <section id="localstorage" className="mb-10">
      <h2 className="text-xl font-semibold mb-3">Local Storage</h2>
      <p className={bodyCls}>
        This website saves your display preference (light or dark mode) in your browser&apos;s
        localStorage. This is not a cookie and no personal data is transmitted. The preference
        remains solely on your device and can be cleared at any time via your browser settings.
      </p>
    </section>

    {/* ── External Links ─────────────────────────────────────────────────── */}
    <section id="external-links" className="mb-10">
      <h2 className="text-xl font-semibold mb-3">External Links</h2>
      <p className={bodyCls}>
        This website contains links to external services (e.g. GitHub, LinkedIn, YouTube). When you
        follow these links, you leave this website. The respective operators of those services are
        responsible for their data protection practices, over which we have no influence.
      </p>
    </section>

    {/* ── Rights of Data Subjects ────────────────────────────────────────── */}
    <section id="rights" className="mb-10">
      <h2 className="text-xl font-semibold mb-3">Rights of Data Subjects</h2>
      <p className={`${bodyCls} mb-3`}>
        <strong>Rights of data subjects under the GDPR:</strong> As a data subject, you have
        various rights under the GDPR, arising in particular from Arts. 15 to 21 GDPR:
      </p>
      <ul className={listCls}>
        <li>
          <strong>Right to object:</strong> You have the right to object at any time, on grounds
          relating to your particular situation, to the processing of personal data concerning you
          that is based on Art. 6(1)(e) or (f) GDPR; this also applies to profiling based on those
          provisions.
        </li>
        <li>
          <strong>Right to withdraw consent:</strong> You have the right to withdraw consent given
          at any time.
        </li>
        <li>
          <strong>Right of access:</strong> You have the right to request confirmation as to
          whether data concerning you is being processed, and to obtain access to such data, as
          well as further information and a copy of the data in accordance with the applicable legal
          provisions.
        </li>
        <li>
          <strong>Right to rectification:</strong> You have the right, in accordance with the
          applicable legal provisions, to request the completion of data concerning you or the
          rectification of inaccurate data concerning you.
        </li>
        <li>
          <strong>Right to erasure and restriction of processing:</strong> You have the right, in
          accordance with the applicable legal provisions, to request the immediate erasure of data
          concerning you, or alternatively to request the restriction of processing of the data in
          accordance with the applicable legal provisions.
        </li>
        <li>
          <strong>Right to data portability:</strong> You have the right to receive data concerning
          you that you have provided to us, in a structured, commonly used and machine-readable
          format, or to request the transfer of such data to another controller, in accordance with
          the applicable legal provisions.
        </li>
        <li>
          <strong>Right to lodge a complaint with a supervisory authority:</strong> Without
          prejudice to any other administrative or judicial remedy, you have the right to lodge a
          complaint with a supervisory authority, in particular in the Member State of your habitual
          residence, your place of work or the place of the alleged infringement, if you consider
          that the processing of personal data concerning you infringes the provisions of the GDPR.
        </li>
      </ul>
    </section>

    {/* ── Changes and Updates ────────────────────────────────────────────── */}
    <section id="changes" className="mb-10">
      <h2 className="text-xl font-semibold mb-3">Changes and Updates</h2>
      <p className={`${bodyCls} mb-3`}>
        We ask you to regularly review the content of this Privacy Policy. We update the Privacy
        Policy as soon as changes to the data processing we carry out make this necessary. We will
        notify you as soon as any changes require an action on your part (e.g. consent) or any
        other individual notification.
      </p>
      <p className={bodyCls}>
        Where we provide addresses and contact details of companies and organisations in this
        Privacy Policy, please note that addresses may change over time and we ask you to verify
        the details before making contact.
      </p>
    </section>
  </>
);
