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
Content-Type: multipart/alternative; boundary="00000000000036cce105a354d7c5"

--00000000000036cce105a354d7c5
Content-Type: text/plain; charset="UTF-8"; format=flowed; delsp=yes
Content-Transfer-Encoding: base64

PT09IE5ld3MgLSAxMCBuZXcgcmVzdWx0cyBmb3IgW2Rldm9wc10gPT09DQoNCkEgQ1NQJ3MgZ3Vp
ZGUgdG8gNUcgYW5kIERldk9wcyAoUmVhZGVyIEZvcnVtKQ0KUkNSIFdpcmVsZXNzIE5ld3MNCkJ1
dCB3aGlsZSBpbnRlcmVzdCBpbiA1RyBhbmQgRGV2T3BzIHBpcGVsaW5lIGF1dG9tYXRpb24gaXMg
aGlnaCwgQ1NQcyBhcmUNCnF1aWNrIHRvIG1lbnRpb24gdGhlIGRpZmZpY3VsdGllcyB0aGV5IGZh
Y2Ugd2l0aCBpbXBsZW1lbnRhdGlvbi4NCjxodHRwczovL3d3dy5nb29nbGUuY29tL3VybD9yY3Q9
aiZzYT10JnVybD1odHRwczovL3d3dy5yY3J3aXJlbGVzcy5jb20vMjAyMDA0MTQvb3Bpbmlvbi9y
ZWFkZXJmb3J1bS9jc3AtZ3VpZGUtNWctZGV2b3BzLXJlYWRlci1mb3J1bSZjdD1nYSZjZD1DQUVZ
QUNvVU1USTFPVEkzTVRBek5qa3dNak00TnpFM056a3lHakF3TWpka01tUmpOelkwWVRRMVpXSTZZ
Mjl0T21WdU9sVlQmdXNnPUFGUWpDTkU1ZC11QTA0MHRzOWdsMjRmYlVuQ1RGUlBRdXc+DQoNCkV4
dGVuZCBZb3VyIEluY2lkZW50IFJlc3BvbnNlIFByb2dyYW0gdG8gRGV2T3BzIFdpdGggU2VjdXJp
dHkgQXV0b21hdGlvbg0KU2VjdXJpdHkgSW50ZWxsaWdlbmNlIChibG9nKQ0KVGhlIGdyb3d0aCBp
biBEZXZPcHMgaGFzIGJlZW4gYSByZXNwb25zZSB0byB0aGUgbmVlZCB0byBhY2NlbGVyYXRlIHNv
ZnR3YXJlDQpkZXZlbG9wbWVudCBhbmQgZGVsaXZlcnkgdG8gbWVldCB0aGVzZSByYXBpZGx5IGNo
YW5naW5nIHVzZSBjYXNlcyAuLi4NCjxodHRwczovL3d3dy5nb29nbGUuY29tL3VybD9yY3Q9aiZz
YT10JnVybD1odHRwczovL3NlY3VyaXR5aW50ZWxsaWdlbmNlLmNvbS9wb3N0cy9leHRlbmQteW91
ci1pbmNpZGVudC1yZXNwb25zZS1wcm9ncmFtLXRvLWRldm9wcy13aXRoLXNlY3VyaXR5LWF1dG9t
YXRpb24vJmN0PWdhJmNkPUNBRVlBU29VTVRJMU9USTNNVEF6Tmprd01qTTROekUzTnpreUdqQXdN
amRrTW1Sak56WTBZVFExWldJNlkyOXRPbVZ1T2xWVCZ1c2c9QUZRakNORkdMelZXbUtuX2U4VUZw
NHF4ek5UaHVSbUVOUT4NCg0KU2VjdXJpbmcgRWZmaWNpZW5jeSBBbWlkIENPVklELTE5IE91dGJy
ZWFrOiBFdXJpc2tvIE1vYmlsaXR5IEFkb3B0cw0KRGV2T3BzLXBvd2VyZWQgV29yayAuLi4NCldG
TVogQWxsZW50b3duDQouLi4gc3ByZWFkLCBFdXJpc2tvIGhhcyBzdWNjZXNzZnVsbHkgZWxhYm9y
YXRlZCBhIERldk9wcy1wb3dlcmVkIFdvcmsgZnJvbQ0KSG9tZSBzdHJhdGVneSB0byBzYWZlZ3Vh
cmQgbW9iaWxpdHksIGFuZCB0aHVzIGVmZmljaWVuY3kgYW5kIHByb2R1Y3Rpdml0eQ0KLi4uDQo8
aHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS91cmw/cmN0PWomc2E9dCZ1cmw9aHR0cHM6Ly93d3cud2Zt
ei5jb20vbmV3cy9wcl9uZXdzd2lyZS9wcl9uZXdzd2lyZV9lbnRlcnRhaW5tZW50L3NlY3VyaW5n
LWVmZmljaWVuY3ktYW1pZC1jb3ZpZC0xOS1vdXRicmVhay1ldXJpc2tvLW1vYmlsaXR5LWFkb3B0
cy1kZXZvcHMtcG93ZXJlZC13b3JrLWZyb20taG9tZS1zdHJhdGVneS9hcnRpY2xlXzcwOGRiMTg0
LTg1ZTAtNTRjNy1iZDNiLWM2NzExOTAzZjllNS5odG1sJmN0PWdhJmNkPUNBRVlBaW9VTVRJMU9U
STNNVEF6Tmprd01qTTROekUzTnpreUdqQXdNamRrTW1Sak56WTBZVFExWldJNlkyOXRPbVZ1T2xW
VCZ1c2c9QUZRakNORW81eWQybzNES1NTY1JzcW5zQVBTUVV3czJyUT4NCg0KR2l0TGFiIGV4cGFu
ZHMgaW50byBBdXN0cmFsaWEgYXMgRGV2T3BzIHRvb2xpbmcgbWFya2V0IGhlYXRzIHVwDQpDb21w
dXRlcldlZWtseS5jb20NClRoZSBEZXZPcHMgcGxhdGZvcm0gc3VwcGxpZXIgZXhwYW5kcyBEb3du
IFVuZGVyIHdpdGggYSBiaWdnZXIgd29ya2ZvcmNlIHRvDQptZWV0IHRoZSBuZWVkcyBvZiBsb2Nh
bCBmaXJtcyB0aGF0IGFyZSBsb29raW5nIHRvIHNwZWVkIHVwIHNvZnR3YXJlIC4uLg0KPGh0dHBz
Oi8vd3d3Lmdvb2dsZS5jb20vdXJsP3JjdD1qJnNhPXQmdXJsPWh0dHBzOi8vd3d3LmNvbXB1dGVy
d2Vla2x5LmNvbS9uZXdzLzI1MjQ4MTYyMC9HaXRMYWItZXhwYW5kcy1pbnRvLUF1c3RyYWxpYS1h
cy1EZXZPcHMtdG9vbGluZy1tYXJrZXQtaGVhdHMtdXAmY3Q9Z2EmY2Q9Q0FFWUF5b1VNVEkxT1RJ
M01UQXpOamt3TWpNNE56RTNOemt5R2pBd01qZGtNbVJqTnpZMFlUUTFaV0k2WTI5dE9tVnVPbFZU
JnVzZz1BRlFqQ05HSkZ6QjhqM1BfNDNkV2NBc0tPczR3NnJERTRBPg0KDQpDVEVSQSBFeHRlbmRz
IHRoZSBHbG9iYWwgRmlsZSBTeXN0ZW0gdG8gRGV2T3BzDQpZYWhvbyBGaW5hbmNlDQpORVcgWU9S
SywgQXByaWwgMTUsIDIwMjAgL1BSTmV3c3dpcmUtUFJXZWIvIC0tIENURVJBLCB0aGUgZWRnZS10
by1jbG91ZA0KZmlsZSBzZXJ2aWNlcyBsZWFkZXIsIHRvZGF5IGFubm91bmNlZCBEZXZPcHMgdG9v
bHMgdGhhdCBhbGxvdyAuLi4NCjxodHRwczovL3d3dy5nb29nbGUuY29tL3VybD9yY3Q9aiZzYT10
JnVybD1odHRwczovL2ZpbmFuY2UueWFob28uY29tL25ld3MvY3RlcmEtZXh0ZW5kcy1nbG9iYWwt
ZmlsZS1zeXN0ZW0tMTIwMDAwNTI2Lmh0bWwmY3Q9Z2EmY2Q9Q0FFWUJDb1VNVEkxT1RJM01UQXpO
amt3TWpNNE56RTNOemt5R2pBd01qZGtNbVJqTnpZMFlUUTFaV0k2WTI5dE9tVnVPbFZUJnVzZz1B
RlFqQ05FSnF2STIyOVVMUEotMlJ1blJ3NldSMElfY1V3Pg0KDQpHaXRMYWIgUmVzcG9uZHMgVG8g
R2l0SHViIE1ha2luZyBUZWFtcyBGcmVlIOKAkyBXZSBBbGwgV2luDQpEZXZPcHMuY29tDQpJIHRo
aW5rIHRoZSBNaWNyb3NvZnQgZW50aXR5IGFscmVhZHkgZW52aXNpb25zIGEgdG90YWwgRGV2T3Bz
IHNvbHV0aW9uIGFzDQpiZWluZyBwYXJ0IG9mIEdpdEh1YidzIGZ1dHVyZS4gT24gdG9wIG9mIHRo
YXQsIEkgdGhpbmsgR2l0SHViIGFuZCBNaWNyb3NvZnQNCmFyZSAuLi4NCjxodHRwczovL3d3dy5n
b29nbGUuY29tL3VybD9yY3Q9aiZzYT10JnVybD1odHRwczovL2Rldm9wcy5jb20vZ2l0bGFiLXJl
c3BvbmRzLXRvLWdpdGh1Yi1tYWtpbmctdGVhbXMtZnJlZS13ZS1hbGwtd2luLyZjdD1nYSZjZD1D
QUVZQlNvVU1USTFPVEkzTVRBek5qa3dNak00TnpFM056a3lHakF3TWpka01tUmpOelkwWVRRMVpX
STZZMjl0T21WdU9sVlQmdXNnPUFGUWpDTkZhR3pkRXBDNW1nRk9nZWNOT1MzUGxhZlczUnc+DQoN
ClNjYWx5ciBBbHRlcnMgTG9nIEFuYWx5dGljcyBFY29ub21pY3MNCkRldk9wcy5jb20NCkl0IHdp
bGwgYmUgdXAgdG8gRGV2T3BzIGxlYWRlcnMgdG8gZmlndXJlIG91dCBob3cgYmVzdCB0byBrZWVw
IHBhY2Ugd2l0aA0KdGhhdCByYXRlIG9mIGNoYW5nZSB3aXRoIHdoYXRldmVyIHJlc291cmNlcyBh
cmUgYXQgaGFuZC4NCjxodHRwczovL3d3dy5nb29nbGUuY29tL3VybD9yY3Q9aiZzYT10JnVybD1o
dHRwczovL2Rldm9wcy5jb20vc2NhbHlyLWFsdGVycy1sb2ctYW5hbHl0aWNzLWVjb25vbWljcy8m
Y3Q9Z2EmY2Q9Q0FFWUJpb1VNVEkxT1RJM01UQXpOamt3TWpNNE56RTNOemt5R2pBd01qZGtNbVJq
TnpZMFlUUTFaV0k2WTI5dE9tVnVPbFZUJnVzZz1BRlFqQ05GeDYxWFRGdlFJR1haNnlibVNzYkVO
SklFOXJnPg0KDQoyMDIwIERldlNlY09wcyBDb21tdW5pdHkgU3VydmV5OiBPZiA1MDQ1IERldmVs
b3BlcnMsIEd1ZXNzIEhvdyBNYW55IEFyZQ0KSGFwcHk/DQpEZXZPcHMuY29tDQrigJxNYXR1cmUg
RGV2T3BzIHByYWN0aWNlcyBhcmUgY29uc3RhbnRseSB0ZXN0aW5nLCBkZXBsb3lpbmcgYW5kIHZh
bGlkYXRpbmcNCnRoYXQgc29mdHdhcmUgbWVldHMgZXZlcnkgcmVxdWlyZW1lbnQgYW5kIGFsbG93
cyBmb3IgZmFzdCByZWNvdmVyeSBpbiB0aGUNCi4uLg0KPGh0dHBzOi8vd3d3Lmdvb2dsZS5jb20v
dXJsP3JjdD1qJnNhPXQmdXJsPWh0dHBzOi8vZGV2b3BzLmNvbS8yMDIwLWRldnNlY29wcy1jb21t
dW5pdHktc3VydmV5LW9mLTUwNDUtZGV2ZWxvcGVycy1ndWVzcy1ob3ctbWFueS1hcmUtaGFwcHkv
JmN0PWdhJmNkPUNBRVlCeW9VTVRJMU9USTNNVEF6Tmprd01qTTROekUzTnpreUdqQXdNamRrTW1S
ak56WTBZVFExWldJNlkyOXRPbVZ1T2xWVCZ1c2c9QUZRakNOSHhqNkZDV0djWnR4cEhTb2dsRjMw
S0VIeldJdz4NCg0KSnVuaW9yIERldk9wcyBFbmdpbmVlciBhdCBUZW1wbHVtIChOZXcgWW9yaywg
TlksIFVTQSkNCkJsb2NrY2hhaW4gTmV3cw0KV2UncmUgc2Vla2luZyBhIHRhbGVudGVkIERldk9w
cyAoRGV2ZWxvcG1lbnQgYW5kIE9wZXJhdGlvbnMpIGVuZ2luZWVyIHdobw0KaXMgbG9va2luZyB0
byBhZHZhbmNlIHRoZWlyIGNhcmVlciBieSB3b3JraW5nIGZvciBhIGRpZ2l0YWwgYXNzZXQgZmly
bS4NCjxodHRwczovL3d3dy5nb29nbGUuY29tL3VybD9yY3Q9aiZzYT10JnVybD1odHRwczovL3d3
dy50aGUtYmxvY2tjaGFpbi5jb20vMjAyMC8wNC8xNC9qdW5pb3ItZGV2b3BzLWVuZ2luZWVyLWF0
LXRlbXBsdW0tbmV3LXlvcmstbnktdXNhLyZjdD1nYSZjZD1DQUVZQ0NvVU1USTFPVEkzTVRBek5q
a3dNak00TnpFM056a3lHakF3TWpka01tUmpOelkwWVRRMVpXSTZZMjl0T21WdU9sVlQmdXNnPUFG
UWpDTkdXd3k2QmppNFlJeGdsazhPdThPUUxoTTFwZHc+DQoNCkRpZ2l0YWwuYWk6IFRoZSBDb21w
YW5pZXMgRm9ybWVybHkgS25vd24gQXMgWGViaWFMYWJzIGFuZCBDb2xsYWJOZXQgUGx1cw0KRGV2
T3BzLmNvbQ0KQW5vdGhlciBzaG9lIGhhcyBkcm9wcGVkIGluIHRoZSBjb250aW51aW5nIHN0b3J5
IG9mIFRQRyBDYXBpdGFsJ3MgZm9yYXkNCmludG8gRGV2T3BzLiBUaGUgY29tcGFueSBmb3JtZWQg
YnkgdGhlIG1lcmdlciBvZiBYZWJpYUxhYnMgYW5kIC4uLg0KPGh0dHBzOi8vd3d3Lmdvb2dsZS5j
b20vdXJsP3JjdD1qJnNhPXQmdXJsPWh0dHBzOi8vZGV2b3BzLmNvbS9kaWdpdGFsLWFpLXRoZS1j
b21wYW5pZXMtZm9ybWVybHkta25vd24tYXMteGViaWEtbGFicy1jb2xsYWJuZXQtcGx1cy8mY3Q9
Z2EmY2Q9Q0FFWUNTb1VNVEkxT1RJM01UQXpOamt3TWpNNE56RTNOemt5R2pBd01qZGtNbVJqTnpZ
MFlUUTFaV0k2WTI5dE9tVnVPbFZUJnVzZz1BRlFqQ05HRVZmd1h4NzFBWVFLSWcwNXZHWFlVWVpp
MG1BPg0KDQoNCj09PSBXZWIgLSAyIG5ldyByZXN1bHRzIGZvciBbZGV2b3BzXSA9PT0NCg0KQXBy
aWwgcGF0Y2hlcyBmb3IgQXp1cmUgRGV2T3BzIFNlcnZlciBhbmQgVGVhbSBGb3VuZGF0aW9uIFNl
cnZlcg0KU1ZOIGNvbW1pdHMgZG8gbm90IHRyaWdnZXIgcGlwZWxpbmU7IEFkZGluZyBzdXBwb3J0
IGZvciBTSEEyIGluIFNTSCBvbg0KQXp1cmUgRGV2T3BzLiBBenVyZSBEZXZPcHMgU2VydmVyIDIw
MTkuMS4xIFBhdGNoIDIuIElmIHlvdSBoYXZlIEF6dXJlIC4uLg0KPGh0dHBzOi8vd3d3Lmdvb2ds
ZS5jb20vdXJsP3JjdD1qJnNhPXQmdXJsPWh0dHBzOi8vZGV2YmxvZ3MubWljcm9zb2Z0LmNvbS9k
ZXZvcHMvYXByaWwtcGF0Y2hlcy1mb3ItYXp1cmUtZGV2b3BzLXNlcnZlci1hbmQtdGVhbS1mb3Vu
ZGF0aW9uLXNlcnZlci8mY3Q9Z2EmY2Q9Q0FFWUFDb1VNVEkxT1RJM01UQXpOamt3TWpNNE56RTNO
emt5R2pBd01qZGtNbVJqTnpZMFlUUTFaV0k2WTI5dE9tVnVPbFZUJnVzZz1BRlFqQ05IVER2MTFw
N2xIX2pWd3pPYXRmTjVtaXFXRkNBPg0KDQpEZXZPcHMgRW5naW5lZXINCldlJ3JlIGxvb2tpbmcg
Zm9yIGEgRGV2T3BzIEVuZ2luZWVyIHdpdGggdGhlc2UgcmVxdWlyZW1lbnRzOiBZb3UnbGwgbWFu
YWdlDQpvdXIgYmFyZSBtZXRhbCBhbmQgS1ZNIHBsYXRmb3JtLiBBcyB5b3UgZGV2ZWxvcCwgeW91
J2xsIGxlYXJuIG1vcmUgLi4uDQo8aHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS91cmw/cmN0PWomc2E9
dCZ1cmw9aHR0cHM6Ly93ZXdvcmtyZW1vdGVseS5jb20vbGlzdGluZ3MvbWFpbGVybGl0ZS1kZXZv
cHMtZW5naW5lZXImY3Q9Z2EmY2Q9Q0FFWUFTb1VNVEkxT1RJM01UQXpOamt3TWpNNE56RTNOemt5
R2pBd01qZGtNbVJqTnpZMFlUUTFaV0k2WTI5dE9tVnVPbFZUJnVzZz1BRlFqQ05ISmhFMzhQTDdT
TGZRYmMyNkNEdkVpb1hmUXhRPg0KDQoNCi0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0g
LSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0NClVuc3Vic2NyaWJlIGZyb20gdGhp
cyBHb29nbGUgQWxlcnQ6DQo8aHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS9hbGVydHMvcmVtb3ZlP3Nv
dXJjZT1hbGVydHNtYWlsJmhsPWVuJmdsPVVTJm1zZ2lkPU1USTFPVEkzTVRBek5qa3dNak00TnpF
M056ayZzPUFCMlhxNGd1THFZeFJWZVdNcjk1RXBXODVWVlh3ekhCYU82ZHRpVT4NCg0KQ3JlYXRl
IGFub3RoZXIgR29vZ2xlIEFsZXJ0Og0KPGh0dHBzOi8vd3d3Lmdvb2dsZS5jb20vYWxlcnRzP3Nv
dXJjZT1hbGVydHNtYWlsJmhsPWVuJmdsPVVTJm1zZ2lkPU1USTFPVEkzTVRBek5qa3dNak00TnpF
M056az4NCg0KU2lnbiBpbiB0byBtYW5hZ2UgeW91ciBhbGVydHM6DQo8aHR0cHM6Ly93d3cuZ29v
Z2xlLmNvbS9hbGVydHM/c291cmNlPWFsZXJ0c21haWwmaGw9ZW4mZ2w9VVMmbXNnaWQ9TVRJMU9U
STNNVEF6Tmprd01qTTROekUzTnprPg0K
--00000000000036cce105a354d7c5
Content-Type: text/html; charset="UTF-8"
Content-Transfer-Encoding: quoted-printable

