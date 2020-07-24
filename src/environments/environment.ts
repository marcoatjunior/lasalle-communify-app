// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  apiUrl: "http://localhost:8080",
  credentials: {
    client_id:
      "381111669074-rvva1jbtrjbf1mnfiqufutvgkc9gjl57.apps.googleusercontent.com",
    project_id: "communify-app",
    auth_uri: "https://accounts.google.com/o/oauth2/auth",
    token_uri: "https://oauth2.googleapis.com/token",
    auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
    client_secret: "rcW9sTZv265vm7XOVlmY5OXx",
    redirect_uris: ["https://localhost:4200/steps"],
  },
  scopes: [
    "https://www.googleapis.com/auth/classroom.announcements",
    "https://www.googleapis.com/auth/classroom.announcements.readonly",
    "https://www.googleapis.com/auth/classroom.courses",
    "https://www.googleapis.com/auth/classroom.courses.readonly",
    "https://www.googleapis.com/auth/classroom.coursework.me",
    "https://www.googleapis.com/auth/classroom.coursework.me.readonly",
    "https://www.googleapis.com/auth/classroom.coursework.students",
    "https://www.googleapis.com/auth/classroom.coursework.students.readonly",
    "https://www.googleapis.com/auth/classroom.guardianlinks.me.readonly",
    "https://www.googleapis.com/auth/classroom.guardianlinks.students",
    "https://www.googleapis.com/auth/classroom.guardianlinks.students.readonly",
    "https://www.googleapis.com/auth/classroom.profile.emails",
    "https://www.googleapis.com/auth/classroom.profile.photos",
    "https://www.googleapis.com/auth/classroom.push-notifications",
    "https://www.googleapis.com/auth/classroom.rosters",
    "https://www.googleapis.com/auth/classroom.rosters.readonly",
    "https://www.googleapis.com/auth/classroom.student-submissions.me.readonly",
    "https://www.googleapis.com/auth/classroom.student-submissions.students.readonly",
    "https://www.googleapis.com/auth/classroom.topics",
    "https://www.googleapis.com/auth/classroom.topics.readonly",
  ],
  validPublicKey:
    "BJNiS6G7XAAFDvgJwyVrgsK7V9eK2pDZ5OzjpJX-FQMfjoL4bx1r0DbPh8uPNB_uDQVH_XTbr4IURimz2h7JmYw",
};
