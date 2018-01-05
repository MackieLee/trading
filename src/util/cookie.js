export const setCookie = function(u_name,value,expiredays){
  var exdate=new Date()
  exdate.setDate(exdate.getDate()+expiredays)
  document.cookie=u_name+ "=" + escape(value)+
  ((expiredays==null) ? "" : ";expires="+exdate.toGMTString())
}
export const getCookie = function(u_name){
  if (document.cookie.length>0){
    let u_start = document.cookie.indexOf(u_name + "=")
    let u_end = ''
    if (u_start!=-1){
      u_start = u_start + u_name.length+1
      u_end = document.cookie.indexOf(";",u_start)
      if (u_end==-1) u_end=document.cookie.length
      return unescape(document.cookie.substring(u_start,u_end))
    }
  }
  return ""
}
