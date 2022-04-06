import React from 'react';

class Accordion extends React.Component {
  constructor(props) {
    super(props);
    this.state = ({
      openId: null
    });
  }

  handleClick(id) {
    // console.log('ID clicked:', id);

    // if (this.state.openId === id) {
    //   this.setState({ openId: null });
    // } else {
    //   this.setState({ openId: id });
    // }

    const openId = this.state.openId === id ? null : id;
    this.setState({ openId });
  }

  render() {
    // console.log('topics:', this.props.topics);
    // console.log('state:', this.state);
    const topicElements = this.props.topics.map(topic => {
      // console.log('topic:', topic);

      // let content = null;
      // if (this.state.openId === topic.id) {
      //   content = <div className='content'>{topic.content}</div>;
      // }

      return (
      <div className='button-container' key={topic.id}>
        <h3 className='title' onClick={() => { this.handleClick(topic.id); }}>{topic.title}</h3>
        {
          this.state.openId === topic.id
            ? <div className='content'>{topic.content}</div>
            : null
         }
      </div>
      );
    });

    return topicElements;
  }
}

export default Accordion;
