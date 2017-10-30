<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="FirstPage.aspx.cs" Inherits="WebFormDemo.FirstPage" ResponseEncoding='gb2312' ContentType="text/html" %>


<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title>11111</title>
 </head>
 <body>
    <div>
		<% 
			string strName=System.Web.HttpUtility.decodeURI(Request['name']);
			string strHtml="<div>";
			if ( strName == "Tim" )
			{
				strHtml+="姓名：Tim <br/>";
				strHtml += "性别：男 <br/>";
		 		strHtml += "邮箱：1064@qq.com";
			}else if (strName == "Ls"){ 
				strHtml += "姓名：Ls <br/>";
				strHtml += "性别：女 <br/>";
		 		strHtm l+= "邮箱：1064@qq.com";
			}
			strHtml += "</div>";
			Response.Write(strHtml);
		%>	
    </div>
 </body>
 </html>



