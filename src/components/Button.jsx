import React from 'react';

const Button = ({ text, className, id, href, download, target }) => {
  const handleClick = (e) => {
    // If href exists, let browser handle it (download / link)
    if (href) return;

    e.preventDefault();
    const targetEl = document.getElementById(id);

    if (targetEl && id) {
      const offset = window.innerHeight * 0.15;
      const top =
        targetEl.getBoundingClientRect().top +
        window.scrollY -
        offset;

      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <a
      href={href}
      download={download}
      target={target}
      onClick={handleClick}
      className={`${className ?? ''} cta-wrapper`}
    >
      <div className="cta-button group">
        <div className="bg-circle" />
        <p className="text">{text}</p>
        <div className="arrow-wrapper">
          <img src="/images/arrow-down.svg" alt="arrow" />
        </div>
      </div>
    </a>
  );
};

export default Button;