<html lang=3D"en-US"> <head> </head> <body> <div>  <script data-scope=3D"in=
boxmarkup" type=3D"application/json">{
  "api_version": "1.0",
  "publisher": {
    "api_key": "668269e72cfedea31b22524041ff21d9",
    "name": "Google Alerts"
  },
  "entity": {
    "external_key": "Google Alert - devops",
    "title": "Google Alert - devops",
    "subtitle": "Latest: April 15, 2020",
    "avatar_image_url": "https://www.gstatic.com/images/branding/product/1x=
/gsa_512dp.png",
    "main_image_url": "https://www.gstatic.com/bt/C3341AA7A1A076756462EE2E5=
CD71C11/smartmail/mobile/il_newspaper_header_r1.png"
  },
  "updates": {
    "snippets": [ {
      "icon": "BOOKMARK",
      "message": "A CSP's guide to 5G and DevOps (Reader Forum)"
    }, {
      "icon": "BOOKMARK",
      "message": "Extend Your Incident Response Program to DevOps With Secu=
rity Automation"
    }, {
      "icon": "BOOKMARK",
      "message": "Securing Efficiency Amid COVID-19 Outbreak: Eurisko Mobil=
ity Adopts DevOps-powered Work ..."
    } ]
  },
  "cards": [ {
    "title": "Google Alert - devops",
    "subtitle": "Highlights from the latest email",
    "actions": [ {
      "name": "See more results",
      "url": "https://www.google.com/alerts?s=3DAB2Xq4guLqYxRVeWMr95EpW85VV=
XwzHBaO6dtiU\u0026start=3D1586873244\u0026end=3D1586959666\u0026source=3Dal=
ertsmail\u0026hl=3Den\u0026gl=3DUS\u0026msgid=3DMTI1OTI3MTAzNjkwMjM4NzE3Nzk=
#history"
    } ],
    "widgets": [ {
      "type": "LINK",
      "title": "A CSP's guide to 5G and DevOps (Reader Forum)",
      "description": "But while interest in 5G and DevOps pipeline automati=
on is high, CSPs are quick to mention the difficulties they face with imple=
mentation.",
      "image_url": "https://i.ytimg.com/vi/po0OxgZZkNU/maxresdefault.jpg",
      "url": "https://www.google.com/url?rct=3Dj\u0026sa=3Dt\u0026url=3Dhtt=
ps://www.rcrwireless.com/20200414/opinion/readerforum/csp-guide-5g-devops-r=
eader-forum\u0026ct=3Dga\u0026cd=3DCAEYACoUMTI1OTI3MTAzNjkwMjM4NzE3NzkyGjAw=
MjdkMmRjNzY0YTQ1ZWI6Y29tOmVuOlVT\u0026usg=3DAFQjCNE5d-uA040ts9gl24fbUnCTFRP=
Quw"
    }, {
      "type": "LINK",
      "title": "Extend Your Incident Response Program to DevOps With Securi=
ty Automation",
      "description": "The growth in DevOps has been a response to the need =
to accelerate software development and delivery to meet these rapidly chang=
ing use cases ...",
      "url": "https://www.google.com/url?rct=3Dj\u0026sa=3Dt\u0026url=3Dhtt=
ps://securityintelligence.com/posts/extend-your-incident-response-program-t=
o-devops-with-security-automation/\u0026ct=3Dga\u0026cd=3DCAEYASoUMTI1OTI3M=
TAzNjkwMjM4NzE3NzkyGjAwMjdkMmRjNzY0YTQ1ZWI6Y29tOmVuOlVT\u0026usg=3DAFQjCNFG=
LzVWmKn_e8UFp4qxzNThuRmENQ"
    }, {
      "type": "LINK",
      "title": "Securing Efficiency Amid COVID-19 Outbreak: Eurisko Mobilit=
y Adopts DevOps-powered Work ...",
      "description": "... spread, Eurisko has successfully elaborated a Dev=
Ops-powered Work from Home strategy to safeguard mobility, and thus efficie=
ncy and productivity ...",
      "url": "https://www.google.com/url?rct=3Dj\u0026sa=3Dt\u0026url=3Dhtt=
ps://www.wfmz.com/news/pr_newswire/pr_newswire_entertainment/securing-effic=
iency-amid-covid-19-outbreak-eurisko-mobility-adopts-devops-powered-work-fr=
om-home-strategy/article_708db184-85e0-54c7-bd3b-c6711903f9e5.html\u0026ct=
=3Dga\u0026cd=3DCAEYAioUMTI1OTI3MTAzNjkwMjM4NzE3NzkyGjAwMjdkMmRjNzY0YTQ1ZWI=
6Y29tOmVuOlVT\u0026usg=3DAFQjCNEo5yd2o3DKSScRsqnsAPSQUws2rQ"
    }, {
      "type": "LINK",
      "title": "GitLab expands into Australia as DevOps tooling market heat=
s up",
      "description": "The DevOps platform supplier expands Down Under with =
a bigger workforce to meet the needs of local firms that are looking to spe=
ed up software ...",
      "url": "https://www.google.com/url?rct=3Dj\u0026sa=3Dt\u0026url=3Dhtt=
ps://www.computerweekly.com/news/252481620/GitLab-expands-into-Australia-as=
-DevOps-tooling-market-heats-up\u0026ct=3Dga\u0026cd=3DCAEYAyoUMTI1OTI3MTAz=
NjkwMjM4NzE3NzkyGjAwMjdkMmRjNzY0YTQ1ZWI6Y29tOmVuOlVT\u0026usg=3DAFQjCNGJFzB=
8j3P_43dWcAsKOs4w6rDE4A"
    } ]
  } ]
}
</script> <!--[if mso]>
 <table><tr><td width=3D650>
