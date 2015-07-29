Polymer({
  is: 'crosh-terminal',
  
  attached: function() {
    var target = this.querySelector('#terminal');
    Crosh.create(target);
  }
});