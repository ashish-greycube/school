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
