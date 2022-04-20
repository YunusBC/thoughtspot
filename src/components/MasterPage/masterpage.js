import React from 'react';
import './index.css';

const MasterPage = () => {
  return (
    <React.Fragment>
      <div className="column paddingBottom">
        <div className="banner"></div>
      </div>
      <div className="ui grid">
          <div className="left floated six wide column">
            <h1 className="bigTitle">DASHBOARD</h1>
          </div>
          <div className="right floated six wide column">
            <div className="client-number-chooser-container"><span className="padding5Right"><img width="22" alt="" height="22" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACkAAAAhCAYAAABEM4KbAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAADqSURBVFhHY2QIWvqfgULw4EgblEUbwASlBzUYHo7MijCDsgYO4HWkp5Mmw9RQFTA9kACrIyN89Bn+r41i2JZtCOaDaBAfJD4QAKsjV2y5yNCy5xmUBwEgPkh8IADeIggUemuufWMI0eJiYAxeBhXFBCB1tAQ402RCoBGYDq3dAKZh/IEAOB15/el7eOiB6GtP3oPZAwFwOvLkqftQFgScOo3KpyfA6cjBBIaEIxkfiGlT3MCgNRiNbmqBUUdSC4w6klqA8T8QQNmDFoxGN7XAqCOpBYZG7h5tYFAJjDqSWmDUkdQCQ8CRDAwAPOo6dm9NpM4AAAAASUVORK5CYIJIstCycUCNkAQ3MGjbOKCGM/E0MKhhPLXMGBJpctSRIyq6WTZceEktD9PEHGADw340TVIraEdDckSFJIucIMddavmYFuZwsjGdAACMZkj2MtXf6gAAAABJRU5ErkJggg=="/></span><span>6/6 Clients Selected</span></div>
          </div>
        </div>
    </React.Fragment>
  )
}

export default MasterPage;