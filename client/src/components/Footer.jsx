function Footer() {
  const currentYear = new Date();
  return <footer>Cats Incorpurrate &#8482; &#169; {currentYear.getFullYear()}</footer>;
}

export default Footer;
