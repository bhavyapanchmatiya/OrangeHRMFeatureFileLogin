@OrangeHRM
Feature: As a User, I want to login so I can use all the facilities
Given User is on Homepage
    @test1

  Scenario Outline: User Should not be able to login invalid Username or invalid Password.


    When user enter invalid "<UserName>"
    And or enters invalid "<PassWord>"
    And click Log in
    Then User should be able to see the "<Error message>"
    Examples:
      | UserName | PassWord  | Error message            |
      |          |           | Username cannot be empty |
      | admin    |           | Password cannot be empty |
      |          | admin123  | Username cannot be empty |
      | admin    | sdaljlskd | Invalid credentials      |
      | dsads    | admin123  | Invalid credentials      |
      |          | abccs     | Username cannot be empty |



  @test2
    Scenario: User should be able to login with valid Credentials

      When User enters valid Username
      And enter valid password
      And click Log in
      Then user should be able to see the Dashboard