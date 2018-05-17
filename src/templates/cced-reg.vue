<!--<template>
    <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
      <html xmlns="http://www.w3.org/1999/xhtml">
      <head>
      <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
      <title>Now On Demand</title>
      <style type="text/css">
      body {
        margin-left: 0px;
        margin-top: 0px;
        margin-right: 0px;
        margin-bottom: 0px;
      }
      </style>
      </head>

      <body bgcolor="#efefef">
        <table width="600" cellpadding="0" cellspacing="0" border="0" align="center" style="font-family:'Helvetica','Arial',sans-serif;">
          <tr>
          <td colspan="2" style="font-size:9px; line-height:20px; text-transform:uppercase; text-align:center; color:#333333; padding:18px 0;">
          Cannot view this email? 
            <a href="" target="_blank" style="text-decoration:none; color:#c2904a;">
              Click here to view the HTML version.
            </a>
          </td>
        </tr>
      </table>
        <table width="600" cellpadding="0" cellspacing="0" border="0" align="center" style="font-family:'Helvetica','Arial',sans-serif;background-color:#ffffff">
        <tbody>
          <tr>
          <td colspan="2">
            <table width="100%" cellpadding="0" cellspacing="0" border="0">
              <tbody><tr>
                <td colspan="2" align="center" valign="top" style="background-color:#c2904a;"><a href="" target="_blank"><img src="http://placehold.it/654x80" height="80" hspace="0" vspace="0" border="0" align="left" style="opacity:0;"></a></td>
              </tr>
                    <tr>
            </tr></tbody></table>
          </td>
        </tr>
        <tr>
          <td colspan="2">
            <table width="590" cellpadding="0" cellspacing="0" border="0" style="border-bottom:1px solid #e4e4e4; margin:0 32px 20px 32px">
              <tbody><tr>
                <td style="padding:21px 0 21px 0; font-family:'Times New Roman',serif;font-size:28px; font-style:italic; color:#c2904a;">{{ header }}</td>
              </tr>
            </tbody></table>
          </td>
        </tr>

        <tr>
          <td colspan="2" valign="top" style="padding:12px 32px 24px 32px;font-size:13px;color:#424242;line-height:16px">
            <table cellpadding="0" cellspacing="0" border="0" align="right" style="padding:0 0 30px 0">
            <tbody><tr>
              <td bgcolor="#ffffff" style="border-collapse:collapse;padding:0 14px 10px 0"></td>
              <td align="right" valign="top">
              <a href="" target="_blank"><img src="http://placehold.it/300x168" alt="" width="299"></a><br>
              </td>
            </tr>
          </tbody></table>	
                <div style="font-size:18px; line-height:20px; font-weight:bold; width:40%;"><a href="" target="_blank" style="color:#c2904a; text-decoration:none;">{{ title }}</a></div>


                  <a :href="'/' + webinarlink" target="_blank" style="text-transform:uppercase; font-size:16px; background:#c2904a; padding:10px 11px;color:#ffffff; border-radius:10px; font-weight:bold; display:block; width:193px; text-align:center; margin:14px 0 14px 0; text-decoration:none;">VIEW THE WEBINAR</a><br />
            <strong>Presenter:</strong> {{presenter}} | <strong>Provider:</strong> {{ provider }}<br>					
            <em><strong>Commercial Supporter:</strong> {{comsupporter}}</em><br>
            <strong>CDE Credits:</strong> {{credits}} | <strong>Cost:</strong> \${{ cost }} | {{ expiration }}<br><br />
            <strong>Description</strong><br>
            <div style="margin:5px 0 0 0">{{ description }}</div>		
            <br>
            <strong>Learning Objectives</strong>
            <ul style="margin:5px 0 0 0; padding:0 0 0 1.3em;">
              <li>Describe the benefits of screw-retained implant restorations</li>
              <li>Discuss the relationship between treatment planning and screw-retained or cement-retained restorative options</li>
              <li>Explain the risks associated with screw-retained and cement-retained restorations</li>
            </ul>
                  <strong><br>
                  Disclosures</strong><br>
            <div style="margin:5px 0 0 0;">Dr. Koka has received an honorarium for his preparation and presentation of this program. </div>
          </td>
        </tr>
        <tr>
          <td colspan="2" align="center" style="text-align:center">
            <img src="http://aegispublications.com/news/id/webinars/webinar-footer.jpg" width="600" height="85" style="border-top:1px solid #e4e4e4;" />
          </td>
        </tr>
        <tr>
          <td colspan="2" align="center" style="font-size:10px; font-family:Arial, Helvetica, sans-serif; color:#424242; padding:20px 0; border-top:solid 1px #efefef; background-color:#efefef;text-align:center">
              <a href="mailto:?subject=%20body=" target="_blank" style="text-decoration:none; color:#c2904a;">
              Forward to a Colleague
            </a>
            &nbsp;&nbsp;|&nbsp;&nbsp; 
            <a href="" target="_blank" style="text-decoration:none; color:#c2904a;">
              Privacy Policy
            </a>
              <br />
            <em>CCED</em>  |  4680 Lipscomb St NE  |  Palm Bay, FL 32905-2928
              <br />

          %%PLUGIN_UNSUBSCRIBE: TEST-UNSUBSCRIBE%%
      </div> 
            </td>
        </tr>	
        </tbody>
      </table>
      </body>
      </html>
</template>-->

<template>
  <div class="container">
    <h2>CCED Registration Test</h2>
  </div>
</template>


<script>
export default {
    name: 'cced_reg_webinar',
    props: [
      'header',
      'title', 
      'presenter', 
      'provider', 
      'comsupporter', 
      'cost', 
      'credits', 
      'expiration', 
      'description', 
      'webinarlink'
    ],
    data () {
        return {

        }
    },
    computed: {
        
    }
}
</script>
