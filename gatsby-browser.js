import "./src/css/style.css"

export const onClientEntry = () => {
  window.onload = () => {
	  document.querySelectorAll('a').forEach(item => {
	    item.addEventListener('click', event => {
	      let linkUrl = new URL(item.getAttribute('href'), window.location.href); // Using the second argument to handle relative URLs
	      let currentHostname = window.location.hostname;
	 
	      if (linkUrl.hostname !== currentHostname) { // If the link's hostname is different from the current page's hostname
	        let domainParts = linkUrl.hostname.split('.');
	        let domainName = domainParts.length > 1 ? domainParts[domainParts.length - 2] : domainParts[0];
	 
	        window.fathom.trackEvent(`Affiliate: ${domainName}`);
	        console.log('EVENT TRACKED')
	      }
	    });
	  });
  }
}