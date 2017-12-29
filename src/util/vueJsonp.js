// export default jsonp = function(url){
//   var body = document.getElementsByTagName('body')[0];
//   var script = document.createElement('script');
//   script.setAttribute('src',url);
//   body.appendChild(script);
// }

function jsonp(url, opts, fn){
  if ('function' == typeof opts) {
    fn = opts
    opts = {}
  }
  if (!opts) opts = {}
  var prefix = opts.prefix || '__jp'
  // use the callback name that was passed if one was provided.
  // otherwise generate a unique name by incrementing our counter.
  var param = opts.param || 'callback'
  var enc = encodeURIComponent
  var target = document.getElementsByTagName('script')[0] || document.head
  var script
  window[id] = function(data){
    debug('jsonp got', data)
    cleanup()
    if (fn) fn(null, data)
  }

  // create script
  script = document.createElement('script')
  script.src = url
  target.parentNode.insertBefore(script, target)

  return cancel;
}
