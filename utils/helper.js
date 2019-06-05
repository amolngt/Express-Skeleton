exports.formatNumber = function(number) {
  var nf = new Intl.NumberFormat();
  return nf.format(number);
};