<![endif]-->
 <div style=3D"width:100%;max-width:650px"> <div style=3D"font-family:Arial=
"> <table style=3D"border-collapse:collapse;border-left:1px solid #e4e4e4;b=
order-right:1px solid #e4e4e4"> <tr> <td style=3D"background-color:#f8f8f8;=
padding-left:18px;border-bottom:1px solid #e4e4e4;border-top:1px solid #e4e=
4e4"></td> <td valign=3D"middle" style=3D"padding:13px 10px 8px 0px;backgro=
und-color:#f8f8f8;border-top:1px solid #e4e4e4;border-bottom:1px solid #e4e=
4e4"> <a href=3D"https://www.google.com/alerts?source=3Dalertsmail&amp;hl=
=3Den&amp;gl=3DUS&amp;msgid=3DMTI1OTI3MTAzNjkwMjM4NzE3Nzk" style=3D"text-de=
coration:none"> <img src=3D"https://www.google.com/intl/en_us/alerts/logo.p=
ng?cd=3DKhQxMjU5MjcxMDM2OTAyMzg3MTc3OQ" alt=3D"Google" border=3D"0" height=
=3D"25"> </a> </td> <td style=3D"background-color:#f8f8f8;padding-left:18px=
;border-top:1px solid #e4e4e4;border-bottom:1px solid #e4e4e4"></td> </tr> =
 <tr> <td style=3D"padding-left:32px"></td> <td style=3D"padding:18px 0px 0=
px 0px;vertical-align:middle;line-height:20px;font-family:Arial"> <span sty=
le=3D"color:#262626;font-size:22px">devops</span> <div style=3D"vertical-al=
ign:top;padding-top:6px;color:#aaa;font-size:12px;line-height:16px"> <span>=
Daily update</span> <span style=3D"padding:0px 4px 0px 4px">&sdot;</span> <=
a style=3D"color:#aaa;text-decoration:none">April 15, 2020</a> </div> </td>=
 <td style=3D"padding-left:32px"></td> </tr>  <tr> <td style=3D"padding-lef=
t:18px"></td> <td style=3D"padding:16px 0px 12px 0px;border-bottom:1px soli=
d #e4e4e4"> <span style=3D"font-size:12px;color:#737373"> NEWS </span> </td=
> <td style=3D"padding-right:18px"></td> </tr>   <tr itemscope=3D"" itemtyp=
e=3D"http://schema.org/Article"> <td style=3D"padding-left:18px"></td> <td =
style=3D"padding:18px 0px 12px 0px;vertical-align:top;font-family:Arial"> <=
a href=3D"https://www.google.com/url?rct=3Dj&amp;sa=3Dt&amp;url=3Dhttps://w=
ww.rcrwireless.com/20200414/opinion/readerforum/csp-guide-5g-devops-reader-=
forum&amp;ct=3Dga&amp;cd=3DCAEYACoUMTI1OTI3MTAzNjkwMjM4NzE3NzkyGjAwMjdkMmRj=
NzY0YTQ1ZWI6Y29tOmVuOlVT&amp;usg=3DAFQjCNE5d-uA040ts9gl24fbUnCTFRPQuw" styl=
e=3D"text-decoration:none"> <table align=3D"right" style=3D"display:inline;=
border-collapse:collapse"> <tr> <td style=3D"padding-left:18px"></td> <td h=
eight=3D"100" width=3D"100" valign=3D"bottom" style=3D"padding:0px 0px 0px =
0px;background-repeat:no-repeat;text-align:center;background-image:url(http=
s://encrypted-tbn1.gstatic.com/images?q=3Dtbn:ANd9GcSXalPKA-erTSz0DQp8XRPmT=
KzhIrZQnuZyqRy9ZdBENHWQtjwEc7ubyaaf);border:1px solid #e4e4e4"> <link href=
=3D"https://encrypted-tbn1.gstatic.com/images?q=3Dtbn:ANd9GcTe9T6QEX_rZuOIZ=
9vPLGsrkgz5jaf3JQh9_19cDgL_YvWavlnu9zbYFAB0Idk" itemprop=3D"image"> <!--[if=
 gte mso 9]>
       <v:image xmlns:v=3D"urn:schemas-microsoft-com:vml" id=3D"theImage"
                style=3D'behavior: url(#default#VML);
                       display:inline-block; position:absolute;
                       height: 100px; width: 100px;
                       top:0; left:0; border:0; z-index:1;' src=3D"https://=
encrypted-tbn1.gstatic.com/images%3Fq%3Dtbn:ANd9GcSXalPKA-erTSz0DQp8XRPmTKz=
hIrZQnuZyqRy9ZdBENHWQtjwEc7ubyaaf"/>
       <v:rect xmlns:v=3D"urn:schemas-microsoft-com:vml"
               style=3D'behavior: url(#default#VML);
                      display:inline-block;
                      position: absolute; top: 82px; left: 0px;
                      width:100px; border:0; z-index:2;' strokecolor=3D"non=
e">
       <v:fill opacity=3D"50%" color=3D"#000000"/>
       <v:textbox style=3D"mso-fit-shape-to-text:t;
                         mso-column-margin: 0pt;
                         letter-spacing: 0.8px;"
                         inset=3D"0pt,0pt,0pt,0pt">
         <font size=3D"-1" color=3D"#ffffff"></font>
       </v:textbox>
       </v:rect>
       <div style=3D"display: none">
       <![endif]--> <div style=3D"color:#fff;font-size:9px;letter-spacing:0=
.8px"> <div style=3D"padding:3px 0px 4px 4px;background:rgb(255,255,255);ba=
ckground-color:rgba(0,0,0,0.5);width:96px"></div> </div> <!--[if gte mso 9]=
></div><![endif]--> </td> </tr> </table> </a> <div>  <span style=3D"padding=
:0px 6px 0px 0px"> <a href=3D"https://www.google.com/url?rct=3Dj&amp;sa=3Dt=
&amp;url=3Dhttps://www.rcrwireless.com/20200414/opinion/readerforum/csp-gui=
de-5g-devops-reader-forum&amp;ct=3Dga&amp;cd=3DCAEYACoUMTI1OTI3MTAzNjkwMjM4=
NzE3NzkyGjAwMjdkMmRjNzY0YTQ1ZWI6Y29tOmVuOlVT&amp;usg=3DAFQjCNE5d-uA040ts9gl=
24fbUnCTFRPQuw" itemprop=3D"url" style=3D"color:#427fed;display:inline;text=
-decoration:none;font-size:16px;line-height:20px"> <span itemprop=3D"name">=
A CSP&#39;s guide to 5G and <b>DevOps</b> (Reader Forum)</span> </a> </span=
>  <div> <div style=3D"padding:2px 0px 8px 0px"> <div itemprop=3D"publisher=
" itemscope=3D"" itemtype=3D"http://schema.org/Organization" style=3D"color=
:#737373;font-size:12px"> <a style=3D"text-decoration:none;color:#737373"> =
<span itemprop=3D"name">RCR Wireless News</span> </a> </div> <div itemprop=
=3D"description" style=3D"color:#252525;padding:2px 0px 0px 0px;font-size:1=
2px;line-height:18px">But while interest in 5G and <b>DevOps</b> pipeline a=
utomation is high, CSPs are quick to mention the difficulties they face wit=
h implementation.</div> </div>   <table> <tr> <td width=3D"16" style=3D"pad=
ding-right:6px"> <a href=3D"https://www.google.com/alerts/share?hl=3Den&amp=
;gl=3DUS&amp;ru=3Dhttps://www.rcrwireless.com/20200414/opinion/readerforum/=
csp-guide-5g-devops-reader-forum&amp;ss=3Dfb&amp;rt=3DA+CSP%27s+guide+to+5G=
+and+DevOps+(Reader+Forum)&amp;cd=3DKhQxMjU5MjcxMDM2OTAyMzg3MTc3OTIaMDAyN2Q=
yZGM3NjRhNDVlYjpjb206ZW46VVM&amp;ssp=3DAMJHsmUu7W5_JRGL2_e68KBRm4n1IKDTyA" =
style=3D"text-decoration:none"> <img alt=3D"Facebook" src=3D"https://www.gs=
tatic.com/alerts/images/fb-24.png" border=3D"0" height=3D"16" width=3D"16">=
</a> </td> <td width=3D"16" style=3D"padding-right:6px"> <a href=3D"https:/=
/www.google.com/alerts/share?hl=3Den&amp;gl=3DUS&amp;ru=3Dhttps://www.rcrwi=
reless.com/20200414/opinion/readerforum/csp-guide-5g-devops-reader-forum&am=
p;ss=3Dtw&amp;rt=3DA+CSP%27s+guide+to+5G+and+DevOps+(Reader+Forum)&amp;cd=
=3DKhQxMjU5MjcxMDM2OTAyMzg3MTc3OTIaMDAyN2QyZGM3NjRhNDVlYjpjb206ZW46VVM&amp;=
ssp=3DAMJHsmUu7W5_JRGL2_e68KBRm4n1IKDTyA" style=3D"text-decoration:none"> <=
img alt=3D"Twitter" src=3D"https://www.gstatic.com/alerts/images/tw-24.png"=
 border=3D"0" height=3D"16" width=3D"16"></a> </td> <td style=3D"padding:0p=
