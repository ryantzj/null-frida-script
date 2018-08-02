Java.perform(function(){
  console.log("[*] script loaded");

  var Cipher = Java.use("javax.crypto.Cipher");
  Cipher.init.overload('int', 'java.security.Key').implementation  = function(opmode, key){
      console.log("[*] Cipher.init called");
      console.log("[*] Print opmode： " +opmode)
	  console.log("[*] Print key: " +key)
      this.init.overload('int', 'java.security.Key').call(this, opmode, key);
  }
});
