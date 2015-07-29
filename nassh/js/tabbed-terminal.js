Polymer({
  is: 'tabbed-terminal',
  
  properties: {
    tabs: {
      type: Array,
      value: function() { return []; },
      notify: true
    },
    selected: {
      type: Number,
      value: 0,
      notify: true,
      observer: '_terminalChanged'
    }
  },
  
  created: function() {
    lib.init(this.addTerminal.bind(this));
  },
  
  addTerminal: function() {
    var terminalNumber = this.tabs.length + 1;
    
    this.push('tabs', {
      title: 'Terminal ' + terminalNumber,
      terminal: 'terminal-' + terminalNumber
    });
  
    this.selected = terminalNumber - 1;
  },
  
  closeTerminal: function(event, detail, sender) {
    event.stopPropagation();
    
    if (this.tabs.length == 1) {
      window.close();
    }
    
    for (var i = 0; i < this.tabs.length; i++) {
      if (this.tabs[i]['terminal'] == event.currentTarget.name) {
        this.splice('tabs', i, 1);
        this.selected = i - 1;
        break;
      }
    }
  },
  
  _terminalChanged: function(index, old) {
    var terminal  = this.querySelector('#terminal-' + (index + 1));
    
    if (null !== terminal) {
      terminal.focus();
    }
  }
});