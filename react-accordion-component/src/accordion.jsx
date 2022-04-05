import React from 'react';

function ButtonGroup(language) {
  // console.log('language:', language);
  return (
  <div className="button-container">
    <button>{language.button}</button>
    <p className={language.showDescription}>{language.description}</p>
  </div>
  );
}

class Accordion extends React.Component {
  constructor(props) {
    super(props);
    this.state({

    });
  }

  handleClick(event) {
    if (event.target.key === 'html') {
      this.setState();
    }
  }

  render() {
    const buttonList = this.props.data.map(language =>
      <ButtonGroup key={language.key} value={language}/>);

    return (
      <div className="main-container">{buttonList}</div>
    );
  }
}

export default Accordion;
