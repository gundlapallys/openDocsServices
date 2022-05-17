//QA OneTrust Cookies Consent Notice start for infineon.com
const cookieConsentId = '85f8227d-e015-4c62-ab96-ee1a08760fb3-test';
const OtAutoBlockScript = '<script type="text/javascript" src="https://cdn.cookielaw.org/consent/'+cookieConsentId+'/OtAutoBlock.js"></script>';

const otSDKStubScript = '<script src="https://cdn.cookielaw.org/scripttemplates/otSDKStub.js" data-document-language="true"'+
'type="text/javascript" charset="UTF-8" data-domain-script="'+cookieConsentId+'" ></script>'+
'<script type="text/javascript">function OptanonWrapper() { }</script>';
document.head.innerHTML = document.head.innerHTML+OtAutoBlockScript+otSDKStubScript;
//QA OneTrust Cookies Consent Notice end for infineon.com

// Google Tag Manager
const GTMSCRIPT_ID = "GTM-N8N7WR8";
const GTMSCRIPT = "<script type='text/javascript'>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':"+
"new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],"+
"j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src="+
"'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);"+
"})(window,document,'script','dataLayer','"+GTMSCRIPT_ID+"');</script>";

document.head.innerHTML = document.head.innerHTML+GTMSCRIPT;

// End Google Tag Manager

window.onload = function() {
	// Google Tag Manager (noscript)
document.body.innerHTML = document.body.innerHTML + "<noscript><iframe src='https://www.googletagmanager.com/ns.html?id="+GTMSCRIPT_ID+"'"+
				"height='0' width='0' style='display:none;visibility:hidden'></noscript>";
// End Google Tag Manager (noscript)

}