x 0px 6px 15px;font-family:Arial"> <a href=3D"https://www.google.com/alerts=
/feedback?ffu=3Dhttps://www.rcrwireless.com/20200414/opinion/readerforum/cs=
p-guide-5g-devops-reader-forum&amp;source=3Dalertsmail&amp;hl=3Den&amp;gl=
=3DUS&amp;msgid=3DMTI1OTI3MTAzNjkwMjM4NzE3Nzk&amp;s=3DAB2Xq4guLqYxRVeWMr95E=
pW85VVXwzHBaO6dtiU" style=3D"text-decoration:none;vertical-align:middle;col=
or:#aaa;font-size:10px"> Flag as irrelevant </a> </td> </tr> </table>  </di=
v> </div> </td> <td style=3D"padding-right:18px"></td> </tr>    <tr itemsco=
pe=3D"" itemtype=3D"http://schema.org/Article"> <td style=3D"padding-left:1=
8px"></td> <td style=3D"padding:18px 0px 12px 0px;vertical-align:top;border=
-top:1px solid #e4e4e4;font-family:Arial"> <a></a> <div>  <span style=3D"pa=
dding:0px 6px 0px 0px"> <a href=3D"https://www.google.com/url?rct=3Dj&amp;s=
a=3Dt&amp;url=3Dhttps://securityintelligence.com/posts/extend-your-incident=
-response-program-to-devops-with-security-automation/&amp;ct=3Dga&amp;cd=3D=
CAEYASoUMTI1OTI3MTAzNjkwMjM4NzE3NzkyGjAwMjdkMmRjNzY0YTQ1ZWI6Y29tOmVuOlVT&am=
p;usg=3DAFQjCNFGLzVWmKn_e8UFp4qxzNThuRmENQ" itemprop=3D"url" style=3D"color=
:#427fed;display:inline;text-decoration:none;font-size:16px;line-height:20p=
x"> <span itemprop=3D"name">Extend Your Incident Response Program to <b>Dev=
Ops</b> With Security Automation</span> </a> </span>  <div> <div style=3D"p=
adding:2px 0px 8px 0px"> <div itemprop=3D"publisher" itemscope=3D"" itemtyp=
e=3D"http://schema.org/Organization" style=3D"color:#737373;font-size:12px"=
> <a style=3D"text-decoration:none;color:#737373"> <span itemprop=3D"name">=
Security Intelligence (blog)</span> </a> </div> <div itemprop=3D"descriptio=
n" style=3D"color:#252525;padding:2px 0px 0px 0px;font-size:12px;line-heigh=
t:18px">The growth in <b>DevOps</b> has been a response to the need to acce=
lerate software development and delivery to meet these rapidly changing use=
 cases&nbsp;...</div> </div>   <table> <tr> <td width=3D"16" style=3D"paddi=
ng-right:6px"> <a href=3D"https://www.google.com/alerts/share?hl=3Den&amp;g=
l=3DUS&amp;ru=3Dhttps://securityintelligence.com/posts/extend-your-incident=
-response-program-to-devops-with-security-automation/&amp;ss=3Dfb&amp;rt=3D=
Extend+Your+Incident+Response+Program+to+DevOps+With+Security+Automation&am=
p;cd=3DKhQxMjU5MjcxMDM2OTAyMzg3MTc3OTIaMDAyN2QyZGM3NjRhNDVlYjpjb206ZW46VVM&=
amp;ssp=3DAMJHsmXPHX0K5RkOahWiuG6hcs7T5-7ogw" style=3D"text-decoration:none=
"> <img alt=3D"Facebook" src=3D"https://www.gstatic.com/alerts/images/fb-24=
.png" border=3D"0" height=3D"16" width=3D"16"></a> </td> <td width=3D"16" s=
tyle=3D"padding-right:6px"> <a href=3D"https://www.google.com/alerts/share?=
hl=3Den&amp;gl=3DUS&amp;ru=3Dhttps://securityintelligence.com/posts/extend-=
your-incident-response-program-to-devops-with-security-automation/&amp;ss=
=3Dtw&amp;rt=3DExtend+Your+Incident+Response+Program+to+DevOps+With+Securit=
y+Automation&amp;cd=3DKhQxMjU5MjcxMDM2OTAyMzg3MTc3OTIaMDAyN2QyZGM3NjRhNDVlY=
jpjb206ZW46VVM&amp;ssp=3DAMJHsmXPHX0K5RkOahWiuG6hcs7T5-7ogw" style=3D"text-=
decoration:none"> <img alt=3D"Twitter" src=3D"https://www.gstatic.com/alert=
s/images/tw-24.png" border=3D"0" height=3D"16" width=3D"16"></a> </td> <td =
style=3D"padding:0px 0px 6px 15px;font-family:Arial"> <a href=3D"https://ww=
w.google.com/alerts/feedback?ffu=3Dhttps://securityintelligence.com/posts/e=
xtend-your-incident-response-program-to-devops-with-security-automation/&am=
p;source=3Dalertsmail&amp;hl=3Den&amp;gl=3DUS&amp;msgid=3DMTI1OTI3MTAzNjkwM=
jM4NzE3Nzk&amp;s=3DAB2Xq4guLqYxRVeWMr95EpW85VVXwzHBaO6dtiU" style=3D"text-d=
ecoration:none;vertical-align:middle;color:#aaa;font-size:10px"> Flag as ir=
relevant </a> </td> </tr> </table>  </div> </div> </td> <td style=3D"paddin=
g-right:18px"></td> </tr>    <tr itemscope=3D"" itemtype=3D"http://schema.o=
rg/Article"> <td style=3D"padding-left:18px"></td> <td style=3D"padding:18p=
x 0px 12px 0px;vertical-align:top;border-top:1px solid #e4e4e4;font-family:=
Arial"> <a></a> <div>  <span style=3D"padding:0px 6px 0px 0px"> <a href=3D"=
https://www.google.com/url?rct=3Dj&amp;sa=3Dt&amp;url=3Dhttps://www.wfmz.co=
m/news/pr_newswire/pr_newswire_entertainment/securing-efficiency-amid-covid=
-19-outbreak-eurisko-mobility-adopts-devops-powered-work-from-home-strategy=
/article_708db184-85e0-54c7-bd3b-c6711903f9e5.html&amp;ct=3Dga&amp;cd=3DCAE=
YAioUMTI1OTI3MTAzNjkwMjM4NzE3NzkyGjAwMjdkMmRjNzY0YTQ1ZWI6Y29tOmVuOlVT&amp;u=
sg=3DAFQjCNEo5yd2o3DKSScRsqnsAPSQUws2rQ" itemprop=3D"url" style=3D"color:#4=
27fed;display:inline;text-decoration:none;font-size:16px;line-height:20px">=
 <span itemprop=3D"name">Securing Efficiency Amid COVID-19 Outbreak: Eurisk=
o Mobility Adopts <b>DevOps</b>-powered Work ...</span> </a> </span>  <div>=
 <div style=3D"padding:2px 0px 8px 0px"> <div itemprop=3D"publisher" itemsc=
ope=3D"" itemtype=3D"http://schema.org/Organization" style=3D"color:#737373=
;font-size:12px"> <a style=3D"text-decoration:none;color:#737373"> <span it=
emprop=3D"name">WFMZ Allentown</span> </a> </div> <div itemprop=3D"descript=
ion" style=3D"color:#252525;padding:2px 0px 0px 0px;font-size:12px;line-hei=
ght:18px">... spread, Eurisko has successfully elaborated a <b>DevOps</b>-p=
owered Work from Home strategy to safeguard mobility, and thus efficiency a=
nd productivity&nbsp;...</div> </div>   <table> <tr> <td width=3D"16" style=
=3D"padding-right:6px"> <a href=3D"https://www.google.com/alerts/share?hl=
=3Den&amp;gl=3DUS&amp;ru=3Dhttps://www.wfmz.com/news/pr_newswire/pr_newswir=
e_entertainment/securing-efficiency-amid-covid-19-outbreak-eurisko-mobility=
-adopts-devops-powered-work-from-home-strategy/article_708db184-85e0-54c7-b=
d3b-c6711903f9e5.html&amp;ss=3Dfb&amp;rt=3DSecuring+Efficiency+Amid+COVID-1=
9+Outbreak:+Eurisko+Mobility+Adopts+DevOps-powered+Work+...&amp;cd=3DKhQxMj=
U5MjcxMDM2OTAyMzg3MTc3OTIaMDAyN2QyZGM3NjRhNDVlYjpjb206ZW46VVM&amp;ssp=3DAMJ=
HsmUniO8OHfu9U7EiJ1uqu_pz5PwKzg" style=3D"text-decoration:none"> <img alt=
=3D"Facebook" src=3D"https://www.gstatic.com/alerts/images/fb-24.png" borde=
r=3D"0" height=3D"16" width=3D"16"></a> </td> <td width=3D"16" style=3D"pad=
ding-right:6px"> <a href=3D"https://www.google.com/alerts/share?hl=3Den&amp=
;gl=3DUS&amp;ru=3Dhttps://www.wfmz.com/news/pr_newswire/pr_newswire_enterta=
inment/securing-efficiency-amid-covid-19-outbreak-eurisko-mobility-adopts-d=
evops-powered-work-from-home-strategy/article_708db184-85e0-54c7-bd3b-c6711=
903f9e5.html&amp;ss=3Dtw&amp;rt=3DSecuring+Efficiency+Amid+COVID-19+Outbrea=
k:+Eurisko+Mobility+Adopts+DevOps-powered+Work+...&amp;cd=3DKhQxMjU5MjcxMDM=
2OTAyMzg3MTc3OTIaMDAyN2QyZGM3NjRhNDVlYjpjb206ZW46VVM&amp;ssp=3DAMJHsmUniO8O=
Hfu9U7EiJ1uqu_pz5PwKzg" style=3D"text-decoration:none"> <img alt=3D"Twitter=
" src=3D"https://www.gstatic.com/alerts/images/tw-24.png" border=3D"0" heig=
ht=3D"16" width=3D"16"></a> </td> <td style=3D"padding:0px 0px 6px 15px;fon=
t-family:Arial"> <a href=3D"https://www.google.com/alerts/feedback?ffu=3Dht=
tps://www.wfmz.com/news/pr_newswire/pr_newswire_entertainment/securing-effi=
ciency-amid-covid-19-outbreak-eurisko-mobility-adopts-devops-powered-work-f=
rom-home-strategy/article_708db184-85e0-54c7-bd3b-c6711903f9e5.html&amp;sou=
rce=3Dalertsmail&amp;hl=3Den&amp;gl=3DUS&amp;msgid=3DMTI1OTI3MTAzNjkwMjM4Nz=
E3Nzk&amp;s=3DAB2Xq4guLqYxRVeWMr95EpW85VVXwzHBaO6dtiU" style=3D"text-decora=
tion:none;vertical-align:middle;color:#aaa;font-size:10px"> Flag as irrelev=
ant </a> </td> </tr> </table>  </div> </div> </td> <td style=3D"padding-rig=
ht:18px"></td> </tr>    <tr itemscope=3D"" itemtype=3D"http://schema.org/Ar=
ticle"> <td style=3D"padding-left:18px"></td> <td style=3D"padding:18px 0px=
 12px 0px;vertical-align:top;border-top:1px solid #e4e4e4;font-family:Arial=
