// Fonte única dos canais de contato: usada pela seção Contato e pelo Footer
const contacts = [
  {
    id: 'github',
    label: 'GitHub',
    href: 'https://github.com/flpzht',
  },
  {
    id: 'linkedin',
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/felipecarvalhodesouzabarros/',
  },
  {
    id: 'email',
    label: 'Email',
    href: 'mailto:flpcsb@hotmail.com',
  },
  {
    id: 'whatsapp',
    label: 'WhatsApp',
    href: 'https://wa.me/5521996310874',
  },
];

// Redes exibidas no Footer (sem WhatsApp)
const socialLinks = contacts.filter(({ id }) => id !== 'whatsapp');

export { contacts, socialLinks };
