import React from 'react/addons';

const render = function() {
    var cx = React.addons.classSet;
    var collapsableClasses = cx({
      'panel-collapse': true,
      'collapse': true,
      'in': this.state.isCollapsed
    });
    return (
        <div className="panel panel-default">
          <div className="panel-heading">
            <h4 className="panel-title">
              <a role="button" data-toggle="collapse" className="collapsed" onClick={this.togglePanel}>{this.props.header}</a>
            </h4>
          </div>
          <div className={collapsableClasses} role="tabpanel">
            <div className="panel-body">
              {this.props.children}
            </div>
          </div>
        </div>
    );
};

export default render;
