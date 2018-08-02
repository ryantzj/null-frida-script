setTimeout(function(){
     Java.perform(function (){
      console.log("[*] Script loaded")
      
      var FileInputStream = Java.use("java.io.FileInputStream")
      var BufferedInputStream = Java.use("java.io.BufferedInputStream")
      var CertificateFactory = Java.use("java.security.cert.CertificateFactory")
      var Certificate = Java.use("java.security.cert.Certificate")

      //load CA from an InputStream
      console.log("[*] Loading CA")
      cf = CertificateFactory.getInstance("X.509")

      try {
        var fileInputStream = FileInputStream.$new("/data/local/tmp/cert-der.crt")
      }
      catch(err) {
       console.log("[*] " + err);
      }
      
      var bufferedInputStream = BufferedInputStream.$new(fileInputStream)
     
      cf.generateCertificate.overload("java.io.InputStream").implementation = function(a) {
      console.log("[*] generateCertificate function invoked")
      var cert = cf.generateCertificate.overload("java.io.InputStream").call(this, bufferedInputStream)
      console.log("[*] generated certificate with our CA")

      return cert
      } 

     });

});
