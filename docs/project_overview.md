##Overall Project Structure##

nowqwik is the new front end for solampio.com and will provide e-commerce shopping, educational content and helpful tool and apps, to help people with sustainable living (solar panels and batteries to start, and expanding to other sustainable living products). I am documenting the overall project here since it is the front end app.

##Qwik##
now qwik uses qwik and qwikcity hosted on cloudflare pages. At some point this may be transitioned over to cloudflare workers but I don't know about compatibility between qwik and workers at this time.

Qwik sends and receives data from the CMS Strapi.

##Strapi##
Strapi is our open source cms hosted on google cloud run. cloud run is causing some slow cold boots which is fine for now but in the future we will want to configure cloud run to be always on, or move to a VM. At the moment it does not seem like strapi is a good candidate for hosting on cloudflare.

Strapi is like a librarian organizing all of our various website data, like products, customers, brands. It creates an API for this data that we plug into our front end. Strapi also passes data from the website to our ERP.

##solamp-starpi##
solamp-strapi is our PostgreSQL 17 database hosting strapi's structural data on google cloud. Setting up the reverse proxy for authentication with strapi gui was a major pita. It was good for the long term health of the project.

##Cloudflare R2##
R2 is our host for media, pictures, videos and other documents. Since our media and front end are both on cloudflare we are not charged for egress and it is super fast. All files are uploaded using strapi GUI, and linked via strapi API to our front end. Images are optimized

##ERPNext##
ERPnext is our open source EPR, hosted on frappe. It is working on frappe so no need to move it anywhere in the short term, but may be nice to consolidate service providers in the future. Like strapi, EPRNext has a front end interface and API for accessing all data

##other apps##
BigCommerce
BC is the ecommerce platform that we are migrating from. We will build out connectors on cf workers to transfer data from BC to strapi. Strapi will send this data to ERP. This way our new system will be able to seamlessly switch to the new website with all our data in sync

##ContentForge##
ContentForge is our demo app that is used for generating ecom and learning content from Gemini. We will at some point connect this into Strapi to automatically pull generated content. This project has evolved into ContentForgeBrand(not working) and Brand-id (in development, preplaces CFB). We have also derived our core ai logic from CFB and have it in repo orchestrator 

##Moodle##
Moodle is our LMS. It is hosted on scallahosting - would be good to move over to an unmanaged server at some point. Video is hosted on Vemio and it would be nice to transition all the LMS media to CF R2.

##Pikapods##
Pikapods is hosting a ghost blog site and Calibre web server - would be nice to pull these over somewhere eventually

##Minecraft##
Need to set up a minecraft server somewhere

##Domain Names##
All of our domain names are hosted on Cloudflare who is also our DNS a SSL provider