$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/Resources/FeatureFile/register.feature");
formatter.feature({
  "line": 2,
  "name": "As a User, I want to login so I can use all the facilities",
  "description": "Given User is on Homepage",
  "id": "as-a-user,-i-want-to-login-so-i-can-use-all-the-facilities",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@OrangeHRM"
    }
  ]
});
formatter.scenarioOutline({
  "line": 6,
  "name": "User Should not be able to login invalid Username or invalid Password.",
  "description": "",
  "id": "as-a-user,-i-want-to-login-so-i-can-use-all-the-facilities;user-should-not-be-able-to-login-invalid-username-or-invalid-password.",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@test1"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "user enter invalid \"\u003cUserName\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "or enters invalid \"\u003cPassWord\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "click Log in",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "User should be able to see the \"\u003cError message\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 13,
  "name": "",
  "description": "",
  "id": "as-a-user,-i-want-to-login-so-i-can-use-all-the-facilities;user-should-not-be-able-to-login-invalid-username-or-invalid-password.;",
  "rows": [
    {
      "cells": [
        "UserName",
        "PassWord",
        "Error message"
      ],
      "line": 14,
      "id": "as-a-user,-i-want-to-login-so-i-can-use-all-the-facilities;user-should-not-be-able-to-login-invalid-username-or-invalid-password.;;1"
    },
    {
      "cells": [
        "",
        "",
        "Username cannot be empty"
      ],
      "line": 15,
      "id": "as-a-user,-i-want-to-login-so-i-can-use-all-the-facilities;user-should-not-be-able-to-login-invalid-username-or-invalid-password.;;2"
    },
    {
      "cells": [
        "admin",
        "",
        "Password cannot be empty"
      ],
      "line": 16,
      "id": "as-a-user,-i-want-to-login-so-i-can-use-all-the-facilities;user-should-not-be-able-to-login-invalid-username-or-invalid-password.;;3"
    },
    {
      "cells": [
        "",
        "admin123",
        "Username cannot be empty"
      ],
      "line": 17,
      "id": "as-a-user,-i-want-to-login-so-i-can-use-all-the-facilities;user-should-not-be-able-to-login-invalid-username-or-invalid-password.;;4"
    },
    {
      "cells": [
        "admin",
        "sdaljlskd",
        "Invalid credentials"
      ],
      "line": 18,
      "id": "as-a-user,-i-want-to-login-so-i-can-use-all-the-facilities;user-should-not-be-able-to-login-invalid-username-or-invalid-password.;;5"
    },
    {
      "cells": [
        "dsads",
        "admin123",
        "Invalid credentials"
      ],
      "line": 19,
      "id": "as-a-user,-i-want-to-login-so-i-can-use-all-the-facilities;user-should-not-be-able-to-login-invalid-username-or-invalid-password.;;6"
    },
    {
      "cells": [
        "",
        "abccs",
        "Username cannot be empty"
      ],
      "line": 20,
      "id": "as-a-user,-i-want-to-login-so-i-can-use-all-the-facilities;user-should-not-be-able-to-login-invalid-username-or-invalid-password.;;7"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 15122923900,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "User Should not be able to login invalid Username or invalid Password.",
  "description": "",
  "id": "as-a-user,-i-want-to-login-so-i-can-use-all-the-facilities;user-should-not-be-able-to-login-invalid-username-or-invalid-password.;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@test1"
    },
    {
      "line": 1,
      "name": "@OrangeHRM"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "user enter invalid \"\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "or enters invalid \"\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "click Log in",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "User should be able to see the \"Username cannot be empty\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 20
    }
  ],
  "location": "MyStepdefs.userEnter(String)"
});
formatter.result({
  "duration": 603738600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 19
    }
  ],
  "location": "MyStepdefs.enters(String)"
});
formatter.result({
  "duration": 246079900,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.clickLogIn()"
});
formatter.result({
  "duration": 374879000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Username cannot be empty",
      "offset": 32
    }
  ],
  "location": "MyStepdefs.userShouldBeAbleToSeeThe(String)"
});
formatter.result({
  "duration": 160826300,
  "status": "passed"
});
formatter.after({
  "duration": 1182885100,
  "status": "passed"
});
formatter.before({
  "duration": 11953115300,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "User Should not be able to login invalid Username or invalid Password.",
  "description": "",
  "id": "as-a-user,-i-want-to-login-so-i-can-use-all-the-facilities;user-should-not-be-able-to-login-invalid-username-or-invalid-password.;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@test1"
    },
    {
      "line": 1,
      "name": "@OrangeHRM"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "user enter invalid \"admin\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "or enters invalid \"\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "click Log in",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "User should be able to see the \"Password cannot be empty\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 20
    }
  ],
  "location": "MyStepdefs.userEnter(String)"
});
formatter.result({
  "duration": 298059200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 19
    }
  ],
  "location": "MyStepdefs.enters(String)"
});
formatter.result({
  "duration": 279255600,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.clickLogIn()"
});
formatter.result({
  "duration": 346260700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Password cannot be empty",
      "offset": 32
    }
  ],
  "location": "MyStepdefs.userShouldBeAbleToSeeThe(String)"
});
formatter.result({
  "duration": 140009900,
  "status": "passed"
});
formatter.after({
  "duration": 1083851500,
  "status": "passed"
});
formatter.before({
  "duration": 11912049600,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "User Should not be able to login invalid Username or invalid Password.",
  "description": "",
  "id": "as-a-user,-i-want-to-login-so-i-can-use-all-the-facilities;user-should-not-be-able-to-login-invalid-username-or-invalid-password.;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@test1"
    },
    {
      "line": 1,
      "name": "@OrangeHRM"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "user enter invalid \"\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "or enters invalid \"admin123\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "click Log in",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "User should be able to see the \"Username cannot be empty\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 20
    }
  ],
  "location": "MyStepdefs.userEnter(String)"
});
formatter.result({
  "duration": 185475100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin123",
      "offset": 19
    }
  ],
  "location": "MyStepdefs.enters(String)"
});
formatter.result({
  "duration": 346898500,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.clickLogIn()"
});
formatter.result({
  "duration": 237256200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Username cannot be empty",
      "offset": 32
    }
  ],
  "location": "MyStepdefs.userShouldBeAbleToSeeThe(String)"
});
formatter.result({
  "duration": 87671700,
  "status": "passed"
});
formatter.after({
  "duration": 1183347300,
  "status": "passed"
});
formatter.before({
  "duration": 11692323300,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "User Should not be able to login invalid Username or invalid Password.",
  "description": "",
  "id": "as-a-user,-i-want-to-login-so-i-can-use-all-the-facilities;user-should-not-be-able-to-login-invalid-username-or-invalid-password.;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@test1"
    },
    {
      "line": 1,
      "name": "@OrangeHRM"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "user enter invalid \"admin\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "or enters invalid \"sdaljlskd\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "click Log in",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "User should be able to see the \"Invalid credentials\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 20
    }
  ],
  "location": "MyStepdefs.userEnter(String)"
});
formatter.result({
  "duration": 398291500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "sdaljlskd",
      "offset": 19
    }
  ],
  "location": "MyStepdefs.enters(String)"
});
formatter.result({
  "duration": 382372100,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.clickLogIn()"
});
formatter.result({
  "duration": 1542360200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Invalid credentials",
      "offset": 32
    }
  ],
  "location": "MyStepdefs.userShouldBeAbleToSeeThe(String)"
});
formatter.result({
  "duration": 80895500,
  "status": "passed"
});
formatter.after({
  "duration": 1371158900,
  "status": "passed"
});
formatter.before({
  "duration": 11613084700,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "User Should not be able to login invalid Username or invalid Password.",
  "description": "",
  "id": "as-a-user,-i-want-to-login-so-i-can-use-all-the-facilities;user-should-not-be-able-to-login-invalid-username-or-invalid-password.;;6",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@test1"
    },
    {
      "line": 1,
      "name": "@OrangeHRM"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "user enter invalid \"dsads\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "or enters invalid \"admin123\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "click Log in",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "User should be able to see the \"Invalid credentials\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "dsads",
      "offset": 20
    }
  ],
  "location": "MyStepdefs.userEnter(String)"
});
formatter.result({
  "duration": 349168600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin123",
      "offset": 19
    }
  ],
  "location": "MyStepdefs.enters(String)"
});
formatter.result({
  "duration": 356357400,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.clickLogIn()"
});
formatter.result({
  "duration": 728841200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Invalid credentials",
      "offset": 32
    }
  ],
  "location": "MyStepdefs.userShouldBeAbleToSeeThe(String)"
});
formatter.result({
  "duration": 98418000,
  "status": "passed"
});
formatter.after({
  "duration": 1160980900,
  "status": "passed"
});
formatter.before({
  "duration": 13243529800,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "User Should not be able to login invalid Username or invalid Password.",
  "description": "",
  "id": "as-a-user,-i-want-to-login-so-i-can-use-all-the-facilities;user-should-not-be-able-to-login-invalid-username-or-invalid-password.;;7",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@test1"
    },
    {
      "line": 1,
      "name": "@OrangeHRM"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "user enter invalid \"\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "or enters invalid \"abccs\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "click Log in",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "User should be able to see the \"Username cannot be empty\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 20
    }
  ],
  "location": "MyStepdefs.userEnter(String)"
});
formatter.result({
  "duration": 224031600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abccs",
      "offset": 19
    }
  ],
  "location": "MyStepdefs.enters(String)"
});
formatter.result({
  "duration": 301997800,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.clickLogIn()"
});
formatter.result({
  "duration": 405418000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Username cannot be empty",
      "offset": 32
    }
  ],
  "location": "MyStepdefs.userShouldBeAbleToSeeThe(String)"
});
formatter.result({
  "duration": 128706300,
  "status": "passed"
});
formatter.after({
  "duration": 1434927200,
  "status": "passed"
});
formatter.before({
  "duration": 12362290100,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "User should be able to login with valid Credentials",
  "description": "",
  "id": "as-a-user,-i-want-to-login-so-i-can-use-all-the-facilities;user-should-be-able-to-login-with-valid-credentials",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 24,
      "name": "@test2"
    }
  ]
});
formatter.step({
  "line": 27,
  "name": "User enters valid Username",
  "keyword": "When "
});
formatter.step({
  "line": 28,
  "name": "enter valid password",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "click Log in",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "user should be able to see the Dashboard",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepdefs.userEntersValidUsername()"
});
formatter.result({
  "duration": 361896100,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.validPassword()"
});
formatter.result({
  "duration": 352208500,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.clickLogIn()"
});
formatter.result({
  "duration": 1343955500,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.userShouldBeAbleToSeeTheDashboard()"
});
formatter.result({
  "duration": 13148800,
  "status": "passed"
});
formatter.after({
  "duration": 1297384100,
  "status": "passed"
});
});