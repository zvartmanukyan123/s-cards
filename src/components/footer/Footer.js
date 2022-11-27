import { useFooterStyles } from "./footerStyles";

const Footer = () => {
  const classes = useFooterStyles();
  return <footer className={classes.footerPaper} />;
};

export default Footer;
