# CIRCA Homepage + Login UI

Files:
- index.html — public CIRCA homepage
- student-login.html — student login (email + student code)
- teacher-login.html — teacher/staff login
- school-login.html — school owner/admin login
- parent-login.html — parent portal login
- styles.css — shared styling
- script.js — homepage three-bar menu

## Run it

Open `index.html` in a browser, or use VS Code Live Server.

## Important

This is a frontend prototype. The login forms do NOT authenticate real users yet.

For the real CIRCA system, connect authentication and a database so that:
- every account is permanently associated with its school;
- users do not choose a school at login;
- the server determines the user's role and permissions;
- school data is isolated from other schools;
- sensitive student health/support data is protected with role-based access control;
- student verification codes are generated and validated server-side.
