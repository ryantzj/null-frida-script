Java.perform(function (){
      console.log("[*] Script loaded")

      var FileInputStream = Java.use("java.io.FileInputStream")
      var BufferedInputStream = Java.use("java.io.BufferedInputStream")
      var CertificateFactory = Java.use("java.security.cert.CertificateFactory")
      var Certificate = Java.use("java.security.cert.Certificate")

      cf = CertificateFactory.getInstance("X.509")

       try {
        var fileInputStream = FileInputStream.$new("/data/local/tmp/cert-der.crt")
        console.log("[*] Cert imported successfully")
      }
      catch(err) {
       console.log("[*] " + err);
      }


  });

