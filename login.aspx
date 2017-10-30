
<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="FirstPage.aspx.cs" Inherits="WebFormDemo.FirstPage" ResponseEncoding='gb2312' ContentType="text/html" %>


<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title>11111</title>
 </head>
 <body>
    <div>
		<% 
			string strName=System.Web.HttpUtility.UrlDecode(Request['txtname']);
			string strPass=System.Web.HttpUtility.UrlDecode(Request['txtPass']);
			bool flag= false;
			if ( strName == "admin"  && strPass =="123456")
			{
				flag =true;
			}
			Response.Write(flag);
		%>	
    </div>
 </body>
 </html>