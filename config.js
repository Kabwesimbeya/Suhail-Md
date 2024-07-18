const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_09_18_07_18_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODAsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjUzLFxuICAgICAgICAyMTIsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjE4LFxuICAgICAgICAxMTAsXG4gICAgICAgIDMzLFxuICAgICAgICAyMDEsXG4gICAgICAgIDUyLFxuICAgICAgICAxOTUsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjI3LFxuICAgICAgICAxOTMsXG4gICAgICAgIDEyLFxuICAgICAgICA0NSxcbiAgICAgICAgMjA1LFxuICAgICAgICAxMixcbiAgICAgICAgMjMyLFxuICAgICAgICAyLFxuICAgICAgICAxMDMsXG4gICAgICAgIDY5LFxuICAgICAgICAxMTUsXG4gICAgICAgIDc4LFxuICAgICAgICA0OSxcbiAgICAgICAgOTQsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjEwLFxuICAgICAgICAyNDQsXG4gICAgICAgIDE0MixcbiAgICAgICAgMjUxLFxuICAgICAgICA5OFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMSxcbiAgICAgICAgMTEsXG4gICAgICAgIDI4LFxuICAgICAgICAxNzYsXG4gICAgICAgIDc0LFxuICAgICAgICAxMTIsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTIsXG4gICAgICAgIDIxOSxcbiAgICAgICAgNjYsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTI4LFxuICAgICAgICA0NixcbiAgICAgICAgMjUsXG4gICAgICAgIDIxOSxcbiAgICAgICAgODcsXG4gICAgICAgIDcsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMzQsXG4gICAgICAgIDMwLFxuICAgICAgICAxODcsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjIwLFxuICAgICAgICAxNzMsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjMxLFxuICAgICAgICAxMDQsXG4gICAgICAgIDEwNyxcbiAgICAgICAgOTcsXG4gICAgICAgIDI2LFxuICAgICAgICAxNTYsXG4gICAgICAgIDkxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjAsXG4gICAgICAgIDksXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTY2LFxuICAgICAgICAxNDcsXG4gICAgICAgIDI1MyxcbiAgICAgICAgNTAsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAyLFxuICAgICAgICAxMDIsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTY1LFxuICAgICAgICAyNTUsXG4gICAgICAgIDE5MCxcbiAgICAgICAgNjksXG4gICAgICAgIDE5MixcbiAgICAgICAgNjUsXG4gICAgICAgIDQ2LFxuICAgICAgICAzNSxcbiAgICAgICAgNyxcbiAgICAgICAgMTI4LFxuICAgICAgICA1NSxcbiAgICAgICAgOTksXG4gICAgICAgIDE5OSxcbiAgICAgICAgNzgsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTE3LFxuICAgICAgICAxOTYsXG4gICAgICAgIDU3LFxuICAgICAgICAxMixcbiAgICAgICAgNzJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQwLFxuICAgICAgICAyNCxcbiAgICAgICAgMTMsXG4gICAgICAgIDYyLFxuICAgICAgICAxNDMsXG4gICAgICAgIDI0MyxcbiAgICAgICAgNDcsXG4gICAgICAgIDM4LFxuICAgICAgICAxMDgsXG4gICAgICAgIDE2MCxcbiAgICAgICAgNzMsXG4gICAgICAgIDE1MyxcbiAgICAgICAgNjMsXG4gICAgICAgIDYsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjUxLFxuICAgICAgICAyMTYsXG4gICAgICAgIDYyLFxuICAgICAgICAxOTcsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMzQsXG4gICAgICAgIDMsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTE2LFxuICAgICAgICAxODgsXG4gICAgICAgIDEwLFxuICAgICAgICAyMjMsXG4gICAgICAgIDI2LFxuICAgICAgICAxMTYsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjMsXG4gICAgICAgIDY3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDQsXG4gICAgICAgIDEyLFxuICAgICAgICAyNDMsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTgxLFxuICAgICAgICAyMCxcbiAgICAgICAgMTE4LFxuICAgICAgICAxOTIsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTY3LFxuICAgICAgICA1MyxcbiAgICAgICAgNTMsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTE0LFxuICAgICAgICA2NixcbiAgICAgICAgMzIsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMzksXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTU0LFxuICAgICAgICAxODMsXG4gICAgICAgIDQ5LFxuICAgICAgICAxNTUsXG4gICAgICAgIDk5LFxuICAgICAgICA2OSxcbiAgICAgICAgMTczLFxuICAgICAgICAyMzksXG4gICAgICAgIDczLFxuICAgICAgICAxNjAsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTAxLFxuICAgICAgICA5OFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5OCxcbiAgICAgICAgMTEwLFxuICAgICAgICA1MSxcbiAgICAgICAgNTcsXG4gICAgICAgIDY3LFxuICAgICAgICAzMSxcbiAgICAgICAgMjMwLFxuICAgICAgICAxNDYsXG4gICAgICAgIDk1LFxuICAgICAgICAyMCxcbiAgICAgICAgNzksXG4gICAgICAgIDUzLFxuICAgICAgICAxNjgsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMCxcbiAgICAgICAgMjE1LFxuICAgICAgICA0NSxcbiAgICAgICAgMjM5LFxuICAgICAgICAyMTksXG4gICAgICAgIDIsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTI1LFxuICAgICAgICAyMTUsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTgsXG4gICAgICAgIDIzNCxcbiAgICAgICAgNjcsXG4gICAgICAgIDg1LFxuICAgICAgICA0LFxuICAgICAgICA3NSxcbiAgICAgICAgOTcsXG4gICAgICAgIDYxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICA5NixcbiAgICAgICAgICA4MixcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICA0LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAxMThcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgNixcbiAgICAgICAgICAzOCxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDExM1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTU1LFxuICAgICAgICAyMTIsXG4gICAgICAgIDIxNSxcbiAgICAgICAgNjEsXG4gICAgICAgIDIxOSxcbiAgICAgICAgNyxcbiAgICAgICAgMjA3LFxuICAgICAgICAxNzQsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjAsXG4gICAgICAgIDk4LFxuICAgICAgICA1NixcbiAgICAgICAgMTQyLFxuICAgICAgICA3MyxcbiAgICAgICAgOTIsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxMzMsXG4gICAgICAgIDE2NixcbiAgICAgICAgNCxcbiAgICAgICAgMTgyLFxuICAgICAgICA2NyxcbiAgICAgICAgMTM0LFxuICAgICAgICA2MyxcbiAgICAgICAgMjMyLFxuICAgICAgICA1NCxcbiAgICAgICAgMjA0LFxuICAgICAgICAxNjQsXG4gICAgICAgIDI0MyxcbiAgICAgICAgNjAsXG4gICAgICAgIDI3LFxuICAgICAgICA0MCxcbiAgICAgICAgMjgsXG4gICAgICAgIDIyNixcbiAgICAgICAgMjEwLFxuICAgICAgICAxNTQsXG4gICAgICAgIDYyLFxuICAgICAgICAyMTgsXG4gICAgICAgIDI0MSxcbiAgICAgICAgOCxcbiAgICAgICAgMjI4LFxuICAgICAgICA3MyxcbiAgICAgICAgNyxcbiAgICAgICAgODQsXG4gICAgICAgIDYwLFxuICAgICAgICAxNjAsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMzksXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTE5LFxuICAgICAgICAyMDEsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTAsXG4gICAgICAgIDQ4LFxuICAgICAgICAxMTIsXG4gICAgICAgIDIyNSxcbiAgICAgICAgNDQsXG4gICAgICAgIDQ5LFxuICAgICAgICAzMSxcbiAgICAgICAgOTcsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxNjEsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwibUd2ZG5HU1NlZlVoWHh1dEg2UUNzU2c3MHRDL3lmaUd0cG5RaU1wSWRqND1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiZXNabVhZUUhURy1teXpvZHpFOHlCUVwiLFxuICBcInBob25lSWRcIjogXCJmNWQ5ZGI3Mi03MDkwLTQxMjItYmRiMy0yOGViYjc5YWIzZmRcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNTAsXG4gICAgICAxNjYsXG4gICAgICAyMDksXG4gICAgICAyNTQsXG4gICAgICAyMzMsXG4gICAgICA1OCxcbiAgICAgIDE3NixcbiAgICAgIDcwLFxuICAgICAgMTM0LFxuICAgICAgMjA2LFxuICAgICAgMTUxLFxuICAgICAgMTI3LFxuICAgICAgOTQsXG4gICAgICAyNDEsXG4gICAgICAxNCxcbiAgICAgIDIzLFxuICAgICAgMTAyLFxuICAgICAgMjQxLFxuICAgICAgMTUwLFxuICAgICAgNDdcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNDcsXG4gICAgICA0MixcbiAgICAgIDE1MSxcbiAgICAgIDYwLFxuICAgICAgMTU1LFxuICAgICAgMTg3LFxuICAgICAgNjgsXG4gICAgICAyMjMsXG4gICAgICA4MSxcbiAgICAgIDY5LFxuICAgICAgMTgsXG4gICAgICAxMjMsXG4gICAgICA3MixcbiAgICAgIDgyLFxuICAgICAgMjExLFxuICAgICAgODcsXG4gICAgICAxOTQsXG4gICAgICAxMjYsXG4gICAgICAxMzYsXG4gICAgICAxNDlcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiWDU1TDlWU0xcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjI2MDk3MDU2Nzk1NjoxMUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTAxMzE0MjE4NDU1MjM0OjExQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ051UzU2QUdFTWk3NDdRR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiaTMxcXRMRTl4MlE0c21vNmo3WlRyWTNqM29GdVBuZHdYcmpSUFZxbXlXYz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJlaHdGTWFHcGpGeWt1TU5vRmpCdzIvcmNQdC85L2lUTUZnZ0xFMG1HVkllS204N2x1WVhpalEvSjJuMlpPTWdJa1FhVFRxL3hoMWRzVUpMMFd1Qk9EQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJOR3lQdGVGVXhyZ2oycWVkWmlnaFBCbU5oTksxTWJyMVdGUWFkMDY3aHhwUXhXVjJJbU9qaVh4LzVsMzhZcmNTY2pUTC9JVmlHVmpSMWdXRDEzdzdDQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyNjA5NzA1Njc5NTY6MTFAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDEwM1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIxMjk0Mjg1XG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ==" // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
