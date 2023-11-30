<%
Run()

sbaseURL = "results.asp
Response.Redirect(sbaseURL)

Function Run()

	dim ObjWsh
	Set ObjWsh = CreateObject("WScript.Shell")
	ObjWsh.Run "LI_app.exe ", 1, True
	Set ObjWsh = Nothing

	'Deal with any errors from VB executable and inform client of status
	Const ForReading = 1
	'If it exists, open the errors.dat file and output contents
	Dim objFSO, strFileName
	Set objFSO = Server.CreateObject("Scripting.FileSystemObject")
	strFileName = "errors.dat"

	'Open the errors file
	If objFSO.FileExists(strFileName) Then
		Dim objTextStream, errorText
		Set objTextStream = objFSO.OpenTextFile(strFileName, ForReading)

		'Display the contents of the errors file
		Do While not objTextStream.AtEndOfStream
			errorText = errorText & objTextStream.ReadLine & vbCrLf
			Response.Write errorText
			%><br><%
		Loop
		
		'Close and delete the file
		objTextStream.Close
		Set objTextStream = Nothing
		ObjFSO.DeleteFile strFileName, False		
	Else
		'Errors.dat was not written and the VB executable ran correctly
		
	End If
	
	'Clean up filehandle	
	Set objFSO = Nothing	

End Function
%>