"> <a></a> <div>  <span style=3D"padding:0px 6px 0px 0px"> <a href=3D"https=
://www.google.com/url?rct=3Dj&amp;sa=3Dt&amp;url=3Dhttps://www.computerweek=
ly.com/news/252481620/GitLab-expands-into-Australia-as-DevOps-tooling-marke=
t-heats-up&amp;ct=3Dga&amp;cd=3DCAEYAyoUMTI1OTI3MTAzNjkwMjM4NzE3NzkyGjAwMjd=
kMmRjNzY0YTQ1ZWI6Y29tOmVuOlVT&amp;usg=3DAFQjCNGJFzB8j3P_43dWcAsKOs4w6rDE4A"=
 itemprop=3D"url" style=3D"color:#427fed;display:inline;text-decoration:non=
e;font-size:16px;line-height:20px"> <span itemprop=3D"name">GitLab expands =
into Australia as <b>DevOps</b> tooling market heats up</span> </a> </span>=
  <div> <div style=3D"padding:2px 0px 8px 0px"> <div itemprop=3D"publisher"=
 itemscope=3D"" itemtype=3D"http://schema.org/Organization" style=3D"color:=
#737373;font-size:12px"> <a style=3D"text-decoration:none;color:#737373"> <=
span itemprop=3D"name">ComputerWeekly.com</span> </a> </div> <div itemprop=
=3D"description" style=3D"color:#252525;padding:2px 0px 0px 0px;font-size:1=
2px;line-height:18px">The <b>DevOps</b> platform supplier expands Down Unde=
r with a bigger workforce to meet the needs of local firms that are looking=
 to speed up software&nbsp;...</div> </div>   <table> <tr> <td width=3D"16"=
 style=3D"padding-right:6px"> <a href=3D"https://www.google.com/alerts/shar=
e?hl=3Den&amp;gl=3DUS&amp;ru=3Dhttps://www.computerweekly.com/news/25248162=
0/GitLab-expands-into-Australia-as-DevOps-tooling-market-heats-up&amp;ss=3D=
fb&amp;rt=3DGitLab+expands+into+Australia+as+DevOps+tooling+market+heats+up=
&amp;cd=3DKhQxMjU5MjcxMDM2OTAyMzg3MTc3OTIaMDAyN2QyZGM3NjRhNDVlYjpjb206ZW46V=
VM&amp;ssp=3DAMJHsmXmSgSIE1izubTDLJvnY9mNP9exLQ" style=3D"text-decoration:n=
one"> <img alt=3D"Facebook" src=3D"https://www.gstatic.com/alerts/images/fb=
-24.png" border=3D"0" height=3D"16" width=3D"16"></a> </td> <td width=3D"16=
" style=3D"padding-right:6px"> <a href=3D"https://www.google.com/alerts/sha=
re?hl=3Den&amp;gl=3DUS&amp;ru=3Dhttps://www.computerweekly.com/news/2524816=
20/GitLab-expands-into-Australia-as-DevOps-tooling-market-heats-up&amp;ss=
=3Dtw&amp;rt=3DGitLab+expands+into+Australia+as+DevOps+tooling+market+heats=
+up&amp;cd=3DKhQxMjU5MjcxMDM2OTAyMzg3MTc3OTIaMDAyN2QyZGM3NjRhNDVlYjpjb206ZW=
46VVM&amp;ssp=3DAMJHsmXmSgSIE1izubTDLJvnY9mNP9exLQ" style=3D"text-decoratio=
n:none"> <img alt=3D"Twitter" src=3D"https://www.gstatic.com/alerts/images/=
tw-24.png" border=3D"0" height=3D"16" width=3D"16"></a> </td> <td style=3D"=
padding:0px 0px 6px 15px;font-family:Arial"> <a href=3D"https://www.google.=
com/alerts/feedback?ffu=3Dhttps://www.computerweekly.com/news/252481620/Git=
Lab-expands-into-Australia-as-DevOps-tooling-market-heats-up&amp;source=3Da=
lertsmail&amp;hl=3Den&amp;gl=3DUS&amp;msgid=3DMTI1OTI3MTAzNjkwMjM4NzE3Nzk&a=
mp;s=3DAB2Xq4guLqYxRVeWMr95EpW85VVXwzHBaO6dtiU" style=3D"text-decoration:no=
ne;vertical-align:middle;color:#aaa;font-size:10px"> Flag as irrelevant </a=
> </td> </tr> </table>  </div> </div> </td> <td style=3D"padding-right:18px=
"></td> </tr>    <tr itemscope=3D"" itemtype=3D"http://schema.org/Article">=
 <td style=3D"padding-left:18px"></td> <td style=3D"padding:18px 0px 12px 0=
px;vertical-align:top;border-top:1px solid #e4e4e4;font-family:Arial"> <a><=
/a> <div>  <span style=3D"padding:0px 6px 0px 0px"> <a href=3D"https://www.=
google.com/url?rct=3Dj&amp;sa=3Dt&amp;url=3Dhttps://finance.yahoo.com/news/=
ctera-extends-global-file-system-120000526.html&amp;ct=3Dga&amp;cd=3DCAEYBC=
oUMTI1OTI3MTAzNjkwMjM4NzE3NzkyGjAwMjdkMmRjNzY0YTQ1ZWI6Y29tOmVuOlVT&amp;usg=
=3DAFQjCNEJqvI229ULPJ-2RunRw6WR0I_cUw" itemprop=3D"url" style=3D"color:#427=
fed;display:inline;text-decoration:none;font-size:16px;line-height:20px"> <=
span itemprop=3D"name">CTERA Extends the Global File System to <b>DevOps</b=
></span> </a> </span>  <div> <div style=3D"padding:2px 0px 8px 0px"> <div i=
temprop=3D"publisher" itemscope=3D"" itemtype=3D"http://schema.org/Organiza=
tion" style=3D"color:#737373;font-size:12px"> <a style=3D"text-decoration:n=
one;color:#737373"> <span itemprop=3D"name">Yahoo Finance</span> </a> </div=
> <div itemprop=3D"description" style=3D"color:#252525;padding:2px 0px 0px =
0px;font-size:12px;line-height:18px">NEW YORK, April 15, 2020 /PRNewswire-P=
RWeb/ -- CTERA, the edge-to-cloud file services leader, today announced <b>=
DevOps</b> tools that allow&nbsp;...</div> </div>   <table> <tr> <td width=
=3D"16" style=3D"padding-right:6px"> <a href=3D"https://www.google.com/aler=
ts/share?hl=3Den&amp;gl=3DUS&amp;ru=3Dhttps://finance.yahoo.com/news/ctera-=
extends-global-file-system-120000526.html&amp;ss=3Dfb&amp;rt=3DCTERA+Extend=
s+the+Global+File+System+to+DevOps&amp;cd=3DKhQxMjU5MjcxMDM2OTAyMzg3MTc3OTI=
aMDAyN2QyZGM3NjRhNDVlYjpjb206ZW46VVM&amp;ssp=3DAMJHsmVODDX-MWhDeIAxCWJjD543=
F0NxvA" style=3D"text-decoration:none"> <img alt=3D"Facebook" src=3D"https:=
//www.gstatic.com/alerts/images/fb-24.png" border=3D"0" height=3D"16" width=
=3D"16"></a> </td> <td width=3D"16" style=3D"padding-right:6px"> <a href=3D=
"https://www.google.com/alerts/share?hl=3Den&amp;gl=3DUS&amp;ru=3Dhttps://f=
inance.yahoo.com/news/ctera-extends-global-file-system-120000526.html&amp;s=
s=3Dtw&amp;rt=3DCTERA+Extends+the+Global+File+System+to+DevOps&amp;cd=3DKhQ=
xMjU5MjcxMDM2OTAyMzg3MTc3OTIaMDAyN2QyZGM3NjRhNDVlYjpjb206ZW46VVM&amp;ssp=3D=
AMJHsmVODDX-MWhDeIAxCWJjD543F0NxvA" style=3D"text-decoration:none"> <img al=
t=3D"Twitter" src=3D"https://www.gstatic.com/alerts/images/tw-24.png" borde=
r=3D"0" height=3D"16" width=3D"16"></a> </td> <td style=3D"padding:0px 0px =
6px 15px;font-family:Arial"> <a href=3D"https://www.google.com/alerts/feedb=
ack?ffu=3Dhttps://finance.yahoo.com/news/ctera-extends-global-file-system-1=
20000526.html&amp;source=3Dalertsmail&amp;hl=3Den&amp;gl=3DUS&amp;msgid=3DM=
TI1OTI3MTAzNjkwMjM4NzE3Nzk&amp;s=3DAB2Xq4guLqYxRVeWMr95EpW85VVXwzHBaO6dtiU"=
 style=3D"text-decoration:none;vertical-align:middle;color:#aaa;font-size:1=
0px"> Flag as irrelevant </a> </td> </tr> </table>  </div> </div> </td> <td=
 style=3D"padding-right:18px"></td> </tr>    <tr itemscope=3D"" itemtype=3D=
"http://schema.org/Article"> <td style=3D"padding-left:18px"></td> <td styl=
e=3D"padding:18px 0px 12px 0px;vertical-align:top;border-top:1px solid #e4e=
4e4;font-family:Arial"> <a></a> <div>  <span style=3D"padding:0px 6px 0px 0=
px"> <a href=3D"https://www.google.com/url?rct=3Dj&amp;sa=3Dt&amp;url=3Dhtt=
ps://devops.com/gitlab-responds-to-github-making-teams-free-we-all-win/&amp=
;ct=3Dga&amp;cd=3DCAEYBSoUMTI1OTI3MTAzNjkwMjM4NzE3NzkyGjAwMjdkMmRjNzY0YTQ1Z=
WI6Y29tOmVuOlVT&amp;usg=3DAFQjCNFaGzdEpC5mgFOgecNOS3PlafW3Rw" itemprop=3D"u=
rl" style=3D"color:#427fed;display:inline;text-decoration:none;font-size:16=
px;line-height:20px"> <span itemprop=3D"name">GitLab Responds To GitHub Mak=
ing Teams Free =E2=80=93 We All Win</span> </a> </span>  <div> <div style=
=3D"padding:2px 0px 8px 0px"> <div itemprop=3D"publisher" itemscope=3D"" it=
emtype=3D"http://schema.org/Organization" style=3D"color:#737373;font-size:=
12px"> <a style=3D"text-decoration:none;color:#737373"> <span itemprop=3D"n=
ame">DevOps.com</span> </a> </div> <div itemprop=3D"description" style=3D"c=
olor:#252525;padding:2px 0px 0px 0px;font-size:12px;line-height:18px">I thi=
nk the Microsoft entity already envisions a total <b>DevOps</b> solution as=
 being part of GitHub&#39;s future. On top of that, I think GitHub and Micr=
