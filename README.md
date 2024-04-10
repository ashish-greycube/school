# school
Set up School Domain setup from bench console - Frappe Erpnext 


:~$ bench console

[1] # substitute your details in args
[2] args = {
"language":"English (United States)",
"country":"India",
"timezone":"Asia/Kolkata",
"currency":"INR",
"full_name":"Principal",
"email":"proncipal@ase.com",
"password":"ase",
"domain":"Education",
"company_name":"ASE",
"company_abbr":"ASE",
"company_tagline":"School For Excellence",
"bank_account":"ubi",
"fy_start_date":"2017-04-01",
"fy_end_date":"2018-03-31",
"add_sample_data":1,
"program_1":"Program 1",
"course_1":"Courese 1",
"instructor_1":"Instructor 1",
"room_1": "101",
"room_capacity_1":20,
"add_sample_data":1,
"setup_website":0
}

[3] from frappe.desk.page.setup_wizard.setup_wizard import setup_complete
[4] setup_complete(args)

<hr>

#### Contact Us  

<a href="https://greycube.in"><img src="https://greycube.in/files/greycube_logo09eade.jpg" width="250" height="auto"></a> <br>
1<sup>st</sup> ERPNext [Certified Partner](https://frappe.io/api/method/frappe.utils.print_format.download_pdf?doctype=Certification&name=PARTCRTF00002&format=Partner%20Certificate&no_letterhead=0&letterhead=Blank&settings=%7B%7D&_lang=en#toolbar=0)
<sub> <img src="https://greycube.in/files/certificate.svg" width="20" height="20"> </sub>
& winner of the [Best Partner Award](https://frappe.io/partners/india/greycube-technologies) <sub> <img src="https://greycube.in/files/award.svg" width="25" height="25"> </sub>

<h5>
<sub><img src="https://greycube.in/files/link.svg" width="20" height="auto"> </sub> <a href="https://greycube.in"> greycube.in</a><br>
<sub><img src="https://greycube.in/files/8665305_envelope_email_icon.svg" width="20" height="18"> </sub> <a href="mailto:sales@greycube.in"> 
 sales@greycube.in</a><br>
<sub><img src="https://greycube.in/files/linkedin1.svg" width="20" height="18"> </sub> <a href="https://www.linkedin.com/company/greycube-technologies"> LinkedIn</a><br>
<sub><img src="https://greycube.in/files/blog.svg" width="20" height="18"> </sub><a href="https://greycube.in/blog"> Blogs</a> </h5>
