const SMTPConnection = require('nodemailer/lib/smtp-connection')

let connection = new SMTPConnection({
  port: 25,
  host: 'localhost',
  secure: false,
  ignoreTLS: true,
  name: 'test-client',
  logger: true,
  debug: true,
})

const envelope = {
  from: 'test@localhost',
  to: 'ingress@gseap.ford.home',
}

connection.connect(() => {
  try {
    connection.send(envelope, `
Content-Type: multipart/alternative;
 boundary="------------52425021B51517AE92558F34"
Content-Language: en-US

This is a multi-part message in MIME format.
--------------52425021B51517AE92558F34
Content-Type: text/plain; charset=utf-8
Content-Transfer-Encoding: 8bit


	Google
<https://www.google.com/alerts?source=alertsmail&hl=en&gl=US&msgid=ODQ2NzczNjk2NTY0NzgwODE3OA>
	

	javascript
Daily update â‹… April 18, 2020
	

	NEWS 	

	
ECMAScript 2020 spec for *JavaScript* moves forward
<https://www.google.com/url?rct=j&sa=t&url=https://www.infoworld.com/article/3538809/ecmascript-2020-spec-for-javascript-moves-forward.html&ct=ga&cd=CAEYACoTODQ2NzczNjk2NTY0NzgwODE3ODIaZDljYTFkMGI0ODBlM2JkYTpjb206ZW46VVM&usg=AFQjCNHTg3_AXX2kkNahhNfC1jVmf_ps0g>

InfoWorld
ECMAScript 2020 spec for *JavaScript* moves forward. Slated for formal
approval in June, ECMAScript 2020 introduces new features for module
loading,Â ...
Facebook
<https://www.google.com/alerts/share?hl=en&gl=US&ru=https://www.infoworld.com/article/3538809/ecmascript-2020-spec-for-javascript-moves-forward.html&ss=fb&rt=ECMAScript+2020+spec+for+JavaScript+moves+forward&cd=KhM4NDY3NzM2OTY1NjQ3ODA4MTc4MhpkOWNhMWQwYjQ4MGUzYmRhOmNvbTplbjpVUw&ssp=AMJHsmUu1yZf1hzy9Ijl8DJmBl-VH5DzgA>
	Twitter
<https://www.google.com/alerts/share?hl=en&gl=US&ru=https://www.infoworld.com/article/3538809/ecmascript-2020-spec-for-javascript-moves-forward.html&ss=tw&rt=ECMAScript+2020+spec+for+JavaScript+moves+forward&cd=KhM4NDY3NzM2OTY1NjQ3ODA4MTc4MhpkOWNhMWQwYjQ4MGUzYmRhOmNvbTplbjpVUw&ssp=AMJHsmUu1yZf1hzy9Ijl8DJmBl-VH5DzgA>
	Flag as irrelevant
<https://www.google.com/alerts/feedback?ffu=https://www.infoworld.com/article/3538809/ecmascript-2020-spec-for-javascript-moves-forward.html&source=alertsmail&hl=en&gl=US&msgid=ODQ2NzczNjk2NTY0NzgwODE3OA&s=AB2Xq4j54gzXweT91DH7xGRAq94kSB9QczE0AZs>


	

	
Programming languages: *JavaScript* now used by 12 million developers
but Kotlin rises fastest
<https://www.google.com/url?rct=j&sa=t&url=https://www.zdnet.com/article/programming-languages-javascript-now-used-by-12-million-developers-but-kotlin-rises-fastest/&ct=ga&cd=CAEYASoTODQ2NzczNjk2NTY0NzgwODE3ODIaZDljYTFkMGI0ODBlM2JkYTpjb206ZW46VVM&usg=AFQjCNGdNtle_smI9CpfJwXvp3gZ0pPXYg>

ZDNet
*JavaScript* extends its lead as the world's most popular programming
language, followed by Python and Java.
Facebook
<https://www.google.com/alerts/share?hl=en&gl=US&ru=https://www.zdnet.com/article/programming-languages-javascript-now-used-by-12-million-developers-but-kotlin-rises-fastest/&ss=fb&rt=Programming+languages:+JavaScript+now+used+by+12+million+developers+but+Kotlin+rises+fastest&cd=KhM4NDY3NzM2OTY1NjQ3ODA4MTc4MhpkOWNhMWQwYjQ4MGUzYmRhOmNvbTplbjpVUw&ssp=AMJHsmXuG5E2cxTxe3xP_TWN96_EZR6Vvw>
	Twitter
<https://www.google.com/alerts/share?hl=en&gl=US&ru=https://www.zdnet.com/article/programming-languages-javascript-now-used-by-12-million-developers-but-kotlin-rises-fastest/&ss=tw&rt=Programming+languages:+JavaScript+now+used+by+12+million+developers+but+Kotlin+rises+fastest&cd=KhM4NDY3NzM2OTY1NjQ3ODA4MTc4MhpkOWNhMWQwYjQ4MGUzYmRhOmNvbTplbjpVUw&ssp=AMJHsmXuG5E2cxTxe3xP_TWN96_EZR6Vvw>
	Flag as irrelevant
<https://www.google.com/alerts/feedback?ffu=https://www.zdnet.com/article/programming-languages-javascript-now-used-by-12-million-developers-but-kotlin-rises-fastest/&source=alertsmail&hl=en&gl=US&msgid=ODQ2NzczNjk2NTY0NzgwODE3OA&s=AB2Xq4j54gzXweT91DH7xGRAq94kSB9QczE0AZs>


	

	
Coronavirus' business impact: *JavaScript* Web Frameworks Software
Market 2025 Expected to ...
<https://www.google.com/url?rct=j&sa=t&url=https://www.curiousdesk.com/coronavirus-business-impact-javascript-web-frameworks-software-market-2025-expected-to-rise-at-a-higher-cagr-value-driving-factors-sales-and-revenue/&ct=ga&cd=CAEYAioTODQ2NzczNjk2NTY0NzgwODE3ODIaZDljYTFkMGI0ODBlM2JkYTpjb206ZW46VVM&usg=AFQjCNENBOJXoxZIX-IMXCtkfAk_FofTzg>

Curious Desk (blog)
The research study has been prepared with the use of in-depth
qualitative and quantitative analyses of the global *JavaScript* Web
Frameworks SoftwareÂ ...
Facebook
<https://www.google.com/alerts/share?hl=en&gl=US&ru=https://www.curiousdesk.com/coronavirus-business-impact-javascript-web-frameworks-software-market-2025-expected-to-rise-at-a-higher-cagr-value-driving-factors-sales-and-revenue/&ss=fb&rt=Coronavirus%27+business+impact:+JavaScript+Web+Frameworks+Software+Market+2025+Expected+to+...&cd=KhM4NDY3NzM2OTY1NjQ3ODA4MTc4MhpkOWNhMWQwYjQ4MGUzYmRhOmNvbTplbjpVUw&ssp=AMJHsmUYzaZc9uxnsr8OvXSk1-r39OCwIA>
	Twitter
<https://www.google.com/alerts/share?hl=en&gl=US&ru=https://www.curiousdesk.com/coronavirus-business-impact-javascript-web-frameworks-software-market-2025-expected-to-rise-at-a-higher-cagr-value-driving-factors-sales-and-revenue/&ss=tw&rt=Coronavirus%27+business+impact:+JavaScript+Web+Frameworks+Software+Market+2025+Expected+to+...&cd=KhM4NDY3NzM2OTY1NjQ3ODA4MTc4MhpkOWNhMWQwYjQ4MGUzYmRhOmNvbTplbjpVUw&ssp=AMJHsmUYzaZc9uxnsr8OvXSk1-r39OCwIA>
	Flag as irrelevant
<https://www.google.com/alerts/feedback?ffu=https://www.curiousdesk.com/coronavirus-business-impact-javascript-web-frameworks-software-market-2025-expected-to-rise-at-a-higher-cagr-value-driving-factors-sales-and-revenue/&source=alertsmail&hl=en&gl=US&msgid=ODQ2NzczNjk2NTY0NzgwODE3OA&s=AB2Xq4j54gzXweT91DH7xGRAq94kSB9QczE0AZs>


	

	
iJS and DevOpsCon: Online editions take place from 20 to 21 April
<https://www.google.com/url?rct=j&sa=t&url=https://jaxenter.com/ijs-devopscon-online-171129.html&ct=ga&cd=CAEYAyoTODQ2NzczNjk2NTY0NzgwODE3ODIaZDljYTFkMGI0ODBlM2JkYTpjb206ZW46VVM&usg=AFQjCNHmDM0kI2hxdlKcO1xZuonkR4SwVw>

JAXenter
Then treat yourself on April 20 and 21: iJS Online â€“ the virtual
conference on *JavaScript*, web development and software architecture â€“
will take placeÂ ...
Facebook
<https://www.google.com/alerts/share?hl=en&gl=US&ru=https://jaxenter.com/ijs-devopscon-online-171129.html&ss=fb&rt=iJS+and+DevOpsCon:+Online+editions+take+place+from+20+to+21+April&cd=KhM4NDY3NzM2OTY1NjQ3ODA4MTc4MhpkOWNhMWQwYjQ4MGUzYmRhOmNvbTplbjpVUw&ssp=AMJHsmXyH1sPAvOTqdRigs7e8qsZI54bpg>
	Twitter
<https://www.google.com/alerts/share?hl=en&gl=US&ru=https://jaxenter.com/ijs-devopscon-online-171129.html&ss=tw&rt=iJS+and+DevOpsCon:+Online+editions+take+place+from+20+to+21+April&cd=KhM4NDY3NzM2OTY1NjQ3ODA4MTc4MhpkOWNhMWQwYjQ4MGUzYmRhOmNvbTplbjpVUw&ssp=AMJHsmXyH1sPAvOTqdRigs7e8qsZI54bpg>
	Flag as irrelevant
<https://www.google.com/alerts/feedback?ffu=https://jaxenter.com/ijs-devopscon-online-171129.html&source=alertsmail&hl=en&gl=US&msgid=ODQ2NzczNjk2NTY0NzgwODE3OA&s=AB2Xq4j54gzXweT91DH7xGRAq94kSB9QczE0AZs>


	

	
FS Mailing Subsistence Permit Forms
<https://www.google.com/url?rct=j&sa=t&url=http://sitkasentinel.com/7/2012-05-10-22-08-10/local-news/16435-f-s-mailing-subsistence-permit-forms&ct=ga&cd=CAEYBCoTODQ2NzczNjk2NTY0NzgwODE3ODIaZDljYTFkMGI0ODBlM2JkYTpjb206ZW46VVM&usg=AFQjCNFZBviAxcyKihlxeK-djiz4TtZQmA>

Sitka Daily Sentinel
You need *JavaScript* enabled to view it. or Lee Benson 907-784-3018.
Juneau Ranger District/Admiralty Island National Monument - JakeÂ ...
Facebook
<https://www.google.com/alerts/share?hl=en&gl=US&ru=http://sitkasentinel.com/7/2012-05-10-22-08-10/local-news/16435-f-s-mailing-subsistence-permit-forms&ss=fb&rt=FS+Mailing+Subsistence+Permit+Forms&cd=KhM4NDY3NzM2OTY1NjQ3ODA4MTc4MhpkOWNhMWQwYjQ4MGUzYmRhOmNvbTplbjpVUw&ssp=AMJHsmVVTqO9M1Z5hLwOOZ7yBx3-E32f4A>
	Twitter
<https://www.google.com/alerts/share?hl=en&gl=US&ru=http://sitkasentinel.com/7/2012-05-10-22-08-10/local-news/16435-f-s-mailing-subsistence-permit-forms&ss=tw&rt=FS+Mailing+Subsistence+Permit+Forms&cd=KhM4NDY3NzM2OTY1NjQ3ODA4MTc4MhpkOWNhMWQwYjQ4MGUzYmRhOmNvbTplbjpVUw&ssp=AMJHsmVVTqO9M1Z5hLwOOZ7yBx3-E32f4A>
	Flag as irrelevant
<https://www.google.com/alerts/feedback?ffu=http://sitkasentinel.com/7/2012-05-10-22-08-10/local-news/16435-f-s-mailing-subsistence-permit-forms&source=alertsmail&hl=en&gl=US&msgid=ODQ2NzczNjk2NTY0NzgwODE3OA&s=AB2Xq4j54gzXweT91DH7xGRAq94kSB9QczE0AZs>


	

	
Dylan Schiemann on the Evolution of Dojo, Web Components and Emerging
Trends in Web ...
<https://www.google.com/url?rct=j&sa=t&url=https://www.infoq.com/podcasts/dojo-web-components-web-assembly%3FuseSponsorshipSuggestions%3Dtrue%26itm_source%3Dpodcasts_about_development%26itm_medium%3Dlink%26itm_campaign%3Ddevelopment&ct=ga&cd=CAEYBSoTODQ2NzczNjk2NTY0NzgwODE3ODIaZDljYTFkMGI0ODBlM2JkYTpjb206ZW46VVM&usg=AFQjCNFxNWje26iYs0XAgwzVEFH0S1XhQA>

InfoQ.com
*JavaScript* frameworks tend to be highly opinionated to full
flexibility; where does DoJo fit in that spectrum? 11:50 Probably in the
perfect middle, I wouldÂ ...
Facebook
<https://www.google.com/alerts/share?hl=en&gl=US&ru=https://www.infoq.com/podcasts/dojo-web-components-web-assembly%3FuseSponsorshipSuggestions%3Dtrue%26itm_source%3Dpodcasts_about_development%26itm_medium%3Dlink%26itm_campaign%3Ddevelopment&ss=fb&rt=Dylan+Schiemann+on+the+Evolution+of+Dojo,+Web+Components+and+Emerging+Trends+in+Web+...&cd=KhM4NDY3NzM2OTY1NjQ3ODA4MTc4MhpkOWNhMWQwYjQ4MGUzYmRhOmNvbTplbjpVUw&ssp=AMJHsmUZWRXmwX6zOSmufjwf2CRr7uQtjQ>
	Twitter
<https://www.google.com/alerts/share?hl=en&gl=US&ru=https://www.infoq.com/podcasts/dojo-web-components-web-assembly%3FuseSponsorshipSuggestions%3Dtrue%26itm_source%3Dpodcasts_about_development%26itm_medium%3Dlink%26itm_campaign%3Ddevelopment&ss=tw&rt=Dylan+Schiemann+on+the+Evolution+of+Dojo,+Web+Components+and+Emerging+Trends+in+Web+...&cd=KhM4NDY3NzM2OTY1NjQ3ODA4MTc4MhpkOWNhMWQwYjQ4MGUzYmRhOmNvbTplbjpVUw&ssp=AMJHsmUZWRXmwX6zOSmufjwf2CRr7uQtjQ>
	Flag as irrelevant
<https://www.google.com/alerts/feedback?ffu=https://www.infoq.com/podcasts/dojo-web-components-web-assembly%3FuseSponsorshipSuggestions%3Dtrue%26itm_source%3Dpodcasts_about_development%26itm_medium%3Dlink%26itm_campaign%3Ddevelopment&source=alertsmail&hl=en&gl=US&msgid=ODQ2NzczNjk2NTY0NzgwODE3OA&s=AB2Xq4j54gzXweT91DH7xGRAq94kSB9QczE0AZs>


	

	
jQuery 3.5 Released, Fixes XSS Vulnerability
<https://www.google.com/url?rct=j&sa=t&url=https://www.infoq.com/news/2020/04/jquery-35-xss-vulnerability-fix/&ct=ga&cd=CAEYBioTODQ2NzczNjk2NTY0NzgwODE3ODIaZDljYTFkMGI0ODBlM2JkYTpjb206ZW46VVM&usg=AFQjCNEf8GaVWPzJ4tro2apRTuTT-5Dqaw>

InfoQ.com
The Snyk open source security platform estimated in its State of
*JavaScript* frameworks security report 2019 that 84% of all websites
may be impactedÂ ...
Facebook
<https://www.google.com/alerts/share?hl=en&gl=US&ru=https://www.infoq.com/news/2020/04/jquery-35-xss-vulnerability-fix/&ss=fb&rt=jQuery+3.5+Released,+Fixes+XSS+Vulnerability&cd=KhM4NDY3NzM2OTY1NjQ3ODA4MTc4MhpkOWNhMWQwYjQ4MGUzYmRhOmNvbTplbjpVUw&ssp=AMJHsmWxGvb_V3SZoFxYPnY-M0utc_eiYA>
	Twitter
<https://www.google.com/alerts/share?hl=en&gl=US&ru=https://www.infoq.com/news/2020/04/jquery-35-xss-vulnerability-fix/&ss=tw&rt=jQuery+3.5+Released,+Fixes+XSS+Vulnerability&cd=KhM4NDY3NzM2OTY1NjQ3ODA4MTc4MhpkOWNhMWQwYjQ4MGUzYmRhOmNvbTplbjpVUw&ssp=AMJHsmWxGvb_V3SZoFxYPnY-M0utc_eiYA>
	Flag as irrelevant
<https://www.google.com/alerts/feedback?ffu=https://www.infoq.com/news/2020/04/jquery-35-xss-vulnerability-fix/&source=alertsmail&hl=en&gl=US&msgid=ODQ2NzczNjk2NTY0NzgwODE3OA&s=AB2Xq4j54gzXweT91DH7xGRAq94kSB9QczE0AZs>


	

	

	

<https://www.google.com/url?rct=j&sa=t&url=https://edgy.app/google-to-replace-in-person-conference-with-new-video-series%3Fpfrom%3Dmarketing%26fp%3Da6&ct=ga&cd=CAEYByoTODQ2NzczNjk2NTY0NzgwODE3ODIaZDljYTFkMGI0ODBlM2JkYTpjb206ZW46VVM&usg=AFQjCNGBnN42ZbyRWO6FyhGK1qF1C46-GQ>

Google to Replace In-Person Conference With New Video Series
<https://www.google.com/url?rct=j&sa=t&url=https://edgy.app/google-to-replace-in-person-conference-with-new-video-series%3Fpfrom%3Dmarketing%26fp%3Da6&ct=ga&cd=CAEYByoTODQ2NzczNjk2NTY0NzgwODE3ODIaZDljYTFkMGI0ODBlM2JkYTpjb206ZW46VVM&usg=AFQjCNGBnN42ZbyRWO6FyhGK1qF1C46-GQ>

Edgy Labs
Links and *JavaScript*. Recently, Martin Splitt has been hosting his
version of Webmaster Hangouts that is dedicated to questions about SEO
andÂ ...
Facebook
<https://www.google.com/alerts/share?hl=en&gl=US&ru=https://edgy.app/google-to-replace-in-person-conference-with-new-video-series%3Fpfrom%3Dmarketing%26fp%3Da6&ss=fb&rt=Google+to+Replace+In-Person+Conference+With+New+Video+Series&cd=KhM4NDY3NzM2OTY1NjQ3ODA4MTc4MhpkOWNhMWQwYjQ4MGUzYmRhOmNvbTplbjpVUw&ssp=AMJHsmWzsvASQ7n4JctxNNdMOS9-nujdSA>
	Twitter
<https://www.google.com/alerts/share?hl=en&gl=US&ru=https://edgy.app/google-to-replace-in-person-conference-with-new-video-series%3Fpfrom%3Dmarketing%26fp%3Da6&ss=tw&rt=Google+to+Replace+In-Person+Conference+With+New+Video+Series&cd=KhM4NDY3NzM2OTY1NjQ3ODA4MTc4MhpkOWNhMWQwYjQ4MGUzYmRhOmNvbTplbjpVUw&ssp=AMJHsmWzsvASQ7n4JctxNNdMOS9-nujdSA>
	Flag as irrelevant
<https://www.google.com/alerts/feedback?ffu=https://edgy.app/google-to-replace-in-person-conference-with-new-video-series%3Fpfrom%3Dmarketing%26fp%3Da6&source=alertsmail&hl=en&gl=US&msgid=ODQ2NzczNjk2NTY0NzgwODE3OA&s=AB2Xq4j54gzXweT91DH7xGRAq94kSB9QczE0AZs>


	

	
The most popular programming languages â€“ And what they are used for
<https://www.google.com/url?rct=j&sa=t&url=https://mybroadband.co.za/news/software/348145-the-most-popular-programming-languages-and-what-they-are-used-for.html&ct=ga&cd=CAEYCCoTODQ2NzczNjk2NTY0NzgwODE3ODIaZDljYTFkMGI0ODBlM2JkYTpjb206ZW46VVM&usg=AFQjCNFlANzF26--Q7TSIWrTSY_BolJ1yw>

MyBroadband
â€œAs a result, *JavaScript* is now used by more than half of developers
working on web applications, cloud services, or extensions for
third-partyÂ ...
Facebook
<https://www.google.com/alerts/share?hl=en&gl=US&ru=https://mybroadband.co.za/news/software/348145-the-most-popular-programming-languages-and-what-they-are-used-for.html&ss=fb&rt=The+most+popular+programming+languages+%E2%80%93+And+what+they+are+used+for&cd=KhM4NDY3NzM2OTY1NjQ3ODA4MTc4MhpkOWNhMWQwYjQ4MGUzYmRhOmNvbTplbjpVUw&ssp=AMJHsmVdNIROxw4VWaWgClgmAIN14tlYzg>
	Twitter
<https://www.google.com/alerts/share?hl=en&gl=US&ru=https://mybroadband.co.za/news/software/348145-the-most-popular-programming-languages-and-what-they-are-used-for.html&ss=tw&rt=The+most+popular+programming+languages+%E2%80%93+And+what+they+are+used+for&cd=KhM4NDY3NzM2OTY1NjQ3ODA4MTc4MhpkOWNhMWQwYjQ4MGUzYmRhOmNvbTplbjpVUw&ssp=AMJHsmVdNIROxw4VWaWgClgmAIN14tlYzg>
	Flag as irrelevant
<https://www.google.com/alerts/feedback?ffu=https://mybroadband.co.za/news/software/348145-the-most-popular-programming-languages-and-what-they-are-used-for.html&source=alertsmail&hl=en&gl=US&msgid=ODQ2NzczNjk2NTY0NzgwODE3OA&s=AB2Xq4j54gzXweT91DH7xGRAq94kSB9QczE0AZs>


	

	
jQuery addresses XSS security issue in 3.5 release
<https://www.google.com/url?rct=j&sa=t&url=https://sdtimes.com/softwaredev/jquery-addresses-xss-security-issue-in-3-5-release/&ct=ga&cd=CAEYCSoTODQ2NzczNjk2NTY0NzgwODE3ODIaZDljYTFkMGI0ODBlM2JkYTpjb206ZW46VVM&usg=AFQjCNEftFFnvTra5CHEEEVugX2JEQJmlA>

SDTimes.com
The latest version of the popular *JavaScript* library jQuery is now
available. jQuery 3.5 fixes a security issue, adds a few new features,
and fixesÂ ...
Facebook
<https://www.google.com/alerts/share?hl=en&gl=US&ru=https://sdtimes.com/softwaredev/jquery-addresses-xss-security-issue-in-3-5-release/&ss=fb&rt=jQuery+addresses+XSS+security+issue+in+3.5+release&cd=KhM4NDY3NzM2OTY1NjQ3ODA4MTc4MhpkOWNhMWQwYjQ4MGUzYmRhOmNvbTplbjpVUw&ssp=AMJHsmUYWZ3V4NlphdWfIl7pOq4Xjo9APw>
	Twitter
<https://www.google.com/alerts/share?hl=en&gl=US&ru=https://sdtimes.com/softwaredev/jquery-addresses-xss-security-issue-in-3-5-release/&ss=tw&rt=jQuery+addresses+XSS+security+issue+in+3.5+release&cd=KhM4NDY3NzM2OTY1NjQ3ODA4MTc4MhpkOWNhMWQwYjQ4MGUzYmRhOmNvbTplbjpVUw&ssp=AMJHsmUYWZ3V4NlphdWfIl7pOq4Xjo9APw>
	Flag as irrelevant
<https://www.google.com/alerts/feedback?ffu=https://sdtimes.com/softwaredev/jquery-addresses-xss-security-issue-in-3-5-release/&source=alertsmail&hl=en&gl=US&msgid=ODQ2NzczNjk2NTY0NzgwODE3OA&s=AB2Xq4j54gzXweT91DH7xGRAq94kSB9QczE0AZs>


You have received this email because you have subscribed to *Google
Alerts*.
Unsubscribe
<https://www.google.com/alerts/remove?source=alertsmail&hl=en&gl=US&msgid=ODQ2NzczNjk2NTY0NzgwODE3OA&s=AB2Xq4j54gzXweT91DH7xGRAq94kSB9QczE0AZs>
| View all your alerts
<https://www.google.com/alerts?source=alertsmail&hl=en&gl=US&msgid=ODQ2NzczNjk2NTY0NzgwODE3OA>

RSS Receive this alert as RSS feed
<https://www.google.com/alerts/feeds/16654637476491735194/8830828320637633854>

Send Feedback
<https://www.google.com/alerts?source=alertsmail&hl=en&gl=US&msgid=ODQ2NzczNjk2NTY0NzgwODE3OA&s=AB2Xq4j54gzXweT91DH7xGRAq94kSB9QczE0AZs&ffu=>



--------------52425021B51517AE92558F34
Content-Type: text/html; charset=utf-8
Content-Transfer-Encoding: 8bit

<html>
  <head>

    <meta http-equiv="content-type" content="text/html; charset=UTF-8">
  </head>
  <body text="#000000" bgcolor="#ffffff">
    <div>
      <script data-scope="inboxmarkup" type="application/json">{
  "api_version": "1.0",
  "publisher": {
    "api_key": "668269e72cfedea31b22524041ff21d9",
    "name": "Google Alerts"
  },
  "entity": {
    "external_key": "Google Alert - javascript",
    "title": "Google Alert - javascript",
    "subtitle": "Latest: April 18, 2020",
    "avatar_image_url": "https://www.gstatic.com/images/branding/product/1x/gsa_512dp.png",
    "main_image_url": "https://www.gstatic.com/bt/C3341AA7A1A076756462EE2E5CD71C11/smartmail/mobile/il_newspaper_header_r1.png"
  },
  "updates": {
    "snippets": [ {
      "icon": "BOOKMARK",
      "message": "ECMAScript 2020 spec for JavaScript moves forward"
    }, {
      "icon": "BOOKMARK",
      "message": "Programming languages: JavaScript now used by 12 million developers but Kotlin rises fastest"
    }, {
      "icon": "BOOKMARK",
      "message": "Coronavirus' business impact: JavaScript Web Frameworks Software Market 2025 Expected to ..."
    } ]
  },
  "cards": [ {
    "title": "Google Alert - javascript",
    "subtitle": "Highlights from the latest email",
    "actions": [ {
      "name": "See more results",
      "url": "https://www.google.com/alerts?s=AB2Xq4j54gzXweT91DH7xGRAq94kSB9QczE0AZs\u0026start=1587124924\u0026end=1587211492\u0026source=alertsmail\u0026hl=en\u0026gl=US\u0026msgid=ODQ2NzczNjk2NTY0NzgwODE3OA#history"
    } ],
    "widgets": [ {
      "type": "LINK",
      "title": "ECMAScript 2020 spec for JavaScript moves forward",
      "description": "ECMAScript 2020 spec for JavaScript moves forward. Slated for formal approval in June, ECMAScript 2020 introduces new features for module loading, ...",
      "url": "https://www.google.com/url?rct=j\u0026sa=t\u0026url=https://www.infoworld.com/article/3538809/ecmascript-2020-spec-for-javascript-moves-forward.html\u0026ct=ga\u0026cd=CAEYACoTODQ2NzczNjk2NTY0NzgwODE3ODIaZDljYTFkMGI0ODBlM2JkYTpjb206ZW46VVM\u0026usg=AFQjCNHTg3_AXX2kkNahhNfC1jVmf_ps0g"
    }, {
      "type": "LINK",
      "title": "Programming languages: JavaScript now used by 12 million developers but Kotlin rises fastest",
      "description": "JavaScript extends its lead as the world's most popular programming language, followed by Python and Java.",
      "url": "https://www.google.com/url?rct=j\u0026sa=t\u0026url=https://www.zdnet.com/article/programming-languages-javascript-now-used-by-12-million-developers-but-kotlin-rises-fastest/\u0026ct=ga\u0026cd=CAEYASoTODQ2NzczNjk2NTY0NzgwODE3ODIaZDljYTFkMGI0ODBlM2JkYTpjb206ZW46VVM\u0026usg=AFQjCNGdNtle_smI9CpfJwXvp3gZ0pPXYg"
    }, {
      "type": "LINK",
      "title": "Coronavirus' business impact: JavaScript Web Frameworks Software Market 2025 Expected to ...",
      "description": "The research study has been prepared with the use of in-depth qualitative and quantitative analyses of the global JavaScript Web Frameworks Software ...",
      "url": "https://www.google.com/url?rct=j\u0026sa=t\u0026url=https://www.curiousdesk.com/coronavirus-business-impact-javascript-web-frameworks-software-market-2025-expected-to-rise-at-a-higher-cagr-value-driving-factors-sales-and-revenue/\u0026ct=ga\u0026cd=CAEYAioTODQ2NzczNjk2NTY0NzgwODE3ODIaZDljYTFkMGI0ODBlM2JkYTpjb206ZW46VVM\u0026usg=AFQjCNENBOJXoxZIX-IMXCtkfAk_FofTzg"
    }, {
      "type": "LINK",
      "title": "iJS and DevOpsCon: Online editions take place from 20 to 21 April",
      "description": "Then treat yourself on April 20 and 21: iJS Online â€“ the virtual conference on JavaScript, web development and software architecture â€“ will take place ...",
      "url": "https://www.google.com/url?rct=j\u0026sa=t\u0026url=https://jaxenter.com/ijs-devopscon-online-171129.html\u0026ct=ga\u0026cd=CAEYAyoTODQ2NzczNjk2NTY0NzgwODE3ODIaZDljYTFkMGI0ODBlM2JkYTpjb206ZW46VVM\u0026usg=AFQjCNHmDM0kI2hxdlKcO1xZuonkR4SwVw"
    } ]
  } ]
}
</script>
      <!--[if mso]>
 <table><tr><td width=650>
<![endif]-->
      <div style="width:100%;max-width:650px">
        <div style="font-family:Arial">
          <table style="border-collapse:collapse;border-left:1px solid
            #e4e4e4;border-right:1px solid #e4e4e4">
            <tbody>
              <tr>
                <td
                  style="background-color:#f8f8f8;padding-left:18px;border-bottom:1px
                  solid #e4e4e4;border-top:1px solid #e4e4e4"><br>
                </td>
                <td style="padding:13px 10px 8px
                  0px;background-color:#f8f8f8;border-top:1px solid
                  #e4e4e4;border-bottom:1px solid #e4e4e4"
                  valign="middle"> <a
href="https://www.google.com/alerts?source=alertsmail&amp;hl=en&amp;gl=US&amp;msgid=ODQ2NzczNjk2NTY0NzgwODE3OA"
                    style="text-decoration:none" moz-do-not-send="true">
                    <img
src="https://www.google.com/intl/en_us/alerts/logo.png?cd=KhM4NDY3NzM2OTY1NjQ3ODA4MTc4"
                      alt="Google" moz-do-not-send="true" height="25"
                      border="0"> </a> </td>
                <td
                  style="background-color:#f8f8f8;padding-left:18px;border-top:1px
                  solid #e4e4e4;border-bottom:1px solid #e4e4e4"><br>
                </td>
              </tr>
              <tr>
                <td style="padding-left:32px"><br>
                </td>
                <td style="padding:18px 0px 0px
                  0px;vertical-align:middle;line-height:20px;font-family:Arial">
                  <span style="color:#262626;font-size:22px">javascript</span>
                  <div
style="vertical-align:top;padding-top:6px;color:#aaa;font-size:12px;line-height:16px">
                    <span>Daily update</span> <span style="padding:0px
                      4px 0px 4px">â‹…</span> <a
                      style="color:#aaa;text-decoration:none"
                      moz-do-not-send="true">April 18, 2020</a> </div>
                </td>
                <td style="padding-left:32px"><br>
                </td>
              </tr>
              <tr>
                <td style="padding-left:18px"><br>
                </td>
                <td style="padding:16px 0px 12px 0px;border-bottom:1px
                  solid #e4e4e4"> <span
                    style="font-size:12px;color:#737373"> NEWS </span>
                </td>
                <td style="padding-right:18px"><br>
                </td>
              </tr>
              <tr itemscope="" itemtype="http://schema.org/Article">
                <td style="padding-left:18px"><br>
                </td>
                <td style="padding:18px 0px 12px
                  0px;vertical-align:top;font-family:Arial">
                  <div> <span style="padding:0px 6px 0px 0px"> <a
href="https://www.google.com/url?rct=j&amp;sa=t&amp;url=https://www.infoworld.com/article/3538809/ecmascript-2020-spec-for-javascript-moves-forward.html&amp;ct=ga&amp;cd=CAEYACoTODQ2NzczNjk2NTY0NzgwODE3ODIaZDljYTFkMGI0ODBlM2JkYTpjb206ZW46VVM&amp;usg=AFQjCNHTg3_AXX2kkNahhNfC1jVmf_ps0g"
                        itemprop="url"
style="color:#427fed;display:inline;text-decoration:none;font-size:16px;line-height:20px"
                        moz-do-not-send="true"> <span itemprop="name">ECMAScript
                          2020 spec for <b>JavaScript</b> moves forward</span>
                      </a> </span>
                    <div>
                      <div style="padding:2px 0px 8px 0px">
                        <div itemprop="publisher" itemscope=""
                          itemtype="http://schema.org/Organization"
                          style="color:#737373;font-size:12px"> <a
                            style="text-decoration:none;color:#737373"
                            moz-do-not-send="true"> <span
                              itemprop="name">InfoWorld</span> </a> </div>
                        <div itemprop="description"
                          style="color:#252525;padding:2px 0px 0px
                          0px;font-size:12px;line-height:18px">ECMAScript
                          2020 spec for <b>JavaScript</b> moves
                          forward. Slated for formal approval in June,
                          ECMAScript 2020 introduces new features for
                          module loading,Â ...</div>
                      </div>
                      <table>
                        <tbody>
                          <tr>
                            <td style="padding-right:6px" width="16"> <a
href="https://www.google.com/alerts/share?hl=en&amp;gl=US&amp;ru=https://www.infoworld.com/article/3538809/ecmascript-2020-spec-for-javascript-moves-forward.html&amp;ss=fb&amp;rt=ECMAScript+2020+spec+for+JavaScript+moves+forward&amp;cd=KhM4NDY3NzM2OTY1NjQ3ODA4MTc4MhpkOWNhMWQwYjQ4MGUzYmRhOmNvbTplbjpVUw&amp;ssp=AMJHsmUu1yZf1hzy9Ijl8DJmBl-VH5DzgA"
                                style="text-decoration:none"
                                moz-do-not-send="true"> <img
                                  alt="Facebook"
                                  src="https://www.gstatic.com/alerts/images/fb-24.png"
                                  moz-do-not-send="true" width="16"
                                  height="16" border="0"></a> </td>
                            <td style="padding-right:6px" width="16"> <a
href="https://www.google.com/alerts/share?hl=en&amp;gl=US&amp;ru=https://www.infoworld.com/article/3538809/ecmascript-2020-spec-for-javascript-moves-forward.html&amp;ss=tw&amp;rt=ECMAScript+2020+spec+for+JavaScript+moves+forward&amp;cd=KhM4NDY3NzM2OTY1NjQ3ODA4MTc4MhpkOWNhMWQwYjQ4MGUzYmRhOmNvbTplbjpVUw&amp;ssp=AMJHsmUu1yZf1hzy9Ijl8DJmBl-VH5DzgA"
                                style="text-decoration:none"
                                moz-do-not-send="true"> <img
                                  alt="Twitter"
                                  src="https://www.gstatic.com/alerts/images/tw-24.png"
                                  moz-do-not-send="true" width="16"
                                  height="16" border="0"></a> </td>
                            <td style="padding:0px 0px 6px
                              15px;font-family:Arial"> <a
href="https://www.google.com/alerts/feedback?ffu=https://www.infoworld.com/article/3538809/ecmascript-2020-spec-for-javascript-moves-forward.html&amp;source=alertsmail&amp;hl=en&amp;gl=US&amp;msgid=ODQ2NzczNjk2NTY0NzgwODE3OA&amp;s=AB2Xq4j54gzXweT91DH7xGRAq94kSB9QczE0AZs"
style="text-decoration:none;vertical-align:middle;color:#aaa;font-size:10px"
                                moz-do-not-send="true"> Flag as
                                irrelevant </a> </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </td>
                <td style="padding-right:18px"><br>
                </td>
              </tr>
              <tr itemscope="" itemtype="http://schema.org/Article">
                <td style="padding-left:18px"><br>
                </td>
                <td style="padding:18px 0px 12px
                  0px;vertical-align:top;border-top:1px solid
                  #e4e4e4;font-family:Arial">
                  <div> <span style="padding:0px 6px 0px 0px"> <a
href="https://www.google.com/url?rct=j&amp;sa=t&amp;url=https://www.zdnet.com/article/programming-languages-javascript-now-used-by-12-million-developers-but-kotlin-rises-fastest/&amp;ct=ga&amp;cd=CAEYASoTODQ2NzczNjk2NTY0NzgwODE3ODIaZDljYTFkMGI0ODBlM2JkYTpjb206ZW46VVM&amp;usg=AFQjCNGdNtle_smI9CpfJwXvp3gZ0pPXYg"
                        itemprop="url"
style="color:#427fed;display:inline;text-decoration:none;font-size:16px;line-height:20px"
                        moz-do-not-send="true"> <span itemprop="name">Programming
                          languages: <b>JavaScript</b> now used by 12
                          million developers but Kotlin rises fastest</span>
                      </a> </span>
                    <div>
                      <div style="padding:2px 0px 8px 0px">
                        <div itemprop="publisher" itemscope=""
                          itemtype="http://schema.org/Organization"
                          style="color:#737373;font-size:12px"> <a
                            style="text-decoration:none;color:#737373"
                            moz-do-not-send="true"> <span
                              itemprop="name">ZDNet</span> </a> </div>
                        <div itemprop="description"
                          style="color:#252525;padding:2px 0px 0px
                          0px;font-size:12px;line-height:18px"><b>JavaScript</b>
                          extends its lead as the world's most popular
                          programming language, followed by Python and
                          Java.</div>
                      </div>
                      <table>
                        <tbody>
                          <tr>
                            <td style="padding-right:6px" width="16"> <a
href="https://www.google.com/alerts/share?hl=en&amp;gl=US&amp;ru=https://www.zdnet.com/article/programming-languages-javascript-now-used-by-12-million-developers-but-kotlin-rises-fastest/&amp;ss=fb&amp;rt=Programming+languages:+JavaScript+now+used+by+12+million+developers+but+Kotlin+rises+fastest&amp;cd=KhM4NDY3NzM2OTY1NjQ3ODA4MTc4MhpkOWNhMWQwYjQ4MGUzYmRhOmNvbTplbjpVUw&amp;ssp=AMJHsmXuG5E2cxTxe3xP_TWN96_EZR6Vvw"
                                style="text-decoration:none"
                                moz-do-not-send="true"> <img
                                  alt="Facebook"
                                  src="https://www.gstatic.com/alerts/images/fb-24.png"
                                  moz-do-not-send="true" width="16"
                                  height="16" border="0"></a> </td>
                            <td style="padding-right:6px" width="16"> <a
href="https://www.google.com/alerts/share?hl=en&amp;gl=US&amp;ru=https://www.zdnet.com/article/programming-languages-javascript-now-used-by-12-million-developers-but-kotlin-rises-fastest/&amp;ss=tw&amp;rt=Programming+languages:+JavaScript+now+used+by+12+million+developers+but+Kotlin+rises+fastest&amp;cd=KhM4NDY3NzM2OTY1NjQ3ODA4MTc4MhpkOWNhMWQwYjQ4MGUzYmRhOmNvbTplbjpVUw&amp;ssp=AMJHsmXuG5E2cxTxe3xP_TWN96_EZR6Vvw"
                                style="text-decoration:none"
                                moz-do-not-send="true"> <img
                                  alt="Twitter"
                                  src="https://www.gstatic.com/alerts/images/tw-24.png"
                                  moz-do-not-send="true" width="16"
                                  height="16" border="0"></a> </td>
                            <td style="padding:0px 0px 6px
                              15px;font-family:Arial"> <a
href="https://www.google.com/alerts/feedback?ffu=https://www.zdnet.com/article/programming-languages-javascript-now-used-by-12-million-developers-but-kotlin-rises-fastest/&amp;source=alertsmail&amp;hl=en&amp;gl=US&amp;msgid=ODQ2NzczNjk2NTY0NzgwODE3OA&amp;s=AB2Xq4j54gzXweT91DH7xGRAq94kSB9QczE0AZs"
style="text-decoration:none;vertical-align:middle;color:#aaa;font-size:10px"
                                moz-do-not-send="true"> Flag as
                                irrelevant </a> </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </td>
                <td style="padding-right:18px"><br>
                </td>
              </tr>
              <tr itemscope="" itemtype="http://schema.org/Article">
                <td style="padding-left:18px"><br>
                </td>
                <td style="padding:18px 0px 12px
                  0px;vertical-align:top;border-top:1px solid
                  #e4e4e4;font-family:Arial">
                  <div> <span style="padding:0px 6px 0px 0px"> <a
href="https://www.google.com/url?rct=j&amp;sa=t&amp;url=https://www.curiousdesk.com/coronavirus-business-impact-javascript-web-frameworks-software-market-2025-expected-to-rise-at-a-higher-cagr-value-driving-factors-sales-and-revenue/&amp;ct=ga&amp;cd=CAEYAioTODQ2NzczNjk2NTY0NzgwODE3ODIaZDljYTFkMGI0ODBlM2JkYTpjb206ZW46VVM&amp;usg=AFQjCNENBOJXoxZIX-IMXCtkfAk_FofTzg"
                        itemprop="url"
style="color:#427fed;display:inline;text-decoration:none;font-size:16px;line-height:20px"
                        moz-do-not-send="true"> <span itemprop="name">Coronavirus'
                          business impact: <b>JavaScript</b> Web
                          Frameworks Software Market 2025 Expected to
                          ...</span> </a> </span>
                    <div>
                      <div style="padding:2px 0px 8px 0px">
                        <div itemprop="publisher" itemscope=""
                          itemtype="http://schema.org/Organization"
                          style="color:#737373;font-size:12px"> <a
                            style="text-decoration:none;color:#737373"
                            moz-do-not-send="true"> <span
                              itemprop="name">Curious Desk (blog)</span>
                          </a> </div>
                        <div itemprop="description"
                          style="color:#252525;padding:2px 0px 0px
                          0px;font-size:12px;line-height:18px">The
                          research study has been prepared with the use
                          of in-depth qualitative and quantitative
                          analyses of the global <b>JavaScript</b> Web
                          Frameworks SoftwareÂ ...</div>
                      </div>
                      <table>
                        <tbody>
                          <tr>
                            <td style="padding-right:6px" width="16"> <a
href="https://www.google.com/alerts/share?hl=en&amp;gl=US&amp;ru=https://www.curiousdesk.com/coronavirus-business-impact-javascript-web-frameworks-software-market-2025-expected-to-rise-at-a-higher-cagr-value-driving-factors-sales-and-revenue/&amp;ss=fb&amp;rt=Coronavirus%27+business+impact:+JavaScript+Web+Frameworks+Software+Market+2025+Expected+to+...&amp;cd=KhM4NDY3NzM2OTY1NjQ3ODA4MTc4MhpkOWNhMWQwYjQ4MGUzYmRhOmNvbTplbjpVUw&amp;ssp=AMJHsmUYzaZc9uxnsr8OvXSk1-r39OCwIA"
                                style="text-decoration:none"
                                moz-do-not-send="true"> <img
                                  alt="Facebook"
                                  src="https://www.gstatic.com/alerts/images/fb-24.png"
                                  moz-do-not-send="true" width="16"
                                  height="16" border="0"></a> </td>
                            <td style="padding-right:6px" width="16"> <a
href="https://www.google.com/alerts/share?hl=en&amp;gl=US&amp;ru=https://www.curiousdesk.com/coronavirus-business-impact-javascript-web-frameworks-software-market-2025-expected-to-rise-at-a-higher-cagr-value-driving-factors-sales-and-revenue/&amp;ss=tw&amp;rt=Coronavirus%27+business+impact:+JavaScript+Web+Frameworks+Software+Market+2025+Expected+to+...&amp;cd=KhM4NDY3NzM2OTY1NjQ3ODA4MTc4MhpkOWNhMWQwYjQ4MGUzYmRhOmNvbTplbjpVUw&amp;ssp=AMJHsmUYzaZc9uxnsr8OvXSk1-r39OCwIA"
                                style="text-decoration:none"
                                moz-do-not-send="true"> <img
                                  alt="Twitter"
                                  src="https://www.gstatic.com/alerts/images/tw-24.png"
                                  moz-do-not-send="true" width="16"
                                  height="16" border="0"></a> </td>
                            <td style="padding:0px 0px 6px
                              15px;font-family:Arial"> <a
href="https://www.google.com/alerts/feedback?ffu=https://www.curiousdesk.com/coronavirus-business-impact-javascript-web-frameworks-software-market-2025-expected-to-rise-at-a-higher-cagr-value-driving-factors-sales-and-revenue/&amp;source=alertsmail&amp;hl=en&amp;gl=US&amp;msgid=ODQ2NzczNjk2NTY0NzgwODE3OA&amp;s=AB2Xq4j54gzXweT91DH7xGRAq94kSB9QczE0AZs"
style="text-decoration:none;vertical-align:middle;color:#aaa;font-size:10px"
                                moz-do-not-send="true"> Flag as
                                irrelevant </a> </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </td>
                <td style="padding-right:18px"><br>
                </td>
              </tr>
              <tr itemscope="" itemtype="http://schema.org/Article">
                <td style="padding-left:18px"><br>
                </td>
                <td style="padding:18px 0px 12px
                  0px;vertical-align:top;border-top:1px solid
                  #e4e4e4;font-family:Arial">
                  <div> <span style="padding:0px 6px 0px 0px"> <a
href="https://www.google.com/url?rct=j&amp;sa=t&amp;url=https://jaxenter.com/ijs-devopscon-online-171129.html&amp;ct=ga&amp;cd=CAEYAyoTODQ2NzczNjk2NTY0NzgwODE3ODIaZDljYTFkMGI0ODBlM2JkYTpjb206ZW46VVM&amp;usg=AFQjCNHmDM0kI2hxdlKcO1xZuonkR4SwVw"
                        itemprop="url"
style="color:#427fed;display:inline;text-decoration:none;font-size:16px;line-height:20px"
                        moz-do-not-send="true"> <span itemprop="name">iJS
                          and DevOpsCon: Online editions take place from
                          20 to 21 April</span> </a> </span>
                    <div>
                      <div style="padding:2px 0px 8px 0px">
                        <div itemprop="publisher" itemscope=""
                          itemtype="http://schema.org/Organization"
                          style="color:#737373;font-size:12px"> <a
                            style="text-decoration:none;color:#737373"
                            moz-do-not-send="true"> <span
                              itemprop="name">JAXenter</span> </a> </div>
                        <div itemprop="description"
                          style="color:#252525;padding:2px 0px 0px
                          0px;font-size:12px;line-height:18px">Then
                          treat yourself on April 20 and 21: iJS Online
                          â€“ the virtual conference on <b>JavaScript</b>,
                          web development and software architecture â€“
                          will take placeÂ ...</div>
                      </div>
                      <table>
                        <tbody>
                          <tr>
                            <td style="padding-right:6px" width="16"> <a
href="https://www.google.com/alerts/share?hl=en&amp;gl=US&amp;ru=https://jaxenter.com/ijs-devopscon-online-171129.html&amp;ss=fb&amp;rt=iJS+and+DevOpsCon:+Online+editions+take+place+from+20+to+21+April&amp;cd=KhM4NDY3NzM2OTY1NjQ3ODA4MTc4MhpkOWNhMWQwYjQ4MGUzYmRhOmNvbTplbjpVUw&amp;ssp=AMJHsmXyH1sPAvOTqdRigs7e8qsZI54bpg"
                                style="text-decoration:none"
                                moz-do-not-send="true"> <img
                                  alt="Facebook"
                                  src="https://www.gstatic.com/alerts/images/fb-24.png"
                                  moz-do-not-send="true" width="16"
                                  height="16" border="0"></a> </td>
                            <td style="padding-right:6px" width="16"> <a
href="https://www.google.com/alerts/share?hl=en&amp;gl=US&amp;ru=https://jaxenter.com/ijs-devopscon-online-171129.html&amp;ss=tw&amp;rt=iJS+and+DevOpsCon:+Online+editions+take+place+from+20+to+21+April&amp;cd=KhM4NDY3NzM2OTY1NjQ3ODA4MTc4MhpkOWNhMWQwYjQ4MGUzYmRhOmNvbTplbjpVUw&amp;ssp=AMJHsmXyH1sPAvOTqdRigs7e8qsZI54bpg"
                                style="text-decoration:none"
                                moz-do-not-send="true"> <img
                                  alt="Twitter"
                                  src="https://www.gstatic.com/alerts/images/tw-24.png"
                                  moz-do-not-send="true" width="16"
                                  height="16" border="0"></a> </td>
                            <td style="padding:0px 0px 6px
                              15px;font-family:Arial"> <a
href="https://www.google.com/alerts/feedback?ffu=https://jaxenter.com/ijs-devopscon-online-171129.html&amp;source=alertsmail&amp;hl=en&amp;gl=US&amp;msgid=ODQ2NzczNjk2NTY0NzgwODE3OA&amp;s=AB2Xq4j54gzXweT91DH7xGRAq94kSB9QczE0AZs"
style="text-decoration:none;vertical-align:middle;color:#aaa;font-size:10px"
                                moz-do-not-send="true"> Flag as
                                irrelevant </a> </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </td>
                <td style="padding-right:18px"><br>
                </td>
              </tr>
              <tr itemscope="" itemtype="http://schema.org/Article">
                <td style="padding-left:18px"><br>
                </td>
                <td style="padding:18px 0px 12px
                  0px;vertical-align:top;border-top:1px solid
                  #e4e4e4;font-family:Arial">
                  <div> <span style="padding:0px 6px 0px 0px"> <a
href="https://www.google.com/url?rct=j&amp;sa=t&amp;url=http://sitkasentinel.com/7/2012-05-10-22-08-10/local-news/16435-f-s-mailing-subsistence-permit-forms&amp;ct=ga&amp;cd=CAEYBCoTODQ2NzczNjk2NTY0NzgwODE3ODIaZDljYTFkMGI0ODBlM2JkYTpjb206ZW46VVM&amp;usg=AFQjCNFZBviAxcyKihlxeK-djiz4TtZQmA"
                        itemprop="url"
style="color:#427fed;display:inline;text-decoration:none;font-size:16px;line-height:20px"
                        moz-do-not-send="true"> <span itemprop="name">FS
                          Mailing Subsistence Permit Forms</span> </a>
                    </span>
                    <div>
                      <div style="padding:2px 0px 8px 0px">
                        <div itemprop="publisher" itemscope=""
                          itemtype="http://schema.org/Organization"
                          style="color:#737373;font-size:12px"> <a
                            style="text-decoration:none;color:#737373"
                            moz-do-not-send="true"> <span
                              itemprop="name">Sitka Daily Sentinel</span>
                          </a> </div>
                        <div itemprop="description"
                          style="color:#252525;padding:2px 0px 0px
                          0px;font-size:12px;line-height:18px">You need
                          <b>JavaScript</b> enabled to view it. or Lee
                          Benson 907-784-3018. Juneau Ranger
                          District/Admiralty Island National Monument -
                          JakeÂ ...</div>
                      </div>
                      <table>
                        <tbody>
                          <tr>
                            <td style="padding-right:6px" width="16"> <a
href="https://www.google.com/alerts/share?hl=en&amp;gl=US&amp;ru=http://sitkasentinel.com/7/2012-05-10-22-08-10/local-news/16435-f-s-mailing-subsistence-permit-forms&amp;ss=fb&amp;rt=FS+Mailing+Subsistence+Permit+Forms&amp;cd=KhM4NDY3NzM2OTY1NjQ3ODA4MTc4MhpkOWNhMWQwYjQ4MGUzYmRhOmNvbTplbjpVUw&amp;ssp=AMJHsmVVTqO9M1Z5hLwOOZ7yBx3-E32f4A"
                                style="text-decoration:none"
                                moz-do-not-send="true"> <img
                                  alt="Facebook"
                                  src="https://www.gstatic.com/alerts/images/fb-24.png"
                                  moz-do-not-send="true" width="16"
                                  height="16" border="0"></a> </td>
                            <td style="padding-right:6px" width="16"> <a
href="https://www.google.com/alerts/share?hl=en&amp;gl=US&amp;ru=http://sitkasentinel.com/7/2012-05-10-22-08-10/local-news/16435-f-s-mailing-subsistence-permit-forms&amp;ss=tw&amp;rt=FS+Mailing+Subsistence+Permit+Forms&amp;cd=KhM4NDY3NzM2OTY1NjQ3ODA4MTc4MhpkOWNhMWQwYjQ4MGUzYmRhOmNvbTplbjpVUw&amp;ssp=AMJHsmVVTqO9M1Z5hLwOOZ7yBx3-E32f4A"
                                style="text-decoration:none"
                                moz-do-not-send="true"> <img
                                  alt="Twitter"
                                  src="https://www.gstatic.com/alerts/images/tw-24.png"
                                  moz-do-not-send="true" width="16"
                                  height="16" border="0"></a> </td>
                            <td style="padding:0px 0px 6px
                              15px;font-family:Arial"> <a
href="https://www.google.com/alerts/feedback?ffu=http://sitkasentinel.com/7/2012-05-10-22-08-10/local-news/16435-f-s-mailing-subsistence-permit-forms&amp;source=alertsmail&amp;hl=en&amp;gl=US&amp;msgid=ODQ2NzczNjk2NTY0NzgwODE3OA&amp;s=AB2Xq4j54gzXweT91DH7xGRAq94kSB9QczE0AZs"
style="text-decoration:none;vertical-align:middle;color:#aaa;font-size:10px"
                                moz-do-not-send="true"> Flag as
                                irrelevant </a> </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </td>
                <td style="padding-right:18px"><br>
                </td>
              </tr>
              <tr itemscope="" itemtype="http://schema.org/Article">
                <td style="padding-left:18px"><br>
                </td>
                <td style="padding:18px 0px 12px
                  0px;vertical-align:top;border-top:1px solid
                  #e4e4e4;font-family:Arial">
                  <div> <span style="padding:0px 6px 0px 0px"> <a
href="https://www.google.com/url?rct=j&amp;sa=t&amp;url=https://www.infoq.com/podcasts/dojo-web-components-web-assembly%3FuseSponsorshipSuggestions%3Dtrue%26itm_source%3Dpodcasts_about_development%26itm_medium%3Dlink%26itm_campaign%3Ddevelopment&amp;ct=ga&amp;cd=CAEYBSoTODQ2NzczNjk2NTY0NzgwODE3ODIaZDljYTFkMGI0ODBlM2JkYTpjb206ZW46VVM&amp;usg=AFQjCNFxNWje26iYs0XAgwzVEFH0S1XhQA"
                        itemprop="url"
style="color:#427fed;display:inline;text-decoration:none;font-size:16px;line-height:20px"
                        moz-do-not-send="true"> <span itemprop="name">Dylan
                          Schiemann on the Evolution of Dojo, Web
                          Components and Emerging Trends in Web ...</span>
                      </a> </span>
                    <div>
                      <div style="padding:2px 0px 8px 0px">
                        <div itemprop="publisher" itemscope=""
                          itemtype="http://schema.org/Organization"
                          style="color:#737373;font-size:12px"> <a
                            style="text-decoration:none;color:#737373"
                            moz-do-not-send="true"> <span
                              itemprop="name">InfoQ.com</span> </a> </div>
                        <div itemprop="description"
                          style="color:#252525;padding:2px 0px 0px
                          0px;font-size:12px;line-height:18px"><b>JavaScript</b>
                          frameworks tend to be highly opinionated to
                          full flexibility; where does DoJo fit in that
                          spectrum? 11:50 Probably in the perfect
                          middle, I wouldÂ ...</div>
                      </div>
                      <table>
                        <tbody>
                          <tr>
                            <td style="padding-right:6px" width="16"> <a
href="https://www.google.com/alerts/share?hl=en&amp;gl=US&amp;ru=https://www.infoq.com/podcasts/dojo-web-components-web-assembly%3FuseSponsorshipSuggestions%3Dtrue%26itm_source%3Dpodcasts_about_development%26itm_medium%3Dlink%26itm_campaign%3Ddevelopment&amp;ss=fb&amp;rt=Dylan+Schiemann+on+the+Evolution+of+Dojo,+Web+Components+and+Emerging+Trends+in+Web+...&amp;cd=KhM4NDY3NzM2OTY1NjQ3ODA4MTc4MhpkOWNhMWQwYjQ4MGUzYmRhOmNvbTplbjpVUw&amp;ssp=AMJHsmUZWRXmwX6zOSmufjwf2CRr7uQtjQ"
                                style="text-decoration:none"
                                moz-do-not-send="true"> <img
                                  alt="Facebook"
                                  src="https://www.gstatic.com/alerts/images/fb-24.png"
                                  moz-do-not-send="true" width="16"
                                  height="16" border="0"></a> </td>
                            <td style="padding-right:6px" width="16"> <a
href="https://www.google.com/alerts/share?hl=en&amp;gl=US&amp;ru=https://www.infoq.com/podcasts/dojo-web-components-web-assembly%3FuseSponsorshipSuggestions%3Dtrue%26itm_source%3Dpodcasts_about_development%26itm_medium%3Dlink%26itm_campaign%3Ddevelopment&amp;ss=tw&amp;rt=Dylan+Schiemann+on+the+Evolution+of+Dojo,+Web+Components+and+Emerging+Trends+in+Web+...&amp;cd=KhM4NDY3NzM2OTY1NjQ3ODA4MTc4MhpkOWNhMWQwYjQ4MGUzYmRhOmNvbTplbjpVUw&amp;ssp=AMJHsmUZWRXmwX6zOSmufjwf2CRr7uQtjQ"
                                style="text-decoration:none"
                                moz-do-not-send="true"> <img
                                  alt="Twitter"
                                  src="https://www.gstatic.com/alerts/images/tw-24.png"
                                  moz-do-not-send="true" width="16"
                                  height="16" border="0"></a> </td>
                            <td style="padding:0px 0px 6px
                              15px;font-family:Arial"> <a
href="https://www.google.com/alerts/feedback?ffu=https://www.infoq.com/podcasts/dojo-web-components-web-assembly%3FuseSponsorshipSuggestions%3Dtrue%26itm_source%3Dpodcasts_about_development%26itm_medium%3Dlink%26itm_campaign%3Ddevelopment&amp;source=alertsmail&amp;hl=en&amp;gl=US&amp;msgid=ODQ2NzczNjk2NTY0NzgwODE3OA&amp;s=AB2Xq4j54gzXweT91DH7xGRAq94kSB9QczE0AZs"
style="text-decoration:none;vertical-align:middle;color:#aaa;font-size:10px"
                                moz-do-not-send="true"> Flag as
                                irrelevant </a> </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </td>
                <td style="padding-right:18px"><br>
                </td>
              </tr>
              <tr itemscope="" itemtype="http://schema.org/Article">
                <td style="padding-left:18px"><br>
                </td>
                <td style="padding:18px 0px 12px
                  0px;vertical-align:top;border-top:1px solid
                  #e4e4e4;font-family:Arial">
                  <div> <span style="padding:0px 6px 0px 0px"> <a
href="https://www.google.com/url?rct=j&amp;sa=t&amp;url=https://www.infoq.com/news/2020/04/jquery-35-xss-vulnerability-fix/&amp;ct=ga&amp;cd=CAEYBioTODQ2NzczNjk2NTY0NzgwODE3ODIaZDljYTFkMGI0ODBlM2JkYTpjb206ZW46VVM&amp;usg=AFQjCNEf8GaVWPzJ4tro2apRTuTT-5Dqaw"
                        itemprop="url"
style="color:#427fed;display:inline;text-decoration:none;font-size:16px;line-height:20px"
                        moz-do-not-send="true"> <span itemprop="name">jQuery
                          3.5 Released, Fixes XSS Vulnerability</span> </a>
                    </span>
                    <div>
                      <div style="padding:2px 0px 8px 0px">
                        <div itemprop="publisher" itemscope=""
                          itemtype="http://schema.org/Organization"
                          style="color:#737373;font-size:12px"> <a
                            style="text-decoration:none;color:#737373"
                            moz-do-not-send="true"> <span
                              itemprop="name">InfoQ.com</span> </a> </div>
                        <div itemprop="description"
                          style="color:#252525;padding:2px 0px 0px
                          0px;font-size:12px;line-height:18px">The Snyk
                          open source security platform estimated in its
                          State of <b>JavaScript</b> frameworks
                          security report 2019 that 84% of all websites
                          may be impactedÂ ...</div>
                      </div>
                      <table>
                        <tbody>
                          <tr>
                            <td style="padding-right:6px" width="16"> <a
href="https://www.google.com/alerts/share?hl=en&amp;gl=US&amp;ru=https://www.infoq.com/news/2020/04/jquery-35-xss-vulnerability-fix/&amp;ss=fb&amp;rt=jQuery+3.5+Released,+Fixes+XSS+Vulnerability&amp;cd=KhM4NDY3NzM2OTY1NjQ3ODA4MTc4MhpkOWNhMWQwYjQ4MGUzYmRhOmNvbTplbjpVUw&amp;ssp=AMJHsmWxGvb_V3SZoFxYPnY-M0utc_eiYA"
                                style="text-decoration:none"
                                moz-do-not-send="true"> <img
                                  alt="Facebook"
                                  src="https://www.gstatic.com/alerts/images/fb-24.png"
                                  moz-do-not-send="true" width="16"
                                  height="16" border="0"></a> </td>
                            <td style="padding-right:6px" width="16"> <a
href="https://www.google.com/alerts/share?hl=en&amp;gl=US&amp;ru=https://www.infoq.com/news/2020/04/jquery-35-xss-vulnerability-fix/&amp;ss=tw&amp;rt=jQuery+3.5+Released,+Fixes+XSS+Vulnerability&amp;cd=KhM4NDY3NzM2OTY1NjQ3ODA4MTc4MhpkOWNhMWQwYjQ4MGUzYmRhOmNvbTplbjpVUw&amp;ssp=AMJHsmWxGvb_V3SZoFxYPnY-M0utc_eiYA"
                                style="text-decoration:none"
                                moz-do-not-send="true"> <img
                                  alt="Twitter"
                                  src="https://www.gstatic.com/alerts/images/tw-24.png"
                                  moz-do-not-send="true" width="16"
                                  height="16" border="0"></a> </td>
                            <td style="padding:0px 0px 6px
                              15px;font-family:Arial"> <a
href="https://www.google.com/alerts/feedback?ffu=https://www.infoq.com/news/2020/04/jquery-35-xss-vulnerability-fix/&amp;source=alertsmail&amp;hl=en&amp;gl=US&amp;msgid=ODQ2NzczNjk2NTY0NzgwODE3OA&amp;s=AB2Xq4j54gzXweT91DH7xGRAq94kSB9QczE0AZs"
style="text-decoration:none;vertical-align:middle;color:#aaa;font-size:10px"
                                moz-do-not-send="true"> Flag as
                                irrelevant </a> </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </td>
                <td style="padding-right:18px"><br>
                </td>
              </tr>
              <tr itemscope="" itemtype="http://schema.org/Article">
                <td style="padding-left:18px"><br>
                </td>
                <td style="padding:18px 0px 12px
                  0px;vertical-align:top;border-top:1px solid
                  #e4e4e4;font-family:Arial"> <a
href="https://www.google.com/url?rct=j&amp;sa=t&amp;url=https://edgy.app/google-to-replace-in-person-conference-with-new-video-series%3Fpfrom%3Dmarketing%26fp%3Da6&amp;ct=ga&amp;cd=CAEYByoTODQ2NzczNjk2NTY0NzgwODE3ODIaZDljYTFkMGI0ODBlM2JkYTpjb206ZW46VVM&amp;usg=AFQjCNGBnN42ZbyRWO6FyhGK1qF1C46-GQ"
                    style="text-decoration:none" moz-do-not-send="true">
                    <table
                      style="display:inline;border-collapse:collapse"
                      align="right">
                      <tbody>
                        <tr>
                          <td style="padding-left:18px"><br>
                          </td>
                          <td style="padding:0px 0px 0px
0px;background-repeat:no-repeat;text-align:center;background-image:url(https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTvsXFG_By4IgRFF_akWkhzuv5KLRTfYVq44TiFWKe_bgBxeuTpg1VVUgc);border:1px
                            solid #e4e4e4" width="100" valign="bottom"
                            height="100">
                            <link
href="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQg2LFNjYB8zDhfH3OJ39ITwTnrWk8H2j04h1_Cm9laIcIPO5i3yrnVdt2eDw"
                              itemprop="image">
                            <!--[if gte mso 9]>
       <v:image xmlns:v="urn:schemas-microsoft-com:vml" id="theImage"
                style='behavior: url(#default#VML);
                       display:inline-block; position:absolute;
                       height: 100px; width: 100px;
                       top:0; left:0; border:0; z-index:1;' src="https://encrypted-tbn2.gstatic.com/images%3Fq%3Dtbn:ANd9GcTvsXFG_By4IgRFF_akWkhzuv5KLRTfYVq44TiFWKe_bgBxeuTpg1VVUgc"/>
       <v:rect xmlns:v="urn:schemas-microsoft-com:vml"
               style='behavior: url(#default#VML);
                      display:inline-block;
                      position: absolute; top: 82px; left: 0px;
                      width:100px; border:0; z-index:2;' strokecolor="none">
       <v:fill opacity="50%" color="#000000"/>
       <v:textbox style="mso-fit-shape-to-text:t;
                         mso-column-margin: 0pt;
                         letter-spacing: 0.8px;"
                         inset="0pt,0pt,0pt,0pt">
         <font size="-1" color="#ffffff"></font>
       </v:textbox>
       </v:rect>
       <div style="display: none">
       <![endif]-->
                            <div
                              style="color:#fff;font-size:9px;letter-spacing:0.8px">
                            </div>
                            <!--[if gte mso 9]></div><![endif]--> </td>
                        </tr>
                      </tbody>
                    </table>
                  </a>
                  <div> <span style="padding:0px 6px 0px 0px"> <a
href="https://www.google.com/url?rct=j&amp;sa=t&amp;url=https://edgy.app/google-to-replace-in-person-conference-with-new-video-series%3Fpfrom%3Dmarketing%26fp%3Da6&amp;ct=ga&amp;cd=CAEYByoTODQ2NzczNjk2NTY0NzgwODE3ODIaZDljYTFkMGI0ODBlM2JkYTpjb206ZW46VVM&amp;usg=AFQjCNGBnN42ZbyRWO6FyhGK1qF1C46-GQ"
                        itemprop="url"
style="color:#427fed;display:inline;text-decoration:none;font-size:16px;line-height:20px"
                        moz-do-not-send="true"> <span itemprop="name">Google
                          to Replace In-Person Conference With New Video
                          Series</span> </a> </span>
                    <div>
                      <div style="padding:2px 0px 8px 0px">
                        <div itemprop="publisher" itemscope=""
                          itemtype="http://schema.org/Organization"
                          style="color:#737373;font-size:12px"> <a
                            style="text-decoration:none;color:#737373"
                            moz-do-not-send="true"> <span
                              itemprop="name">Edgy Labs</span> </a> </div>
                        <div itemprop="description"
                          style="color:#252525;padding:2px 0px 0px
                          0px;font-size:12px;line-height:18px">Links and
                          <b>JavaScript</b>. Recently, Martin Splitt has
                          been hosting his version of Webmaster Hangouts
                          that is dedicated to questions about SEO
                          andÂ ...</div>
                      </div>
                      <table>
                        <tbody>
                          <tr>
                            <td style="padding-right:6px" width="16"> <a
href="https://www.google.com/alerts/share?hl=en&amp;gl=US&amp;ru=https://edgy.app/google-to-replace-in-person-conference-with-new-video-series%3Fpfrom%3Dmarketing%26fp%3Da6&amp;ss=fb&amp;rt=Google+to+Replace+In-Person+Conference+With+New+Video+Series&amp;cd=KhM4NDY3NzM2OTY1NjQ3ODA4MTc4MhpkOWNhMWQwYjQ4MGUzYmRhOmNvbTplbjpVUw&amp;ssp=AMJHsmWzsvASQ7n4JctxNNdMOS9-nujdSA"
                                style="text-decoration:none"
                                moz-do-not-send="true"> <img
                                  alt="Facebook"
                                  src="https://www.gstatic.com/alerts/images/fb-24.png"
                                  moz-do-not-send="true" width="16"
                                  height="16" border="0"></a> </td>
                            <td style="padding-right:6px" width="16"> <a
href="https://www.google.com/alerts/share?hl=en&amp;gl=US&amp;ru=https://edgy.app/google-to-replace-in-person-conference-with-new-video-series%3Fpfrom%3Dmarketing%26fp%3Da6&amp;ss=tw&amp;rt=Google+to+Replace+In-Person+Conference+With+New+Video+Series&amp;cd=KhM4NDY3NzM2OTY1NjQ3ODA4MTc4MhpkOWNhMWQwYjQ4MGUzYmRhOmNvbTplbjpVUw&amp;ssp=AMJHsmWzsvASQ7n4JctxNNdMOS9-nujdSA"
                                style="text-decoration:none"
                                moz-do-not-send="true"> <img
                                  alt="Twitter"
                                  src="https://www.gstatic.com/alerts/images/tw-24.png"
                                  moz-do-not-send="true" width="16"
                                  height="16" border="0"></a> </td>
                            <td style="padding:0px 0px 6px
                              15px;font-family:Arial"> <a
href="https://www.google.com/alerts/feedback?ffu=https://edgy.app/google-to-replace-in-person-conference-with-new-video-series%3Fpfrom%3Dmarketing%26fp%3Da6&amp;source=alertsmail&amp;hl=en&amp;gl=US&amp;msgid=ODQ2NzczNjk2NTY0NzgwODE3OA&amp;s=AB2Xq4j54gzXweT91DH7xGRAq94kSB9QczE0AZs"
style="text-decoration:none;vertical-align:middle;color:#aaa;font-size:10px"
                                moz-do-not-send="true"> Flag as
                                irrelevant </a> </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </td>
                <td style="padding-right:18px"><br>
                </td>
              </tr>
              <tr itemscope="" itemtype="http://schema.org/Article">
                <td style="padding-left:18px"><br>
                </td>
                <td style="padding:18px 0px 12px
                  0px;vertical-align:top;border-top:1px solid
                  #e4e4e4;font-family:Arial">
                  <div> <span style="padding:0px 6px 0px 0px"> <a
href="https://www.google.com/url?rct=j&amp;sa=t&amp;url=https://mybroadband.co.za/news/software/348145-the-most-popular-programming-languages-and-what-they-are-used-for.html&amp;ct=ga&amp;cd=CAEYCCoTODQ2NzczNjk2NTY0NzgwODE3ODIaZDljYTFkMGI0ODBlM2JkYTpjb206ZW46VVM&amp;usg=AFQjCNFlANzF26--Q7TSIWrTSY_BolJ1yw"
                        itemprop="url"
style="color:#427fed;display:inline;text-decoration:none;font-size:16px;line-height:20px"
                        moz-do-not-send="true"> <span itemprop="name">The
                          most popular programming languages â€“ And what
                          they are used for</span> </a> </span>
                    <div>
                      <div style="padding:2px 0px 8px 0px">
                        <div itemprop="publisher" itemscope=""
                          itemtype="http://schema.org/Organization"
                          style="color:#737373;font-size:12px"> <a
                            style="text-decoration:none;color:#737373"
                            moz-do-not-send="true"> <span
                              itemprop="name">MyBroadband</span> </a> </div>
                        <div itemprop="description"
                          style="color:#252525;padding:2px 0px 0px
                          0px;font-size:12px;line-height:18px">â€œAs a
                          result, <b>JavaScript</b> is now used by more
                          than half of developers working on web
                          applications, cloud services, or extensions
                          for third-partyÂ ...</div>
                      </div>
                      <table>
                        <tbody>
                          <tr>
                            <td style="padding-right:6px" width="16"> <a
href="https://www.google.com/alerts/share?hl=en&amp;gl=US&amp;ru=https://mybroadband.co.za/news/software/348145-the-most-popular-programming-languages-and-what-they-are-used-for.html&amp;ss=fb&amp;rt=The+most+popular+programming+languages+%E2%80%93+And+what+they+are+used+for&amp;cd=KhM4NDY3NzM2OTY1NjQ3ODA4MTc4MhpkOWNhMWQwYjQ4MGUzYmRhOmNvbTplbjpVUw&amp;ssp=AMJHsmVdNIROxw4VWaWgClgmAIN14tlYzg"
                                style="text-decoration:none"
                                moz-do-not-send="true"> <img
                                  alt="Facebook"
                                  src="https://www.gstatic.com/alerts/images/fb-24.png"
                                  moz-do-not-send="true" width="16"
                                  height="16" border="0"></a> </td>
                            <td style="padding-right:6px" width="16"> <a
href="https://www.google.com/alerts/share?hl=en&amp;gl=US&amp;ru=https://mybroadband.co.za/news/software/348145-the-most-popular-programming-languages-and-what-they-are-used-for.html&amp;ss=tw&amp;rt=The+most+popular+programming+languages+%E2%80%93+And+what+they+are+used+for&amp;cd=KhM4NDY3NzM2OTY1NjQ3ODA4MTc4MhpkOWNhMWQwYjQ4MGUzYmRhOmNvbTplbjpVUw&amp;ssp=AMJHsmVdNIROxw4VWaWgClgmAIN14tlYzg"
                                style="text-decoration:none"
                                moz-do-not-send="true"> <img
                                  alt="Twitter"
                                  src="https://www.gstatic.com/alerts/images/tw-24.png"
                                  moz-do-not-send="true" width="16"
                                  height="16" border="0"></a> </td>
                            <td style="padding:0px 0px 6px
                              15px;font-family:Arial"> <a
href="https://www.google.com/alerts/feedback?ffu=https://mybroadband.co.za/news/software/348145-the-most-popular-programming-languages-and-what-they-are-used-for.html&amp;source=alertsmail&amp;hl=en&amp;gl=US&amp;msgid=ODQ2NzczNjk2NTY0NzgwODE3OA&amp;s=AB2Xq4j54gzXweT91DH7xGRAq94kSB9QczE0AZs"
style="text-decoration:none;vertical-align:middle;color:#aaa;font-size:10px"
                                moz-do-not-send="true"> Flag as
                                irrelevant </a> </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </td>
                <td style="padding-right:18px"><br>
                </td>
              </tr>
              <tr itemscope="" itemtype="http://schema.org/Article">
                <td style="padding-left:18px"><br>
                </td>
                <td style="padding:18px 0px 12px
                  0px;vertical-align:top;border-top:1px solid
                  #e4e4e4;font-family:Arial">
                  <div> <span style="padding:0px 6px 0px 0px"> <a
href="https://www.google.com/url?rct=j&amp;sa=t&amp;url=https://sdtimes.com/softwaredev/jquery-addresses-xss-security-issue-in-3-5-release/&amp;ct=ga&amp;cd=CAEYCSoTODQ2NzczNjk2NTY0NzgwODE3ODIaZDljYTFkMGI0ODBlM2JkYTpjb206ZW46VVM&amp;usg=AFQjCNEftFFnvTra5CHEEEVugX2JEQJmlA"
                        itemprop="url"
style="color:#427fed;display:inline;text-decoration:none;font-size:16px;line-height:20px"
                        moz-do-not-send="true"> <span itemprop="name">jQuery
                          addresses XSS security issue in 3.5 release</span>
                      </a> </span>
                    <div>
                      <div style="padding:2px 0px 8px 0px">
                        <div itemprop="publisher" itemscope=""
                          itemtype="http://schema.org/Organization"
                          style="color:#737373;font-size:12px"> <a
                            style="text-decoration:none;color:#737373"
                            moz-do-not-send="true"> <span
                              itemprop="name">SDTimes.com</span> </a> </div>
                        <div itemprop="description"
                          style="color:#252525;padding:2px 0px 0px
                          0px;font-size:12px;line-height:18px">The
                          latest version of the popular <b>JavaScript</b>
                          library jQuery is now available. jQuery 3.5
                          fixes a security issue, adds a few new
                          features, and fixesÂ ...</div>
                      </div>
                      <table>
                        <tbody>
                          <tr>
                            <td style="padding-right:6px" width="16"> <a
href="https://www.google.com/alerts/share?hl=en&amp;gl=US&amp;ru=https://sdtimes.com/softwaredev/jquery-addresses-xss-security-issue-in-3-5-release/&amp;ss=fb&amp;rt=jQuery+addresses+XSS+security+issue+in+3.5+release&amp;cd=KhM4NDY3NzM2OTY1NjQ3ODA4MTc4MhpkOWNhMWQwYjQ4MGUzYmRhOmNvbTplbjpVUw&amp;ssp=AMJHsmUYWZ3V4NlphdWfIl7pOq4Xjo9APw"
                                style="text-decoration:none"
                                moz-do-not-send="true"> <img
                                  alt="Facebook"
                                  src="https://www.gstatic.com/alerts/images/fb-24.png"
                                  moz-do-not-send="true" width="16"
                                  height="16" border="0"></a> </td>
                            <td style="padding-right:6px" width="16"> <a
href="https://www.google.com/alerts/share?hl=en&amp;gl=US&amp;ru=https://sdtimes.com/softwaredev/jquery-addresses-xss-security-issue-in-3-5-release/&amp;ss=tw&amp;rt=jQuery+addresses+XSS+security+issue+in+3.5+release&amp;cd=KhM4NDY3NzM2OTY1NjQ3ODA4MTc4MhpkOWNhMWQwYjQ4MGUzYmRhOmNvbTplbjpVUw&amp;ssp=AMJHsmUYWZ3V4NlphdWfIl7pOq4Xjo9APw"
                                style="text-decoration:none"
                                moz-do-not-send="true"> <img
                                  alt="Twitter"
                                  src="https://www.gstatic.com/alerts/images/tw-24.png"
                                  moz-do-not-send="true" width="16"
                                  height="16" border="0"></a> </td>
                            <td style="padding:0px 0px 6px
                              15px;font-family:Arial"> <a
href="https://www.google.com/alerts/feedback?ffu=https://sdtimes.com/softwaredev/jquery-addresses-xss-security-issue-in-3-5-release/&amp;source=alertsmail&amp;hl=en&amp;gl=US&amp;msgid=ODQ2NzczNjk2NTY0NzgwODE3OA&amp;s=AB2Xq4j54gzXweT91DH7xGRAq94kSB9QczE0AZs"
style="text-decoration:none;vertical-align:middle;color:#aaa;font-size:10px"
                                moz-do-not-send="true"> Flag as
                                irrelevant </a> </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </td>
                <td style="padding-right:18px"><br>
                </td>
              </tr>
              <tr>
                <td colspan="3"
style="background-color:#f8f8f8;font-size:14px;vertical-align:middle;text-align:center;padding:10px
                  10px 10px 10px;line-height:20px;border:1px solid
                  #e4e4e4;font-family:Arial" valign="middle"> <a
href="https://www.google.com/alerts?s=AB2Xq4j54gzXweT91DH7xGRAq94kSB9QczE0AZs&amp;start=1587124924&amp;end=1587211492&amp;source=alertsmail&amp;hl=en&amp;gl=US&amp;msgid=ODQ2NzczNjk2NTY0NzgwODE3OA#history"
style="text-decoration:none;vertical-align:middle;color:#427fed"
                    moz-do-not-send="true"> See more results </a> <span
style="font-size:12px;padding-left:15px;padding-right:15px;color:#aaa">|</span>
                  <a
href="https://www.google.com/alerts/edit?source=alertsmail&amp;hl=en&amp;gl=US&amp;msgid=ODQ2NzczNjk2NTY0NzgwODE3OA&amp;s=AB2Xq4j54gzXweT91DH7xGRAq94kSB9QczE0AZs&amp;email=dan-google%40"
style="text-decoration:none;vertical-align:middle;color:#427fed"
                    moz-do-not-send="true">Edit this alert</a> </td>
              </tr>
            </tbody>
          </table>
          <table
style="padding-top:6px;font-size:12px;color:#252525;text-align:center;width:100%">
            <tbody>
              <tr>
                <td style="font-family:Arial"> You have received this
                  email because you have subscribed to <b>Google Alerts</b>.
                  <div> <a
href="https://www.google.com/alerts/remove?source=alertsmail&amp;hl=en&amp;gl=US&amp;msgid=ODQ2NzczNjk2NTY0NzgwODE3OA&amp;s=AB2Xq4j54gzXweT91DH7xGRAq94kSB9QczE0AZs"
                      style="text-decoration:none;color:#427fed"
                      moz-do-not-send="true">Unsubscribe</a> <span
                      style="padding:0px 4px 0px 4px;color:#252525">|</span>
                    <a
href="https://www.google.com/alerts?source=alertsmail&amp;hl=en&amp;gl=US&amp;msgid=ODQ2NzczNjk2NTY0NzgwODE3OA"
                      style="text-decoration:none;color:#427fed"
                      moz-do-not-send="true"> View all your alerts </a>
                  </div>
                </td>
              </tr>
              <tr>
                <td style="padding:6px 10px 0px 0px;font-family:Arial">
                  <a
href="https://www.google.com/alerts/feeds/16654637476491735194/8830828320637633854"
                    style="text-decoration:none;color:#427fed"
                    moz-do-not-send="true"> <img
                      src="https://www.gstatic.com/alerts/images/rss-16.gif"
                      alt="RSS" style="padding:0px 8px 0px
                      0px;vertical-align:middle" moz-do-not-send="true"
                      border="0"> <span
                      style="display:inline;line-height:16px;vertical-align:middle">
                      Receive this alert as RSS feed </span> </a> </td>
              </tr>
              <tr>
                <td style="padding:6px 0px 0px 0px;font-family:Arial"> <a
href="https://www.google.com/alerts?source=alertsmail&amp;hl=en&amp;gl=US&amp;msgid=ODQ2NzczNjk2NTY0NzgwODE3OA&amp;s=AB2Xq4j54gzXweT91DH7xGRAq94kSB9QczE0AZs&amp;ffu="
                    style="text-decoration:none;color:#427fed"
                    moz-do-not-send="true">
                    <div
                      style="display:inline;line-height:16px;vertical-align:middle">
                      Send Feedback </div>
                  </a> </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <!--[if mso]>
</td></tr></table>
<![endif]--> </div>
  </body>
</html>

--------------52425021B51517AE92558F34--

	`, () => connection.quit())
  } catch {
    connection.quit()
  }
})