osoft are&nbsp;...</div> </div>   <table> <tr> <td width=3D"16" style=3D"pa=
dding-right:6px"> <a href=3D"https://www.google.com/alerts/share?hl=3Den&am=
p;gl=3DUS&amp;ru=3Dhttps://devops.com/gitlab-responds-to-github-making-team=
s-free-we-all-win/&amp;ss=3Dfb&amp;rt=3DGitLab+Responds+To+GitHub+Making+Te=
ams+Free+%E2%80%93+We+All+Win&amp;cd=3DKhQxMjU5MjcxMDM2OTAyMzg3MTc3OTIaMDAy=
N2QyZGM3NjRhNDVlYjpjb206ZW46VVM&amp;ssp=3DAMJHsmUiZU2TAT-JrABpSaCFtbDvxNBaf=
g" style=3D"text-decoration:none"> <img alt=3D"Facebook" src=3D"https://www=
.gstatic.com/alerts/images/fb-24.png" border=3D"0" height=3D"16" width=3D"1=
6"></a> </td> <td width=3D"16" style=3D"padding-right:6px"> <a href=3D"http=
s://www.google.com/alerts/share?hl=3Den&amp;gl=3DUS&amp;ru=3Dhttps://devops=
.com/gitlab-responds-to-github-making-teams-free-we-all-win/&amp;ss=3Dtw&am=
p;rt=3DGitLab+Responds+To+GitHub+Making+Teams+Free+%E2%80%93+We+All+Win&amp=
;cd=3DKhQxMjU5MjcxMDM2OTAyMzg3MTc3OTIaMDAyN2QyZGM3NjRhNDVlYjpjb206ZW46VVM&a=
mp;ssp=3DAMJHsmUiZU2TAT-JrABpSaCFtbDvxNBafg" style=3D"text-decoration:none"=
> <img alt=3D"Twitter" src=3D"https://www.gstatic.com/alerts/images/tw-24.p=
ng" border=3D"0" height=3D"16" width=3D"16"></a> </td> <td style=3D"padding=
:0px 0px 6px 15px;font-family:Arial"> <a href=3D"https://www.google.com/ale=
rts/feedback?ffu=3Dhttps://devops.com/gitlab-responds-to-github-making-team=
s-free-we-all-win/&amp;source=3Dalertsmail&amp;hl=3Den&amp;gl=3DUS&amp;msgi=
d=3DMTI1OTI3MTAzNjkwMjM4NzE3Nzk&amp;s=3DAB2Xq4guLqYxRVeWMr95EpW85VVXwzHBaO6=
dtiU" style=3D"text-decoration:none;vertical-align:middle;color:#aaa;font-s=
ize:10px"> Flag as irrelevant </a> </td> </tr> </table>  </div> </div> </td=
> <td style=3D"padding-right:18px"></td> </tr>    <tr itemscope=3D"" itemty=
pe=3D"http://schema.org/Article"> <td style=3D"padding-left:18px"></td> <td=
 style=3D"padding:18px 0px 12px 0px;vertical-align:top;border-top:1px solid=
 #e4e4e4;font-family:Arial"> <a></a> <div>  <span style=3D"padding:0px 6px =
0px 0px"> <a href=3D"https://www.google.com/url?rct=3Dj&amp;sa=3Dt&amp;url=
=3Dhttps://devops.com/scalyr-alters-log-analytics-economics/&amp;ct=3Dga&am=
p;cd=3DCAEYBioUMTI1OTI3MTAzNjkwMjM4NzE3NzkyGjAwMjdkMmRjNzY0YTQ1ZWI6Y29tOmVu=
OlVT&amp;usg=3DAFQjCNFx61XTFvQIGXZ6ybmSsbENJIE9rg" itemprop=3D"url" style=
=3D"color:#427fed;display:inline;text-decoration:none;font-size:16px;line-h=
eight:20px"> <span itemprop=3D"name">Scalyr Alters Log Analytics Economics<=
/span> </a> </span>  <div> <div style=3D"padding:2px 0px 8px 0px"> <div ite=
mprop=3D"publisher" itemscope=3D"" itemtype=3D"http://schema.org/Organizati=
on" style=3D"color:#737373;font-size:12px"> <a style=3D"text-decoration:non=
e;color:#737373"> <span itemprop=3D"name">DevOps.com</span> </a> </div> <di=
v itemprop=3D"description" style=3D"color:#252525;padding:2px 0px 0px 0px;f=
ont-size:12px;line-height:18px">It will be up to <b>DevOps</b> leaders to f=
igure out how best to keep pace with that rate of change with whatever reso=
urces are at hand.</div> </div>   <table> <tr> <td width=3D"16" style=3D"pa=
dding-right:6px"> <a href=3D"https://www.google.com/alerts/share?hl=3Den&am=
p;gl=3DUS&amp;ru=3Dhttps://devops.com/scalyr-alters-log-analytics-economics=
/&amp;ss=3Dfb&amp;rt=3DScalyr+Alters+Log+Analytics+Economics&amp;cd=3DKhQxM=
jU5MjcxMDM2OTAyMzg3MTc3OTIaMDAyN2QyZGM3NjRhNDVlYjpjb206ZW46VVM&amp;ssp=3DAM=
JHsmVwhaeb75IudfGNZN68eN_yDs8kuA" style=3D"text-decoration:none"> <img alt=
=3D"Facebook" src=3D"https://www.gstatic.com/alerts/images/fb-24.png" borde=
r=3D"0" height=3D"16" width=3D"16"></a> </td> <td width=3D"16" style=3D"pad=
ding-right:6px"> <a href=3D"https://www.google.com/alerts/share?hl=3Den&amp=
;gl=3DUS&amp;ru=3Dhttps://devops.com/scalyr-alters-log-analytics-economics/=
&amp;ss=3Dtw&amp;rt=3DScalyr+Alters+Log+Analytics+Economics&amp;cd=3DKhQxMj=
U5MjcxMDM2OTAyMzg3MTc3OTIaMDAyN2QyZGM3NjRhNDVlYjpjb206ZW46VVM&amp;ssp=3DAMJ=
HsmVwhaeb75IudfGNZN68eN_yDs8kuA" style=3D"text-decoration:none"> <img alt=
=3D"Twitter" src=3D"https://www.gstatic.com/alerts/images/tw-24.png" border=
=3D"0" height=3D"16" width=3D"16"></a> </td> <td style=3D"padding:0px 0px 6=
px 15px;font-family:Arial"> <a href=3D"https://www.google.com/alerts/feedba=
ck?ffu=3Dhttps://devops.com/scalyr-alters-log-analytics-economics/&amp;sour=
ce=3Dalertsmail&amp;hl=3Den&amp;gl=3DUS&amp;msgid=3DMTI1OTI3MTAzNjkwMjM4NzE=
3Nzk&amp;s=3DAB2Xq4guLqYxRVeWMr95EpW85VVXwzHBaO6dtiU" style=3D"text-decorat=
ion:none;vertical-align:middle;color:#aaa;font-size:10px"> Flag as irreleva=
nt </a> </td> </tr> </table>  </div> </div> </td> <td style=3D"padding-righ=
t:18px"></td> </tr>    <tr itemscope=3D"" itemtype=3D"http://schema.org/Art=
icle"> <td style=3D"padding-left:18px"></td> <td style=3D"padding:18px 0px =
12px 0px;vertical-align:top;border-top:1px solid #e4e4e4;font-family:Arial"=
> <a></a> <div>  <span style=3D"padding:0px 6px 0px 0px"> <a href=3D"https:=
//www.google.com/url?rct=3Dj&amp;sa=3Dt&amp;url=3Dhttps://devops.com/2020-d=
evsecops-community-survey-of-5045-developers-guess-how-many-are-happy/&amp;=
ct=3Dga&amp;cd=3DCAEYByoUMTI1OTI3MTAzNjkwMjM4NzE3NzkyGjAwMjdkMmRjNzY0YTQ1ZW=
I6Y29tOmVuOlVT&amp;usg=3DAFQjCNHxj6FCWGcZtxpHSoglF30KEHzWIw" itemprop=3D"ur=
l" style=3D"color:#427fed;display:inline;text-decoration:none;font-size:16p=
x;line-height:20px"> <span itemprop=3D"name">2020 DevSecOps Community Surve=
y: Of 5045 Developers, Guess How Many Are Happy?</span> </a> </span>  <div>=
 <div style=3D"padding:2px 0px 8px 0px"> <div itemprop=3D"publisher" itemsc=
ope=3D"" itemtype=3D"http://schema.org/Organization" style=3D"color:#737373=
;font-size:12px"> <a style=3D"text-decoration:none;color:#737373"> <span it=
emprop=3D"name">DevOps.com</span> </a> </div> <div itemprop=3D"description"=
 style=3D"color:#252525;padding:2px 0px 0px 0px;font-size:12px;line-height:=
18px">=E2=80=9CMature <b>DevOps</b> practices are constantly testing, deplo=
ying and validating that software meets every requirement and allows for fa=
st recovery in the&nbsp;...</div> </div>   <table> <tr> <td width=3D"16" st=
yle=3D"padding-right:6px"> <a href=3D"https://www.google.com/alerts/share?h=
l=3Den&amp;gl=3DUS&amp;ru=3Dhttps://devops.com/2020-devsecops-community-sur=
vey-of-5045-developers-guess-how-many-are-happy/&amp;ss=3Dfb&amp;rt=3D2020+=
DevSecOps+Community+Survey:+Of+5045+Developers,+Guess+How+Many+Are+Happy%3F=
&amp;cd=3DKhQxMjU5MjcxMDM2OTAyMzg3MTc3OTIaMDAyN2QyZGM3NjRhNDVlYjpjb206ZW46V=
VM&amp;ssp=3DAMJHsmUSkyKfmN6C5GUHYp9424CNVbEOgQ" style=3D"text-decoration:n=
one"> <img alt=3D"Facebook" src=3D"https://www.gstatic.com/alerts/images/fb=
-24.png" border=3D"0" height=3D"16" width=3D"16"></a> </td> <td width=3D"16=
" style=3D"padding-right:6px"> <a href=3D"https://www.google.com/alerts/sha=
re?hl=3Den&amp;gl=3DUS&amp;ru=3Dhttps://devops.com/2020-devsecops-community=
-survey-of-5045-developers-guess-how-many-are-happy/&amp;ss=3Dtw&amp;rt=3D2=
020+DevSecOps+Community+Survey:+Of+5045+Developers,+Guess+How+Many+Are+Happ=
y%3F&amp;cd=3DKhQxMjU5MjcxMDM2OTAyMzg3MTc3OTIaMDAyN2QyZGM3NjRhNDVlYjpjb206Z=
W46VVM&amp;ssp=3DAMJHsmUSkyKfmN6C5GUHYp9424CNVbEOgQ" style=3D"text-decorati=
on:none"> <img alt=3D"Twitter" src=3D"https://www.gstatic.com/alerts/images=
/tw-24.png" border=3D"0" height=3D"16" width=3D"16"></a> </td> <td style=3D=
"padding:0px 0px 6px 15px;font-family:Arial"> <a href=3D"https://www.google=
.com/alerts/feedback?ffu=3Dhttps://devops.com/2020-devsecops-community-surv=
ey-of-5045-developers-guess-how-many-are-happy/&amp;source=3Dalertsmail&amp=
;hl=3Den&amp;gl=3DUS&amp;msgid=3DMTI1OTI3MTAzNjkwMjM4NzE3Nzk&amp;s=3DAB2Xq4=
guLqYxRVeWMr95EpW85VVXwzHBaO6dtiU" style=3D"text-decoration:none;vertical-a=
lign:middle;color:#aaa;font-size:10px"> Flag as irrelevant </a> </td> </tr>=
 </table>  </div> </div> </td> <td style=3D"padding-right:18px"></td> </tr>=
    <tr itemscope=3D"" itemtype=3D"http://schema.org/Article"> <td style=3D=
