Java.perform(function (){
      console.log("[*] Script loaded")
      var Certificate = Java.use("java.security.cert.Certificate")
      var CertificateFactory = Java.use("java.security.cert.CertificateFactory")

	  console.log("[*] Loading CA")
      
      cf = CertificateFactory.getInstance("X.509")
   	  cf.generateCertificate.overload("java.io.InputStream").implementation = function(a) {
      console.log("[*] generateCertificate function invoked")
      var cert = cf.generateCertificate.overload("java.io.InputStream").call(this, a)

      return cert
      } 
  });

