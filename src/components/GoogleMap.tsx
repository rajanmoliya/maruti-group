export default function MapComponent() {
  return (
    <div style={{ width: "100%", height: "400px", overflow: "hidden" }}>
      <iframe
        title="Google Map"
        width="100%"
        height="100%"
        frameBorder="0"
        style={{ border: 0 }}
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d933.7626433519024!2d72.93395726004276!3d20.585992196077147!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be0c336eaa081a7%3A0x35601a1129efef13!2sMaruti%20villa!5e0!3m2!1sen!2sin!4v1735992976408!5m2!1sen!2sin"
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}