"padding-left:18px"></td> <td style=3D"padding:18px 0px 12px 0px;vertical-a=
lign:top;border-top:1px solid #e4e4e4;font-family:Arial"> <a></a> <div>  <s=
pan style=3D"padding:0px 6px 0px 0px"> <a href=3D"https://www.google.com/ur=
l?rct=3Dj&amp;sa=3Dt&amp;url=3Dhttps://www.the-blockchain.com/2020/04/14/ju=
nior-devops-engineer-at-templum-new-york-ny-usa/&amp;ct=3Dga&amp;cd=3DCAEYC=
CoUMTI1OTI3MTAzNjkwMjM4NzE3NzkyGjAwMjdkMmRjNzY0YTQ1ZWI6Y29tOmVuOlVT&amp;usg=
=3DAFQjCNGWwy6Bji4YIxglk8Ou8OQLhM1pdw" itemprop=3D"url" style=3D"color:#427=
fed;display:inline;text-decoration:none;font-size:16px;line-height:20px"> <=
span itemprop=3D"name">Junior <b>DevOps</b> Engineer at Templum (New York, =
NY, USA)</span> </a> </span>  <div> <div style=3D"padding:2px 0px 8px 0px">=
 <div itemprop=3D"publisher" itemscope=3D"" itemtype=3D"http://schema.org/O=
rganization" style=3D"color:#737373;font-size:12px"> <a style=3D"text-decor=
ation:none;color:#737373"> <span itemprop=3D"name">Blockchain News</span> <=
/a> </div> <div itemprop=3D"description" style=3D"color:#252525;padding:2px=
 0px 0px 0px;font-size:12px;line-height:18px">We&#39;re seeking a talented =
<b>DevOps</b> (Development and Operations) engineer who is looking to advan=
ce their career by working for a digital asset firm.</div> </div>   <table>=
 <tr> <td width=3D"16" style=3D"padding-right:6px"> <a href=3D"https://www.=
google.com/alerts/share?hl=3Den&amp;gl=3DUS&amp;ru=3Dhttps://www.the-blockc=
hain.com/2020/04/14/junior-devops-engineer-at-templum-new-york-ny-usa/&amp;=
ss=3Dfb&amp;rt=3DJunior+DevOps+Engineer+at+Templum+(New+York,+NY,+USA)&amp;=
cd=3DKhQxMjU5MjcxMDM2OTAyMzg3MTc3OTIaMDAyN2QyZGM3NjRhNDVlYjpjb206ZW46VVM&am=
p;ssp=3DAMJHsmVdWnLhKO1cFD4dqhOcv-5k6L0BZw" style=3D"text-decoration:none">=
 <img alt=3D"Facebook" src=3D"https://www.gstatic.com/alerts/images/fb-24.p=
ng" border=3D"0" height=3D"16" width=3D"16"></a> </td> <td width=3D"16" sty=
le=3D"padding-right:6px"> <a href=3D"https://www.google.com/alerts/share?hl=
=3Den&amp;gl=3DUS&amp;ru=3Dhttps://www.the-blockchain.com/2020/04/14/junior=
-devops-engineer-at-templum-new-york-ny-usa/&amp;ss=3Dtw&amp;rt=3DJunior+De=
vOps+Engineer+at+Templum+(New+York,+NY,+USA)&amp;cd=3DKhQxMjU5MjcxMDM2OTAyM=
zg3MTc3OTIaMDAyN2QyZGM3NjRhNDVlYjpjb206ZW46VVM&amp;ssp=3DAMJHsmVdWnLhKO1cFD=
4dqhOcv-5k6L0BZw" style=3D"text-decoration:none"> <img alt=3D"Twitter" src=
=3D"https://www.gstatic.com/alerts/images/tw-24.png" border=3D"0" height=3D=
"16" width=3D"16"></a> </td> <td style=3D"padding:0px 0px 6px 15px;font-fam=
ily:Arial"> <a href=3D"https://www.google.com/alerts/feedback?ffu=3Dhttps:/=
/www.the-blockchain.com/2020/04/14/junior-devops-engineer-at-templum-new-yo=
rk-ny-usa/&amp;source=3Dalertsmail&amp;hl=3Den&amp;gl=3DUS&amp;msgid=3DMTI1=
OTI3MTAzNjkwMjM4NzE3Nzk&amp;s=3DAB2Xq4guLqYxRVeWMr95EpW85VVXwzHBaO6dtiU" st=
yle=3D"text-decoration:none;vertical-align:middle;color:#aaa;font-size:10px=
"> Flag as irrelevant </a> </td> </tr> </table>  </div> </div> </td> <td st=
yle=3D"padding-right:18px"></td> </tr>    <tr itemscope=3D"" itemtype=3D"ht=
tp://schema.org/Article"> <td style=3D"padding-left:18px"></td> <td style=
=3D"padding:18px 0px 12px 0px;vertical-align:top;border-top:1px solid #e4e4=
e4;font-family:Arial"> <a></a> <div>  <span style=3D"padding:0px 6px 0px 0p=
x"> <a href=3D"https://www.google.com/url?rct=3Dj&amp;sa=3Dt&amp;url=3Dhttp=
s://devops.com/digital-ai-the-companies-formerly-known-as-xebia-labs-collab=
net-plus/&amp;ct=3Dga&amp;cd=3DCAEYCSoUMTI1OTI3MTAzNjkwMjM4NzE3NzkyGjAwMjdk=
MmRjNzY0YTQ1ZWI6Y29tOmVuOlVT&amp;usg=3DAFQjCNGEVfwXx71AYQKIg05vGXYUYZi0mA" =
itemprop=3D"url" style=3D"color:#427fed;display:inline;text-decoration:none=
;font-size:16px;line-height:20px"> <span itemprop=3D"name">Digital.ai: The =
Companies Formerly Known As XebiaLabs and CollabNet Plus</span> </a> </span=
>  <div> <div style=3D"padding:2px 0px 8px 0px"> <div itemprop=3D"publisher=
" itemscope=3D"" itemtype=3D"http://schema.org/Organization" style=3D"color=
:#737373;font-size:12px"> <a style=3D"text-decoration:none;color:#737373"> =
<span itemprop=3D"name">DevOps.com</span> </a> </div> <div itemprop=3D"desc=
ription" style=3D"color:#252525;padding:2px 0px 0px 0px;font-size:12px;line=
-height:18px">Another shoe has dropped in the continuing story of TPG Capit=
al&#39;s foray into <b>DevOps</b>. The company formed by the merger of Xebi=
aLabs and&nbsp;...</div> </div>   <table> <tr> <td width=3D"16" style=3D"pa=
dding-right:6px"> <a href=3D"https://www.google.com/alerts/share?hl=3Den&am=
p;gl=3DUS&amp;ru=3Dhttps://devops.com/digital-ai-the-companies-formerly-kno=
wn-as-xebia-labs-collabnet-plus/&amp;ss=3Dfb&amp;rt=3DDigital.ai:+The+Compa=
nies+Formerly+Known+As+XebiaLabs+and+CollabNet+Plus&amp;cd=3DKhQxMjU5MjcxMD=
M2OTAyMzg3MTc3OTIaMDAyN2QyZGM3NjRhNDVlYjpjb206ZW46VVM&amp;ssp=3DAMJHsmX6v9n=
y2cAk4bIEh5WerHEhNPewPw" style=3D"text-decoration:none"> <img alt=3D"Facebo=
ok" src=3D"https://www.gstatic.com/alerts/images/fb-24.png" border=3D"0" he=
ight=3D"16" width=3D"16"></a> </td> <td width=3D"16" style=3D"padding-right=
:6px"> <a href=3D"https://www.google.com/alerts/share?hl=3Den&amp;gl=3DUS&a=
mp;ru=3Dhttps://devops.com/digital-ai-the-companies-formerly-known-as-xebia=
-labs-collabnet-plus/&amp;ss=3Dtw&amp;rt=3DDigital.ai:+The+Companies+Former=
ly+Known+As+XebiaLabs+and+CollabNet+Plus&amp;cd=3DKhQxMjU5MjcxMDM2OTAyMzg3M=
Tc3OTIaMDAyN2QyZGM3NjRhNDVlYjpjb206ZW46VVM&amp;ssp=3DAMJHsmX6v9ny2cAk4bIEh5=
WerHEhNPewPw" style=3D"text-decoration:none"> <img alt=3D"Twitter" src=3D"h=
ttps://www.gstatic.com/alerts/images/tw-24.png" border=3D"0" height=3D"16" =
width=3D"16"></a> </td> <td style=3D"padding:0px 0px 6px 15px;font-family:A=
rial"> <a href=3D"https://www.google.com/alerts/feedback?ffu=3Dhttps://devo=
ps.com/digital-ai-the-companies-formerly-known-as-xebia-labs-collabnet-plus=
/&amp;source=3Dalertsmail&amp;hl=3Den&amp;gl=3DUS&amp;msgid=3DMTI1OTI3MTAzN=
jkwMjM4NzE3Nzk&amp;s=3DAB2Xq4guLqYxRVeWMr95EpW85VVXwzHBaO6dtiU" style=3D"te=
xt-decoration:none;vertical-align:middle;color:#aaa;font-size:10px"> Flag a=
s irrelevant </a> </td> </tr> </table>  </div> </div> </td> <td style=3D"pa=
dding-right:18px"></td> </tr>    <tr> <td style=3D"padding-left:18px"></td>=
 <td style=3D"padding:16px 0px 12px 0px;border-bottom:1px solid #e4e4e4"> <=
span style=3D"font-size:12px;color:#737373"> WEB </span> </td> <td style=3D=
"padding-right:18px"></td> </tr>   <tr> <td style=3D"padding-left:18px"></t=
d> <td style=3D"padding:18px 0px 12px 0px;vertical-align:top;font-family:Ar=
ial">  <div>  <span style=3D"padding:0px 6px 0px 0px"> <a href=3D"https://w=
ww.google.com/url?rct=3Dj&amp;sa=3Dt&amp;url=3Dhttps://devblogs.microsoft.c=
om/devops/april-patches-for-azure-devops-server-and-team-foundation-server/=
&amp;ct=3Dga&amp;cd=3DCAEYKCoUMTI1OTI3MTAzNjkwMjM4NzE3NzkyGjAwMjdkMmRjNzY0Y=
TQ1ZWI6Y29tOmVuOlVT&amp;usg=3DAFQjCNHTDv11p7lH_jVwzOatfN5miqWFCA" style=3D"=
color:#427fed;display:inline;text-decoration:none;font-size:16px;line-heigh=
t:20px"> <span>April patches for Azure <b>DevOps</b> Server and Team Founda=
tion Server</span> </a> </span>  <div> <div style=3D"padding:2px 0px 8px 0p=
x"> <div style=3D"color:#737373;font-size:12px"> <a style=3D"text-decoratio=
n:none;color:#737373"> <span>Microsoft Developer Blogs</span> </a> </div> <=
div style=3D"color:#252525;padding:2px 0px 0px 0px;font-size:12px;line-heig=
ht:18px">SVN commits do not trigger pipeline; Adding support for SHA2 in SS=
H on Azure <b>DevOps</b>. Azure <b>DevOps</b> Server 2019.1.1 Patch 2. If y=
ou have Azure&nbsp;...</div> </div>   <table> <tr> <td width=3D"16" style=
=3D"padding-right:6px"> <a href=3D"https://www.google.com/alerts/share?hl=
=3Den&amp;gl=3DUS&amp;ru=3Dhttps://devblogs.microsoft.com/devops/april-patc=
hes-for-azure-devops-server-and-team-foundation-server/&amp;ss=3Dfb&amp;rt=
=3DApril+patches+for+Azure+DevOps+Server+and+Team+Foundation+Server&amp;cd=
=3DKhQxMjU5MjcxMDM2OTAyMzg3MTc3OTIaMDAyN2QyZGM3NjRhNDVlYjpjb206ZW46VVM&amp;=
ssp=3DAMJHsmVQhpy-FJcF0PdfhDk8IVwiDQT-NQ" style=3D"text-decoration:none"> <=
img alt=3D"Facebook" src=3D"https://www.gstatic.com/alerts/images/fb-24.png=
" border=3D"0" height=3D"16" width=3D"16"></a> </td> <td width=3D"16" style=
=3D"padding-right:6px"> <a href=3D"https://www.google.com/alerts/share?hl=
=3Den&amp;gl=3DUS&amp;ru=3Dhttps://devblogs.microsoft.com/devops/april-patc=
hes-for-azure-devops-server-and-team-foundation-server/&amp;ss=3Dtw&amp;rt=
=3DApril+patches+for+Azure+DevOps+Server+and+Team+Foundation+Server&amp;cd=
=3DKhQxMjU5MjcxMDM2OTAyMzg3MTc3OTIaMDAyN2QyZGM3NjRhNDVlYjpjb206ZW46VVM&amp;=
ssp=3DAMJHsmVQhpy-FJcF0PdfhDk8IVwiDQT-NQ" style=3D"text-decoration:none"> <=
img alt=3D"Twitter" src=3D"https://www.gstatic.com/alerts/images/tw-24.png"=
 border=3D"0" height=3D"16" width=3D"16"></a> </td> <td style=3D"padding:0p=
x 0px 6px 15px;font-family:Arial"> <a href=3D"https://www.google.com/alerts=
/feedback?ffu=3Dhttps://devblogs.microsoft.com/devops/april-patches-for-azu=
re-devops-server-and-team-foundation-server/&amp;source=3Dalertsmail&amp;hl=
=3Den&amp;gl=3DUS&amp;msgid=3DMTI1OTI3MTAzNjkwMjM4NzE3Nzk&amp;s=3DAB2Xq4guL=
qYxRVeWMr95EpW85VVXwzHBaO6dtiU" style=3D"text-decoration:none;vertical-alig=
n:middle;color:#aaa;font-size:10px"> Flag as irrelevant </a> </td> </tr> </=
table>  </div> </div> </td> <td style=3D"padding-right:18px"></td> </tr>   =
 <tr> <td style=3D"padding-left:18px"></td> <td style=3D"padding:18px 0px 1=
2px 0px;vertical-align:top;border-top:1px solid #e4e4e4;font-family:Arial">=
  <div>  <span style=3D"padding:0px 6px 0px 0px"> <a href=3D"https://www.go=
ogle.com/url?rct=3Dj&amp;sa=3Dt&amp;url=3Dhttps://weworkremotely.com/listin=
gs/mailerlite-devops-engineer&amp;ct=3Dga&amp;cd=3DCAEYKSoUMTI1OTI3MTAzNjkw=
MjM4NzE3NzkyGjAwMjdkMmRjNzY0YTQ1ZWI6Y29tOmVuOlVT&amp;usg=3DAFQjCNHJhE38PL7S=
LfQbc26CDvEioXfQxQ" style=3D"color:#427fed;display:inline;text-decoration:n=
one;font-size:16px;line-height:20px"> <span><b>DevOps</b> Engineer</span> <=
/a> </span>  <div> <div style=3D"padding:2px 0px 8px 0px"> <div style=3D"co=
lor:#737373;font-size:12px"> <a style=3D"text-decoration:none;color:#737373=
"> <span>We Work Remotely</span> </a> </div> <div style=3D"color:#252525;pa=
dding:2px 0px 0px 0px;font-size:12px;line-height:18px">We&#39;re looking fo=
r a <b>DevOps</b> Engineer with these requirements: You&#39;ll manage our b=
are metal and KVM platform. As you develop, you&#39;ll learn more&nbsp;...<=
/div> </div>   <table> <tr> <td width=3D"16" style=3D"padding-right:6px"> <=
a href=3D"https://www.google.com/alerts/share?hl=3Den&amp;gl=3DUS&amp;ru=3D=
https://weworkremotely.com/listings/mailerlite-devops-engineer&amp;ss=3Dfb&=
amp;rt=3DDevOps+Engineer&amp;cd=3DKhQxMjU5MjcxMDM2OTAyMzg3MTc3OTIaMDAyN2QyZ=
GM3NjRhNDVlYjpjb206ZW46VVM&amp;ssp=3DAMJHsmVFlS2inkYF5cJC0OWUByJ9_mDLSA" st=
yle=3D"text-decoration:none"> <img alt=3D"Facebook" src=3D"https://www.gsta=
tic.com/alerts/images/fb-24.png" border=3D"0" height=3D"16" width=3D"16"></=
a> </td> <td width=3D"16" style=3D"padding-right:6px"> <a href=3D"https://w=
ww.google.com/alerts/share?hl=3Den&amp;gl=3DUS&amp;ru=3Dhttps://weworkremot=
ely.com/listings/mailerlite-devops-engineer&amp;ss=3Dtw&amp;rt=3DDevOps+Eng=
ineer&amp;cd=3DKhQxMjU5MjcxMDM2OTAyMzg3MTc3OTIaMDAyN2QyZGM3NjRhNDVlYjpjb206=
ZW46VVM&amp;ssp=3DAMJHsmVFlS2inkYF5cJC0OWUByJ9_mDLSA" style=3D"text-decorat=
ion:none"> <img alt=3D"Twitter" src=3D"https://www.gstatic.com/alerts/image=
s/tw-24.png" border=3D"0" height=3D"16" width=3D"16"></a> </td> <td style=
=3D"padding:0px 0px 6px 15px;font-family:Arial"> <a href=3D"https://www.goo=
gle.com/alerts/feedback?ffu=3Dhttps://weworkremotely.com/listings/mailerlit=
e-devops-engineer&amp;source=3Dalertsmail&amp;hl=3Den&amp;gl=3DUS&amp;msgid=
=3DMTI1OTI3MTAzNjkwMjM4NzE3Nzk&amp;s=3DAB2Xq4guLqYxRVeWMr95EpW85VVXwzHBaO6d=
tiU" style=3D"text-decoration:none;vertical-align:middle;color:#aaa;font-si=
ze:10px"> Flag as irrelevant </a> </td> </tr> </table>  </div> </div> </td>=
 <td style=3D"padding-right:18px"></td> </tr>    <tr> <td colspan=3D"3" val=
ign=3D"middle" style=3D"background-color:#f8f8f8;font-size:14px;vertical-al=
ign:middle;text-align:center;padding:10px 10px 10px 10px;line-height:20px;b=
order:1px solid #e4e4e4;font-family:Arial"> <a href=3D"https://www.google.c=
om/alerts?s=3DAB2Xq4guLqYxRVeWMr95EpW85VVXwzHBaO6dtiU&amp;start=3D158687324=
4&amp;end=3D1586959666&amp;source=3Dalertsmail&amp;hl=3Den&amp;gl=3DUS&amp;=
msgid=3DMTI1OTI3MTAzNjkwMjM4NzE3Nzk#history" style=3D"text-decoration:none;=
vertical-align:middle;color:#427fed">  See more results  </a> <span style=
=3D"font-size:12px;padding-left:15px;padding-right:15px;color:#aaa">|</span=
> <a href=3D"https://www.google.com/alerts/edit?source=3Dalertsmail&amp;hl=
=3Den&amp;gl=3DUS&amp;msgid=3DMTI1OTI3MTAzNjkwMjM4NzE3Nzk&amp;s=3DAB2Xq4guL=
qYxRVeWMr95EpW85VVXwzHBaO6dtiU&amp;email=3Ddan-google%40" style=3D=
"text-decoration:none;vertical-align:middle;color:#427fed">Edit this alert<=
/a>  </td> </tr>  </table> <table style=3D"padding-top:6px;font-size:12px;c=
olor:#252525;text-align:center;width:100%"> <tr> <td style=3D"font-family:A=
rial">  You have received this email because you have subscribed to <b>Goog=
le Alerts</b>. <div> <a href=3D"https://www.google.com/alerts/remove?source=
=3Dalertsmail&amp;hl=3Den&amp;gl=3DUS&amp;msgid=3DMTI1OTI3MTAzNjkwMjM4NzE3N=
zk&amp;s=3DAB2Xq4guLqYxRVeWMr95EpW85VVXwzHBaO6dtiU" style=3D"text-decoratio=
n:none;color:#427fed">Unsubscribe</a> <span style=3D"padding:0px 4px 0px 4p=
x;color:#252525">|</span> <a href=3D"https://www.google.com/alerts?source=
=3Dalertsmail&amp;hl=3Den&amp;gl=3DUS&amp;msgid=3DMTI1OTI3MTAzNjkwMjM4NzE3N=
zk" style=3D"text-decoration:none;color:#427fed">  View all your alerts  </=
a> </div> </td> </tr> <tr> <td style=3D"padding:6px 10px 0px 0px;font-famil=
y:Arial"> <a href=3D"https://www.google.com/alerts/feeds/166546374764917351=
94/6555927728078083634" style=3D"text-decoration:none;color:#427fed"> <img =
src=3D"https://www.gstatic.com/alerts/images/rss-16.gif" alt=3D"RSS" border=
=3D"0" style=3D"padding:0px 8px 0px 0px;vertical-align:middle"> <span style=
=3D"display:inline;line-height:16px;vertical-align:middle"> Receive this al=
ert as RSS feed </span> </a> </td> </tr> <tr> <td style=3D"padding:6px 0px =
0px 0px;font-family:Arial"> <a href=3D"https://www.google.com/alerts?source=
=3Dalertsmail&amp;hl=3Den&amp;gl=3DUS&amp;msgid=3DMTI1OTI3MTAzNjkwMjM4NzE3N=
zk&amp;s=3DAB2Xq4guLqYxRVeWMr95EpW85VVXwzHBaO6dtiU&amp;ffu=3D" style=3D"tex=
t-decoration:none;color:#427fed"> <div style=3D"display:inline;line-height:=
16px;vertical-align:middle"> Send Feedback </div> </a> </td> </tr> </table>=
 </div> </div> <!--[if mso]>
</td></tr></table>
<![endif]-->  </div>  </body> </html>
--00000000000036cce105a354d7c5--
	`, () => connection.quit())
  } catch {
    connection.quit()
  }
})
